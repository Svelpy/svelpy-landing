// src/data/company.ts
// Datos centralizados de Svelpy Software

export interface CompanyInfo {
  name: string;
  tagline: string;
  slogan: string;
  email: string;
  phone: string;
  website?: string;
  github?: string;
  linkedin?: string;
  whatsapp?: string;
  description: string;
  foundedYear: number;
  location: string;
}

export interface Service {
  id: string;
  title: string;
  period: string;
  description: string;
  role: string;
  technologies: string[];
  features: string[];
  category: string;
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  url: string;
  description: string;
  company: string;
  logo: string;
  tags: string[];
  icon: string;
}

export interface TechStack {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface CompanyValue {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

// ─── Información de la empresa ───────────────────────────────────────────────

export const companyInfo: CompanyInfo = {
  name: "Svelpy",
  tagline: "Construyendo el Futuro",
  slogan: "Construimos el futuro digital de tu negocio",
  email: "svelpycontacto@gmail.com",
  phone: "+591 60984296",
  whatsapp: "+591 60984296",
  linkedin: "https://www.linkedin.com/company/svelpy",
  website: "#",
  description:
    "Desarrollamos soluciones de software modernas, escalables y de alto rendimiento para empresas, negocios y emprendimientos que buscan crecer digitalmente.",
  foundedYear: 2025,
  location: "Santa Cruz de la Sierra, Bolivia",
};

// ─── Servicios ───────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: "desarrollo-web",
    title: "Desarrollo Web a Medida",
    period: "Entrega estimada: 4–12 semanas",
    description:
      "Construimos aplicaciones web modernas y de alto rendimiento adaptadas exactamente a las necesidades de tu negocio, desde MVPs hasta plataformas empresariales completas.",
    role: "Full-Stack Development",
    technologies: ["SvelteKit", "Astro", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Arquitectura escalable y mantenible",
      "Rendimiento optimizado (Core Web Vitals)",
      "Diseño UI/UX profesional incluido",
      "Documentación técnica completa",
    ],
    category: "Web Development",
    icon: "🌐",
  },
  {
    id: "saas-platforms",
    title: "Plataformas SaaS",
    period: "Entrega estimada: 8–20 semanas",
    description:
      "Diseñamos y construimos plataformas SaaS completas con autenticación, facturación, multi-tenancy y paneles de administración listos para escalar.",
    role: "SaaS Architecture",
    technologies: ["SvelteKit", "Stripe", "Firebase", "TypeScript", "Tailwind"],
    features: [
      "Autenticación y roles de usuario",
      "Integración de pagos con Stripe",
      "Panel de administración incluido",
      "Infraestructura cloud escalable",
    ],
    category: "SaaS",
    icon: "🚀",
  },
  {
    id: "ecommerce",
    title: "Tiendas Online y eCommerce",
    period: "Entrega estimada: 3–8 semanas",
    description:
      "Creamos tiendas en línea optimizadas para la conversión con gestión de inventario, pasarelas de pago y experiencias de compra fluidas.",
    role: "eCommerce Development",
    technologies: ["Astro", "SvelteKit", "Stripe", "MercadoPago", "Tailwind"],
    features: [
      "Pasarelas de pago locales e internacionales",
      "Gestión de inventario en tiempo real",
      "Optimización SEO para productos",
      "Integración con redes sociales",
    ],
    category: "eCommerce",
    icon: "🛒",
  },
  {
    id: "sistemas-gestion",
    title: "Sistemas de Gestión Empresarial",
    period: "Entrega estimada: 6–16 semanas",
    description:
      "Desarrollamos sistemas ERP, CRM y herramientas de gestión interna que automatizan procesos y centralizan la información de tu empresa.",
    role: "Enterprise Software",
    technologies: [".NET", "React", "PostgreSQL", "SQL Server", "TypeScript"],
    features: [
      "Módulos de ventas, compras e inventario",
      "Reportes y dashboards en tiempo real",
      "Acceso multi-usuario con roles",
      "Exportación a Excel/PDF",
    ],
    category: "Enterprise",
    icon: "📊",
  },
];

// ─── Clientes / Empresas ──────────────────────────────────────────────────────

