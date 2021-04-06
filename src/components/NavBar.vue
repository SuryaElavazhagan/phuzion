<template>
  <div class="pn-navbar-wrapper">
    <div class="pn-social-media-bar is-flex is-justify-content-flex-end">
      <a class="pn-social-media-link" href="">
        <i class="fab fa-facebook"></i>
      </a>
      <a class="pn-social-media-link" href="">
        <i class="fab fa-instagram"></i>
      </a>
      <a class="pn-social-media-link" href="">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
    <b-navbar class="pn-navbar">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="http://ourmilfitness.com/wp-content/uploads/MIL-FITNESS-LOGO-FINAL_original-white.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/about' }">
          About
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/gallery' }">
          Gallery
        </b-navbar-item>
        <b-navbar-dropdown label="Forms">
          <b-navbar-item tag="router-link" :to="{ path: '/forms/heath-history-questionnaire' }">
            Health History Questionnaire
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/forms/personal-training-agreement' }">
            Personal Training Agreement
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/forms/client-waiver' }">
            Client Waiver
          </b-navbar-item>
        </b-navbar-dropdown>
        <b-navbar-item tag="router-link" :to="{ path: '/gallery' }">
          Contact us
        </b-navbar-item>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Schedule</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pn-navbar-wrapper {
  width: 100%;
  position: relative;

  .pn-social-media-bar {
    background: rgba(49, 60, 82, 0.84);

    .pn-social-media-link {
      padding: 0.8rem;

      i {
        color: #ffffff;
      }
    }
  }

  .pn-navbar {
    position: absolute;
    width: 100%;
    z-index: 100;
    background: transparent;
    
    .navbar-dropdown > .navbar-item {
      color: black;
    }
  }

  /deep/ .navbar-burger:hover {
    color: #fff;
  }
}

@media screen and (max-width: 1023px) {
  .navbar-item {
    color: #000;
  }
  /deep/ .navbar-link, .navbar-link:hover, .navbar-link.is-active {
    color: #000;
  }
}
</style>