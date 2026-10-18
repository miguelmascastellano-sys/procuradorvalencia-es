// Long-form guide sections for each procedure page.
export type Guide = { h: string; p: string[] }[];

export const GUIDES = {
  familia: [
    { h: "Juzgados de familia en Valencia", p: [
      "En Valencia capital los asuntos de familia se reparten entre juzgados de primera instancia especializados en esta materia. En el resto de la provincia, los procedimientos de familia los conocen los juzgados de primera instancia o de primera instancia e instrucción de cada partido judicial, según la organización de cada sede.",
      "La competencia territorial en los procesos matrimoniales se determina por el último domicilio común o, en su defecto, por las reglas del artículo 769 LEC. Ello permite saber desde el inicio ante qué partido judicial debe actuar el procurador.",
    ] },
    { h: "Mutuo acuerdo y contencioso", p: [
      "En el procedimiento de mutuo acuerdo (art. 777 LEC) se presenta la propuesta de convenio regulador, que el juzgado ratifica y aprueba si no es dañosa para los hijos ni gravemente perjudicial para uno de los cónyuges. El procurador presenta el escrito, coordina las ratificaciones y traslada la sentencia.",
      "En el contencioso (art. 770 LEC) el procedimiento sigue los trámites del juicio verbal con especialidades: contestación en veinte días, posibilidad de solicitar medidas provisionales previas o coetáneas y una vista en la que se practica la prueba. Aquí el seguimiento de los señalamientos y de los requerimientos documentales es especialmente relevante.",
    ] },
    { h: "Medidas provisionales y modificación", p: [
      "Las medidas provisionales (arts. 771 y 773 LEC) permiten regular la situación de la familia mientras se tramita el procedimiento principal. Su solicitud y el seguimiento de la comparecencia exigen rapidez, porque responden a situaciones que no pueden esperar.",
      "La modificación de medidas definitivas (art. 775 LEC) procede cuando han variado sustancialmente las circunstancias tenidas en cuenta al aprobarlas o acordarlas. El procurador cuida de que la demanda se acompañe de la resolución cuya modificación se pide y de la documentación que acredita el cambio.",
    ] },
    { h: "Ejecución en materia de familia", p: [
      "El incumplimiento de pensiones o del régimen de estancias se ejecuta ante el mismo juzgado que dictó la resolución. El artículo 776 LEC contiene especialidades, como la imposición de multas coercitivas al incumplidor. El procurador impulsa la ejecución, solicita los embargos que el abogado considere oportunos y traslada cada resultado.",
    ] },
  ],
  civil: [
    { h: "Procesos declarativos", p: [
      "La LEC distingue entre juicio ordinario y juicio verbal en función de la cuantía y de la materia (arts. 248 a 250 LEC). En ambos el procurador presenta la demanda, recibe el emplazamiento o la contestación, traslada las resoluciones y sigue los señalamientos de audiencia previa y juicio o, en su caso, de vista.",
      "El juicio verbal de cuantía no superior a 2.000 euros admite comparecer sin procurador (art. 23.2 LEC). En el resto, la postulación es obligatoria y la intervención del procurador forma parte de las costas si hay condena.",
    ] },
    { h: "Proceso monitorio", p: [
      "El monitorio (arts. 812 a 818 LEC) permite reclamar deudas dinerarias, vencidas y exigibles, acreditadas documentalmente. La petición inicial no exige procurador, pero si el deudor se opone y el asunto continúa por el juicio correspondiente, su intervención se vuelve necesaria según la cuantía. Si el deudor no paga ni se opone, se dicta decreto que abre la vía de ejecución.",
    ] },
    { h: "Ejecución de títulos", p: [
      "La ejecución se despacha sobre los títulos del artículo 517 LEC. Las resoluciones judiciales no son ejecutables hasta transcurridos veinte días desde su firmeza o notificación (art. 548 LEC), y la acción caduca a los cinco años (art. 518 LEC). El ejecutado puede oponerse en diez días por las causas tasadas en los artículos 556 y 557 LEC.",
      "Despachada la ejecución, el procurador impulsa la investigación patrimonial (arts. 589 y 590 LEC), los embargos de cuentas, salarios dentro de los límites del artículo 607 LEC, vehículos o inmuebles, y la realización de los bienes, incluida la subasta electrónica en el Portal del BOE.",
    ] },
    { h: "Ejecuciones en Valencia capital y provincia", p: [
      "En Valencia capital las ejecuciones se tramitan ante los juzgados de primera instancia con el apoyo de los servicios comunes. En los partidos judiciales de la provincia, la organización varía y conviene conocer cómo se gestionan los oficios, los mandamientos y las diligencias de embargo en cada sede. Esa experiencia práctica es la que permite que una ejecución avance sin paradas innecesarias.",
    ] },
  ],
  bancario: [
    { h: "Reclamaciones por cláusulas abusivas", p: [
      "Las acciones de nulidad de cláusulas abusivas, como las relativas a gastos hipotecarios, cláusulas suelo, comisiones o índices de referencia, se tramitan por el procedimiento declarativo que corresponda por cuantía. En Valencia, la organización de los juzgados ha incluido en distintos periodos órganos con competencia específica en condiciones generales de la contratación, por lo que conviene verificar el reparto vigente al presentar la demanda.",
      "El procurador presenta la demanda con la documentación bancaria, sigue la contestación de la entidad y traslada cada señalamiento. En estos asuntos, la constancia en el seguimiento es importante porque suelen acumularse muchos procedimientos similares.",
    ] },
    { h: "Ejecución hipotecaria y ejecución de títulos bancarios", p: [
      "La ejecución hipotecaria (arts. 681 a 698 LEC) exige requisitos específicos en la escritura y permite oponer causas tasadas, entre ellas el carácter abusivo de una cláusula (art. 695 LEC). Cuando se ejecuta una póliza o un saldo de cuenta, se aplican las reglas de la ejecución de títulos no judiciales y la liquidación debe acompañarse a la demanda.",
      "El procurador puede intervenir tanto por el acreedor como por el deudor, siempre en coordinación con el abogado que dirige el asunto.",
    ] },
    { h: "Ejecución de sentencias contra entidades", p: [
      "Obtenida una sentencia estimatoria, la devolución de cantidades y el pago de costas no siempre se producen de forma voluntaria. En ese caso, el procurador insta la ejecución y sigue la consignación o el embargo hasta que el cliente recibe lo que se le debe.",
    ] },
    { h: "Volumen y organización", p: [
      "Los despachos que trabajan en derecho bancario suelen gestionar un número elevado de asuntos. Para ellos resulta útil un sistema de traslados homogéneo, con referencia del despacho, juzgado, número de procedimiento, resolución y plazo, que permita incorporar la información a su gestión interna sin reelaborarla.",
    ] },
  ],
  segunda: [
    { h: "Qué es la exoneración del pasivo insatisfecho", p: [
      "El Texto Refundido de la Ley Concursal, reformado por la Ley 16/2022, regula la exoneración del pasivo insatisfecho para el deudor persona natural de buena fe. Puede obtenerse con liquidación de la masa activa o mediante un plan de pagos, y la ley establece supuestos en que no se concede, así como deudas que no son exonerables.",
    ] },
    { h: "Competencia y tramitación", p: [
      "El concurso de la persona natural no empresaria corresponde a los juzgados de primera instancia del lugar donde el deudor tenga el centro de sus intereses principales; el de la persona natural empresaria, a los juzgados de lo mercantil. En Valencia, esta distinción determina el órgano ante el que actuará el procurador.",
      "La solicitud debe acompañarse de documentación extensa: inventario de bienes y derechos, relación de acreedores, ingresos y situación familiar. El procurador presenta la solicitud, sigue la declaración del concurso y traslada cada resolución.",
    ] },
    { h: "Liquidación o plan de pagos", p: [
      "En la modalidad con liquidación, la exoneración se solicita tras la liquidación de la masa activa o la declaración de insuficiencia. En la modalidad con plan de pagos, el deudor conserva su patrimonio y propone un calendario. En ambos casos, los acreedores pueden formular alegaciones y la resolución puede revocarse en los supuestos legales.",
    ] },
    { h: "Papel del procurador", p: [
      "Recibir las comunicaciones de la administración concursal y del juzgado, trasladarlas al abogado y cuidar los plazos de alegaciones son las funciones esenciales. Un procedimiento concursal genera muchas resoluciones, y su seguimiento ordenado es lo que permite al abogado centrarse en el fondo.",
    ] },
  ],
} satisfies Record<string, Guide>;
