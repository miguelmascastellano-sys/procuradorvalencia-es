// Additional sections appended to each article (keeps articles.ts readable).
type Block = { h?: string; p?: string[]; list?: string[] };

export const ARTICLE_EXTENSIONS: Record<string, Block[]> = {
  "procurador-ciudad-justicia-valencia": [
    { h: "El procurador como representante procesal", p: [
      "La Ley de Enjuiciamiento Civil establece como regla general que la comparecencia en juicio se haga por medio de procurador legalmente habilitado (art. 23 LEC), con excepciones tasadas como los juicios verbales de cuantía no superior a 2.000 euros o la petición inicial del proceso monitorio. Fuera de esas excepciones, el procurador es quien ostenta la representación de la parte ante el órgano judicial, mientras que el abogado asume la defensa técnica.",
      "La Ley Orgánica del Poder Judicial reconoce a los procuradores como cooperadores de la Administración de Justicia (art. 543 LOPJ). En la práctica diaria de la Ciudad de la Justicia de Valencia, esa cooperación se traduce en algo muy concreto: el juzgado se comunica con la parte a través de su procurador, y el procurador se encarga de que esa comunicación llegue al abogado en tiempo útil.",
    ] },
    { h: "El poder de representación", p: [
      "Para actuar, el procurador necesita estar apoderado por su representado. El poder puede otorgarse ante notario o mediante comparecencia electrónica o personal ante el letrado de la Administración de Justicia, el llamado apoderamiento apud acta (art. 24 LEC). Esta segunda vía es habitual en Valencia por su rapidez y coste reducido.",
      "Conviene que el poder se aporte con el primer escrito. Si el procurador comparece sin él, la omisión es subsanable, pero obliga a un trámite adicional que retrasa el asunto. Coordinar desde el principio con el abogado qué tipo de poder se va a utilizar evita esa incidencia.",
    ] },
    { h: "Deberes del procurador frente a su cliente y al abogado", p: [
      "El artículo 26 LEC enumera las obligaciones del procurador: seguir el asunto mientras no cese en su representación, transmitir al abogado todos los documentos, antecedentes o instrucciones que se le remitan, tener al poderdante y al abogado siempre al corriente del curso del asunto, trasladar las copias de escritos y documentos, y pagar los gastos que se causen a su instancia.",
      "Trasladar notificaciones y escritos de contrario el mismo día en que se reciben no es una cortesía, sino el núcleo de esa obligación. En un entorno con tantos órganos como la Ciudad de la Justicia, un sistema ordenado de traslado es lo que garantiza que el abogado dispone del plazo completo para trabajar.",
    ] },
    { h: "Órganos que se encuentran en Valencia capital", p: [
      "En Valencia capital tienen sede, entre otros, los juzgados de primera instancia y de familia, los juzgados de lo mercantil, los juzgados de lo social, los de lo contencioso-administrativo, la Audiencia Provincial y el Tribunal Superior de Justicia de la Comunitat. No todos se encuentran en el mismo edificio, por lo que la ubicación concreta de cada órgano debe consultarse en la información oficial de la Administración de Justicia antes de cualquier actuación presencial.",
      "La actuación del procurador se adapta a cada orden jurisdiccional. En el orden civil su intervención es preceptiva con carácter general; en otros órdenes depende de la norma procesal aplicable y de la estrategia que decida el abogado.",
    ] },
    { h: "Cómo encargar un asunto", list: [
      "El abogado remite el escrito o la demanda junto con la documentación y la indicación del órgano o partido judicial.",
      "Se acuerda la forma de otorgar el poder (notarial o apud acta).",
      "El procurador presenta el escrito y envía el justificante de presentación.",
      "A partir de ese momento, cada notificación se traslada el mismo día con indicación del plazo que abre.",
    ] },
    { p: ["Este artículo tiene carácter informativo y no sustituye el asesoramiento de un abogado sobre un asunto concreto."] },
  ],
  "ejecucion-hipotecaria-valencia": [
    { h: "Requisitos del título", p: [
      "El procedimiento especial de ejecución sobre bienes hipotecados se regula en los artículos 681 a 698 LEC. Para utilizarlo, la escritura de constitución de hipoteca debe contener el precio en que los interesados tasan la finca para que sirva de tipo en la subasta y un domicilio del deudor a efectos de requerimientos y notificaciones (art. 682 LEC). Si esos requisitos no se cumplen, el acreedor tendrá que acudir a la ejecución ordinaria o a otro cauce.",
      "La demanda se presenta ante el juzgado de primera instancia del lugar donde radique la finca (art. 684 LEC). Cuando el inmueble está en Valencia o en su provincia, la competencia corresponde al partido judicial donde se encuentre, lo que determina el juzgado ante el que debe actuar el procurador.",
    ] },
    { h: "Vencimiento anticipado", p: [
      "Para préstamos sujetos a la Ley 5/2019, reguladora de los contratos de crédito inmobiliario, el vencimiento anticipado exige un incumplimiento de cierta entidad, medido en un número de cuotas o en un porcentaje del capital, y un requerimiento previo al deudor concediéndole un plazo para regularizar. El abogado valora estos requisitos; el procurador cuida de que la documentación que los acredita se acompañe correctamente a la demanda.",
    ] },
    { h: "Requerimiento de pago y certificación de cargas", p: [
      "Admitida la demanda, se requiere de pago al deudor en el domicilio que consta en la escritura (art. 686 LEC) y se solicita del Registro de la Propiedad la certificación de dominio y cargas (art. 688 LEC). El Registro deja nota marginal de la expedición de la certificación, de modo que cualquier tercero que inscriba después queda advertido de la ejecución.",
      "Si el requerimiento resulta negativo, el procurador puede impulsar la averiguación de domicilio o, agotadas las vías, la comunicación por edictos. El artículo 152 LEC permite además que los actos de comunicación se practiquen por medio del procurador, lo que en ocasiones acelera esta fase.",
    ] },
    { h: "Oposición del ejecutado", p: [
      "Las causas de oposición en la ejecución hipotecaria están tasadas (art. 695 LEC): extinción de la garantía o de la obligación, error en la determinación de la cantidad exigible cuando la deuda resulte del cierre de una cuenta, sobreseimiento de otro procedimiento sobre la misma finca y el carácter abusivo de una cláusula contractual que constituya fundamento de la ejecución o haya determinado la cantidad exigible.",
      "El juez puede además examinar de oficio el carácter abusivo de las cláusulas. Por eso es frecuente que, antes de despachar ejecución o durante el procedimiento, se dé traslado a las partes para alegaciones sobre esta cuestión.",
    ] },
    { h: "Subasta electrónica y adjudicación", p: [
      "La subasta se celebra en el Portal de Subastas de la Agencia Estatal Boletín Oficial del Estado. Para pujar es necesario consignar un depósito del 5 % del valor de tasación (art. 647 LEC). Las reglas de adjudicación cuando se trata de la vivienda habitual del deudor se recogen en el artículo 671 LEC, con porcentajes mínimos sobre el valor de tasación si la subasta queda desierta.",
      "Concluida la subasta, se dicta decreto de adjudicación, que es título bastante para la inscripción en el Registro, y se libra mandamiento de cancelación de cargas posteriores (art. 674 LEC). El adjudicatario puede solicitar la entrega de la posesión (art. 675 LEC).",
    ] },
    { h: "Papel del procurador en cada fase", list: [
      "Presentación de la demanda y del título ejecutivo.",
      "Seguimiento del requerimiento y de la certificación registral.",
      "Traslado inmediato de la oposición o de cualquier incidente.",
      "Gestiones relacionadas con la subasta, la adjudicación y los mandamientos registrales.",
      "Solicitud y seguimiento del lanzamiento o entrega de la posesión.",
    ] },
    { p: ["Este artículo tiene carácter informativo; cada ejecución debe ser valorada por el abogado que dirige el asunto."] },
  ],
  "desahucio-impago-valencia": [
    { h: "Cauce procesal", p: [
      "Las demandas que pretenden la recuperación de una finca por falta de pago de la renta o cantidades asimiladas se tramitan por el juicio verbal (art. 250.1.1.º LEC), con independencia de la cuantía. Puede acumularse la reclamación de las rentas debidas (art. 438.3 LEC). La competencia corresponde al juzgado del lugar en que esté sita la finca (art. 52.1.7.º LEC).",
      "Aunque el juicio verbal de cuantía reducida admite comparecer sin procurador, en los desahucios por impago la intervención de procurador y abogado es preceptiva salvo las excepciones legales, y en la práctica resulta habitual para evitar errores en una tramitación con plazos breves.",
    ] },
    { h: "El requerimiento del artículo 440.3 LEC", p: [
      "Admitida la demanda, el letrado de la Administración de Justicia requiere al demandado para que, en el plazo de diez días, desaloje el inmueble, pague al actor o, en caso de pretender la enervación, pague la totalidad de lo que deba o ponga a disposición su importe, o bien comparezca y se oponga.",
      "En el mismo requerimiento se fijan la fecha de la vista, si se celebrara, y la fecha del lanzamiento para el caso de que no hubiera oposición. Si el demandado no atiende el requerimiento, se dicta decreto dando por terminado el juicio y se procede al lanzamiento en la fecha señalada.",
    ] },
    { h: "Enervación", p: [
      "El arrendatario puede, por una sola vez, enervar la acción de desahucio pagando o consignando las cantidades reclamadas y las que adeude en el momento del pago (art. 22.4 LEC). No cabe la enervación si ya se enervó anteriormente, ni cuando el arrendador requirió de pago al arrendatario por cualquier medio fehaciente con al menos un mes de antelación a la presentación de la demanda y el pago no se efectuó.",
    ] },
    { h: "Vulnerabilidad y suspensiones", p: [
      "La normativa vigente prevé trámites específicos cuando el demandado se encuentra en situación de vulnerabilidad económica y social, incluida la comunicación a los servicios sociales y, en determinados supuestos, la suspensión temporal del lanzamiento. Estas previsiones han sido objeto de sucesivas reformas, por lo que su aplicación debe comprobarse en cada momento con la redacción vigente.",
    ] },
    { h: "Lanzamiento y ejecución de las rentas", p: [
      "El lanzamiento lo practica la comisión judicial en la fecha fijada. El procurador coordina con el abogado y el propietario la asistencia, la entrega de llaves y la documentación del estado del inmueble.",
      "La condena al pago de rentas se ejecuta conforme a las reglas generales de la ejecución dineraria, con investigación de bienes y embargo cuando resulte necesario. El procurador impulsa esas actuaciones y traslada cada resultado.",
    ] },
    { h: "Papel del procurador", list: [
      "Presentación de la demanda y del contrato, con la documentación de la deuda.",
      "Seguimiento del requerimiento y traslado inmediato de la respuesta del demandado.",
      "Asistencia a la vista cuando se celebre.",
      "Coordinación del lanzamiento y de la ejecución de las cantidades.",
    ] },
    { h: "Documentación que conviene preparar", p: [
      "Para que la demanda se presente sin incidencias conviene reunir el contrato de arrendamiento, la identificación del inmueble, el detalle de las rentas y cantidades adeudadas, los requerimientos de pago previos si se realizaron y el poder para pleitos o la previsión de un apoderamiento apud acta. Si se pretende evitar la enervación, el requerimiento fehaciente con un mes de antelación debe poder acreditarse.",
    ] },
    { p: ["Información general: los plazos y requisitos deben verificarse con el abogado en cada caso concreto."] },
  ],
  "funciones-del-procurador": [
    { h: "Base legal", p: [
      "El procurador es un profesional del Derecho que ostenta la representación técnica de las partes ante los juzgados y tribunales. La Ley Orgánica del Poder Judicial lo define como cooperador de la Administración de Justicia (art. 543 LOPJ) y la Ley de Enjuiciamiento Civil regula su intervención en los artículos 23 a 30.",
      "La regla general es la postulación obligatoria: la comparecencia en juicio se hace por medio de procurador (art. 23.1 LEC). Las excepciones se recogen en el apartado 2 del mismo artículo, como los juicios verbales de cuantía no superior a 2.000 euros, la petición inicial de los procesos monitorios o las medidas urgentes con anterioridad al juicio.",
    ] },
    { h: "Representación y recepción de notificaciones", p: [
      "Mientras subsista el poder, el procurador recibe las notificaciones dirigidas a su representado, y esas notificaciones producen los mismos efectos que si se hubieran hecho a este (art. 28 LEC). Por eso el traslado inmediato al abogado es una función crítica: el plazo corre desde la notificación al procurador, no desde que el abogado la lee.",
    ] },
    { h: "Actos de comunicación", p: [
      "La reforma de la LEC atribuyó a los procuradores la posibilidad de practicar actos de comunicación (art. 152 LEC) y, en determinados supuestos, asumir funciones en la ejecución. Cuando se solicita, el procurador realiza emplazamientos, citaciones o requerimientos con plena eficacia y documenta su resultado.",
    ] },
    { h: "Deberes legales", list: [
      "Seguir el asunto mientras no cese en la representación (art. 26.2.1.º LEC).",
      "Transmitir al abogado todos los documentos, antecedentes o instrucciones que se le remitan.",
      "Tener al poderdante y al abogado al corriente del curso del asunto.",
      "Trasladar los escritos de las partes y las resoluciones.",
      "Pagar los gastos que se causen a su instancia, como los derechos de terceros.",
    ] },
    { h: "Qué no hace el procurador", p: [
      "La dirección técnica del asunto corresponde al abogado: estrategia, argumentación jurídica y redacción de los escritos de fondo. El procurador no sustituye esa función, sino que la complementa con el conocimiento del procedimiento, de los plazos y de la organización de los juzgados.",
      "Esta distinción facilita la colaboración: el abogado se concentra en el fondo y el procurador garantiza que cada escrito se presenta en forma y en plazo y que cada resolución llega a tiempo.",
    ] },
    { h: "Honorarios", p: [
      "Los derechos del procurador se rigen por el arancel aprobado por el Real Decreto 1373/2003, con un límite de 75.000 euros por asunto, proceso o instancia. Cuando hay condena en costas, los derechos arancelarios del procurador forman parte de ellas (art. 241 LEC), salvo en los casos en que su intervención no sea preceptiva.",
    ] },
    { h: "Cese de la representación", p: [
      "El procurador cesa en su representación por revocación del poder, renuncia voluntaria, separación del abogado, fallecimiento del poderdante o del propio procurador, o por terminación del asunto (art. 30 LEC). En caso de renuncia, debe comunicarse al tribunal y al poderdante, y el procurador sigue obligado durante el plazo de diez días mientras se designa a otro.",
    ] },
    { h: "El procurador en la ejecución", p: [
      "La LEC atribuye al procurador un papel activo en la fase de ejecución. Además de presentar la demanda ejecutiva y trasladar las resoluciones, puede practicar requerimientos y embargos cuando así se acuerde, y gestiona los oficios dirigidos a entidades bancarias, empleadores o registros. Su seguimiento constante evita que la ejecución se detenga por falta de impulso.",
      "En las subastas electrónicas, el procurador sigue la publicación en el Portal del BOE, informa de las pujas y del resultado, y gestiona después el decreto de adjudicación y los mandamientos de cancelación de cargas. Estas actuaciones requieren conocimiento práctico del procedimiento y de los tiempos de cada juzgado.",
    ] },
    { p: ["Este contenido es informativo y no constituye asesoramiento jurídico."] },
  ],
  "colaboracion-abogado-procurador": [
    { h: "Una relación profesional diferenciada", p: [
      "Abogado y procurador ejercen profesiones distintas con funciones complementarias. El abogado dirige técnicamente el asunto; el procurador representa a la parte ante el órgano judicial. La LEC impone al procurador el deber de transmitir al abogado cuanto reciba y de mantenerle informado del curso del asunto (art. 26 LEC), lo que convierte la comunicación entre ambos en el eje del trabajo.",
    ] },
    { h: "Qué debe acordarse al inicio", list: [
      "Canal de comunicación preferente: correo, plataforma del despacho o teléfono para urgencias.",
      "Destinatarios de los traslados dentro del despacho.",
      "Formato en que se envían los escritos para su presentación.",
      "Tipo de poder que se va a otorgar y quién lo gestiona.",
      "Forma de comunicar provisiones de fondos y gastos de terceros.",
    ] },
    { h: "El traslado de notificaciones", p: [
      "Las notificaciones recibidas por el procurador se entienden hechas a la parte (art. 28 LEC). Un buen sistema de traslado incluye la resolución, la fecha de notificación y, cuando es útil, la indicación del plazo que se abre y su cómputo. Recordemos que los plazos se cuentan desde el día siguiente a la notificación (art. 133 LEC) y que agosto es inhábil para las actuaciones judiciales salvo las declaradas urgentes (art. 130 LEC).",
      "El abogado decide qué hacer con cada resolución. El procurador garantiza que la tenga a tiempo y que nada se quede en una bandeja sin leer.",
    ] },
    { h: "La presentación de escritos", p: [
      "Los escritos se presentan por vía telemática. El abogado debe enviarlos con margen suficiente, aunque la ley permite la presentación hasta las quince horas del día hábil siguiente al vencimiento del plazo (art. 135.5 LEC). Aprovechar ese margen es posible, pero conviene no depender de él de forma habitual.",
      "Tras la presentación, el procurador envía el justificante. Si se detecta un defecto formal, como un documento ilegible o un anexo mal identificado, se comunica de inmediato para subsanarlo.",
    ] },
    { h: "Incidencias y urgencias", p: [
      "Señalamientos que coinciden, requerimientos que exigen respuesta inmediata o resoluciones inesperadas forman parte del día a día. Lo importante es que el abogado tenga un interlocutor localizable que conozca el asunto y pueda actuar sin intermediarios.",
    ] },
    { h: "Despachos que trabajan desde otras provincias", p: [
      "Para un despacho con sede fuera de Valencia, el procurador local es también su presencia física en los juzgados: consultas en la oficina judicial, recogida de documentación o asistencia a actuaciones presenciales. Una colaboración bien organizada hace que la distancia no se note en la tramitación.",
    ] },
    { h: "Errores frecuentes que se evitan con buena coordinación", p: [
      "Algunos problemas se repiten cuando la comunicación entre abogado y procurador no está bien organizada: notificaciones que llegan a una dirección que nadie revisa, escritos enviados en el último minuto sin la documentación completa, poderes que no se aportan con el primer escrito o señalamientos que se comunican sin indicar el lugar y la hora.",
      "Acordar desde el principio los destinatarios, el formato de los traslados y el margen con que se envían los escritos elimina la mayoría de estas incidencias. También ayuda revisar periódicamente el estado de los asuntos abiertos, especialmente en ejecuciones largas, para confirmar qué actuaciones están pendientes y quién debe impulsarlas.",
      "Cuando el procurador conoce el asunto y el abogado sabe que puede contar con él, la colaboración se vuelve fluida: cada uno se ocupa de lo suyo y el cliente percibe un servicio coordinado. Esa es la base del trabajo diario con despachos en Valencia capital y en los partidos judiciales de la provincia.",
    ] },
    { p: ["Información general sobre la práctica profesional; no constituye asesoramiento jurídico."] },
  ],
  "procurador-procedimientos-ejecucion": [
    { h: "Títulos ejecutivos", p: [
      "El artículo 517 LEC enumera los títulos que llevan aparejada ejecución: sentencias de condena firmes, laudos, resoluciones que aprueben transacciones o acuerdos, escrituras públicas, pólizas intervenidas, determinados títulos al portador y otras resoluciones a las que la ley reconoce ese carácter. La ejecución de títulos judiciales caduca si no se interpone la demanda dentro de los cinco años siguientes a la firmeza (art. 518 LEC).",
      "Las resoluciones judiciales no pueden ejecutarse hasta transcurridos veinte días desde que sean firmes o notificadas (art. 548 LEC), plazo que permite al condenado cumplir voluntariamente.",
    ] },
    { h: "Demanda ejecutiva y despacho", p: [
      "La ejecución se inicia por demanda (art. 549 LEC), que en el caso de títulos judiciales puede limitarse a la solicitud de que se despache ejecución identificando la resolución. Si concurren los requisitos, el tribunal dicta auto despachando ejecución y el letrado de la Administración de Justicia decreta las medidas ejecutivas concretas.",
    ] },
    { h: "Oposición", p: [
      "El ejecutado puede oponerse en el plazo de diez días desde la notificación del auto (art. 556 LEC para títulos judiciales y 557 LEC para no judiciales), por las causas tasadas que prevé la ley. El procurador traslada de inmediato el escrito de oposición para que el abogado prepare la impugnación.",
    ] },
    { h: "Investigación del patrimonio y embargo", p: [
      "Si el ejecutado no señala bienes, puede requerírsele para que manifieste los que tenga (art. 589 LEC) y solicitarse la investigación judicial de su patrimonio (art. 590 LEC). Los resultados permiten embargar saldos bancarios, salarios dentro de los límites del artículo 607 LEC, devoluciones tributarias, vehículos o inmuebles.",
      "Aquí la constancia del procurador es decisiva: cada resultado negativo debe llevar a una nueva petición, y cada embargo positivo a la gestión de los oficios correspondientes ante bancos, empleadores o registros.",
    ] },
    { h: "Realización de bienes", p: [
      "Los bienes embargados se realizan mediante convenio, entidad especializada o subasta electrónica en el Portal de Subastas del BOE. El procurador sigue cada fase, gestiona los mandamientos y, cuando corresponde, solicita la entrega de cantidades al ejecutante.",
    ] },
    { h: "Qué aporta un seguimiento activo", list: [
      "Impulso continuado: el procedimiento no queda parado esperando una petición.",
      "Información útil para decidir si continuar o reorientar la ejecución.",
      "Gestión diligente de oficios y mandamientos.",
      "Coordinación con el abogado ante cualquier incidente.",
    ] },
    { h: "Errores habituales en las ejecuciones", p: [
      "Una ejecución puede alargarse innecesariamente por motivos que poco tienen que ver con el fondo: peticiones de averiguación patrimonial que no se reiteran, oficios que no se retiran o no se diligencian, embargos acordados que no llegan a comunicarse a la entidad correspondiente o resoluciones de las que nadie toma nota durante semanas.",
      "El seguimiento activo del procurador evita estas paradas. Revisar periódicamente el estado del procedimiento, solicitar nuevas medidas cuando las anteriores resultan negativas y trasladar al abogado información útil para decidir el siguiente paso son tareas sencillas, pero decisivas en el resultado.",
      "También es importante tener en cuenta los plazos de caducidad y prescripción, y la tasación de costas e intereses al final de la ejecución, para que el ejecutante recupere todo lo que le corresponde. Una liquidación bien preparada y una tasación de costas presentada a tiempo marcan la diferencia en el importe final.",
      "En Valencia capital y en los partidos judiciales de la provincia, la experiencia en la gestión de oficios y mandamientos ante cada juzgado permite anticipar los tiempos y avisar al abogado cuando una actuación se retrasa más de lo razonable.",
    ] },
    { p: ["Contenido informativo; cada ejecución debe ser valorada por el abogado que dirige el asunto."] },
  ],
  "como-elegir-procurador": [
    { h: "Por qué la elección importa", p: [
      "El procurador recibe las notificaciones en nombre de la parte (art. 28 LEC) y presenta los escritos que el abogado prepara. Un retraso en el traslado o un error en la presentación puede hacer perder un plazo. Por eso, más allá del precio, conviene valorar cómo trabaja el procurador.",
    ] },
    { h: "Criterios prácticos", list: [
      "Actuación habitual ante los juzgados del partido judicial donde se tramita el asunto.",
      "Rapidez y método en el traslado de notificaciones.",
      "Un interlocutor directo, localizable y que conozca el asunto.",
      "Transparencia sobre el arancel y las provisiones de fondos.",
      "Experiencia en el tipo de procedimiento: ejecuciones, familia, subastas o asuntos bancarios.",
    ] },
    { h: "El precio", p: [
      "Los derechos del procurador se fijan conforme al arancel del Real Decreto 1373/2003, que establece cantidades en función del tipo de procedimiento, de la cuantía y de la actuación concreta, con un límite de 75.000 euros por asunto, proceso o instancia. La normativa permite una variación pactada sobre el arancel, por lo que es razonable pedir un presupuesto antes de encargar el asunto.",
      "Desconfíe de comparaciones basadas solo en una cifra: un presupuesto claro debe distinguir derechos arancelarios, IVA y gastos de terceros, como certificaciones registrales o publicaciones.",
    ] },
    { h: "Conocimiento del partido judicial", p: [
      "Cada partido judicial tiene su organización y sus tiempos. En la provincia de Valencia conviven la Ciudad de la Justicia de la capital con partidos como Gandía, Sagunto, Torrent, Alzira o Xàtiva. Un procurador con actividad en ellos sabe cómo funcionan sus servicios comunes y puede anticipar incidencias.",
    ] },
    { h: "Comunicación con el abogado", p: [
      "La relación del procurador es, ante todo, con el abogado. Pregunte cómo se trasladan las notificaciones, en qué plazo, por qué canal y quién responde ante una urgencia. Las respuestas a estas preguntas dicen más que cualquier presentación comercial.",
    ] },
    { h: "Cuándo no es necesario", p: [
      "No en todos los procedimientos es obligatorio el procurador. El artículo 23.2 LEC recoge excepciones como los juicios verbales de cuantía no superior a 2.000 euros o la petición inicial del monitorio. Aun así, si después hay oposición o el asunto se complica, su intervención puede volverse preceptiva, y conviene tenerlo previsto.",
    ] },
    { h: "Cómo empezar", p: [
      "Basta con indicar el tipo de procedimiento, el partido judicial y la fase en que se encuentra. Con esa información se puede confirmar la disponibilidad, orientar sobre el arancel y acordar la forma de otorgar el poder.",
    ] },
    { h: "Preguntas para hacer antes de encargar un asunto", p: [
      "Antes de confiar un procedimiento a un procurador, el abogado puede plantear algunas preguntas sencillas que permiten valorar su forma de trabajar. ¿En qué plazo se trasladan las notificaciones recibidas? ¿Se indica el plazo que abre cada resolución? ¿Quién atiende cuando surge una urgencia en vacaciones o fuera del horario habitual? ¿Cómo se comunican las provisiones de fondos y los gastos de terceros?",
      "También conviene saber si el procurador actúa habitualmente en el partido judicial concreto y si tiene experiencia en el tipo de procedimiento. No es lo mismo un monitorio que una ejecución hipotecaria con subasta, ni un divorcio de mutuo acuerdo que un concurso de persona natural.",
      "Por último, es útil preguntar por el formato de los traslados. Un despacho con muchos asuntos agradece que cada comunicación incluya su referencia interna, el juzgado, el número de procedimiento, la fecha de notificación y la resolución adjunta. Ese pequeño detalle ahorra tiempo cada día y reduce el riesgo de errores al registrar los plazos.",
      "En Valencia, donde conviven la Ciudad de la Justicia de la capital y numerosos partidos judiciales en la provincia, estas cuestiones prácticas pesan tanto como el arancel. Un procurador que responde con claridad a ellas ofrece una base sólida para una colaboración duradera con el despacho. Y si el asunto exige actuar fuera de la provincia, conviene preguntar también cómo se organiza la coordinación con procuradores colaboradores, para que el despacho mantenga un único interlocutor y un mismo formato de información.",
    ] },
    { p: ["Información general; no constituye asesoramiento jurídico."] },
  ],
  "coordinar-procedimientos-distintos-territorios": [
    { h: "Competencia territorial", p: [
      "La LEC fija reglas de competencia territorial generales (arts. 50 y 51) y especiales (art. 52), como las que atribuyen al juzgado del lugar de la finca los juicios sobre arrendamientos y desahucios. Un mismo cliente puede tener así asuntos en partidos judiciales distintos, y el despacho debe coordinar actuaciones en varios territorios.",
    ] },
    { h: "Auxilio judicial", p: [
      "Cuando un tribunal necesita que se practique una actuación fuera de su circunscripción, solicita el auxilio judicial del órgano correspondiente mediante exhorto (arts. 169 a 177 LEC). La parte interesada puede encargarse de su cumplimentación a través de su procurador, lo que suele acelerar el trámite.",
      "Para ello resulta útil contar con un procurador en el partido judicial que recibe el exhorto: puede seguir su tramitación, aportar lo que haga falta y comunicar el resultado sin demoras.",
    ] },
    { h: "Un único interlocutor", p: [
      "Para el despacho, la mejor organización es tener un interlocutor de referencia que coordine con los procuradores colaboradores en cada territorio y le ofrezca la información con un formato homogéneo. Así el abogado no tiene que adaptarse a métodos distintos en cada asunto.",
      "Desde Valencia, esta coordinación permite atender asuntos en la provincia y, a través de procuradores colaboradores, en otros partidos judiciales según el procedimiento.",
    ] },
    { h: "Qué conviene unificar", list: [
      "Formato de los traslados: resolución, fecha de notificación y plazo.",
      "Canal único de comunicación con el despacho.",
      "Criterio de presentación de escritos y envío de justificantes.",
      "Información sobre provisiones de fondos y gastos de cada asunto.",
    ] },
    { h: "Presentación telemática y plazos", p: [
      "La presentación electrónica de escritos permite que muchas actuaciones se realicen sin desplazamiento. Sin embargo, la representación ante cada órgano y las actuaciones presenciales siguen requiriendo un procurador habilitado para actuar allí. La coordinación sigue siendo necesaria, aunque la tecnología la facilite.",
      "Los plazos procesales se computan conforme a los artículos 130 a 136 LEC, y los días festivos locales pueden variar de un partido judicial a otro. Tener en cuenta el calendario de cada territorio evita errores en el cómputo.",
    ] },
    { h: "Cuándo plantear la coordinación", p: [
      "Lo ideal es al inicio, antes de presentar la demanda o al recibir el primer exhorto. Así se define desde el principio quién actúa en cada sede y cómo circula la información.",
    ] },
    { h: "Un ejemplo práctico", p: [
      "Imaginemos un despacho de Madrid que dirige una reclamación contra un deudor con domicilio en la provincia de Valencia y un inmueble en otro partido judicial. La demanda se presenta en Valencia, pero el embargo del inmueble y algunas diligencias pueden requerir actuaciones en otras sedes, e incluso exhortos a órganos de fuera de la provincia.",
      "Con un interlocutor en Valencia, el despacho envía la demanda, recibe cada notificación con el mismo formato y sabe en todo momento quién está actuando en cada sede. Si es necesario un procurador en otro partido judicial, la coordinación se realiza desde Valencia, sin que el abogado tenga que buscar y gestionar varios profesionales por su cuenta.",
      "Este modelo resulta especialmente útil en ejecuciones, en procedimientos con varios demandados domiciliados en lugares distintos y en asuntos bancarios repetitivos. La información llega ordenada y el despacho mantiene el control del asunto, aunque la tramitación se reparta entre territorios.",
      "La clave es definir desde el inicio el reparto de actuaciones, el canal de comunicación y el formato de los traslados. Con esas bases, la distancia geográfica deja de ser un problema y el despacho puede concentrarse en la dirección técnica del asunto.",
    ] },
    { p: ["Contenido informativo; no constituye asesoramiento jurídico."] },
  ],
};
