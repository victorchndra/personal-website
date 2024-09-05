<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutSection',
  setup() {
    
  },
})
</script>

<template>
  <section class="h-[calc(100vh-68px)] lg:h-[calc(100vh-108px)] px-5 py-5">
    <div>
      <h1>Hello!</h1>
      <p>👋 Hello, I am Victor Chandra, a full stack engineer. Based in Indonesia.</p>
    </div>
    <div>
      <h1>TECH STACK</h1>
      <ul>
        <li>Currently working with:</li>
        <li>Previously worked with:</li>
        <li>Able to work with:</li>
      </ul>
      <div>
        <!-- icon -->
      </div>
    </div>
  </section>
</template>