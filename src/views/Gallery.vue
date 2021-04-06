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
  </div>
</template>

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