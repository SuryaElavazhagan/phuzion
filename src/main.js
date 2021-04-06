import Vue from 'vue';
import {
  Navbar,
  Carousel,
  Button
} from 'buefy';
import App from './App.vue';
import './styles/index.scss';
import './registerServiceWorker';
import router from './router';

Vue.use(Navbar);
Vue.use(Carousel);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
