import { calcMousePos } from "./mousePos.ts";
import { projectsStore, type Project } from "./stores/projectsStore.ts";
import { Level, techStore } from "./stores/technologiesStore.ts";

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
import unity from "../public/images/technologies/unity.png";
import unreal from "../public/images/technologies/unreal.png";
import angular from "../public/images/technologies/angular.png";
import csharp from "../public/images/technologies/csharp.png";
import express from "../public/images/technologies/express.png";
import jenkins from "../public/images/technologies/jenkins.png";
import kotlin from "../public/images/technologies/kotlin.png";
import node from "../public/images/technologies/node.png";
import python from "../public/images/technologies/python.png";
import solidjs from "../public/images/technologies/solidjs.png";
import svelte from "../public/images/technologies/svelte.png";
import webpack from "../public/images/technologies/webpack.png";

export function bootstrap() {
  const lineImageProject: Project = {
    name: "Line painting",
    date: {
      startDate: "Sep",
      endDate: "Nov 23",
    },
    description: {
      short: "Turn an image into a line painting using Opencv",
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

  techStore.add([
    { name: "js", url: js, level: Level.Proficient },
    { name: "ts", url: ts, level: Level.Proficient },
    { name: "node", url: node, level: Level.Proficient },
    { name: "python", url: python, level: Level.Proficient },
    { name: "Webpack", url: webpack, level: Level.Proficient },
    { name: "Svelte", url: svelte, level: Level.Comfortable },
    { name: "SolidJS", url: solidjs, level: Level.Comfortable },
    { name: "React", url: react, level: Level.Comfortable },
    { name: "Jenkins", url: jenkins, level: Level.Comfortable },
    { name: "Kotlin", url: kotlin, level: Level.Comfortable },
    { name: "express", url: express, level: Level.HaveUsed },
    { name: "opencv", url: opencv, level: Level.HaveUsed },
    { name: "d3", url: d3, level: Level.HaveUsed },
    { name: "c#", url: csharp, level: Level.HaveUsed },
    { name: "Unity", url: unity, level: Level.HaveUsed },
    { name: "Unreal", url: unreal, level: Level.HaveUsed },
    { name: "Arduino", url: arduino, level: Level.HaveUsed },
    { name: "Angular", url: angular, level: Level.HaveUsed },
  ]);

  //step2
  calcMousePos();
}
