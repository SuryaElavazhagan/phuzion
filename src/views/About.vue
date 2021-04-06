<template>
  <div class="pn-about">
    <section class="hero is-halfheight is-relative">
      <div class="is-overlay pn-about-us-overlay"></div>
      <div class="hero-body is-relative">
        <div>
          <p class="title has-text-centered">ABOUT US</p>
          <p class="subtitle has-text-centered is-size-6 mt-4">
            With skills in personal training and pilates, certified trainer
            Amanda Maximilien creates tailor made programmes specifically suited
            to you and your lifestyle.
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <h1 class="title has-text-centered">GET TO KNOW US</h1>
      <p class="has-text-centered is-size-5 my-5">
        Do you want individual attention while training or prefer to train with
        family and/or friends? Are you intimidated by gyms and want to train at
        home or on the beach?
      </p>
      <p class="has-text-centered is-size-5 my-5">
        Whatever your health and fitness goals are, Movement is Life can help
        you achieve them with our fun workout sessions designed to improve
        fitness, confidence, health and strength.
      </p>
      <p class="has-text-centered is-size-5 my-5 has-text-weight-semibold">
        Join us and start your health and fitness journey today. There is Life
        when we move!!
      </p>
      <div class="is-flex is-justify-content-center">
        <b-button type="is-success" class="p-4"> Get started now </b-button>
      </div>
    </section>
    <img
      src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt=""
      srcset=""
    />
    <p class="is-uppercase has-text-weight-semibold has-text-centered my-4">
      Althia Maximilien
    </p>
    <section class="section">
      <h1 class="title has-text-centered is-uppercase">
        one of the exciting new coaches with Movement Is Life
      </h1>
      <p class="has-text-centered is-size-5 my-5">
        Althia believes that with her training and experience that she can help
        you to achieve and surpass your goals.
      </p>
      <p class="has-text-centered is-size-5 my-5">
        Althia has a combined (15) years of competitive and coaching experience.
        During the more than 12 years of competition at the local and
        international levels, she has proved herself to be worthy and
        successful. Althia was very successful as a local athlete, and went on
        to represent Barbados internationally. While studying at college in the
        United States (Missouri State University), she was a six-time conference
        champion, school record holder and was ranked as high as 13th in the USA
        in the 400m track event…that ranking earned her NCAA All-American
        honours. Althia’s coaching career began as a graduate assistant coach at
        MSU. She started her coaching in 2014, worked for two years alongside
        some very highly ranked coaches…including track and field and strength
        and conditioning coaches, and athletic trainers.
      </p>
      <p class="has-text-centered is-size-5 my-5 has-text-weight-semibold">
        Following her two-year internship, she ventured on her own and began
        personal coaching in the USA, prior to her 2018 return to Barbados.
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.pn-about {
  .pn-about-us-overlay {
    background-color: #000000;
    background-image: url(http://ourmilfitness.com/wp-content/uploads/DSC_1603-add-logo-in-place-of-nor.jpg);
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
