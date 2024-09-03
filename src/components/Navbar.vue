<template>
  <nav class="w-full flex justify-between items-center">
    <a href="">VICTOR</a>

    <!-- v-if="navButton === true" -->
    <div 
      class="absolute left-0 max-md:bg-[#FFFFFF80] w-full flex flex-col items-center gap-6 pb-4 md:pb-0 md:static md:flex-row md:justify-end transition-all ease-in-out duration-500"
      :class="{ 'top-[-500px]': !navButton, 'top-16': navButton }"
    >
      <a href="#">About</a>
      <a href="#">Posts</a>
      <a href="#">Works</a>
      <div>
        <a href="#">ID</a>
        <a href="#">EN</a>
      </div>
      <button class=" px-4 py-3 bg-[#303030] text-white rounded-lg flex justify-center items-center gap-1 hover:bg-zinc-700">
        <Download :size="18" /> Download CV
      </button>
    </div>
    <div>
      <Menu class="hover:cursor-pointer md:hidden" @click="handleNavButton()"/>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Download, Menu } from 'lucide-vue-next';

export default defineComponent({
  components: {
    Menu,
    Download
  },
  data() {
    return {
      navButton: false as boolean
    }
  },
  methods: {
    handleNavButton() {
      this.navButton = !this.navButton
      console.log(this.navButton)
    }
  }
})
</script>


