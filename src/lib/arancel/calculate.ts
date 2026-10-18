import { EFFECTIVE_DATE, RULES, SCALE } from './rules';
export type CalculationInput = { ids: string[]; procedureDate: string; actDate: string; court: string; amount: number | null; indeterminate: boolean; confirmed: boolean; legalAid: boolean; civilAction: boolean; vat: '21' | 'none'; suplidos: number; suplidosConfirmed: boolean; expenses: number; previousRights: number; agreed: number | null };
export const money = (value: number) => new Intl.NumberFormat('es-ES', { style:'currency', currency:'EUR' }).format(value);
export const round = (n:number) => Math.round((n + Number.EPSILON) * 100) / 100;
export function scale(amount:number): number | null {
  if (!Number.isFinite(amount) || amount <= 0) return null;
  if (amount > 600000) return round(2079.53 + Math.ceil((round(amount) - 600000) / 6000) * 15.17);
  // No inferir cómo se resuelven cuantías entre filas de la escala sin criterio verificado.
  return SCALE.find(([limit]) => limit === amount)?.[1] ?? null;
}
function validDate(value:string) { return /^\d{4}-\d{2}-\d{2}$/.test(value) && new Date(value+'T00:00:00Z').toISOString().slice(0,10) === value; }
export function calculate(input:CalculationInput) {
  const issues:string[] = [];
  const selected = input.ids.map(id => RULES.find(r=>r.id===id)).filter(r=>r!==undefined);
  if (!selected.length || selected.length !== input.ids.length) issues.push('Selecciona una regla habilitada.');
  if (new Set(input.ids).size !== input.ids.length) issues.push('Hay actuaciones duplicadas.');
  if (selected.length > 1 && (!selected[0]?.group || selected.some(r=>r.group !== selected[0]?.group))) issues.push('Estas actuaciones no tienen acumulación habilitada. Calcula cada concepto por separado.');
  if (!validDate(input.procedureDate) || !validDate(input.actDate)) issues.push('Indica fechas válidas de inicio del procedimiento y de la actuación.');
  else if (input.actDate < input.procedureDate) issues.push('La actuación no puede ser anterior al inicio del procedimiento.');
  else if (input.actDate < EFFECTIVE_DATE) issues.push('Actuación anterior al 02/05/2024: régimen previo no habilitado.');
  if (!input.court.trim()) issues.push('Indica el órgano judicial.');
  if (!input.confirmed) issues.push('Confirma los requisitos de todas las actuaciones seleccionadas.');
  if (input.civilAction && selected.some(r=>r.order==='penal')) issues.push('Acción civil penal: requiere validación de los arts. 65.2 / 66. No se emite un total conjunto.');
  for (const n of [input.suplidos,input.expenses,input.previousRights]) if (!Number.isFinite(n)||n<0) issues.push('Los importes económicos deben ser números no negativos.');
  if (input.suplidos > 0 && !input.suplidosConfirmed) issues.push('Confirma los requisitos fiscales de los suplidos (art. 78.Tres.3.º LIVA).');
  const lines = selected.map(r=>{
    const base = r.fixed ?? (input.indeterminate ? r.indeterminate : input.amount === null ? null : scale(input.amount));
    if (base === null || base === undefined) issues.push(`${r.phase}: falta cuantía válida o criterio verificado para una cuantía entre filas; no se interpola la escala.`);
    const maximum = base === null || base === undefined ? 0 : round(base * (r.fixed === undefined ? r.factor ?? 1 : 1));
    return { rule:r, base:base ?? 0, maximum, operation:r.fixed !== undefined ? `${money(r.fixed)} (máximo del concepto)` : `${money(base ?? 0)} × ${((r.factor ?? 1)*100).toFixed(0)} %` };
  });
  const rawMaximum = round(lines.reduce((sum,l)=>sum+l.maximum,0));
  const maximum = round(Math.min(rawMaximum, Math.max(0,75000-input.previousRights)));
  if (input.agreed !== null && (!Number.isFinite(input.agreed)||input.agreed<0||input.agreed>maximum)) issues.push('El importe pactado no puede ser negativo ni superar el máximo disponible.');
  const rights = input.agreed ?? maximum;
  const taxBase = round(rights + input.expenses);
  const vat = input.vat==='21' ? round(taxBase*.21) : 0;
  const warnings = ['Máximo arancelario, no cantidad efectivamente abonable. No acredita el pago, el devengo completo ni la tasación de costas.', 'No incluye conceptos no seleccionados, sustituciones ni multirrepresentación.'];
  if (input.legalAid) warnings.push('Turno de oficio: baremos y régimen de asistencia jurídica gratuita no verificados. Solo referencia del arancel ordinario; no es indemnización ni importe administrativo abonable.');
  if (input.procedureDate < EFFECTIVE_DATE && input.actDate >= EFFECTIVE_DATE) warnings.push('Procedimiento anterior: se aplica la disposición transitoria única.2 a la actuación posterior; revisar acuerdos previos.');
  if (maximum < rawMaximum) warnings.push('Aplicado límite global de 75.000 € por asunto y profesional (art. 1.4 del real decreto), descontando derechos anteriores declarados.');
  if (input.vat==='none') warnings.push('Vista sin IVA: no declara exención ni determina el tratamiento territorial de la operación.');
  return { issues:[...new Set(issues)], lines, maximum, rawMaximum, rights, taxBase, vat, total:round(taxBase+vat+input.suplidos), warnings, legalAid:input.legalAid };
}
