import type { Component } from "vue";

type Tag = "working" | "previous" | "alternative" // add more if needed

export interface TechStack {
  iconLogo: Component,
  name: string,
  caption: string,
  width: string,
  height: string,
  tag: Tag[]
}

export interface MyTechStack {
  frontend: TechStack[],
  backend: TechStack[]
}