export const clients: Client[] = [
  {
    id: "oys",
    name: "OyS",
    url: "https://oy-s-frontend.vercel.app/login",
    description:
      "Asistente de IA que genera documentos administrativos a partir de la data interna de la universidad, automatizando la creación de informes, actas y comunicados.",
    company: "Universidad Autónoma Gabriel René Moreno (UAGRM)",
    logo: "/clients/oys.webp",
    tags: ["IA Generativa", "Educación", "Automatización"],
    icon: "🎓",
  },
  {
    id: "certhub",
    name: "CertHub",
    url: "https://cert-hub-frontend.vercel.app",
    description:
      "Plataforma web para la generación masiva de certificados personalizados, con plantillas dinámicas, exportación en PDF y envío automático por correo.",
    company: "Datahub",
    logo: "/clients/certhub.webp",
    tags: ["Certificados", "Automatización", "SaaS"],
    icon: "📜",
  },
  {
    id: "billai",
    name: "BillAI",
    url: "https://bill-ai-frontend.vercel.app",
    description:
      "Aplicación web que convierte facturas en PDF o imágenes a archivos Excel organizados automáticamente, usando IA para extraer y estructurar los datos.",
    company: "Datahub",
    logo: "/clients/billai.webp",
    tags: ["IA", "Finanzas", "Automatización"],
    icon: "🤖",
  },
  {
    id: "dulcevizzio",
    name: "Dulce Vizzio",
    url: "https://dulcevizzio.com/",
    description:
      "Plataforma de cursos online de repostería con reproducción de video, seguimiento de progreso, sistema de certificados y pagos integrados.",
    company: "Repostería Dulce Vizzio",
    logo: "/clients/dulcevizzio.webp",
    tags: ["eLearning", "Cursos online", "eCommerce"],
    icon: "🎂",
  },
  {
    id: "milenium",
    name: "Milenium",
    url: "https://mileniumsj-kohl.vercel.app/",
    description:
      "Sistema POS completo para ferretería con gestión de inventario, ventas, caja, reportes en tiempo real y control de múltiples sucursales.",
    company: "Ferretería Milenium",
    logo: "/clients/milenium.webp",
    tags: ["POS", "Inventario", "Enterprise"],
    icon: "🔧",
  },
  {
    id: "eduserver",
    name: "EduServer",
    url: "https://plataformaeduserver.net/",
    description:
      "Sistema académico integral para gestión de cursos, estudiantes, calificaciones y comunicación entre docentes y alumnos.",
    company: "EduServer",
    logo: "/clients/eduserver.webp",
    tags: ["Educación", "SaaS", "Gestión Académica"],
    icon: "📚",
  },
];

// ─── Stack Tecnológico ────────────────────────────────────────────────────────

export const techStack: TechStack[] = [
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "⚡",
    color: "light-secondary",
    skills: [
      "Svelte / SvelteKit",
      "Astro",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML / CSS",
      "PWA",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "🔧",
    color: "light-primary",
    skills: [
      "Node.js",
      "Express",
      ".NET / C#",
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    id: "databases",
    title: "Bases de Datos",
    icon: "🗄️",
    color: "light-accent",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Firebase",
      "MongoDB",
      "Supabase",
      "Redis",
    ],
  },
  {
    id: "tools",
    title: "Herramientas & Cloud",
    icon: "🛠️",
    color: "light-secondary",
    skills: [
      "Git / GitHub",
      "Docker",
      "Vercel",
      "Railway",
      "Stripe",
      "MercadoPago",
      "Figma",
    ],
  },
];

// ─── Valores de la empresa ────────────────────────────────────────────────────

export const companyValues: CompanyValue[] = [
  {
    id: "calidad",
    emoji: "✨",
    title: "Calidad ante todo",
    description:
      "Cada línea de código refleja nuestro compromiso con la excelencia técnica y la atención al detalle.",
  },
  {
    id: "velocidad",
    emoji: "⚡",
    title: "Entrega rápida",
    description:
      "Metodología ágil que garantiza iteraciones rápidas y entregas que generan valor desde el primer día.",
  },
  {
    id: "transparencia",
    emoji: "🤝",
    title: "Transparencia total",
    description:
      "Comunicación clara y honesta en cada fase del proyecto. Sin sorpresas, sin costos ocultos.",
  },
];
