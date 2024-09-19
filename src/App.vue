<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import HomeSection from "./components/HomeSection.vue";
import TechSection from "./components/TechStackSection.vue";
import BlogSection from "./components/BlogSection.vue";
import WorkSection from "./components/WorkSection.vue";

export default defineComponent({
  components: {
    Navbar,
    HomeSection,
    TechSection,
    BlogSection,
    WorkSection,
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
      <div class=" overflow-y-scroll snap-mandatory snap-y h-[calc(100vh-76px)] md:h-[calc(100vh-108px)] no-scrollbar">
        <HomeSection />
        <TechSection />
        <WorkSection />
        <BlogSection />
      </div>
      <!-- <router-view /> -->
    </main>
  </div>
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
