<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { ChevronDown, Download, Languages, Menu, X } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Navbar',
  components: {
    Menu,
    Download,
    X,
    Languages,
    ChevronDown
  },
  setup() {
    const { locale } = useI18n();
    // const { t } = useI18n()

    const setLanguage = (lang:any) => {
      locale.value = lang
      // localStorage.setItem('lang', lang)
    }

    const navLink = [
      {
        label: 'navbar.expertise',
        url: '#expertise',
      },
      {
        label: 'navbar.work',
        url: '#work',
      },
      {
        label: 'navbar.blog',
        url: '#blog'
      }
    ]

    const downloadBtn = 'navbar.downloadCV'

    const navButton = ref(false)
    
    const handleNavButton = () => {
      navButton.value = !navButton.value
    }
    
    // watchEffect(() => {
    //   const storedLang = localStorage.getItem('lang');
    //   if (storedLang) {
    //     locale.value = storedLang;
    //   }
    // });

    return {
      setLanguage,
      navLink,
      downloadBtn,
      navButton,
      handleNavButton
    }
  }
})
</script>

<template>
  <nav class="w-full flex justify-between items-center">
    <a href="#home" class="z-10 font-londrina-solid text-3xl">VICTOR</a>

    <div 
      class="absolute left-0 max-md:bg-[#ffffffee] w-full flex flex-col items-center gap-6 pb-4 md:pb-0 md:static md:flex-row md:justify-end transition-all ease-in-out duration-500 lg:space-x-8"
      :class="{ 'top-[-500px]': !navButton, 'top-[76px]': navButton }"
    >
      <a :href="item.url"
        v-for="item, index in navLink" :key="index"
        class="hover:text-zinc-500">
        <span>{{ $t(item.label) }}</span>
      </a>
      <!-- <div class="flex border rounded-full px-1 py-1 border-primary">
        <button class="px-2 bg-primary rounded-full text-white hover:bg-zinc-700">EN</button>
        <button class="px-2 text-[#30303080]">ID</button>
      </div> -->
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="hover:bg-zinc-300 py-3 px-4 rounded-lg flex gap-1">
          <Languages class="w-4 text-primary"/>
          <ChevronDown class="w-4 text-zinc-500" />
        </div>
        <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow bg-white">
          <li><button @click="setLanguage('en')"><span class="text-xs border rounded-full px-2 py-1">EN</span>English</button></li>
          <li><button @click="setLanguage('ch')"><span class="text-xs border rounded-full px-2 py-1">CH</span>中文</button></li>
        </ul>
      </div>
      
      <button class=" px-4 py-3 bg-primary text-white rounded-lg flex justify-center items-center gap-1 hover:bg-zinc-700">
        <Download :size="18" /> {{ $t(downloadBtn) }}
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

<style scoped>
.menu li > *:not(ul):not(.menu-title):not(details):active{
  @apply bg-primary;
}
</style>
