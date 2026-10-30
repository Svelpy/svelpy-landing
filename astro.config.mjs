// @ts-check
import { defineConfig, envField } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://svelpy.com",
  // Las páginas siguen siendo estáticas; solo /api/contact se ejecuta en el servidor.
  adapter: cloudflare(),
  env: {
    schema: {
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      CONTACT_TO: envField.string({
        context: "server",
        access: "secret",
        default: "soporte@svelpy.com",
      }),
      CONTACT_FROM: envField.string({
        context: "server",
        access: "secret",
        default: "Svelpy Web <contacto@mail.svelpy.com>",
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
