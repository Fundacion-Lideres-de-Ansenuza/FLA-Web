export interface ProgramData {
  title: string;
  slug: string;
  status: 'active' | 'historical';
  shortDescription: string;
  fullDescription: string;
  location?: string;
  duration?: string;
  modality?: string;
  requirements: string[];
  enrollmentInfo: {
    description: string;
    registrationLabel?: string;
    registrationUrl?: string;
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
  identity?: {
    badge: string;
    heading: string;
    description: string;
  };
  year?: string;
}

export const AMBIENTALIA_DATA: ProgramData = {
  title: "Experiencia Ambientalia",
  slug: "ambientalia",
  status: 'active',
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
      icon: "Binoculars"
    },
    {
      title: "Eventos internacionales y comunitarios",
      description: "Actividades mensuales que conectan a estudiantes de Mar Chiquita con jóvenes de diferentes países y comunidades, ofreciendo intercambios virtuales, talleres compartidos y acciones colaborativas que construyen una perspectiva más amplia y un sentido de comunidad hemisférica.",
      icon: "Globe"
    },
    {
      title: "Involucramiento comunitario",
      description: "Un Compromiso de difusión promueve la comunicación a la comunidad de los proyectos ambientales realizados, la realización de talleres comunitarios y la creación de alianzas locales.",
      icon: "Megaphone"
    },
    {
      title: "Liderazgo",
      description: "Se brinda seguimiento personalizado a cada participante para poder promover su desarrollo de habilidades blandas.",
      icon: "Compass"
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
      icon: "Presentation"
    }
  ],
  stats: [
    {
      label: "Años de experiencia",
      value: "5+"
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
    url: 'https://drive.google.com/drive/folders/1nICN2r6FvOQVpWSZVEaC_McTJkc-ShL1',
    images: [
      "/images/programs_sliders/ambientalia/amistad_foro.JPG",
      "/images/programs_sliders/ambientalia/cierre_foro_lideres.jpg",
      "/images/programs_sliders/ambientalia/felices.jpg"
    ]
  },
  colors: {
    primary: "#027353",
    secondary: "#568c30",
    accent: "#f2bf27"
  },
  identity: {
    badge: "Identidad Ambientalia",
    heading: "Una experiencia con más naturaleza, territorio e impacto visible",
    description:
      "Reforzamos esta página con una atmósfera más verde para que respire mejor la esencia de Ambientalia: biodiversidad, liderazgo joven, comunidad y acción ambiental concreta."
  }
};

export const SOMOS_DATA: ProgramData = {
  title: "SOMOS",
  slug: "somos",
  status: 'active',
  shortDescription: "Programa gratuito de liderazgo en diversidad para jóvenes de entre 15 y 19 años de Argentina que quieran convertirse en líderes de sus comunidades.",
  fullDescription: "SOMOS es un programa gratuito de liderazgo en diversidad, para jóvenes de entre 15 y 19 años de Argentina, que quieran convertirse en líderes de sus comunidades. Durante 11 semanas, lxs participantes aprenden sobre diversidad, desarrollan habilidades de liderazgo, y llevan adelante una acción de impacto social que transforme su comunidad. Todo esto a través de talleres con expertxs, mentorías personalizadas, y materiales exclusivos creados especialmente para el programa.",
  location: "SOMOS llega a FLA para abrir espacios de diálogo, debate y aprendizaje colectivo, promoviendo los valores de la organización. Creemos en una sociedad más justa, igualitaria, empática y respetuosa, y sabemos que el cambio empieza en cada unx de nosotrxs.",
  duration: "11 semanas",
  modality: "Programa virtual con talleres, mentorías personalizadas y materiales exclusivos.",
  requirements: [
    "Tener entre 15 y 19 años",
    "Ser estudiante de colegio secundario en alguna provincia de Argentina",
    "Tener muchas ganas de aprender sobre diversidad, liderazgo y autoconocimiento",
    "Compromiso de contribuir a una sociedad más justa e inclusiva realizando una acción de impacto en tu comunidad"
  ],
  enrollmentInfo: {
    description: "Para ser parte del programa, completá el siguiente formulario:",
    registrationLabel: "Form de inscripción Somos 2026",
    registrationUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc6lL0QlYa_5SUw4y_QO4LTU_0G3lNdWFbnVcVxll_OWSWDjg/viewform?usp=header",
    availablePeriod: "Inscripción 2026"
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
      value: "4"
    },
    {
      label: "Participantes",
      value: "90+"
    },
    {
      label: "Personas impactadas",
      value: "6000+"
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
    },
    {
      question: "¿Conocé más acerca de SOMOS?",
      answer: "Mirá este video para conocer más sobre el programa: <a href=\"https://www.youtube.com/watch?v=Lxsl_lIZ3Ow\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-purple-600 hover:text-purple-800 underline\">Ver video de SOMOS</a>"
    }
  ],
  sponsors: [],
  gallery: {
    type: 'images',
    images: [
      "/images/programs_sliders/somos/1.jpg",
      "/images/programs_sliders/somos/2.jpg",
      "/images/programs_sliders/somos/3.jpg",
      "/images/programs_sliders/somos/4.jpg",
      "/images/programs_sliders/somos/5.jpg"
    ]
  },
  colors: {
    primary: "#2c04bf",
    secondary: "#f2e313",
    accent: "#f2a516"
  }
};

