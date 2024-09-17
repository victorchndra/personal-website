<script lang="ts">
import { computed, defineComponent } from 'vue'
import { myStacks } from '../data/stacks';
// import { useMediaQuery } from '@vueuse/core';

export default defineComponent({
  name: 'TechStackSection',
  setup() {
    // const isSmallScreen = useMediaQuery('(max-width:640px)')
    const stackList = myStacks

    return { stackList }
  },
})
</script>

<template>
  <section class="h-[calc(100vh-68px)] lg:h-[calc(100vh-108px)] px-5 py-5 flex flex-col gap-5 lg:px-32 snap-center">
    <!-- <div>
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">Hello!</h1>
      <p class="text-sm md:text-base">👋 Hello, I am Victor Chandra, a full stack engineer. Based in Indonesia.</p>
    </div> -->
    <div>
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">TECH STACK.</h1>
      <div class="flex justify-center sm:justify-start">
        <ul class="flex text-xs px-2 py-2 bg-primary rounded-3xl overflow-x-auto max-w-max no-scrollbar">
          <li class="bg-white px-4 py-1 rounded-full whitespace-nowrap transition-all duration-300 ease-in-out">Working Stack</li>
          <li class="text-white px-4 py-1 whitespace-nowrap">Personal Stack</li>
          <li class="text-white px-4 py-1 whitespace-nowrap">Passionate with</li>
        </ul>
      </div>
      <div class="mt-4 grid grid-cols-3 gap-2 justify-between sm:flex sm:flex-wrap sm:justify-start lg:gap-4 overflow-y-auto h-3/5 sm:h-fit no-scrollbar">
        <template v-for="stacks in stackList" :key="stacks">
          <div v-for="stack in stacks" :key="stack.name" class="bg-white place-self-center p-3 max-w-fit rounded-xl border flex flex-col items-center gap-2">
            <component :is="stack.iconLogo" :width="stack.width" :height="stack.height"/>
            <span v-text="stack.caption" class="text-xs mt-1"></span>
          </div>
        </template>
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