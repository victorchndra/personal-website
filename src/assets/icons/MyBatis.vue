<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyBatis',
  props: [
    'width', 
    'height',
  ]
})
</script>

<template>
  <img src="./svg/Mybatis_logo.svg" alt="MyBatis" :width="width" :height="height">

</template>