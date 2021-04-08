<template>
  <div class="pn-home">
    <b-carousel :pause-info="false" icon-pack="fa">
      <b-carousel-item v-for="slide in slides" :key="slide.image">
        <img class="pn-slide-image" :src="slide.image" />
      </b-carousel-item>
    </b-carousel>
    <section class="section">
      <div class="columns">
        <div
          class="column is-flex is-flex-direction-column is-justify-content-center"
        >
          <p
            class="is-size-4 has-text-centered has-text-left-desktop is-italic"
          >
            Welcome to
          </p>
          <h2 class="title is-3 mt-3 has-text-centered">PHUZION FITNESS</h2>
          <p>
            Whatever your health and fitness goals are, Movement is Life can
            help you achieve them with our fun workout sessions designed to
            improve fitness, confidence, health and strength.
          </p>
          <p class="mt-3">
            Join us and start your health and fitness journey today …..There is
            Life when we move!!
          </p>
        </div>
        <div class="column is-flex is-justify-content-center">
          <img
            class="about-image"
            src="https://images.unsplash.com/photo-1579758682665-53a1a614eea6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </div>
        <div class="column">
          <img src="../assets/logo.png" alt="">
        </div>
      </div>
    </section>
    <section class="section is-relative pn-session-section">
      <div class="is-overlay pn-session-overlay"></div>
      <h1 class="title has-text-centered">OUR SESSIONS</h1>
      <h2 class="subtitle has-text-centered m-5">ONE-TIME</h2>
      <p class="has-text-centered m-4">1-hour sessions</p>
      <p class="has-text-centered m-4">Single (1 person) $ 60</p>
      <p class="has-text-centered m-4">Tandem (2 persons) $35</p>
      <p class="has-text-centered m-4">Group (3-5 persons) $25</p>
      <h2 class="subtitle has-text-centered m-5">WEEKLY</h2>
      <p class="has-text-centered m-4">Single – $25 per session- $50</p>
      <p class="has-text-centered m-4">Tandem $20- $40</p>
      <p class="has-text-centered m-4">Group $15 – $30</p>
      <p class="has-text-centered m-4">One time registration Fee of $35</p>
      <h2 class="subtitle has-text-centered m-5">Monthly</h2>
      <p class="has-text-centered m-4">
        Single – $20 per session / 235 per month
      </p>
      <p class="has-text-centered m-4">
        Tandem -$15 per session / 175 per month
      </p>
      <p class="has-text-centered m-4">
        Group – $10 per session/ 120 per month
      </p>
      <p class="has-text-centered m-4">
        One time Registration Fee of $35 Registration Fee + Free gift (while
        stocks last) Inclusive of Assessment & Goal tracking
      </p>
      <h2 class="subtitle has-text-centered m-5">SCHEDULING</h2>
      <p class="has-text-centered m-4">
        Do you want individual attention while training or prefer to train with
        family and/or friends? Are you intimidated by gyms and want to train at
        home or on the beach? Then Mil Fitness is the perfect place for you
        then.
      </p>
      <div class="is-flex is-justify-content-center">
        <b-button type="is-light pn-session-book px-5 py-3">BOOK A SESSION</b-button>
      </div>
    </section>
    <section class="section">
      <p class="is-size-5 has-text-centered is-italic">
        Hear what others have to say...
      </p>
      <h1 class="title m-2 has-text-centered">CLIENT SUCCESS STORIES</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      slides: [
        {
          image:
            "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        },
        {
          image:
            "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1457&q=80",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.pn-home {
  .pn-slide-image {
    width: 100%;
    object-fit: cover;
    height: 94vh;
    max-height: 94vh;
  }

  .about-image {
    width: 82%;
    height: 82%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .pn-session-section {
    background: #22B573;
    color: white;

    .title, .subtitle {
      color: white;
    }

    .pn-session-overlay {
      background-color: rgba(255,255,255,0.71);
      background-image: url("http://ourmilfitness.com/wp-content/uploads/millennial-african-american-woman-checking-fitness-KBARPNH.jpg");
      background-position: center center;
      background-size: cover;
      opacity: 0.1;
      transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 6.5px ) hue-rotate( 0deg );
    }

    .pn-session-book {
      color: #22B573;
    }
  }
}

@media (max-width: 35rem) {
  .pn-home {
    .pn-slide-image {
      height: 70vh;
      max-height: 70vh;
    }
  }
}
</style>
