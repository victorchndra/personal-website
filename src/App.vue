<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";

export default defineComponent({
  components: {
    Navbar,
    Home,
    About
  },
  setup() {
    
  }
})
</script>

<template>
  <div class=" min-h-screen">
    <header class=" bg-[#FFFFFF90] px-5 py-5 lg:pt-10 lg:px-16 sticky top-0 backdrop-filter backdrop-blur-sm">
      <Navbar />
    </header>
    <main >
      <Home />
      <About />
    </main>
  </div>
</template>

<style scoped>

</style>
