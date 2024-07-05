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


import "../src/assets/tailwind.css";
import "../public/vendor/fontawesome/css/all.min.css";
import "../public/vendor/bootstrap/css/bootstrap.min.css";
import "../public/vendor/fontawesome/js/all.min.js";
import "../public/vendor/jquery/jquery.min.js";
import "../public/vendor/retina-1.3.0/retina.min.js";
import "../public/vendor/bootstrap/js/bootstrap.min.js";
import "../public/vendor/bootstrap/js/bootstrap.min.js";


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import './assets/tailwind.css'

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

