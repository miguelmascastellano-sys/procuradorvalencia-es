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
      { p: ["La Ciudad de la Justicia concentra buena parte de los órganos judiciales de Valencia capital. Para el procurador es el entorno de trabajo diario, aunque gran parte de la actividad se realiza hoy de forma telemática."] },
      { h: "Presentación de escritos", p: ["Los escritos se presentan por vía telemática a través de los sistemas de la Administración de Justicia, conforme a los artículos 135 y 273 de la Ley de Enjuiciamiento Civil. El procurador presenta los escritos que redacta el abogado y conserva el justificante con fecha y hora."] },
      { h: "Recepción de notificaciones", p: ["El procurador recibe en nombre de su representado las notificaciones del juzgado (art. 153 LEC). Las recibidas en día u hora inhábil se entienden practicadas el primer día hábil siguiente, y los plazos se computan desde el día siguiente (art. 133 LEC). Trasladarlas al abogado el mismo día es la principal garantía de que no se pierde ningún plazo."] },
      { h: "Actuaciones presenciales", p: ["Siguen existiendo actuaciones que requieren presencia: recogida de mandamientos y oficios, consultas en la oficina judicial, determinados actos de comunicación que el procurador puede practicar conforme al artículo 152 LEC, o la asistencia a vistas cuando procede."] },
      { h: "Qué aporta un procurador local", p: ["Conocer la organización de los servicios comunes y de cada juzgado permite resolver incidencias con rapidez y anticipar los tiempos de tramitación, algo especialmente útil para despachos que no trabajan habitualmente en Valencia."] },
    ],
  },
  {
    slug: "ejecucion-hipotecaria-valencia",
    title: "Ejecución hipotecaria en Valencia paso a paso",
    description: "Fases de la ejecución hipotecaria en Valencia según la LEC: demanda, requerimiento, oposición, subasta electrónica, adjudicación y posesión.",
    date: "2026-10-18",
    body: [
      { p: ["La ejecución hipotecaria sobre bienes inmuebles se regula en los artículos 681 a 698 de la Ley de Enjuiciamiento Civil. Se tramita ante el juzgado de primera instancia del lugar donde radica la finca."] },
      { h: "1. Demanda ejecutiva", p: ["El acreedor presenta la demanda con la escritura de hipoteca y el certificado de saldo, previo requerimiento extrajudicial en su caso. En préstamos sujetos a la Ley 5/2019, deben concurrir los requisitos de vencimiento anticipado de su artículo 24."] },
      { h: "2. Despacho de ejecución y requerimiento", p: ["El juzgado despacha ejecución, se requiere de pago al deudor y se solicita al Registro de la Propiedad la certificación de dominio y cargas (art. 688 LEC)."] },
      { h: "3. Oposición", p: ["El deudor puede oponerse por las causas tasadas del artículo 695 LEC, incluido el carácter abusivo de alguna cláusula. La oposición se resuelve en un incidente."] },
      { h: "4. Subasta electrónica", p: ["Sin pago ni oposición estimada, el bien sale a subasta en el Portal de Subastas del BOE, con un depósito general del 5 % del valor de subasta (art. 647 LEC)."] },
      { h: "5. Adjudicación y posesión", p: ["Tras la subasta se aprueba el remate o la adjudicación al acreedor (art. 671 LEC), se expide el testimonio para inscribir el bien y se resuelve la toma de posesión (art. 675 LEC)."] },
      { h: "El papel del procurador", p: ["El procurador presenta cada escrito, recibe las resoluciones y avisa de los plazos de cada fase, desde la demanda hasta la posesión."] },
    ],
  },
  {
    slug: "desahucio-impago-valencia",
    title: "Desahucio por impago en Valencia: plazos y procurador",
    description: "Desahucio por falta de pago en Valencia: requerimiento, plazo de diez días, enervación, juicio verbal, lanzamiento y función del procurador.",
    date: "2026-10-18",
    body: [
      { p: ["El desahucio por falta de pago de la renta se tramita como juicio verbal (art. 250.1.1.º LEC) ante el juzgado de primera instancia del lugar de la finca."] },
      { h: "Demanda y requerimiento", p: ["Admitida la demanda, el letrado de la Administración de Justicia requiere al arrendatario para que, en diez días, desaloje, pague o se oponga (art. 440.3 LEC). La resolución fija ya la fecha de la vista y del lanzamiento para el caso de que no haya oposición."] },
      { h: "Enervación", p: ["El arrendatario puede enervar el desahucio pagando lo adeudado, salvo que ya lo hubiera hecho antes o el arrendador le hubiera requerido de pago con la antelación prevista en el artículo 22.4 LEC."] },
      { h: "Sin oposición", p: ["Si el demandado no atiende el requerimiento, se dicta decreto dando por terminado el juicio y se procede al lanzamiento en la fecha fijada."] },
      { h: "Con oposición", p: ["Si se opone, se celebra la vista y se dicta sentencia. Contra ella cabe apelación ante la Audiencia Provincial de Valencia; el arrendatario debe acreditar el pago de las rentas vencidas para recurrir (art. 449 LEC)."] },
      { h: "Situaciones de vulnerabilidad", p: ["La normativa vigente prevé trámites específicos cuando se aprecia vulnerabilidad del ocupante, que pueden suspender o aplazar el lanzamiento. Conviene que el abogado valore su aplicación en cada caso."] },
      { h: "Qué hace el procurador", p: ["Presenta la demanda, sigue el requerimiento, traslada al abogado el resultado y la fecha de lanzamiento, y comunica cualquier incidencia del juzgado, especialmente en plazos tan breves como los de este procedimiento."] },
    ],
  },
  {
    slug: "funciones-del-procurador",
    title: "Funciones del procurador en un procedimiento judicial",
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
    title: "El procurador en los procedimientos de ejecución",
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
    title: "Coordinar procedimientos judiciales en varios territorios",
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

export const ARTICLES: Article[] = BASE_ARTICLES.map((a) => ({ ...a, body: [...a.body, ...(ARTICLE_EXTENSIONS[a.slug] ?? [])] }));

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
