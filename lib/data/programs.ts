export interface ProgramData {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  location?: string;
  duration?: string;
  modality?: string;
  requirements: string[];
  enrollmentInfo: {
    description: string;
    availablePeriod?: string;
  };
  stages: {
    title: string;
    description: string;
    icon?: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
  successStories: {
    title: string;
    description: string;
    link?: string;
  }[];
  blogPosts: {
    title: string;
    url: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  sponsors: {
    name: string;
    logo?: string;
  }[];
  gallery: {
    type: 'drive' | 'images';
    url?: string;
    images?: string[];
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const AMBIENTALIA_DATA: ProgramData = {
  title: "Experiencia Ambientalia",
  slug: "ambientalia",
  shortDescription: "Programa de educación ambiental que conecta a jóvenes con sus ecosistemas y biodiversidad, desarrollando habilidades de liderazgo a través de proyectos comunitarios ambientales.",
  fullDescription: "Experiencia Ambientalia es un programa de educación ambiental desarrollado por Fundación Líderes de Ansenuza en conjunto con Manomet Conservation Sciences y la Oficina Ejecutiva de la RHRAP, que se lleva a cabo anualmente desde 2021. El programa busca conectar a jóvenes con sus ecosistemas y biodiversidad, al mismo tiempo que desarrolla en ellos habilidades de liderazgo a través del diseño e implementación de proyectos comunitarios de índole ambiental.",
  location: "El programa nació en el sitio RHRAP Laguna Mar Chiquita, en el interior de Córdoba, Argentina. Sin embargo, además de implementarse allí, se desarrolla en otros sitios importantes para aves playeras, principalmente lagos salados, como en el Monumento Natural Laguna de los Pozuelos en Jujuy y en lagos de Estados Unidos como el Lago Mono, el Gran Lago Salado, el Lago Walker y el Lago Abert. El programa es llevado adelante en cada sitio por socios locales, y puede variar en duración, actividades y enfoque.",
  duration: "8 meses",
  modality: "El programa es de modalidad mixta y multiplataforma. Cuenta con encuentros presenciales, virtuales sincrónicos y asincrónicos, tratando de equilibrar ambas modalidades. Es una oportunidad completamente gratuita para todos los participantes.",
  requirements: [
    "Ser estudiante de secundario ciclo orientado (cuarto, quinto, sexto y séptimo año).",
    "Asistir a escuelas ubicadas en alguna de las siguientes localidades: Miramar de Ansenuza, Balnearia, Marull, La Para, Obispo Trejo, Altos de Chipión, Villa Rosario del Saladillo, Las Arrias, Toro Pujio, La Puerta, Villa Fontana, La Posta, Sebastián Elcano, La Paquita, Morteros, Brinkmann, Seeber, Porteña, Colonia San Pedro o Colonia Vignaud. También se trabaja en La Rinconada.",
    "La inscripción se realiza en grupos: como mínimo 3 estudiantes y una cantidad máxima de 7.",
    "Cada equipo tiene que contar con un docente tutor. Máximo dos titulares."
  ],
  enrollmentInfo: {
    description: "Para anotarte tenés que completar un formulario de inscripción, disponible cada año aproximadamente entre marzo y abril. En él deberán completar los datos de cada integrante del grupo y responder preguntas sobre su idea de proyecto, además de realizar un video.",
    availablePeriod: "Marzo - Abril (anualmente)"
  },
  stages: [
    {
      title: "Capacitaciones para docentes",
      description: "Se brindan espacios de aprendizaje virtual y presencial para acompañar a los docentes en este recorrido y se les brindan herramientas para enseñar sobre la región de Ansenuza.",
      icon: "GraduationCap"
    },
    {
      title: "Clases y desafíos online",
      description: "Clases virtuales de microlearning que guían a los participantes paso a paso en el desarrollo de sus proyectos de investigación, conservación o emprendimiento sostenible, al mismo tiempo que proponen desafíos que fomentan su creatividad y pensamiento crítico.",
      icon: "Monitor"
    },
    {
      title: "Visitas a escuelas",
      description: "Visitas personalizadas del equipo del programa a cada escuela participante, ofreciendo retroalimentación individual a estudiantes y docentes para ayudarlos a avanzar en sus proyectos y superar desafíos específicos.",
      icon: "School"
    },
    {
      title: "Salidas de campo",
      description: "Visitas a áreas naturales de la región que permiten a los participantes observar la biodiversidad local, comprender problemáticas ambientales de forma directa y fortalecer su vínculo con el sitio.",
      icon: "TreePine"
    },
    {
      title: "Eventos internacionales y comunitarios",
      description: "Actividades mensuales que conectan a estudiantes de Mar Chiquita con jóvenes de diferentes países y comunidades, ofreciendo intercambios virtuales, talleres compartidos y acciones colaborativas que construyen una perspectiva más amplia y un sentido de comunidad hemisférica.",
      icon: "Globe"
    },
    {
      title: "Involucramiento comunitario",
      description: "Un Compromiso de difusión promueve la comunicación a la comunidad de los proyectos ambientales realizados, la realización de talleres comunitarios y la creación de alianzas locales.",
      icon: "Users"
    },
    {
      title: "Liderazgo",
      description: "Se brinda seguimiento personalizado a cada participante para poder promover su desarrollo de habilidades blandas.",
      icon: "Award"
    },
    {
      title: "Interacción",
      description: "Se realizan juegos virtuales sobre la región de Ansenuza para generar vinculación entre los participantes y enseñar sobre ecología, conservación, entre otras temáticas.",
      icon: "Gamepad2"
    },
    {
      title: "Feria de proyectos",
      description: "Evento en el que los participantes presentan a la comunidad los proyectos que diseñaron e implementaron durante el programa. ¡Las iniciativas más destacadas reciben increíbles premios!",
      icon: "Trophy"
    },
    {
      title: "Foro de Líderes Ambientales",
      description: "La última actividad del año reúne a los participantes más destacados en una jornada donde participan en capacitaciones intensivas, talleres y charlas con expertos en conservación y desarrollo sostenible.",
      icon: "MessageSquare"
    }
  ],
  stats: [
    {
      label: "Años de experiencia",
      value: "4+"
    },
    {
      label: "Estudiantes y docentes capacitados",
      value: "700+"
    },
    {
      label: "Localidades participantes",
      value: "21+"
    },
    {
      label: "Proyectos comunitarios desarrollados",
      value: "62"
    }
  ],
  successStories: [
    {
      title: "Presente en la creación del Parque Nacional Ansenuza",
      description: "El 30 de junio de 2022, un grupo de estudiantes de Ambientalia tuvo el privilegio de estar presente en el Senado de la Nación durante la histórica sesión en la que se sancionó la ley que declaró a la región como Parque Nacional Ansenuza."
    },
    {
      title: "Primer intercambio juvenil entre lagos salados",
      description: "En 2024, cinco estudiantes y una docente de la región de Mar Chiquita vivieron una experiencia transformadora al viajar a California, Estados Unidos, para participar del primer intercambio juvenil entre lagos salados, una iniciativa sin precedentes que conectó a comunidades jóvenes de dos ecosistemas hermanos: la Laguna Mar Chiquita y el Lago Mono."
    },
    {
      title: "Impacto en políticas públicas locales",
      description: "A lo largo de los últimos años, varios de los proyectos desarrollados por jóvenes en el marco de Experiencia Ambientalia trascendieron las escuelas y tuvieron un impacto concreto en las políticas públicas locales y provinciales. Gracias a su investigación, compromiso y capacidad de incidencia, estudiantes de distintas localidades lograron impulsar ordenanzas municipales que promueven el cuidado del ambiente."
    }
  ],
  blogPosts: [
    {
      title: "Experiencia Ambientalia realiza su primer intercambio internacional a Estados Unidos",
      url: "https://www.lideresdeansenuza.org/2024/07/25/experiencia-ambientalia-realiza-su-primer-intercambio-internacional-a-estados-unidos/"
    },
    {
      title: "Un nuevo intercambio cultural para Experiencia Ambientalia",
      url: "https://www.lideresdeansenuza.org/2024/09/30/un-nuevo-intercambio-cultural-para-experiencia-ambientalia/"
    },
    {
      title: "El gran gesto de VN Global con Experiencia Ambientalia y la localidad de La Rinconada",
      url: "https://www.lideresdeansenuza.org/2024/10/08/el-gran-gesto-de-vn-global-con-experiencia-ambientalia-y-la-localidad-de-la-rinconada/"
    },
    {
      title: "Una jornada inspiradora",
      url: "https://www.lideresdeansenuza.org/2024/11/25/una-jornada-inspiradora/"
    }
  ],
  faqs: [
    {
      question: "¿Puedo tener más de dos profesores como tutores? ¿Tienen que ser de mi colegio?",
      answer: "Se puede tener un docente oficial como mínimo y dos como máximo. Puede haber más profes que acompañen pero serían suplentes y no serían beneficiados por premios del programa. No es necesario que sean de su colegio."
    },
    {
      question: "¿Qué pasa si mis compañeros se dan de baja y solo quedo yo?",
      answer: "En ese caso, en la medida que haya interés de tu parte, se te busca lugar en otra bandada que te reciba para poder continuar en el programa, siempre hay compañeros listos para recibir gente nueva. También se puede finalizar el programa en solitario."
    }
  ],
  sponsors: [
    {
      name: "USDA USFS"
    },
    {
      name: "Epam"
    },
    {
      name: "USFWS"
    }
  ],
  gallery: {
    type: 'drive',
    url: 'https://drive.google.com/drive/folders/1nICN2r6FvOQVpWSZVEaC_McTJkc-ShL1'
  },
  colors: {
    primary: "#10b981",
    secondary: "#059669",
    accent: "#34d399"
  }
};

export const SOMOS_DATA: ProgramData = {
  title: "SOMOS",
  slug: "somos",
  shortDescription: "Programa gratuito de liderazgo en diversidad para jóvenes de entre 15 y 19 años de Argentina que quieran convertirse en líderes de sus comunidades.",
  fullDescription: "SOMOS es un programa gratuito de liderazgo en diversidad, para jóvenes de entre 15 y 19 años de Argentina, que quieran convertirse en líderes de sus comunidades. Durante 2 meses, lxs participantes aprenden sobre diversidad, desarrollan habilidades de liderazgo, y llevan adelante una acción de impacto social que transforme su comunidad. Todo esto a través de talleres con expertxs, mentorías personalizadas, y materiales exclusivos creados especialmente para el programa.",
  location: "SOMOS llega a FLA para abrir espacios de diálogo, debate y aprendizaje colectivo, promoviendo los valores de la organización. Creemos en una sociedad más justa, igualitaria, empática y respetuosa, y sabemos que el cambio empieza en cada unx de nosotrxs.",
  duration: "2 meses",
  modality: "Programa virtual con talleres, mentorías personalizadas y materiales exclusivos.",
  requirements: [
    "Tener entre 15 y 19 años",
    "Ser estudiante de colegio secundario en alguna provincia de Argentina",
    "Tener muchas ganas de aprender sobre diversidad, liderazgo y autoconocimiento",
    "Compromiso de contribuir a una sociedad más justa e inclusiva realizando una acción de impacto en tu comunidad"
  ],
  enrollmentInfo: {
    description: "Para ser parte del programa, deberás completar el formulario de inscripción disponible en nuestra página web.",
    availablePeriod: "Consultar fechas de inscripción"
  },
  stages: [
    {
      title: "Aprendé",
      description: "Talleres de diversidad, manual de desarrollo personal, manual de desarrollo de proyectos y mentorías semanales.",
      icon: "BookOpen"
    },
    {
      title: "Accioná",
      description: "Hora de implementar tu acción de impacto en tu comunidad. Contarás con material exclusivo y el apoyo del staff durante todo el proceso.",
      icon: "Rocket"
    },
    {
      title: "Cierre",
      description: "Compartimos las acciones realizadas y ya pueden ser parte de la comunidad de FLA.",
      icon: "PartyPopper"
    }
  ],
  stats: [
    {
      label: "Ediciones realizadas",
      value: "3"
    },
    {
      label: "Participantes",
      value: "70+"
    },
    {
      label: "Personas impactadas",
      value: "4000+"
    }
  ],
  successStories: [
    {
      title: "Lucha contra el suicidio adolescente",
      description: "Esta decidida a no abandonarlos: la lucha de una adolescente en la provincia con más suicidios del país.",
      link: "https://www.lanacion.com.ar/comunidad/esta-decidida-a-no-abandonarlos-la-lucha-de-una-adolescente-en-la-provincia-con-mas-suicidios-del-nid29042025/"
    }
  ],
  blogPosts: [
    {
      title: "Descubrí lo que fue la Cumbre de SOMOS 2024 en Tucumán",
      url: "https://www.lideresdeansenuza.org/2024/12/17/descubri-lo-que-fue-la-cumbre-de-somos-2024-en-tucuman/"
    },
    {
      title: "Descubrí lo que fue el Diversathon",
      url: "https://www.lideresdeansenuza.org/2024/11/23/descubri-lo-que-fue-el-diversathon/"
    }
  ],
  faqs: [
    {
      question: "¿Hay límite de edad?",
      answer: "Te podés anotar si tenés entre 15 a 19 años y sos estudiante de colegio secundario en alguna provincia de Argentina."
    },
    {
      question: "¿Hay algún costo monetario?",
      answer: "NINGUNO. El programa es totalmente gratuito."
    },
    {
      question: "¿Hay algún requisito que cumplir para anotarme?",
      answer: "Tener muchas ganas de aprender sobre diversidad, liderazgo y autoconocimiento, y de contribuir a una sociedad más justa e inclusiva realizando una acción de impacto en tu comunidad."
    },
    {
      question: "¿Qué temáticas de diversidad se trabajan en el programa?",
      answer: "Diversidad cultural, corporal, funcional, de género, sexual, religiosa, político partidaria."
    },
    {
      question: "¿Es necesario realizar una acción de impacto para egresar?",
      answer: "¡Sí! Es requisito fundamental realizar una acción de impacto para finalizar el programa. Para eso, contarás con material exclusivo y el apoyo del staff durante todo el proceso."
    },
    {
      question: "¿Cómo me anoto?",
      answer: "Completando el formulario de inscripción que encontrarás en nuestra página web."
    }
  ],
  sponsors: [],
  gallery: {
    type: 'images',
    images: []
  },
  colors: {
    primary: "#8b5cf6",
    secondary: "#7c3aed",
    accent: "#a78bfa"
  }
};

