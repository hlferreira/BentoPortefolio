import App from "./app.svelte";
import { bootstrap } from "./bootstrap.ts";

export const app = new App({
  target: document.getElementById("app") as HTMLElement,
});

bootstrap();
