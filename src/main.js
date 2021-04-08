import Vue from 'vue';
import {
  Navbar,
  Carousel,
  Button
} from 'buefy';
import AOS from 'aos';
import App from './App.vue';
import './styles/index.scss';
import './registerServiceWorker';
import router from './router';

AOS.init();

Vue.use(Navbar);
Vue.use(Carousel);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
