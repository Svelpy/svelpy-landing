export type IconName =
  | "code"
  | "saas"
  | "cart"
  | "server"
  | "refresh"
  | "support"
  | "quality"
  | "speed"
  | "transparency";

export interface CompanyInfo {
  name: string;
  tagline: string;
  slogan: string;
  sloganHighlight: string;
  email: string;
  phone: string;
  whatsapp: string;
  website: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  tiktok: string;
  description: string;
  about: string;
  foundedYear: number;
  location: string;
  mision: string;
  vision: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}

export interface Client {
  id: string;
  name: string;
  url: string;
  company: string;
  logo: string;
}

export interface CompanyValue {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export interface EngagementModel {
  id: string;
  icon: IconName;
  label: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SocialLink {
  id: "instagram" | "facebook" | "tiktok" | "linkedin";
  label: string;
  href: string;
}

// ─── Información de la empresa ───────────────────────────────────────────────

export const companyInfo: CompanyInfo = {
  name: "Svelpy",
  tagline: "// build the future",
  slogan: "Construimos el futuro digital de tu negocio",
  sloganHighlight: "futuro digital",
  email: "soporte@svelpy.com",
  phone: "+591 76727537",
  whatsapp: "+591 76727537",
  linkedin: "https://www.linkedin.com/company/svelpy",
  tiktok: "https://www.tiktok.com/@svelpy_bo",
  instagram: "https://www.instagram.com/svelpy/",
  facebook: "https://www.facebook.com/share/1V7vU1Qdoo/",
  website: "https://svelpy.com/",
  description:
    "Desarrollamos soluciones de software modernas, escalables y de alto rendimiento para empresas, negocios y emprendimientos que buscan crecer digitalmente.",
  about:
    "Somos un equipo apasionado por la tecnología, comprometido con entregar software que realmente funciona y que tu negocio necesita.",
  foundedYear: 2025,
  location: "Santa Cruz de la Sierra, Bolivia",
  mision:
    "Impulsar el crecimiento de empresas e instituciones a través de soluciones de software de vanguardia e implementaciones operativas concretas, eliminando la complejidad técnica para que cada cliente opere de forma segura, eficiente y sin fricciones.",
  vision:
    "Posicionar a Svelpy en el mercado latinoamericano como el referente de innovación en software para empresas e instituciones, impulsando la migración hacia herramientas inteligentes, seguras y de rápida adopción.",
};

export const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hola, me gustaría obtener más información sobre sus servicios de desarrollo de software y agendar una consulta.",
)}`;

export const socialLinks: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: companyInfo.linkedin },
  { id: "instagram", label: "Instagram", href: companyInfo.instagram },
  { id: "facebook", label: "Facebook", href: companyInfo.facebook },
  { id: "tiktok", label: "TikTok", href: companyInfo.tiktok },
];

// ─── Servicios ───────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "desarrollo-a-medida",
    title: "Desarrollo a Medida",
    description:
      "Convertimos tu idea o tus procesos en software hecho a la medida de tu negocio, desde un MVP hasta una plataforma completa, con la tecnología adecuada para cada proyecto.",
    icon: "code",
  },
  {
    id: "saas-platforms",
    title: "Plataformas SaaS",
    description:
      "Diseñamos y construimos plataformas SaaS completas con autenticación, facturación, multi-tenancy y paneles de administración listos para escalar.",
    icon: "saas",
  },
  {
    id: "ecommerce",
    title: "Tiendas Online y eCommerce",
    description:
      "Creamos tiendas en línea optimizadas para la conversión con gestión de inventario, pasarelas de pago y experiencias de compra fluidas.",
    icon: "cart",
  },
  {
    id: "hosting",
    title: "Hosting y Servidores",
    description:
      "Alojamos y administramos tu aplicación en servidores VPS o hosting, con dominio, certificado SSL, copias de seguridad y monitoreo para que funcione de forma estable y segura.",
    icon: "server",
  },
];

// ─── Modelos de trabajo ──────────────────────────────────────────────────────

export const engagementModels: EngagementModel[] = [
  {
    id: "a-medida",
    icon: "code",
    label: "Proyecto",
    title: "Desarrollo a medida",
    description:
      "Construimos tu sistema desde cero, adaptado a tus procesos. Al completar el pago, el código fuente es 100% tuyo.",
    features: [
      "Propuesta con alcance, cronograma e inversión total",
      "Pagos por hitos de avance",
      "Propiedad total del código fuente",
      "30 días de garantía post-entrega",
    ],
    cta: "Solicitar propuesta",
  },
  {
    id: "saas",
    icon: "refresh",
    label: "Suscripción",
    title: "Software como servicio",
    description:
      "Accede a nuestras plataformas listas para operar con un pago mensual, sin invertir en desarrollo ni en infraestructura propia.",
    features: [
      "Sin inversión inicial",
      "Hosting y mantenimiento incluidos",
      "Actualizaciones continuas",
      "Soporte técnico incluido",
    ],
    cta: "Consultar planes",
    featured: true,
  },
  {
    id: "alojamiento-soporte",
    icon: "support",
    label: "Mensual",
    title: "Alojamiento y soporte",
    description:
      "Un plan mensual para mantener tu software en línea, seguro y al día: alojamiento administrado, mantenimiento y mejoras continuas.",
    features: [
      "Alojamiento en VPS o hosting administrado",
      "Dominio, SSL y copias de seguridad",
      "Corrección de errores y monitoreo",
      "Nuevas funcionalidades según tus prioridades",
    ],
    cta: "Consultar plan",
  },
];

// ─── Proceso de trabajo ──────────────────────────────────────────────────────

export const processSteps: ProcessStep[] = [
  {
    title: "Reunión inicial",
    description:
      "Conversamos sobre tu negocio y el problema que quieres resolver, y evaluamos la viabilidad técnica del proyecto.",
  },
  {
    title: "Propuesta detallada",
    description:
      "Recibes una propuesta técnica y económica con alcance, cronograma e inversión total.",
  },
  {
    title: "Desarrollo ágil",
    description:
      "Trabajamos por iteraciones con entregas frecuentes, para que veas avances reales en cada etapa.",
  },
  {
    title: "Entrega y soporte",
    description:
      "Publicamos tu software en producción con 30 días de garantía y la opción de un plan de alojamiento y soporte.",
  },
];

// ─── Clientes / Empresas ──────────────────────────────────────────────────────

export const clients: Client[] = [
  // {
  //   id: "oys",
  //   name: "OyS",
  //   url: "https://oy-s-frontend.vercel.app/login",
  //   company: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
  //   logo: "/clients/oys.webp",
  // },
  // {
  //   id: "certhub",
  //   name: "CertHub",
  //   url: "https://cert-hub-frontend.vercel.app",
  //   company: "Datahub",
  //   logo: "/clients/certhub.webp",
  // },
  // {
  //   id: "billai",
  //   name: "BillAI",
  //   url: "https://bill-ai-frontend.vercel.app",
  //   company: "Datahub",
  //   logo: "/clients/billai.webp",
  // },
  {
    id: "dulcevizzio",
    name: "Dulce Vizzio",
    url: "https://dulcevizzio.com/",
    company: "Repostería Dulce Vizzio",
    logo: "/clients/dulcevizzio.webp",
  },
  {
    id: "milenium",
    name: "Milenium",
    url: "https://mileniumsj-kohl.vercel.app/",
    company: "Ferretería Milenium",
    logo: "/clients/milenium.webp",
  },
  {
    id: "eduserver",
    name: "EduServer",
    url: "https://plataformaeduserver.net/",
    company: "EduServer",
    logo: "/clients/eduserver-transparent.webp",
  },
];

// ─── Valores de la empresa ────────────────────────────────────────────────────

export const companyValues: CompanyValue[] = [
  {
    id: "calidad",
    icon: "quality",
    title: "Calidad ante todo",
    description:
      "Cada línea de código refleja nuestro compromiso con la excelencia técnica y la atención al detalle.",
  },
  {
    id: "velocidad",
    icon: "speed",
    title: "Entrega rápida",
    description:
      "Metodología ágil que garantiza iteraciones rápidas y entregas que generan valor desde el primer día.",
  },
  {
    id: "transparencia",
    icon: "transparency",
    title: "Transparencia total",
    description:
      "Comunicación clara y honesta en cada fase del proyecto, con avances visibles y decisiones compartidas.",
  },
];

// ─── Preguntas frecuentes ─────────────────────────────────────────────────────

export const faqs: Faq[] = [
  {
    question: "¿Cuánto cuesta desarrollar mi software?",
    answer:
      "Depende del alcance y la complejidad de cada proyecto. Después de una reunión inicial te enviamos una propuesta con el detalle del alcance y la inversión, cotizada en bolivianos (BOB) o dólares (USD).",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto?",
    answer:
      "Cada proyecto tiene su propio alcance, por eso definimos el cronograma en la propuesta. Trabajamos por etapas con entregas parciales, así sabes desde el inicio cuándo tendrás cada parte funcionando.",
  },
  {
    question: "¿El código fuente será de mi propiedad?",
    answer:
      "En proyectos de desarrollo a medida, sí: al completar el pago recibes los derechos completos sobre el código desarrollado para ti. En el modelo SaaS por suscripción accedes al uso de la plataforma, y el código y la infraestructura los administra Svelpy.",
  },
  {
    question: "¿Cómo son los pagos?",
    answer:
      "El esquema de pagos se define contigo al preparar la propuesta, según el alcance y la duración del proyecto. Por lo general se organiza por hitos, de modo que cada pago corresponde a un avance entregado.",
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer:
      "Cuentas con 30 días de garantía para la corrección de errores. Después puedes contratar un plan de alojamiento y soporte para mantener tu software en línea y seguir evolucionándolo.",
  },
  {
    question: "¿Firman acuerdos de confidencialidad?",
    answer:
      "Sí. Toda la información de tu proyecto se trata con estricta confidencialidad y firmamos un acuerdo de confidencialidad (NDA) cuando lo necesitas.",
  },
];