export const POTENCIATE_DATA: ProgramData = {
  title: "Potenciate",
  slug: "potenciate",
  status: 'historical',
  year: "2021",
  shortDescription: "Programa de mentoría disruptivo de doce semanas, diseñado para inspirar a jóvenes argentinos a descubrir su pasión y transformarse en agentes de cambio capaces de impulsar proyectos de impacto social.",
  fullDescription: "Potenciate fue un programa de mentoría disruptivo de doce semanas, diseñado para inspirar a jóvenes argentinos a descubrir su pasión y transformarse en agentes de cambio capaces de impulsar proyectos de impacto social.",
  location: "El programa se expandió a 11 provincias de Argentina (con foco en Catamarca y la zona centro del país).",
  duration: "12 semanas",
  modality: "Programa virtual con mentoría individual semanal combinada con dinámicas, desafíos y juegos, junto a encuentros grupales con especialistas y talleres oficiales.",
  requirements: [
    "Aprendices: jóvenes de 15 a 17 años interesados en el autoconocimiento y la gestión de proyectos",
    "Mentores: jóvenes agentes de cambio con experiencia comprobable en voluntariado y gestión de proyectos de impacto social"
  ],
  enrollmentInfo: {
    description: "Este programa fue realizado en 2021 y actualmente no se encuentra disponible para inscripción.",
    availablePeriod: "Programa finalizado"
  },
  stages: [
    {
      title: "CONÓCETE",
      description: "Etapa de autoconocimiento donde los participantes exploraron sus fortalezas, valores y pasiones.",
      icon: "HeartHandshake"
    },
    {
      title: "INSPÍRATE",
      description: "Networking con líderes y especialistas que inspiraron a los participantes a través de sus experiencias.",
      icon: "Sparkles"
    },
    {
      title: "ENTRÁ EN ACCIÓN",
      description: "Ejecución de proyectos de impacto social con el acompañamiento de mentores.",
      icon: "Rocket"
    }
  ],
  stats: [
    {
      label: "Provincias alcanzadas",
      value: "11"
    },
    {
      label: "Egresados",
      value: "35"
    },
    {
      label: "Ediciones realizadas",
      value: "1"
    }
  ],
  successStories: [
    {
      title: "Plataforma de inspiración y networking",
      description: "El programa funcionó como plataforma de inspiración y networking para que los jóvenes pudieran tomar acción e impulsar proyectos de impacto social. El 88% de los participantes consideró que el manual de ejercicios fue una de las herramientas más útiles."
    }
  ],
  blogPosts: [],
  faqs: [],
  sponsors: [
    {
      name: "Embajada de Estados Unidos en Argentina"
    },
    {
      name: "Global Changemakers"
    }
  ],
  gallery: {
    type: 'images',
    images: [
      "/images/programs_sliders/potenciate/1.jpg",
      "/images/programs_sliders/potenciate/2.jpg",
    ]
  },
  colors: {
    primary: "#52b5a2",
    secondary: "#e67f33",
    accent: "#104271"
  }
};

