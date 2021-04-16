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
          <img src="../assets/logo.png" alt="" />
        </div>
      </div>
    </section>
    <section class="section is-relative pn-session-section">
      <div class="is-overlay pn-session-overlay"></div>
      <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">
          <h1 class="title has-text-left-tablet has-text-centered">
            OUR SESSIONS
          </h1>
          <div class="columns">
            <div class="column">
              <h2 class="subtitle has-text-left-tablet has-text-centered m-5">
                ONE-TIME
              </h2>
              <p class="has-text-centered has-text-left-tablet m-4">
                1-hour sessions
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                Single (1 person) $ 60
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                Tandem (2 persons) $35
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                Group (3-5 persons) $25
              </p>
            </div>
            <div class="column">
              <h2 class="subtitle has-text-centered has-text-left-tablet m-5">
                WEEKLY
              </h2>
              <p class="has-text-centered has-text-left-tablet m-4">
                Single – $25 per session- $50
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                Tandem $20- $40
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                Group $15 – $30
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                One time registration Fee of $35
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h2 class="subtitle has-text-centered has-text-left-tablet m-5">
                Monthly
              </h2>
              <p class="has-text-centered has-text-left-tablet m-4">
                Single – $20 per session / 235 per month
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                Tandem -$15 per session / 175 per month
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                Group – $10 per session/ 120 per month
              </p>
              <p class="has-text-centered has-text-left-tablet m-4">
                One time Registration Fee of $35 Registration Fee + Free gift
                (while stocks last) Inclusive of Assessment & Goal tracking
              </p>
            </div>
            <div class="column">
              <h2 class="subtitle has-text-centered has-text-left-tablet m-5">
                SCHEDULING
              </h2>
              <p class="has-text-centered has-text-left-tablet m-4">
                Do you want individual attention while training or prefer to
                train with family and/or friends? Are you intimidated by gyms
                and want to train at home or on the beach? Then Mil Fitness is
                the perfect place for you then.
              </p>
              <div class="is-flex is-justify-content-center">
                <b-button type="is-light pn-session-book px-5 py-3"
                  >BOOK A SESSION</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <p class="is-size-5 has-text-centered is-italic">
        Hear what others have to say...
      </p>
      <h1 class="title m-2 has-text-centered">CLIENT SUCCESS STORIES</h1>
      <div class="m-6">
        <b-carousel :pause-info="false" icon-pack="fa">
          <b-carousel-item
            v-for="(testimonial, index) in testimonials"
            :key="index"
          >
            <div class="content">
              <p class="subtitle is-5 has-text-centered">
                "{{ testimonial.testimony }}"
              </p>
            </div>
            <div class="is-flex is-justify-content-center mb-6">
              <img
                class="testimony-image object-fit-cover"
                :src="testimonial.image"
              />
              <div
                class="is-flex is-flex-direction-column ml-2 is-justify-content-center"
              >
                <p class="has-text-weight-bold is-size-6 letter-spacing-1">
                  {{ testimonial.name }}
                </p>
                <p class="mt-2 is-size-7 letter-spacing-1">
                  {{ testimonial.location }}
                </p>
              </div>
            </div>
          </b-carousel-item>
        </b-carousel>
      </div>
      <p
        class="has-text-weight-bold is-size-6 has-text-centered letter-spacing-1"
      >
        IT'S YOUR TURN
      </p>
      <div class="my-3 is-flex is-justify-content-center">
        <b-button type="is-success"> SIGN UP TODAY </b-button>
      </div>
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
      testimonials: [
        {
          testimony:
            "I would highly recommend Amanda for anyone at any fitness level who would like to achieve their fitness goals . She’s really help me better understand how to move my body better and she has a wealth of knowledge when it comes to exercises that will be right for you.",
          image: "http://ourmilfitness.com/wp-content/uploads/mari-holder.jpg",
          name: "MARIO HOLDER",
          location: "BARBADOS",
        },
        {
          testimony:
            "I would highly recommend Amanda for anyone at any fitness level who would like to achieve their fitness goals . She’s really help me better understand how to move my body better and she has a wealth of knowledge when it comes to exercises that will be right for you.",
          image: "http://ourmilfitness.com/wp-content/uploads/mari-holder.jpg",
          name: "MARIO HOLDER",
          location: "BARBADOS",
        },
        {
          testimony:
            "I would highly recommend Amanda for anyone at any fitness level who would like to achieve their fitness goals . She’s really help me better understand how to move my body better and she has a wealth of knowledge when it comes to exercises that will be right for you.",
          image: "http://ourmilfitness.com/wp-content/uploads/mari-holder.jpg",
          name: "MARIO HOLDER",
          location: "BARBADOS",
        },
        {
          testimony:
            "I would highly recommend Amanda for anyone at any fitness level who would like to achieve their fitness goals . She’s really help me better understand how to move my body better and she has a wealth of knowledge when it comes to exercises that will be right for you.",
          image: "http://ourmilfitness.com/wp-content/uploads/mari-holder.jpg",
          name: "MARIO HOLDER",
          location: "BARBADOS",
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

  .testimony-image {
    width: 64px;
    height: 64px;
    clip-path: circle();
  }

  .pn-session-section {
    background: #22b573;
    color: white;

    .title,
    .subtitle {
      color: white;
    }

    .pn-session-overlay {
      background-color: rgba(255, 255, 255, 0.71);
      background-image: url("http://ourmilfitness.com/wp-content/uploads/millennial-african-american-woman-checking-fitness-KBARPNH.jpg");
      background-position: center center;
      background-size: cover;
      opacity: 0.1;
      transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      filter: brightness(100%) contrast(100%) saturate(100%) blur(6.5px)
        hue-rotate(0deg);
    }

    .pn-session-book {
      color: #22b573;
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
