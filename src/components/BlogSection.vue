<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogSection',
  setup() {
    
  },
})
</script>

<template>
  <section id="blog" class="h-[calc(100vh-76px)] md:h-[calc(100vh-108px)] px-5 py-5 flex flex-col gap-5 lg:px-32 snap-center">
    <div class="flex items-center flex-col justify-center h-full pb-20">
      <h1 class="font-bowlby-one-sc text-xl md:text-2xl pb-2">MY BLOG SPACE.</h1>
      <p class="text-center w-5/6 pb-2">{{ $t('blogSection.desc') }}</p>
      <button class="bg-primary text-white px-4 py-2 rounded-full" onclick="comingSoon.showModal()">{{ $t('blogSection.visitBtn') }}</button>
    </div>
    
    <!-- Modal -->
    <dialog id="comingSoon" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 class="text-lg font-bold">👨‍💻 Coming Soon!</h3>
        <p class="py-4">This page is under development ...</p>
      </div>
    </dialog>
  </section>
</template>


<style scoped>

</style>