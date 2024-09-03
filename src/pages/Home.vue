<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<template>
  <section class="flex justify-center items-center h-[calc(100vh-108px)] pb-10 flex-col gap-5">
    <p class="text-sm md:text-base lg:text-lg w-72 md:w-full text-center">
      👋 Hello, I am Victor Chandra, a full stack engineer. Based in Indonesia
    </p>
    <h1 class="font-bowlby-one-sc text-5xl md:text-8xl lg:text-[148px] text-center flex flex-col text-primary">
      <span>SOFTWARE</span>
      <span class="heading-stroke">ENGINEER</span>
    </h1>
    <ul class="flex gap-8">
      <li>GitHub</li>
      <li>LinkedIn</li>
      <li>Instagram</li>
    </ul>
  </section>
</template>