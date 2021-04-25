<template>
  <div class="pn-contact-us">
    <section class="hero is-halfheight is-relative">
      <div class="is-overlay pn-contact-us-overlay"></div>
      <div class="hero-body is-relative is-justify-content-center">
        <div>
          <p class="title has-text-centered">CONTACT US</p>
        </div>
      </div>
    </section>
    <section class="section is-medium">
      <div class="columns">
        <div class="column">
          <h2 class="is-size-1 mb-5 has-text-weight-bold">
            START YOUR JOURNEY TODAY!
          </h2>
          <p class="is-size-6 my-4">CONNECT WITH US</p>
          <div class="pn-social-media-bar is-flex">
            <a
              class="pn-social-media-link mx-2"
              href="https://www.facebook.com/phuzionperformance/"
              target="_blank"
            >
              <i class="fab fa-facebook"></i>
            </a>
            <a
              class="pn-social-media-link mx-2"
              href="https://twitter.com/PhuzionP"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              class="pn-social-media-link mx-2"
              href="https://www.instagram.com/phuzionperformance/?hl=en"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <p class="is-size-6 my-4">SCHEDULE A SESSION</p>
          <b-button>Click Here</b-button>
        </div>
        <div class="column px-3">
          <div class="card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15543.267206933848!2d-59.5851407!3d13.1107893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x355d2531850008e0!2sPhuzion%20Performance!5e0!3m2!1sen!2sin!4v1619368374698!5m2!1sen!2sin"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.pn-contact-us {
  .pn-contact-us-overlay {
    background-color: #000000;
    background-image: url("http://ourmilfitness.com/wp-content/uploads/DSC_1675-fix-color.jpg");
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

  .pn-social-media-bar {
    .pn-social-media-link {
      font-size: 18px;
      color: white;
      background-color: #22b573;
      padding: 12px;
      clip-path: circle();
    }
  }
}
</style>