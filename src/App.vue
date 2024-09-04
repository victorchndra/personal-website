<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import HomeView from "./pages/HomeView.vue";
import AboutView from "./pages/AboutView.vue";

export default defineComponent({
  components: {
    Navbar,
    HomeView,
    AboutView
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
      <HomeView />
      <AboutView />
      <!-- <router-view /> -->
    </main>
  </div>
</template>

<style scoped>

</style>