export const FUTURAS_DATA: ProgramData = {
  title: "FUTURAS",
  slug: "futuras",
  status: 'historical',
  year: "2017-2024",
  shortDescription: "Programa gratuito e innovador de liderazgo, mentoría y empoderamiento femenino diseñado para que mujeres jóvenes argentinas desarrollaran su autoconocimiento y adquirieran herramientas de gestión de proyectos para resolver problemas comunitarios.",
  fullDescription: "FUTURAS fue un programa gratuito e innovador de liderazgo, mentoría y empoderamiento femenino diseñado para que mujeres jóvenes argentinas desarrollaran su autoconocimiento y adquirieran herramientas de gestión de proyectos para resolver problemas comunitarios. El programa, con siete ediciones realizadas, tuvo la visión de formar líderes comprometidas con sus comunidades y conscientes del liderazgo femenino.",
  location: "Incluía la Cumbre Presencial de Mujeres Líderes en Miramar de Ansenuza, Córdoba, donde las participantes viajaban para conocerse, generar una red de agentes de cambio y obtener inspiración directa de mujeres referentes y líderes.",
  duration: "Variable según edición",
  modality: "Modalidad mixta (virtual y presencial) con mentoría individual en duplas y talleres especializados con capacitaciones asincrónicas.",
  requirements: [
    "Aprendices: Mujeres de 15 a 19 años de cualquier provincia de Argentina",
    "Mentoras: Mujeres mayores de 20 años con experiencia en liderazgo o mentoría"
  ],
  enrollmentInfo: {
    description: "Este programa fue realizado entre 2017 y 2024 y actualmente no se encuentra disponible para inscripción.",
    availablePeriod: "Programa finalizado"
  },
  stages: [
    {
      title: "Mentoría Individual",
      description: "Acompañamiento personalizado en duplas mentora-aprendiz para el desarrollo de habilidades de liderazgo.",
      icon: "HeartHandshake"
    },
    {
      title: "Talleres Especializados",
      description: "Capacitaciones en gestión de proyectos, liderazgo y networking.",
      icon: "PencilRuler"
    },
    {
      title: "Cumbre Presencial",
      description: "Encuentro presencial de mujeres líderes en Miramar de Ansenuza, Córdoba.",
      icon: "Landmark"
    }
  ],
  stats: [
    {
      label: "Ediciones realizadas",
      value: "7"
    },
    {
      label: "Participantes egresadas",
      value: "248"
    },
    {
      label: "Provincias participantes",
      value: "18"
    },
    {
      label: "Oradores",
      value: "112"
    }
  ],
  successStories: [
    {
      title: "Amplia representatividad nacional",
      description: "Participaron jóvenes de 18 distintas provincias de la República Argentina, logrando una amplia representatividad nacional y formando una red de mujeres líderes comprometidas con sus comunidades."
    }
  ],
  blogPosts: [],
  faqs: [],
  sponsors: [],
  gallery: {
    type: 'images',
    images: [
      "/images/programs_sliders/futuras/1.jpg",
      "/images/programs_sliders/futuras/2.jpg",
      "/images/programs_sliders/futuras/3.jpg",
    ]
  },
  colors: {
    primary: "#010040",
    secondary: "#2c04bf",
    accent: "#eac9f4"
  }
};

