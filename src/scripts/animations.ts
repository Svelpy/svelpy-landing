// animations.ts — Animaciones de la landing (GSAP + ScrollTrigger + SplitText)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const EASE = "power3.out";

// Elemento visible o ya superado al cargar (p. ej. al recargar a mitad de página)
const isAboveFold = (element: Element) =>
  element.getBoundingClientRect().top < window.innerHeight;

// Divide un titular en palabras con máscara y lo deja visible (lo oculta el CSS hasta aquí)
const splitWords = (element: HTMLElement) => {
  const split = SplitText.create(element, { type: "words", mask: "words" });
  gsap.set(element, { visibility: "visible" });
  return split.words;
};

// Hero: titular por palabras, luego descripción y botones; halo con "respiración" lenta
const animateHero = () => {
  const title = document.querySelector<HTMLElement>("[data-hero-title]");
  if (!title) return;

  // Si se recarga a mitad de página el Hero no se ve: se muestra sin animación
  if (window.scrollY > window.innerHeight) {
    gsap.set(title, { visibility: "visible" });
  } else {
    gsap
      .timeline({ defaults: { ease: EASE } })
      .from(splitWords(title), { yPercent: 110, duration: 0.8, stagger: 0.05 })
      .from(
        "[data-hero-fade]",
        { autoAlpha: 0, y: 16, duration: 0.6, stagger: 0.1 },
        "-=0.5",
      );
  }

  gsap.to("[data-hero-glow]", {
    scale: 1.08,
    opacity: 0.55,
    duration: 4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });
};

// Títulos de sección: palabras del h2 y descripción.
// Si el título ya está en pantalla al cargar, se muestra al instante para no dejar la sección vacía.
const animateHeadings = () => {
  document.querySelectorAll<HTMLElement>("[data-heading]").forEach((heading) => {
    const title = heading.querySelector<HTMLElement>("[data-split]");
    const description = heading.querySelector("[data-heading-text]");

    if (isAboveFold(heading)) {
      if (title) gsap.set(title, { visibility: "visible" });
      return;
    }

    const timeline = gsap.timeline({
      defaults: { ease: EASE },
      scrollTrigger: { trigger: heading, start: "top 88%", once: true },
    });

    if (title) {
      timeline.from(splitWords(title), { yPercent: 110, duration: 0.7, stagger: 0.04 });
    }
    if (description) {
      timeline.from(description, { autoAlpha: 0, y: 12, duration: 0.5 }, "-=0.4");
    }
  });
};

// Entrada escalonada de los elementos marcados con data-reveal
// Lo que ya está en pantalla (o más arriba) al cargar aparece al instante, sin animación.
const animateReveals = () => {
  const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  const visibleNow = elements.filter(isAboveFold);
  gsap.set(visibleNow, { autoAlpha: 1 });

  const pending = elements.filter((element) => !visibleNow.includes(element));
  if (!pending.length) return;

  ScrollTrigger.batch(pending, {
    start: "top 92%",
    once: true,
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: EASE, stagger: 0.06, overwrite: true },
      ),
  });
};

// Proceso: línea vertical que se llena con el scroll y activa cada paso al alcanzarlo
const animateProcess = () => {
  const track = document.querySelector("[data-process]");
  if (!track) return;

  gsap.fromTo(
    "[data-progress='y']",
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: { trigger: track, start: "top 60%", end: "bottom 60%", scrub: 0.6 },
    },
  );

  track.querySelectorAll("[data-step]").forEach((step) => {
    ScrollTrigger.create({
      trigger: step,
      start: "top 60%",
      // Queda activo una vez alcanzado; solo se apaga al volver a subir
      onEnter: () => step.classList.add("is-active"),
      onLeaveBack: () => step.classList.remove("is-active"),
    });
  });
};

// Declaración: las palabras pasan de atenuadas a blancas mientras se hace scroll
const animateHighlight = () => {
  document.querySelectorAll<HTMLElement>("[data-highlight]").forEach((element) => {
    const { words } = SplitText.create(element, { type: "words" });
    gsap.fromTo(
      words,
      { opacity: 0.18 },
      {
        opacity: 1,
        ease: "none",
        stagger: 0.1,
        scrollTrigger: { trigger: element, start: "top 80%", end: "bottom 45%", scrub: true },
      },
    );
  });
};

// FAQ: abre y cierra cada <details> animando la altura de la respuesta
const animateFaq = () => {
  document.querySelectorAll<HTMLDetailsElement>("details.faq-item").forEach((details) => {
    const summary = details.querySelector("summary");
    const content = details.querySelector<HTMLElement>("[data-faq-content]");
    if (!summary || !content) return;

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      gsap.killTweensOf(content);

      if (details.open) {
        gsap.to(content, {
          height: 0,
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.inOut",
          onComplete: () => {
            details.open = false;
            gsap.set(content, { clearProps: "all" });
          },
        });
      } else {
        details.open = true;
        gsap.fromTo(
          content,
          { height: 0, autoAlpha: 0, overflow: "hidden" },
          {
            height: "auto",
            autoAlpha: 1,
            duration: 0.45,
            ease: "power2.out",
            onComplete: () => gsap.set(content, { clearProps: "all" }),
          },
        );
      }
    });
  });
};

export const initAnimations = () => {
  const media = gsap.matchMedia();

  media.add("(prefers-reduced-motion: no-preference)", () => {
    // Sin esperar a las fuentes: la máscara por palabras no depende de medidas,
    // así el contenido aparece de inmediato aunque Google Fonts tarde.
    animateHero();
    animateHeadings();
    animateHighlight();
    animateReveals();
    animateProcess();
    animateFaq();

    // Recalcula posiciones cuando cargan fuentes e imágenes
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  });
};
