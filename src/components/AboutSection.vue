<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutSection',
  setup() {
    
  },
})
</script>

<template>
  <section class="h-[calc(100vh-68px)] lg:h-[calc(100vh-108px)] px-5 py-5 flex flex-col gap-5 lg:px-32 snap-center">
    <div>
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">Hello!</h1>
      <p class="text-sm md:text-base">👋 Hello, I am Victor Chandra, a full stack engineer. Based in Indonesia.</p>
    </div>
    <div>
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">TECH STACK</h1>
      <ul class="flex text-xs px-2 py-2 bg-primary rounded-3xl overflow-x-auto max-w-max no-scrollbar">
        <li class="bg-white px-4 py-1 rounded-full whitespace-nowrap transition-all duration-300 ease-in-out">Currently working with:</li>
        <li class="text-white px-4 py-1 whitespace-nowrap">Previously worked with:</li>
        <li class="text-white px-4 py-1 whitespace-nowrap">Able to work with:</li>
      </ul>
      <div>
        <!-- icon -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
  }

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>