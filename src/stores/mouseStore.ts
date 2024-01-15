import { writable } from "svelte/store";

interface Coord {
  x: number;
  y: number;
}

class MouseStore {
  public subscribe;
  public updateCoord;
  constructor() {
    const { subscribe, update } = writable<Coord>({ x: 0, y: 0 });
    this.subscribe = subscribe;
    this.updateCoord = update;
  }

  update(coord: Coord) {
    //console.log(coord);
    this.updateCoord(() => coord);
  }
}

export const mouseStore = new MouseStore();
