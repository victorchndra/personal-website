<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Vue',
  props: [
    'width', 
    'height',
  ]
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.32 170.02" :width="width" :height="height"><defs></defs><title>logo</title><polygon class="cls-1" points="120.83 0 98.16 39.26 75.49 0 0 0 98.16 170.02 196.32 0 120.83 0"/><polygon class="cls-2" points="120.83 0 98.16 39.26 75.49 0 39.26 0 98.16 102.01 157.06 0 120.83 0"/></svg>
</template>

<style scoped>
.cls-1{
  fill:#42b883;
}

.cls-2{
  fill:#35495e;
}
</style>