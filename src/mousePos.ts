import { mouseStore } from "./stores/mouseStore.ts";

export function calcMousePos() {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    mouseStore.update({ x: x, y: y });
  });
}
