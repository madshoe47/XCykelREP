<!--<template>
  <vueper-slides :dragging-distance="70" prevent-y-scroll>
    <vueper-slide
      v-for="i in is"
      :key="i"
      content="Drag the slide horizontally..."
      :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]"
    />
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides"; import
"vueperslides/dist/vueperslides.css"; export default { components: {
VueperSlides, VueperSlide } };
</script>

<style>
</style>