export const IMPULSATEC_DATA: ProgramData = {
  title: "ImpulsaTEC",
  slug: "impulsatec",
  status: 'historical',
  year: "2024",
  shortDescription: "Programa educativo federal de capacitación y mentoría diseñado para empoderar a jóvenes del interior de Argentina con herramientas tecnológicas y habilidades blandas para potenciar sus proyectos de impacto social.",
  fullDescription: "ImpulsaTEC fue un programa educativo federal de capacitación y mentoría diseñado para empoderar a jóvenes (15 a 24 años) del interior de Argentina. El objetivo central fue brindarles herramientas tecnológicas y habilidades blandas para potenciar sus proyectos de impacto social. El programa buscó construir una red de jóvenes comprometidos que utilizaran las nuevas tecnologías como motor de cambio positivo en sus comunidades.",
  location: "Federal, dirigido a jóvenes del interior de Argentina",
  duration: "Variable",
  modality: "Programa virtual con capacitaciones abiertas y mentoría quincenal, con experiencia presencial final en Buenos Aires.",
  requirements: [
    "Tener entre 15 y 24 años",
    "Ser del interior de Argentina",
    "Tener un proyecto de impacto social o interés en desarrollarlo"
  ],
  enrollmentInfo: {
    description: "Este programa fue realizado en 2024 y actualmente no se encuentra disponible para inscripción.",
    availablePeriod: "Programa finalizado"
  },
  stages: [
    {
      title: "Capacitaciones Virtuales",
      description: "7 talleres especializados sobre Inteligencia Artificial, Metodologías Ágiles, UX, Liderazgo y Networking.",
      icon: "Monitor"
    },
    {
      title: "Mentoría con EY GDS",
      description: "Acompañamiento quincenal de mentores profesionales de EY GDS Argentina.",
      icon: "Briefcase"
    },
    {
      title: "Experiencia Presencial",
      description: "Los 15 participantes destacados visitaron las oficinas de EY GDS en Buenos Aires y participaron en actividades culturales y de networking.",
      icon: "Building2"
    }
  ],
  stats: [
    {
      label: "Jóvenes participantes",
      value: "500+"
    },
    {
      label: "Premiados",
      value: "15"
    },
    {
      label: "Ediciones realizadas",
      value: "1"
    }
  ],
  successStories: [
    {
      title: "Alianza estratégica con EY GDS Argentina",
      description: "El programa se desarrolló en alianza con EY GDS, cuyos profesionales especializados actuaron como mentores y reforzaron el vínculo entre el sector privado y el compromiso social juvenil."
    },
    {
      title: "Reconocimiento a la innovación",
      description: "15 jóvenes fueron premiados por la innovación y el compromiso de sus proyectos, recibiendo kits tecnológicos y oportunidades de financiamiento."
    }
  ],
  blogPosts: [],
  faqs: [],
  sponsors: [
    {
      name: "EY GDS Argentina"
    }
  ],
  gallery: {
    type: 'images',
    images: [
      "/images/programs_sliders/futuras/1.jpg",
      "/images/programs_sliders/futuras/2.jpg",
      "/images/programs_sliders/futuras/3.jpg"
    ]
  },
  colors: {
    primary: "#0ac1f7",
    secondary: "#065072",
    accent: "#14733e"
  }
};

export const CIENCIA_FUERA_DE_LA_CAJA_DATA: ProgramData = {
  title: "Ciencia Fuera de la Caja",
  slug: "ciencia-fuera-de-la-caja",
  status: 'historical',
  year: "2020",
  shortDescription: "Programa educativo y concurso científico virtual de alto impacto para desarrollar el pensamiento científico, la creatividad y el pensamiento lateral en jóvenes argentinos.",
  fullDescription: "Ciencia Fuera de la Caja fue un programa educativo y concurso científico virtual de alto impacto, impulsado por la Embajada de los Estados Unidos en Argentina. El objetivo fue desarrollar el pensamiento científico, la creatividad y el pensamiento lateral en jóvenes argentinos, utilizando retos de diversas ramas de la ciencia.",
  location: "Nacional, con participantes de todo el país divididos en regiones",
  duration: "Variable",
  modality: "Concurso virtual con desafíos prácticos y experiencia presencial final para los ganadores.",
  requirements: [
    "Ser estudiante de nivel secundario",
    "Tener interés en las ciencias",
    "Completar desafíos virtuales semanales"
  ],
  enrollmentInfo: {
    description: "Este programa fue realizado en 2020 y actualmente no se encuentra disponible para inscripción.",
    availablePeriod: "Programa finalizado"
  },
  stages: [
    {
      title: "Desafíos Virtuales",
      description: "Retos virtuales prácticos con un promedio del 90% de efectividad en la enseñanza de conocimientos clave.",
      icon: "Lightbulb"
    },
    {
      title: "Videollamadas con Científicos",
      description: "Encuentros con científicos destacados de Argentina como Laura Frulla, Carlos Sosa y Jerónimo Batista.",
      icon: "Video"
    },
    {
      title: "Foros Creativos",
      description: "Desarrollo del pensamiento lateral a través de foros creativos con un promedio de 73.4 entradas por semana.",
      icon: "MessagesSquare"
    },
    {
      title: "Premio Inmersivo",
      description: "Los 5 ganadores viajaron a La Cumbrecita, Córdoba, para una experiencia de cierre presencial.",
      icon: "Award"
    }
  ],
  stats: [
    {
      label: "Participantes inscritos",
      value: "234"
    },
    {
      label: "Participación femenina",
      value: "65%"
    },
    {
      label: "Nuevos en actividades científicas",
      value: "44%"
    },
    {
      label: "Recomendarían el programa",
      value: "83%"
    }
  ],
  successStories: [
    {
      title: "Metodología comprobada",
      description: "El programa alcanzó un promedio del 90% de participantes que adquirió los conocimientos centrales de cada desafío."
    },
    {
      title: "Comunidad y networking",
      description: "El 69% de los participantes generó un vínculo o amistad con otro participante, creando una comunidad científica juvenil."
    },
    {
      title: "Alto impacto educativo",
      description: "El ciclo de conferencias con científicos generó más de 139 horas de reproducción."
    }
  ],
  blogPosts: [],
  faqs: [],
  sponsors: [
    {
      name: "Embajada de Estados Unidos en Argentina"
    }
  ],
  gallery: {
    type: 'images',
    images: [
      "public/images/programs_sliders/lideres/1.jpg",
      "/images/programs_sliders/lideres/2.jpg"
    ]
  },
  colors: {
    primary: "#06b6d4",
    secondary: "#0891b2",
    accent: "#22d3ee"
  }
};

