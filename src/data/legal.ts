// src/data/legal.ts
// Datos para las páginas legales de Svelpy

export interface LegalSection {
  title: string;
  content: string[];
}

export interface LegalPage {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

// ─── Política de Privacidad ───────────────────────────────────────────────────

export const privacyPolicy: LegalPage = {
  title: "Política de Privacidad",
  lastUpdated: "13 de mayo de 2025",
  intro:
    "En Svelpy, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política describe cómo recopilamos, usamos y protegemos la información que compartes con nosotros.",
  sections: [
    {
      title: "1. Información que Recopilamos",
      content: [
        "Información de contacto: nombre, correo electrónico y número de teléfono cuando utilizas nuestro formulario de contacto o solicitas una cotización.",
        "Información técnica: dirección IP, tipo de navegador, páginas visitadas y tiempo de visita para mejorar nuestro sitio web.",
        "Información del proyecto: detalles que compartes al contratar nuestros servicios, como descripción del proyecto, requerimientos técnicos y expectativas.",
        "Cookies y tecnologías de rastreo: utilizamos cookies propias y de terceros para analizar el tráfico y mejorar la experiencia de usuario (ver Política de Cookies).",
      ],
    },
    {
      title: "2. Cómo Usamos tu Información",
      content: [
        "Para responder a tus consultas y cotizaciones de manera oportuna.",
        "Para gestionar la relación contractual y la ejecución de proyectos de desarrollo.",
        "Para mejorar nuestros servicios y la experiencia en nuestro sitio web.",
        "Para enviarte comunicaciones relacionadas con el proyecto en curso (no realizamos spam ni envíos masivos sin consentimiento).",
        "Para cumplir con obligaciones legales y fiscales en Bolivia.",
      ],
    },
    {
      title: "3. Almacenamiento y Seguridad",
      content: [
        "Tus datos se almacenan en servidores seguros con acceso restringido y cifrado en tránsito mediante SSL/TLS.",
        "Conservamos tu información durante el tiempo que dure la relación comercial y hasta 5 años adicionales para cumplir con obligaciones legales.",
        "Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos contra acceso no autorizado, pérdida o destrucción.",
        "En caso de una brecha de seguridad que afecte tus datos, te notificaremos en un plazo máximo de 72 horas.",
      ],
    },
    {
      title: "4. Compartición de Datos con Terceros",
      content: [
        "No vendemos ni alquilamos tus datos personales a terceros bajo ninguna circunstancia.",
        "Podemos compartir información con proveedores de servicios de confianza (hosting, email, analytics) bajo acuerdos de confidencialidad estrictos.",
        "Herramientas que utilizamos: Google Analytics (análisis de tráfico), Vercel (hosting), Resend o similar (envío de emails transaccionales).",
        "Podemos divulgar información cuando sea requerido por ley o autoridades competentes en Bolivia.",
      ],
    },
    {
      title: "5. Tus Derechos",
      content: [
        "Acceso: tienes derecho a solicitar una copia de los datos personales que tenemos sobre ti.",
        "Rectificación: puedes solicitar la corrección de datos incorrectos o incompletos.",
        "Eliminación: puedes solicitar que eliminemos tus datos, salvo cuando tengamos una obligación legal de conservarlos.",
        "Oposición: puedes oponerte al procesamiento de tus datos para fines de marketing.",
        "Para ejercer cualquiera de estos derechos, contáctanos en hola@svelpy.dev con el asunto 'Privacidad — [Tu Solicitud]'.",
      ],
    },
    {
      title: "6. Cambios en esta Política",
      content: [
        "Nos reservamos el derecho de actualizar esta política periódicamente para reflejar cambios en nuestras prácticas o en la legislación aplicable.",
        "Te notificaremos de cambios significativos por correo electrónico o mediante un aviso prominente en nuestro sitio web.",
        "El uso continuado de nuestros servicios tras la actualización de la política constituye tu aceptación de los cambios.",
      ],
    },
    {
      title: "7. Contacto",
      content: [
        "Si tienes preguntas sobre esta política o sobre el tratamiento de tus datos personales, puedes contactarnos en:",
        "Correo electrónico: hola@svelpy.dev",
        "Teléfono / WhatsApp: +591 67787486",
        "Ubicación: Santa Cruz de la Sierra, Bolivia",
      ],
    },
  ],
};

// ─── Términos y Condiciones ───────────────────────────────────────────────────

export const termsOfService: LegalPage = {
  title: "Términos y Condiciones",
  lastUpdated: "13 de mayo de 2025",
  intro:
    "Al contratar los servicios de Svelpy o utilizar este sitio web, aceptas los siguientes términos y condiciones. Te recomendamos leerlos detenidamente antes de iniciar cualquier proyecto.",
  sections: [
    {
      title: "1. Servicios Ofrecidos",
      content: [
        "Svelpy ofrece servicios de desarrollo de software a medida, incluyendo aplicaciones web, plataformas SaaS, sistemas de gestión empresarial y tiendas en línea.",
        "Cada proyecto se rige por un contrato de servicios específico que detalla el alcance, plazos, precios y condiciones particulares.",
        "Nos reservamos el derecho de rechazar proyectos que sean contrarios a la ética, la ley boliviana o nuestras políticas internas.",
      ],
    },
    {
      title: "2. Proceso de Contratación",
      content: [
        "El proceso inicia con una consulta gratuita donde evaluamos tu proyecto y necesidades.",
        "Emitimos una propuesta técnica y económica detallada con alcance, cronograma y precio total.",
        "El proyecto comienza únicamente tras la firma del contrato y el pago del anticipo acordado (generalmente 40–50% del valor total).",
        "Cualquier cambio en el alcance del proyecto debe acordarse por escrito y puede implicar ajustes en precio y cronograma.",
      ],
    },
    {
      title: "3. Pagos y Facturación",
      content: [
        "Los precios se cotizan en bolivianos (BOB) o dólares americanos (USD) según acuerdo con el cliente.",
        "El esquema de pagos típico es: 40–50% al inicio, 30–40% a mitad del proyecto, y 10–20% al finalizar y entregar el producto.",
        "Los pagos se realizan mediante transferencia bancaria, QR o plataformas digitales acordadas.",
        "En caso de retraso en los pagos por parte del cliente, Svelpy puede pausar el desarrollo hasta regularizar la situación.",
        "No se realizan reembolsos por trabajo ya entregado y aceptado por el cliente.",
      ],
    },
    {
      title: "4. Propiedad Intelectual",
      content: [
        "Una vez completado el pago total del proyecto, el cliente recibe los derechos completos sobre el código fuente desarrollado específicamente para él.",
        "Svelpy retiene los derechos sobre librerías internas, componentes genéricos y herramientas de desarrollo propias utilizadas en el proyecto.",
        "El cliente otorga a Svelpy el derecho de mencionar el proyecto en su portafolio y materiales de marketing, salvo acuerdo de confidencialidad firmado.",
        "El software de terceros (librerías open source) está sujeto a sus propias licencias, que serán informadas al cliente.",
      ],
    },
    {
      title: "5. Garantías y Soporte Post-Entrega",
      content: [
        "Ofrecemos una garantía de 30 días calendario tras la entrega del proyecto para corrección de bugs directamente relacionados con el desarrollo.",
        "La garantía no cubre errores causados por modificaciones realizadas por el cliente o terceros.",
        "El soporte técnico extendido (más allá de la garantía) está disponible mediante contratos de mantenimiento mensuales.",
        "No garantizamos que el software estará libre de errores al 100%, pero nos comprometemos a resolver cualquier problema reportado de manera oportuna.",
      ],
    },
    {
      title: "6. Confidencialidad",
      content: [
        "Toda información compartida por el cliente para el desarrollo del proyecto es tratada con estricta confidencialidad.",
        "Nuestro equipo firma acuerdos de confidencialidad (NDA) cuando el cliente lo requiere.",
        "No compartimos datos del cliente ni detalles del proyecto con terceros sin autorización expresa.",
      ],
    },
    {
      title: "7. Limitación de Responsabilidad",
      content: [
        "Svelpy no será responsable por daños indirectos, pérdida de datos, lucro cesante o interrupciones del negocio causadas por el uso del software entregado.",
        "Nuestra responsabilidad máxima en cualquier caso estará limitada al monto total pagado por el cliente en el proyecto correspondiente.",
        "El cliente es responsable de realizar copias de seguridad de sus datos antes y durante el proceso de desarrollo.",
      ],
    },
    {
      title: "8. Ley Aplicable",
      content: [
        "Estos términos se rigen por las leyes vigentes en el Estado Plurinacional de Bolivia.",
        "Cualquier disputa será resuelta primero mediante negociación directa entre las partes.",
        "En caso de no alcanzar un acuerdo, las disputas se someterán a la jurisdicción de los tribunales de Santa Cruz de la Sierra, Bolivia.",
      ],
    },
  ],
};

// ─── Política de Cookies ──────────────────────────────────────────────────────

export const cookiesPolicy: LegalPage = {
  title: "Política de Cookies",
  lastUpdated: "13 de mayo de 2025",
  intro:
    "Este sitio web utiliza cookies para mejorar tu experiencia de navegación. A continuación te explicamos qué son las cookies, cuáles usamos y cómo puedes gestionarlas.",
  sections: [
    {
      title: "1. ¿Qué Son las Cookies?",
      content: [
        "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.",
        "Nos permiten recordar tus preferencias, analizar el tráfico del sitio y mejorar tu experiencia de navegación.",
        "Las cookies no contienen información personal identificable por sí solas.",
      ],
    },
    {
      title: "2. Tipos de Cookies que Usamos",
      content: [
        "Cookies esenciales: necesarias para el funcionamiento básico del sitio (sesión, seguridad). No pueden desactivarse.",
        "Cookies de análisis: utilizadas por Google Analytics para medir el tráfico y comportamiento de los usuarios de forma anónima.",
        "Cookies de preferencias: guardan tus preferencias de idioma y configuración de navegación.",
        "No utilizamos cookies de publicidad ni de rastreo para terceros.",
      ],
    },
    {
      title: "3. Cookies Específicas que Utilizamos",
      content: [
        "_ga, _gid, _gat — Google Analytics: análisis de tráfico anónimo. Duración: hasta 2 años.",
        "svelpy_session — Sesión interna. Duración: hasta el cierre de sesión o 24 horas.",
        "svelpy_prefs — Preferencias de usuario. Duración: 30 días.",
      ],
    },
    {
      title: "4. Cómo Gestionar tus Cookies",
      content: [
        "Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envíe una cookie.",
        "Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.",
        "Firefox: Opciones → Privacidad y seguridad → Cookies y datos del sitio.",
        "Safari: Preferencias → Privacidad → Administrar datos del sitio.",
        "Ten en cuenta que desactivar las cookies puede afectar la funcionalidad del sitio web.",
      ],
    },
    {
      title: "5. Cookies de Terceros",
      content: [
        "Google Analytics: utilizamos este servicio para analizar el uso del sitio. Puedes optar por no ser rastreado instalando el complemento de inhabilitación de Google Analytics.",
        "No incorporamos botones de redes sociales que puedan instalar cookies de terceros sin tu consentimiento.",
      ],
    },
    {
      title: "6. Contacto",
      content: [
        "Si tienes preguntas sobre nuestra política de cookies, contáctanos en hola@svelpy.dev.",
      ],
    },
  ],
};
