import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles';
import CoolLightBox from 'vue-cool-lightbox';
import VueScrollactive from 'vue-scrollactive';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
import './assets/scss/main.scss';
      //import datatable
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(CoolLightBox);
Vue.use(VueScrollactive);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