export const DECIDIR_CON_CIENCIA_DATA: ProgramData = {
  title: "Decidir con Ciencia",
  slug: "decidir-con-ciencia",
  status: 'active',
  year: "2026",
  shortDescription: "Programa educativo para escuelas secundarias que fortalece el pensamiento científico para analizar información, evaluar evidencias y tomar decisiones fundamentadas.",
  fullDescription: "Decidir con ciencia es un programa educativo dirigido a instituciones de nivel secundario. La propuesta busca fortalecer habilidades de pensamiento científico que permitan analizar información, evaluar evidencias, considerar distintas alternativas y tomar decisiones fundamentadas frente a desafíos reales. A través de la metodología Thinking-Based Learning (TBL) y un enfoque STEM, los estudiantes trabajan de manera colaborativa en la construcción de propuestas de solución, mientras desarrollan herramientas que pueden aplicar en diferentes contextos de aprendizaje y en su vida cotidiana. El programa también acompaña a los equipos docentes, brindándoles estrategias y recursos para favorecer el desarrollo de estas habilidades en sus prácticas de enseñanza. En un mundo donde las y los jóvenes enfrentan desafíos cada vez más complejos, aprender a tomar decisiones informadas, analizar evidencias y pensar críticamente se vuelve una habilidad fundamental para la vida: no alcanza sólo con tener información, sino saber qué hacer con ella.",
  location: "Instituciones educativas de Córdoba",
  duration: "Septiembre y octubre de 2026",
  modality: "Jornadas presenciales en la institución educativa, con instancia virtual inicial para docentes.",
  requirements: [
    "Instituciones educativas de nivel secundario, urbanas o rurales, de gestión estatal o privada",
    "Estudiantes de entre 14 y 20 años",
    "En esta primera edición, se priorizan instituciones de Córdoba que trabajen en contextos de vulnerabilidad, estén en zonas rurales o de difícil acceso, no cuenten con formación vinculada a competencias científicas o no trabajen habitualmente la toma de decisiones como herramienta de pensamiento científico",
    "La inscripción se realiza por curso completo"
  ],
  enrollmentInfo: {
    description: "La postulación se realiza a través del formulario de inscripción del programa, donde se completan datos de la institución educativa, el docente referente y las motivaciones a participar. La inscripción no implica la incorporación automática: las instituciones serán seleccionadas según los criterios establecidos en las bases."
  },
  stages: [
    {
      title: "Jornada de Sensibilización docente virtual",
      description: "Los docentes referentes conocerán la propuesta, la metodología y las herramientas para acompañar a sus estudiantes.",
      icon: "Video"
    },
    {
      title: "Primer encuentro presencial",
      description: "Se presenta un desafío real y los estudiantes incorporan herramientas de pensamiento para comenzar a abordarlo.",
      icon: "Lightbulb"
    },
    {
      title: "Trabajo entre encuentros",
      description: "El curso continúa trabajando con el acompañamiento del docente referente, profundizando el análisis y desarrollando una propuesta de solución.",
      icon: "Microscope"
    },
    {
      title: "Segundo encuentro presencial",
      description: "Los equipos presentan sus soluciones y comparten el proceso recorrido, las evidencias utilizadas y las decisiones tomadas.",
      icon: "Presentation"
    }
  ],
  stats: [
    {
      label: "Encuentros presenciales por curso",
      value: "2"
    },
    {
      label: "Costo para las instituciones",
      value: "$0"
    },
    {
      label: "Experiencia en Miramar de Ansenuza sorteada",
      value: "1"
    }
  ],
  successStories: [
    {
      title: "Metodología con respaldo",
      description: "Trabajo basado en Thinking-Based Learning (TBL) y enfoque STEM, con herramientas aplicables en distintos contextos de aprendizaje."
    },
    {
      title: "Acompañamiento integral",
      description: "Implementación completa de la propuesta con acompañamiento del equipo de la Fundación y materiales para todas las actividades."
    },
    {
      title: "Kit educativo y certificación",
      description: "Bibliografía, fichas de trabajo, materiales experimentales y lúdicos, más certificación para docentes y estudiantes."
    }
  ],
  blogPosts: [],
  faqs: [
    {
      question: "¿La participación tiene costo?",
      answer: "No. La participación es totalmente gratuita para las instituciones seleccionadas."
    },
    {
      question: "¿Se puede inscribir un grupo de estudiantes?",
      answer: "No. La inscripción se realiza por curso completo, ya que la propuesta está diseñada para trabajar con el grupo en su conjunto."
    },
    {
      question: "¿El docente referente tiene que ser de Ciencias Naturales?",
      answer: "No. Puede ser cualquier docente interesado/a en la propuesta y comprometido/a con acompañar al curso durante todo el recorrido."
    }
  ],
  sponsors: [
    {
      name: "Fondo STEM de Latimpacto, impulsado por Lenovo y BHP Foundation"
    }
  ],
  gallery: {
    type: 'images',
    images: []
  },
  colors: {
    primary: "#6a29b6",
    secondary: "#fd7a02",
    accent: "#3ec5a1"
  }
};

