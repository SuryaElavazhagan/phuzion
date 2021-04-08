<template>
  <div class="pn-overcast is-flex is-flex-direction-column is-justify-content-center">
    <b-carousel :autoplay="false" :indicator="false" :arrow="true" :repeat="true" :arrow-hover="false" icon-pack="fa">
      <b-carousel-item v-for="(image, i) in images" :key="i">
        <div class="pn-image p-3">
          <img :src="image" />
        </div>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped>
.pn-overcast {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  background: rgba($color: #000000, $alpha: 0.6);

  .pn-image {
    object-fit: contain;
    height: 85%;
  }
}
</style>