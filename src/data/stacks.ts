import Java from "../assets/icons/Java.vue";
import JavaScript from "../assets/icons/JavaScript.vue";
import MongoDB from "../assets/icons/MongoDB.vue";
import MyBatis from "../assets/icons/MyBatis.vue";
import MySQL from "../assets/icons/MySQL.vue";
import Nuxt from "../assets/icons/Nuxt.vue";
import Pinia from "../assets/icons/Pinia.vue";
import PostgreSQL from "../assets/icons/PostgreSQL.vue";
import Redis from "../assets/icons/Redis.vue";
import RocketMQ from "../assets/icons/RocketMQ.vue";
import Spring from "../assets/icons/Spring.vue";
import Tailwind from "../assets/icons/Tailwind.vue";
import TypeScript from "../assets/icons/TypeScript.vue";
import Vue from "../assets/icons/Vue.vue";
import Vuex from "../assets/icons/Vuex.vue";
import Websocket from "../assets/icons/Websocket.vue";

const frontEndStacks = [
  {
    iconLogo: JavaScript,
    name: 'JavaScript',
    caption: 'JavaScript',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
  {
    iconLogo: TypeScript,
    name: 'TypeScript',
    caption: 'TypeScript',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
  {
    iconLogo: Vue,
    name: 'Vue',
    caption: 'Vue',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
  {
    iconLogo: Pinia,
    name: 'Pinia',
    caption: 'Pinia',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
  {
    iconLogo: Vuex,
    name: 'Vuex',
    caption: 'Vuex',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
  {
    iconLogo: Nuxt,
    name: 'NuxtJS',
    caption: 'NuxtJS',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
  {
    iconLogo: Tailwind,
    name: 'TailwindCSS',
    caption: 'TailwindCSS',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
  {
    iconLogo: Websocket,
    name: 'Websocket',
    caption: 'Websocket',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'frontend',
  },
]

const backEndStacks = [
  {
    iconLogo: Java,
    name: 'Java',
    caption: 'Java',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
  {
    iconLogo: Spring,
    name: 'Spring',
    caption: 'Spring',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
  {
    iconLogo: MyBatis,
    name: 'MyBatis',
    caption: 'MyBatis',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
  {
    iconLogo: RocketMQ,
    name: 'RocketMQ',
    caption: 'RocketMQ',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
  {
    iconLogo: Redis,
    name: 'Redis',
    caption: 'Redis',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
  {
    iconLogo: MySQL,
    name: 'MySQL',
    caption: 'MySQL',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
  {
    iconLogo: PostgreSQL,
    name: 'PostgreSQL',
    caption: 'PostgreSQL',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
  {
    iconLogo: MongoDB,
    name: 'MongoDB',
    caption: 'MongoDB',
    width: '64px',
    height: '64px',
    tag: 'current',
    category: 'backend',
  },
]

export const myStacks = {
  frontend: {...frontEndStacks},
  backend: {...backEndStacks}
}