export const AVENTURA_MATEMATICA_DATA: ProgramData = {
  title: "Aventura Matemágica",
  slug: "aventura-matematica",
  status: 'historical',
  year: "2021",
  shortDescription: "Iniciativa completamente en línea dirigida a jóvenes de todo el país que transformó la educación científica tradicional en un concurso virtual inmersivo combinando matemática y creatividad.",
  fullDescription: "Aventura Matemágica fue una iniciativa completamente en línea y de inscripción libre dirigida a jóvenes de todo el país. El programa consistió en desafíos semanales que combinaron matemática y creatividad, complementados con encuentros ocasionales (simposios) con científicos y matemáticos invitados.",
  location: "Nacional, con participantes divididos en cinco regiones geográficas",
  duration: "Variable (8 desafíos + final)",
  modality: "Concurso virtual inmersivo con aprendizaje lúdico. Se presentaron conceptos de matemática en mundos de ficción conocidos como Harry Potter y Alicia en el país de las maravillas.",
  requirements: [
    "Ser estudiante de nivel secundario",
    "Tener interés en matemática y creatividad",
    "Completar desafíos semanales en diversos formatos (videos, historietas, escritos)"
  ],
  enrollmentInfo: {
    description: "Este programa fue realizado en 2021 y actualmente no se encuentra disponible para inscripción.",
    availablePeriod: "Programa finalizado"
  },
  stages: [
    {
      title: "Etapa 1: Desafíos Creativos",
      description: "Desafíos semanales presentados en mundos de ficción, evaluando creatividad en las respuestas.",
      icon: "Wand2"
    },
    {
      title: "Etapa 2: Matemagos",
      description: "25 semifinalistas recibieron una caja sorpresa con materiales y merchandising para desafíos especiales.",
      icon: "Gift"
    },
    {
      title: "Gran Final",
      description: "5 finalistas (uno por región) compitieron por premios que incluían computadora, kits tecnológicos y juegos de mesa.",
      icon: "Trophy"
    }
  ],
  stats: [
    {
      label: "Participantes inscritos",
      value: "300"
    },
    {
      label: "Semifinalistas",
      value: "25"
    },
    {
      label: "Finalistas",
      value: "5"
    },
    {
      label: "Desafíos realizados",
      value: "8"
    }
  ],
  successStories: [
    {
      title: "Aprendizaje lúdico innovador",
      description: "El programa destacó por transformar la educación científica tradicional en una experiencia inmersiva y altamente creativa, haciendo el contenido matemático interactivo y accesible."
    },
    {
      title: "Elemento sorpresa",
      description: "La caja sorpresa enviada a los semifinalistas garantizó un compromiso continuo y emocionante, promoviendo el trabajo científico tanto individual como colaborativo."
    }
  ],
  blogPosts: [],
  faqs: [],
  sponsors: [],
  gallery: {
    type: 'images',
    images: []
  },
  colors: {
    primary: "#a855f7",
    secondary: "#9333ea",
    accent: "#c084fc"
  }
};

