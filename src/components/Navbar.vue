<script lang="ts">
import { defineComponent } from 'vue'
import { Download, Menu, X } from 'lucide-vue-next';

export default defineComponent({
  name: 'Navbar',
  components: {
    Menu,
    Download,
    X
  },
  data() {
    return {
      navButton: false as boolean,
      navItem: {
        navLink: ['About', 'Posts', 'Works'] as string[],
        downloadBtn: 'Download CV' as string
      }
    }
  },
  methods: {
    handleNavButton(): void {
      this.navButton = !this.navButton
    }
  }
})
</script>

<template>
  <nav class="w-full flex justify-between items-center">
    <a href="" class="z-10 font-londrina-solid text-3xl">VICTOR</a>

    <div 
      class="absolute left-0 max-md:bg-[#FFFFFF90] w-full flex flex-col items-center gap-6 pb-4 md:pb-0 md:static md:flex-row md:justify-end transition-all ease-in-out duration-500 lg:space-x-8"
      :class="{ 'top-[-500px]': !navButton, 'top-[76px]': navButton }"
    >
      <a href="#" 
        v-for="item, index in navItem.navLink" :key="index"
        class="hover:text-orange-500">
        {{ item }}
      </a>
      <div class="flex border rounded-full px-1 py-1 border-primary">
        <button class="px-2 bg-primary rounded-full text-white hover:bg-zinc-700">EN</button>
        <button class="px-2 text-[#30303080]">ID</button>
      </div>
      <button class=" px-4 py-3 bg-primary text-white rounded-lg flex justify-center items-center gap-1 hover:bg-zinc-700">
        <Download :size="18" /> {{ navItem.downloadBtn }}
      </button>
    </div>
    
    <Menu 
      v-if="navButton === false"
      class="hover:cursor-pointer md:hidden z-10"
      @click="handleNavButton()"/>

    <X 
      v-if="navButton === true"
      class="hover:cursor-pointer md:hidden z-10"
      @click="handleNavButton()"
    />
  </nav>
</template>
