// src/data/portfolio.ts
export interface PersonalInfo {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  portfolio?: string;
  linkedin?: string;
  github?: string;
  title: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  semester: string;
  period?: string;
}

export interface Project {
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

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export const personalInfo: PersonalInfo = {
  name: "Luis Fernando",
  lastName: "Hinojosa Rivera",
  email: "luis111ferrivera@gmail.com",
  phone: "+591 67787486",
  portfolio: "#",
  github: "https://github.com/luisFernandoHinojosa",
  linkedin:
    "https://www.linkedin.com/in/luis-fernando-hinojosa-rivera-003903240/",
  title: "Desarrollador Full-Stack",
  description:
    "Desarrollador Full-Stack apasionado por crear experiencias digitales innovadoras y soluciones tecnológicas que impacten positivamente en la vida de las personas.",
};

export const education: Education = {
  institution: "Universidad Autónoma Gabriel René Moreno",
  degree: "Licenciatura en Ingeniería Informática",
  semester: "7mo Semestre",
};

export const projects: Project[] = [
  {
    id: "hackathon-google",
    title: "Hackathon Google Build with AI Bolivia",
    period: "Junio 2025",
    description:
      "Plataforma de autoeducación con IA que genera rutas de aprendizaje personalizadas con contenido dinámico y estructurado.",
    role: "Frontend Developer",
    technologies: [
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Mermaid.js",
    ],
    features: [
      "Agente de IA para rutas de aprendizaje personalizadas",
      "Generación de contenido dinámico (podcast, diagramas, flashcards)",
      "Interfaz UI/UX optimizada para autoeducación",
      "ODS 4: Educación de calidad",
    ],
    category: "AI/Education",
    icon: "🏆",
  },
  {
    id: "botsi-app",
    title: "Botsi - Aplicación de Productividad con IA",
    period: "Dic 2024 - Jul 2025",
    description:
      "Suite de productividad con IA que incluye módulos de tareas, actividades y finanzas personales.",
    role: "Frontend Developer",
    technologies: ["Svelte", "TypeScript", "Tailwind CSS", "Firebase"],
    features: [
      "Chat inteligente que registra datos mediante IA",
      "Visualización de reportes personalizados",
      "Consejos generados por modelo de IA",
      "PWA con experiencia unificada",
    ],
    category: "Productivity",
    icon: "🤖",
  },
  {
    id: "vizta-saas",
    title: "Vizta - Plataforma SaaS para eCommerce",
    period: "Mar 2025 - Jun 2025",
    description:
      "Solución SaaS para crear tiendas en línea y sitios corporativos con templates personalizables.",
    role: "Frontend Developer",
    technologies: ["Svelte", "Astro", "TypeScript", "Tailwind CSS", "Firebase"],
    features: [
      "Panel de administración completo",
      "Personalización de tienda (logo, colores, dominio)",
      "Gestión de productos integrada",
      "Templates corporativos con SSR",
    ],
    category: "SaaS/eCommerce",
    icon: "🛒",
  },
  {
    id: "plataforma-educativa",
    title: "Plataforma Educativa para Instituto de Idiomas",
    period: "Mar 2025 - Jun 2025",
    description:
      "Sistema administrativo educativo integral para instituto de idiomas con funcionalidades completas.",
    role: "Full-Stack Developer",
    technologies: [".NET", "SQL Server", "React", "Tailwind CSS"],
    features: [
      "Versión 1 exitosamente lanzada",
      "Sistema de gestión académica",
      "Panel administrativo completo",
      "En fase de mantenimiento y nuevas funcionalidades",
    ],
    category: "Education",
    icon: "🎓",
  },
];

export const experiences: Experience[] = [
  {
    id: "web-developer",
    title: "Desarrollador de Aplicaciones Web",
    company: "Freelance",
    period: "Diciembre 2023 - Septiembre 2024",
    description:
      "Colaboré como desarrollador Full-Stack en un equipo para la creación de un sistema de ventas POS.",
    responsibilities: [
      "Desarrollo de API REST con Node.js, Express y PostgreSQL",
      "Implementación de interfaz de usuario con React y Tailwind CSS",
      "Trabajo colaborativo en equipo de desarrollo",
      "Integración de funcionalidades de punto de venta",
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "React", "Tailwind CSS"],
    icon: "💼",
  },
  {
    id: "fullstack-instituto",
    title: "Desarrollador Fullstack",
    company: "Instituto Educativo",
    period: "Mayo 2024 - Octubre 2024",
    description:
      "Colaboré en un equipo ágil para desarrollar una plataforma educativa integral.",
    responsibilities: [
      "Desarrollo de backend con .NET",
      "Desarrollo de frontend con React",
      "Implementación de metodologías ágiles",
      "Colaboración en equipo multidisciplinario",
    ],
    technologies: [".NET", "React", "SQL Server", "Tailwind CSS"],
    icon: "🏫",
  },
];

export const skills: SkillCategory[] = [
  {
    id: "programming",
    title: "Lenguajes de Programación",
    icon: "⚡",
    color: "cyber-blue",
    skills: [
      "Java",
      "C/C++",
      "Python",
      "JavaScript",
      "C#",
      "TypeScript",
      "Kotlin",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: "🎨",
    color: "cyber-purple",
    skills: [
      "React",
      "Svelte",
      "Angular",
      "Astro",
      "HTML/CSS",
      "Tailwind CSS",
      "PWA",
    ],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: "🔧",
    color: "cyber-pink",
    skills: [
      "Node.js",
      "Express",
      ".NET",
      "Spring Boot",
      "FastAPI",
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Firebase",
    ],
  },
  {
    id: "tools",
    title: "Herramientas & Otros",
    icon: "🛠️",
    color: "cyber-blue",
    skills: ["Git", "Vite", "APIs REST", "Metodologías Ágiles", "UI/UX Design"],
  },
];
