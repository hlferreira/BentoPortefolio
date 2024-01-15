import { calcMousePos } from "./mousePos.ts";
import { projectsStore, type Project } from "./stores/projectsStore.ts";
import line from "../public/images/projects/lineimage.png";
import syn from "../public/images/projects/syn.png";
import viz from "../public/images/projects/viz.png";
import smartshelf from "../public/images/projects/smartshelf.png";

import js from "../public/images/technologies/js.png";
import ts from "../public/images/technologies/ts.png";
import d3 from "../public/images/technologies/d3.png";
import opencv from "../public/images/technologies/opencv.png";
import react from "../public/images/technologies/react.png";
import arduino from "../public/images/technologies/arduino.png";

export function bootstrap() {
  const lineImageProject: Project = {
    name: "Line painting",
    date: {
      startDate: "Sep",
      endDate: "Nov 23",
    },
    description: {
      short: "Turn a image into a line painting using Opencv",
    },
    images: {
      main: line,
    },
    technologies: [
      {
        name: "opencv",
        image: opencv,
      },
      {
        name: "ts",
        image: ts,
      },
    ],
    link: "https://github.com/hlferreira/PictureToDrawing",
    finished: 60,
  };

  const chromeExtensionProject: Project = {
    name: "Synonym Chrome Extension",
    date: {
      startDate: "Sep",
      endDate: "Nov 23",
    },
    description: {
      short: "Chrome extension to find synonyms",
    },
    images: {
      main: syn,
    },
    technologies: [
      {
        name: "ts",
        image: ts,
      },
    ],
    link: "https://github.com/hlferreira/synonymChromeExtension",
    finished: 80,
  };

  const friendsNetworkVisProject: Project = {
    name: "Friends Network",
    date: {
      startDate: "Sep",
      endDate: "Nov 23",
    },
    description: {
      short:
        "Network visualization of my groups of friends, data from selenium instagram bot",
    },
    images: {
      main: viz,
    },
    technologies: [
      {
        name: "d3",
        image: d3,
      },
      {
        name: "js",
        image: js,
      },
    ],
    link: "https://github.com/hlferreira/Friends-Network-Viz",
    finished: 100,
  };

  const smartShelfProject: Project = {
    name: "Smart Shelf",
    date: {
      startDate: "Sep",
      endDate: "Nov 23",
    },
    description: {
      short: "Using an arduino scan books and find them on your bookshelves",
    },
    images: {
      main: smartshelf,
    },
    technologies: [
      {
        name: "arduino",
        image: arduino,
      },
      {
        name: "react",
        image: react,
      },
    ],
    link: "https://github.com/fborlido/smart-shelf",
    finished: 60,
  };

  const projects: Project[] = [
    lineImageProject,
    chromeExtensionProject,
    friendsNetworkVisProject,
    smartShelfProject,
  ];
  projectsStore.addProjects(projects);

  //step2
  calcMousePos();
}
