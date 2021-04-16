<template>
  <div class="pn-gallery">
    <section class="hero is-relative">
      <div class="is-overlay pn-gallery-overlay"></div>
      <div class="hero-body is-relative">
        <div>
          <p class="title has-text-centered">GALLERY</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns is-hidden-desktop">
        <div class="column" v-for="(image, index) in images" :key="image">
          <overlayed-image
            class="pn-image-overlay"
            data-aos="fade-up"
            :src="image"
            @click.native="toggleOvercast(true, index)"
          />
        </div>
      </div>
    </section>
    <gallery-overcast v-if="showOvercast" :index="selectedIndex" :images="images" @click.native.self="toggleOvercast(false)" />
  </div>
</template>

<script>
import OverlayedImage from '../components/OverlayedImage.vue';
import GalleryOvercast from '../components/GalleryOvercast.vue';

export default {
  components: {
    OverlayedImage,
    GalleryOvercast
  },
  data() {
    return {
      showOvercast: false,
      selectedIndex: -1,
      images: [
        'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1584952449180-f8fddc0b03a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1541600383005-565c949cf777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1597376833295-40a54d5e69fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80',
        'https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/flagged/photo-1580051743902-bfebe05d70e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1440&q=80',
        'https://images.unsplash.com/flagged/photo-1566063900259-8ee0cb283b3b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1570104467660-60bdebbfa5b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        'https://images.unsplash.com/photo-1562925661-11a6b4c8b9b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
        'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      ]
    };
  },
  methods: {
    toggleOvercast(value, index) {
      this.showOvercast = value;
      this.selectedIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.pn-gallery {
  .pn-gallery-overlay {
    background-color: #000000;
    background-image: url("http://ourmilfitness.com/wp-content/uploads/overlay.jpg");
    background-position: bottom center;
    background-repeat: repeat;
    background-size: cover;
    opacity: 1;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    filter: brightness(66%) contrast(100%) saturate(99%) blur(5.4px)
      hue-rotate(0deg);
  }

  .hero-body {
    z-index: 1;
    .title,
    .subtitle {
      color: white;
    }
  }
}
</style>