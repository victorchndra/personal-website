<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  components: {
    Navbar
  },
  setup() {
    
  }
})
</script>

<template>
  <div class=" min-h-screen">
    <header class="max-md:bg-[#FFFFFF80] bg-[#FFFFFF80] px-5 py-5 lg:pt-10 lg:px-16">
      <Navbar />
    </header>
  </div>
</template>

<style scoped>

</style>