export const LIDERES_DATA: ProgramData = {
  title: "Líderes",
  slug: "lideres",
  status: 'active',
  shortDescription: "Programa de Fundación Líderes de Ansenuza encargado de reunir, impulsar, acompañar y reconocer a todas aquellas personas que luego de haber transitado por al menos un programa de la fundación quieran seguir potenciando sus habilidades para convertirse en líderes de sus comunidades.",
  fullDescription: "Líderes es el programa de Fundación Líderes de Ansenuza encargado de reunir, impulsar, acompañar y reconocer a todas aquellas personas que luego de haber transitado por al menos un programa de la fundación quieran seguir potenciando sus habilidades para convertirse en líderes de sus comunidades, a través de la implementación de nuevos programas exclusivos para su comunidad. En Líderes nos enfocamos en acompañar desde el compromiso sabiendo que hay personas maravillosas en nuestra comunidad que pueden lograr cosas inimaginables si se las une con las oportunidades correctas. Seguimos apostando por los jóvenes que alguna vez pasaron por la fundación, impulsamos el continuo desarrollo de su liderazgo y generamos un impacto post programa.",
  location: "Nacional, dirigido a ex-participantes de programas de FLA",
  duration: "Continuo",
  modality: "Comunidad activa con talleres, capacitaciones, acompañamiento personalizado, encuentros presenciales y mix de oportunidades quincenal.",
  requirements: [
    "Haber participado en al menos un programa realizado por la Fundación Líderes de Ansenuza"
  ],
  enrollmentInfo: {
    description: "Una vez que egresaron del programa deben completar la solicitud de ingreso a la comunidad y dependiendo del programa el registro de proyectos. Para ello debes solicitarlo enviando un mail a comunidad@lideresdeansenuza.org y te contactaremos para indicarte los pasos a seguir.",
    availablePeriod: "Inscripción continua"
  },
  stages: [
    {
      title: "Talleres y capacitaciones",
      description: "Durante el año, desde Líderes se proponen diferentes iniciativas como talleres o capacitaciones para continuar formándose en habilidades clave para el liderazgo.",
      icon: "GraduationCap"
    },
    {
      title: "Acompañamiento personalizado",
      description: "Acompañamiento personalizado en la continuidad de tus proyectos para impulsar el desarrollo continuo de tu liderazgo.",
      icon: "HandHeart"
    },
    {
      title: "Encuentros presenciales",
      description: "Se realizan encuentros presenciales en provincias, para que ex-participantes puedan conocerse y compartir experiencias.",
      icon: "MapPin"
    },
    {
      title: "Mix de oportunidades",
      description: "Cada 15 días se comparten oportunidades de convocatorias externas e internas dentro de la iniciativa \"mix de oportunidades\" con el objetivo de que puedan continuar formándose.",
      icon: "Rocket"
    }
  ],
  stats: [],
  successStories: [
    {
      title: "Milagros Tacacho",
      description: "La verdad, estoy sumamente agradecida con el staff de Líderes y FLA en general, porque gracias a ustedes pude comprender mejor lo que me gusta y las iniciativas que puedo tomar o crear. Me hace muy feliz estar conectada conmigo misma y poder mejorar cada día con nuevas herramientas. ¡Sigan compartiendo oportunidades y sonrisas!",
      link: "https://www.linkedin.com/posts/fundaci%C3%B3n-l%C3%ADderes-de-ansenuza_l%C3%ADderes-activity-7330652674113060865-Cj5Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADca_hwBU7Nri-goKb9Z9UJBItH8_u7ihkc"
    },
    {
      title: "Guillermina Rieznik",
      description: "Aprovechar el espacio para decir que me encanta toda la magia que transmiten con esa pasión que le ponen a todo. Son un staff hermoso 💖💖.",
      link: "https://www.linkedin.com/posts/fundaci%C3%B3n-l%C3%ADderes-de-ansenuza_l%C3%ADderes-activity-7330652674113060865-Cj5Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADca_hwBU7Nri-goKb9Z9UJBItH8_u7ihkc"
    },
    {
      title: "Marilyn Mercado",
      description: "Felicito a los del Staff por todo lo q hacen, he aprovechado muchas oportunidades❤❤",
      link: "https://www.linkedin.com/posts/fundaci%C3%B3n-l%C3%ADderes-de-ansenuza_l%C3%ADderes-activity-7330652674113060865-Cj5Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADca_hwBU7Nri-goKb9Z9UJBItH8_u7ihkc"
    }
  ],
  blogPosts: [
    {
      title: "Mateadas y Líderes: un encuentro de inspiración y conexiones",
      url: "https://www.lideresdeansenuza.org/2024/10/23/mateadas-y-lideres-un-encuentro-de-inspiracion-y-conexiones/"
    },
    {
      title: "Reviviendo momentos inolvidables: lo mejor de la Cumbre Presencial de Líderes, el reencuentro",
      url: "https://www.lideresdeansenuza.org/2023/03/24/reviviendo-momentos-inolvidables-lo-mejor-de-la-cumbre-presencial-de-lideres-el-reencuentro/"
    },
    {
      title: "Un viaje diplomático",
      url: "https://www.lideresdeansenuza.org/2023/03/22/un-viaje-diplomatico/"
    }
  ],
  faqs: [
    {
      question: "¿Qué función tiene cada grupo de WhatsApp de la comunidad?",
      answer: "Comunidad de Líderes FLA: grupo abierto de interacción. Info FLA: grupo cerrado, donde se comparte información institucional. Mix de oportunidades: grupo cerrado, donde se comparten convocatorias internas y externas."
    },
    {
      question: "¿Hasta qué edad puedo ser parte de la comunidad?",
      answer: "No hay edad límite para ser parte de la comunidad de Líderes."
    },
    {
      question: "Si participé de FLA hace muchos años, ¿Puedo ingresar ahora a la comunidad?",
      answer: "¡Sí, podés ser parte de Líderes! Mandanos un mail con tu nombre y programa que fuiste parte a comunidad@lideresdeansenuza.org para contarte los pasos a seguir."
    },
    {
      question: "Si fui mentor, orador, profesor de algún programa de FLA ¿Puedo ser parte de la comunidad?",
      answer: "¡Sí, podés ser parte de Líderes! Mandanos un mail con tu nombre y programa que fuiste parte a comunidad@lideresdeansenuza.org para contarte los pasos a seguir."
    }
  ],
  sponsors: [
    {
      name: "EY GDS Argentina"
    }
  ],
  gallery: {
    type: 'images',
    images: []
  },
  colors: {
    primary: "#8f130d",
    secondary: "#f35e5f",
    accent: "#f88a89"
  }
};

export const ALL_PROGRAMS: ProgramData[] = [
  AMBIENTALIA_DATA,
  SOMOS_DATA,
  POTENCIATE_DATA,
  FUTURAS_DATA,
  IMPULSATEC_DATA,
  CIENCIA_FUERA_DE_LA_CAJA_DATA,
  AVENTURA_MATEMATICA_DATA,
  LIDERES_DATA,
  DECIDIR_CON_CIENCIA_DATA
];

export const ACTIVE_PROGRAMS: ProgramData[] = ALL_PROGRAMS.filter(p => p.status === 'active');
export const HISTORICAL_PROGRAMS: ProgramData[] = ALL_PROGRAMS.filter(p => p.status === 'historical');
