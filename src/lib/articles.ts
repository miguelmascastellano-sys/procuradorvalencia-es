export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  body: { h?: string; p?: string[]; list?: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "funciones-del-procurador",
    title: "Qué funciones desempeña un procurador en un procedimiento judicial",
    description: "La representación procesal, la comunicación con el órgano judicial y el seguimiento de actuaciones: el papel del procurador explicado con claridad.",
    date: "2026-10-01",
    body: [
      { p: ["El procurador de los tribunales es el profesional que ostenta la representación procesal de la parte ante los juzgados y tribunales. Mientras el abogado asume la dirección técnica y la defensa del asunto, el procurador actúa como representante de la parte en el procedimiento y como interlocutor directo con el órgano judicial."] },
      { h: "Representación procesal", p: ["La representación se acredita mediante el correspondiente poder o apoderamiento, y permite al procurador presentar escritos, recibir notificaciones y realizar las actuaciones procesales que correspondan en nombre de su representado."] },
      { h: "Recepción y traslado de comunicaciones", p: ["Una parte esencial de la función consiste en recibir las notificaciones del órgano judicial y trasladarlas al abogado con la diligencia necesaria. La correcta gestión de plazos depende en buena medida de esta comunicación."] },
      { h: "Seguimiento de las actuaciones", p: ["El procurador sigue el estado del procedimiento, atiende requerimientos, impulsa trámites cuando procede y mantiene informado al despacho sobre cualquier incidencia relevante."], list: ["Presentación de escritos y documentos.", "Recepción y traslado de notificaciones.", "Seguimiento del estado de las actuaciones.", "Gestión de actos de comunicación y de ejecución, según corresponda."] },
      { h: "Una función de colaboración", p: ["La procura funciona mejor cuando se entiende como una colaboración estrecha con el abogado: información clara, canales directos y criterios compartidos sobre cómo y cuándo comunicar cada actuación."] },
    ],
  },
  {
    slug: "colaboracion-abogado-procurador",
    title: "Cómo organizar la colaboración entre abogado y procurador",
    description: "Pautas prácticas para establecer canales, criterios de comunicación y una dinámica de trabajo eficaz entre despacho y procurador.",
    date: "2026-10-03",
    body: [
      { p: ["La relación entre abogado y procurador es diaria y operativa. Una buena organización inicial evita malentendidos, duplicidades y pérdidas de tiempo a lo largo del procedimiento."] },
      { h: "Definir interlocutores y canales", p: ["Conviene acordar desde el principio quién es la persona de contacto en el despacho para cada asunto, qué canal se utiliza para las notificaciones y cuál para las consultas urgentes."] },
      { h: "Criterios de traslado de notificaciones", p: ["Cada despacho tiene su propio sistema. Establecer cómo se identifican los asuntos, el formato de envío y la información que acompaña a cada notificación facilita su integración en la gestión interna."] },
      { h: "Información de inicio del asunto", list: ["Datos de las partes y del órgano judicial.", "Referencia interna del despacho.", "Documentación necesaria para la representación.", "Particularidades del asunto que el procurador deba conocer."] },
      { h: "Revisión periódica", p: ["En carteras con volumen de procedimientos, una revisión periódica del estado de los asuntos permite detectar actuaciones pendientes y ajustar la forma de trabajo."] },
    ],
  },
  {
    slug: "procurador-procedimientos-ejecucion",
    title: "La intervención del procurador en los procedimientos de ejecución",
    description: "Seguimiento, impulso y coordinación de actuaciones en la fase de ejecución, donde la diligencia procesal resulta especialmente relevante.",
    date: "2026-10-06",
    body: [
      { p: ["La fase de ejecución exige constancia. Una vez obtenido un título ejecutivo, la eficacia de la ejecución depende en gran medida del seguimiento de las actuaciones y de la coordinación con el despacho."] },
      { h: "Seguimiento continuado", p: ["El procurador atiende el estado de la ejecución, las diligencias practicadas y los requerimientos del órgano judicial, informando al abogado de cada novedad para que pueda decidir los siguientes pasos."] },
      { h: "Actos de comunicación y diligencias", p: ["En determinados supuestos, el procurador puede intervenir en la práctica de actos de comunicación y en diligencias relacionadas con la ejecución, conforme a la normativa aplicable y a la organización de cada partido judicial."] },
      { h: "Ejecuciones en carteras bancarias", p: ["En despachos con volumen de ejecuciones, la organización es determinante: identificación clara de cada asunto, control de actuaciones pendientes y comunicación ordenada con el despacho."] },
    ],
  },
  {
    slug: "como-elegir-procurador",
    title: "Qué debe valorar un despacho al elegir procurador",
    description: "Comunicación, organización, capacidad de coordinación y adaptación al sistema de trabajo: criterios para elegir un procurador colaborador.",
    date: "2026-10-09",
    body: [
      { p: ["Elegir procurador es elegir un colaborador con el que se compartirá el día a día de los procedimientos. Más allá de la proximidad, conviene valorar cómo trabaja."] },
      { h: "Criterios a considerar", list: ["Interlocución directa y respuesta ágil a las consultas.", "Organización en el traslado de notificaciones.", "Capacidad para adaptarse a los sistemas de trabajo del despacho.", "Experiencia en el tipo de procedimientos del despacho.", "Capacidad de coordinación cuando hay asuntos en otros territorios."] },
      { h: "La importancia de la comunicación", p: ["Un procurador que informa con claridad y en el momento adecuado reduce la carga operativa del despacho y facilita la toma de decisiones del abogado."] },
    ],
  },
  {
    slug: "coordinar-procedimientos-distintos-territorios",
    title: "Cómo coordinar procedimientos judiciales en distintos territorios",
    description: "Claves para gestionar asuntos en varios partidos judiciales manteniendo un único interlocutor y criterios homogéneos.",
    date: "2026-10-13",
    body: [
      { p: ["Cuando un despacho tramita asuntos en distintos partidos judiciales, la dispersión de interlocutores puede convertirse en un problema operativo. La coordinación centralizada ofrece una alternativa ordenada."] },
      { h: "Un interlocutor de referencia", p: ["Contar con un punto de contacto que coordine la actuación de procuradores colaboradores en otros territorios simplifica la comunicación y permite mantener criterios homogéneos."] },
      { h: "Criterios comunes", p: ["La coordinación funciona cuando todos los profesionales comparten el formato de comunicación, los tiempos de traslado y la forma de informar sobre el estado de los asuntos."] },
      { h: "Respeto a la representación en cada territorio", p: ["La representación procesal en cada procedimiento se ejerce por el procurador que corresponda conforme a la normativa aplicable. La coordinación no sustituye esa representación: la organiza y la hace más eficaz para el despacho."] },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
