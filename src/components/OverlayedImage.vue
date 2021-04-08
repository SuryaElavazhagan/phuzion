<template>
  <div class="is-flex pn-overlayed-image-wrapper">
    <img :src="src">
    <div class="pn-overlay"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.pn-overlayed-image-wrapper {
  position: relative;
  .pn-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    transition: background 0.3s ease;

    &:hover {
      background: rgba($color: #000000, $alpha: 0.4);
    }
  }
}
</style>