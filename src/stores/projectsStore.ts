import { writable } from "svelte/store";

export interface Project {
  name: string;
  date: {
    startDate: string;
    endDate: string;
  };
  description: {
    long?: string;
    short: string;
  };
  images: {
    main: string;
  };
  finished?: number;
  technologies: Tech[];
  link: string;
}

interface Tech {
  name: string;
  image: string;
}

class ProjectsStore {
  public subscribe;
  private update;
  constructor() {
    const { subscribe, update } = writable<Project[]>([]);
    this.subscribe = subscribe;
    this.update = update;
  }

  addProjects(projects: Project[]) {
    this.update(() => projects);
  }
}

export const projectsStore = new ProjectsStore();
