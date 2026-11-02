export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  body: { h?: string; p?: string[]; list?: string[] }[];
};

import { ARTICLE_EXTENSIONS } from "./article-extensions";

const BASE_ARTICLES: Article[] = [
  {
    slug: "procurador-ciudad-justicia-valencia",
    title: "Procurador en la Ciudad de la Justicia de Valencia",
    description: "Cómo trabaja un procurador en la Ciudad de la Justicia de Valencia: presentación telemática, notificaciones, plazos y actuaciones presenciales.",
    date: "2026-10-18",
    body: [
      { p: ["La [Ciudad de la Justicia](/procurador-valencia) concentra buena parte de los órganos judiciales de Valencia capital. Para el procurador es el entorno de trabajo diario, aunque gran parte de la actividad se realiza hoy de forma telemática."] },
      { h: "Presentación de escritos", p: ["Los escritos se presentan por vía telemática a través de los sistemas de la Administración de Justicia, conforme a los artículos 135 y 273 de la Ley de Enjuiciamiento Civil. El procurador presenta los escritos que redacta el abogado y conserva el justificante con fecha y hora."] },
      { h: "Recepción de notificaciones", p: ["El procurador recibe en nombre de su representado las notificaciones del juzgado (art. 153 LEC). Las recibidas en día u hora inhábil se entienden practicadas el primer día hábil siguiente, y los plazos se computan desde el día siguiente (art. 133 LEC). Trasladarlas al abogado el mismo día es la principal garantía de que no se pierde ningún plazo."] },
      { h: "Actuaciones presenciales", p: ["Siguen existiendo actuaciones que requieren presencia: recogida de mandamientos y oficios, consultas en la oficina judicial, determinados actos de comunicación que el procurador puede practicar conforme al artículo 152 LEC, o la asistencia a vistas cuando procede."] },
      { h: "Qué aporta un procurador local", p: ["Conocer la organización de los servicios comunes y de cada juzgado permite resolver incidencias con rapidez y anticipar los tiempos de tramitación, algo especialmente útil para [despachos que no trabajan habitualmente en Valencia](/procurador-valencia-despachos-otras-provincias)."] },
    ],
  },
  {
    slug: "ejecucion-hipotecaria-valencia",
    title: "Ejecución hipotecaria en Valencia paso a paso",
    description: "Fases de la ejecución hipotecaria en Valencia según la LEC: demanda, requerimiento, oposición, subasta electrónica, adjudicación y posesión.",
    date: "2026-10-18",
    body: [
    ],
  },
  {
    slug: "desahucio-impago-valencia",
    title: "Desahucio por impago en Valencia: plazos y procurador",
    description: "Desahucio por falta de pago en Valencia: requerimiento, plazo de diez días, enervación, juicio verbal, lanzamiento y función del procurador.",
    date: "2026-10-18",
    body: [
      { h: "Con oposición", p: ["Si se opone, se celebra la vista y se dicta sentencia. Contra ella cabe apelación ante la [Audiencia Provincial de Valencia](/procurador-valencia); el arrendatario debe acreditar el pago de las rentas vencidas para recurrir (art. 449 LEC)."] },
    ],
  },
  {
    slug: "funciones-del-procurador",
    title: "Funciones del procurador en un procedimiento judicial",
    description: "La representación procesal, la comunicación con el órgano judicial y el seguimiento de actuaciones: el papel del procurador explicado con claridad.",
    date: "2026-10-01",
    body: [
    ],
  },
  {
    slug: "colaboracion-abogado-procurador",
    title: "Cómo organizar la colaboración entre abogado y procurador",
    description: "Pautas prácticas para establecer canales, criterios de comunicación y una dinámica de trabajo eficaz entre despacho y procurador.",
    date: "2026-10-03",
    body: [
      { p: ["La relación entre abogado y procurador es diaria y operativa. Una buena organización inicial evita malentendidos, duplicidades y pérdidas de tiempo a lo largo del procedimiento."] },
      { h: "Información de inicio del asunto", list: ["Datos de las partes y del órgano judicial.", "Referencia interna del despacho.", "Documentación necesaria para la representación.", "Particularidades del asunto que el procurador deba conocer."] },
    ],
  },
  {
    slug: "procurador-procedimientos-ejecucion",
    title: "El procurador en los procedimientos de ejecución",
    description: "Seguimiento, impulso y coordinación de actuaciones en la fase de ejecución, donde la diligencia procesal resulta especialmente relevante.",
    date: "2026-10-06",
    body: [
      { p: ["La [fase de ejecución](/procedimientos-civiles-ejecuciones) exige constancia. Una vez obtenido un título ejecutivo, la eficacia de la ejecución depende en gran medida del seguimiento de las actuaciones y de la coordinación con el despacho."] },
      { h: "Actos de comunicación y diligencias", p: ["En determinados supuestos, el procurador puede intervenir en la práctica de actos de comunicación y en diligencias relacionadas con la ejecución, conforme a la normativa aplicable y a la organización de cada partido judicial."] },
      { h: "Ejecuciones en carteras bancarias", p: ["En [despachos con volumen de ejecuciones bancarias](/procedimientos-bancarios), la organización es determinante: identificación clara de cada asunto, control de actuaciones pendientes y comunicación ordenada con el despacho."] },
    ],
  },
  {
    slug: "como-elegir-procurador",
    title: "Qué debe valorar un despacho al elegir procurador",
    description: "Comunicación, organización, capacidad de coordinación y adaptación al sistema de trabajo: criterios para elegir un procurador colaborador.",
    date: "2026-10-09",
    body: [
    ],
  },
  {
    slug: "coordinar-procedimientos-distintos-territorios",
    title: "Coordinar procedimientos judiciales en varios territorios",
    description: "Claves para gestionar asuntos en varios partidos judiciales manteniendo un único interlocutor y criterios homogéneos.",
    date: "2026-10-13",
    body: [
      { p: ["Cuando un despacho tramita asuntos en distintos partidos judiciales, la dispersión de interlocutores puede convertirse en un problema operativo. La coordinación centralizada ofrece una alternativa ordenada."] },
      { h: "Respeto a la representación en cada territorio", p: ["La representación procesal en cada procedimiento se ejerce por el procurador que corresponda conforme a la normativa aplicable. La coordinación no sustituye esa representación: la organiza y la hace más eficaz para el despacho."] },
    ],
  },
];

export const ARTICLES: Article[] = BASE_ARTICLES.map((a) => ({ ...a, body: [...a.body, ...(ARTICLE_EXTENSIONS[a.slug] ?? [])] }));

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
