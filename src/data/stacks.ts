import Flutter from "../assets/icons/Flutter.vue";
import Inertia from "../assets/icons/Inertia.vue";
import Java from "../assets/icons/Java.vue";
import JavaScript from "../assets/icons/JavaScript.vue";
import Laravel from "../assets/icons/Laravel.vue";
import MongoDB from "../assets/icons/MongoDB.vue";
import MyBatis from "../assets/icons/MyBatis.vue";
import MySQL from "../assets/icons/MySQL.vue";
import Next from "../assets/icons/Next.vue";
import Nuxt from "../assets/icons/Nuxt.vue";
import Pinia from "../assets/icons/Pinia.vue";
import PostgreSQL from "../assets/icons/PostgreSQL.vue";
import React from "../assets/icons/React.vue";
import Redis from "../assets/icons/Redis.vue";
import Redux from "../assets/icons/Redux.vue";
import RocketMQ from "../assets/icons/RocketMQ.vue";
import Spring from "../assets/icons/Spring.vue";
import Tailwind from "../assets/icons/Tailwind.vue";
import TypeScript from "../assets/icons/TypeScript.vue";
import Vue from "../assets/icons/Vue.vue";
import Vuex from "../assets/icons/Vuex.vue";
import Websocket from "../assets/icons/Websocket.vue";
import { MyTechStack, TechStack } from "../types/TechStack";

const frontEndStacks: TechStack[] = [
  {
    iconLogo: JavaScript,
    name: 'JavaScript',
    caption: 'JavaScript',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: TypeScript,
    name: 'TypeScript',
    caption: 'TypeScript',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: Vue,
    name: 'Vue',
    caption: 'Vue',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: Pinia,
    name: 'Pinia',
    caption: 'Pinia',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: Vuex,
    name: 'Vuex',
    caption: 'Vuex',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: Nuxt,
    name: 'NuxtJS',
    caption: 'NuxtJS',
    width: '64px',
    height: '64px',
    tag: ['alternative'],
  },
  {
    iconLogo: React,
    name: 'React',
    caption: 'React',
    width: '64px',
    height: '64px',
    tag: ['previous'],
  },
  {
    iconLogo: Redux,
    name: 'Redux',
    caption: 'Redux',
    width: '64px',
    height: '64px',
    tag: ['previous'],
  },
  // {
  //   iconLogo: Next,
  //   name: 'NextJS',
  //   caption: 'NextJS',
  //   width: '64px',
  //   height: '64px',
  //   tag: ['alternative'],
  // },
  {
    iconLogo: Inertia,
    name: 'InertiaJS',
    caption: 'InertiaJS',
    width: '64px',
    height: '64px',
    tag: ['previous'],
  },
  {
    iconLogo: Tailwind,
    name: 'TailwindCSS',
    caption: 'TailwindCSS',
    width: '64px',
    height: '64px',
    tag: ['previous'],
  },
  {
    iconLogo: Websocket,
    name: 'Websocket',
    caption: 'Websocket',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: Flutter,
    name: 'Flutter',
    caption: 'Flutter',
    width: '64px',
    height: '64px',
    tag: ['alternative'],
  },
  {
    iconLogo: React,
    name: 'React Native',
    caption: 'React Native',
    width: '64px',
    height: '64px',
    tag: ['alternative'],
  },
]

const backEndStacks: TechStack[] = [
  {
    iconLogo: Java,
    name: 'Java',
    caption: 'Java',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: Spring,
    name: 'Spring',
    caption: 'Spring',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: Laravel,
    name: 'Laravel',
    caption: 'Laravel',
    width: '64px',
    height: '64px',
    tag: ['previous'],
  },
  {
    iconLogo: MyBatis,
    name: 'MyBatis',
    caption: 'MyBatis',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  // {
  //   iconLogo: RocketMQ,
  //   name: 'RocketMQ',
  //   caption: 'RocketMQ',
  //   width: '64px',
  //   height: '64px',
  //   tag: ['working'],
  // },
  {
    iconLogo: Redis,
    name: 'Redis',
    caption: 'Redis',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: MySQL,
    name: 'MySQL',
    caption: 'MySQL',
    width: '64px',
    height: '64px',
    tag: ['working', 'previous'],
  },
  {
    iconLogo: PostgreSQL,
    name: 'PostgreSQL',
    caption: 'PostgreSQL',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
  {
    iconLogo: MongoDB,
    name: 'MongoDB',
    caption: 'MongoDB',
    width: '64px',
    height: '64px',
    tag: ['working'],
  },
]

export const myStacks: MyTechStack = {
  frontend: frontEndStacks,
  backend: backEndStacks
}