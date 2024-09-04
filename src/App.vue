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
    <header class=" bg-[#FFFFFF90] px-5 py-5 lg:pt-10 lg:px-32 sticky top-0 backdrop-filter backdrop-blur-sm">
      <Navbar />
    </header>
    <main>
      <HomeSection />
      <AboutSection />
      <!-- <router-view /> -->
    </main>
  </div>
</template>

<style scoped>

</style>
