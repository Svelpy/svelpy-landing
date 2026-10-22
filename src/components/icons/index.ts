// Mapa de claves de ícono (definidas en data/company.ts) → componente
import type { IconName } from "../../data/company";
import CodeIcon from "./CodeIcon.astro";
import CloudIcon from "./CloudIcon.astro";
import ShoppingCartIcon from "./ShoppingCartIcon.astro";
import ServerIcon from "./ServerIcon.astro";
import RefreshIcon from "./RefreshIcon.astro";
import LifebuoyIcon from "./LifebuoyIcon.astro";
import ShieldCheckIcon from "./ShieldCheckIcon.astro";
import BoltIcon from "./BoltIcon.astro";
import MessagesIcon from "./MessagesIcon.astro";

export const icons: Record<IconName, typeof CodeIcon> = {
  code: CodeIcon,
  saas: CloudIcon,
  cart: ShoppingCartIcon,
  server: ServerIcon,
  refresh: RefreshIcon,
  support: LifebuoyIcon,
  quality: ShieldCheckIcon,
  speed: BoltIcon,
  transparency: MessagesIcon,
};
