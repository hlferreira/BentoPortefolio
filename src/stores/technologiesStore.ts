import { writable } from "svelte/store";

interface TechStack {
  [Level.Proficient]: Technologies[];
  [Level.Comfortable]: Technologies[];
  [Level.HaveUsed]: Technologies[];
}

export interface Technologies {
  name: string;
  url: string;
  level: Level;
}

export enum Level {
  Proficient,
  Comfortable,
  HaveUsed,
}

class TechnologiesStore {
  public subscribe;
  public update;
  constructor() {
    const { subscribe, update } = writable<TechStack>();
    this.subscribe = subscribe;
    this.update = update;
  }

  add(techs: Technologies[]) {
    const techStack: TechStack = {
      [Level.Proficient]: [],
      [Level.Comfortable]: [],
      [Level.HaveUsed]: [],
    };
    techs.map((el) => {
      techStack[el.level].push(el);
    });

    this.update(() => techStack);
  }
}
export const techStore = new TechnologiesStore();
