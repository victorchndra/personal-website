import type { Component } from "vue";

export interface TechStack {
  iconLogo: Component,
  name: string,
  caption: string,
  width: string,
  height: string,
  tag: string[]
}

export interface MyTechStack {
  frontend: TechStack[],
  backend: TechStack[]
}

// export default MyTechStack