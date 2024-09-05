<script lang="ts">
import { defineComponent } from 'vue'
import Media from '../types/Media';
import Github from '../assets/icons/Github.vue';
import LinkedIn from '../assets/icons/LinkedIn.vue';
import Instagram from '../assets/icons/Instagram.vue';

export default defineComponent({
  name: 'HomeSection',
  components: {
    Github,
    LinkedIn,
    Instagram
  },
  setup() {
    const desc: string = '👋 Hello, I am Victor Chandra, a full stack engineer. Based in Indonesia'
    const media: Media[] = [
      {
        label: 'GitHub',
        url: 'https://github.com/victorchndra',
        icon: Github,
      },
      {
        label: 'LinkedIn',
        url: 'https://linkedin.com/in/victor-chandra-0417582b2',
        icon: LinkedIn,
      },
      {
        label: 'Instagram',
        url: 'https://www.instagram.com/victorchndra/',
        icon: Instagram,
      }
    ]

    return { desc, media }
  }
})
</script>

<template>
  <section class="flex justify-center items-center h-[calc(100vh-68px)] lg:h-[calc(100vh-108px)] flex-col gap-5">
    <p class="text-sm md:text-base lg:text-lg w-72 md:w-full text-center">
      {{ desc }}
    </p>
    <h1 class="font-bowlby-one-sc text-5xl md:text-8xl lg:text-[148px] text-center flex flex-col text-primary">
      <span>SOFTWARE</span>
      <span class="heading-stroke">ENGINEER</span>
    </h1>
    <ul class="flex gap-4 flex-wrap justify-center pt-2">
      <li v-for="item in media" :key="item.label" class="flex gap-1">
        <component :is="item.icon"></component>
        <span>{{ item.label }}</span> 
      </li>
    </ul>
  </section>
</template>