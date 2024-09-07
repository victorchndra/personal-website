<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import HomeSection from "./components/HomeSection.vue";
import AboutSection from "./components/AboutSection.vue";

export default defineComponent({
  components: {
    Navbar,
    HomeSection,
    AboutSection
  },
  setup() {
    
  }
})
</script>

<template>
  <div class=" min-h-screen">
    <header class=" bg-[#FFFFFF90] px-5 py-5 lg:pt-10 lg:px-32 sticky top-0 backdrop-filter backdrop-blur-md">
      <Navbar />
    </header>
    <main>
      <div class=" overflow-y-scroll snap-mandatory snap-y h-[calc(100vh-68px)] lg:h-[calc(100vh-108px)] no-scrollbar">
        <HomeSection />
        <AboutSection />
      </div>
      <!-- <router-view /> -->
    </main>
  </div>
</template>

<style scoped>
</style>
