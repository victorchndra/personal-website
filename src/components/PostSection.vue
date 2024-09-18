<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Post Section',
  setup() {
    
  },
})
</script>

<template>
  <section class="h-[calc(100vh-76px)] md:h-[calc(100vh-108px)] px-5 py-5 flex flex-col gap-5 lg:px-32 snap-center">
    <div class="flex items-center flex-col">
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">MY POST.</h1>
      <p class="text-center w-5/6 pb-2">Come and visit my blog. I'd share my personal insights and thoughts...</p>
      <button class="bg-primary text-white px-4 py-2 rounded-full">Visit my blog</button>
    </div>
  </section>
</template>


<style scoped>

</style>