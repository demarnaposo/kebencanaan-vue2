import Vue from 'vue';
import VueRouter from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
// import Missing from '../views/404.vue';
//import Demo from '../views/Demo.vue'
import axios from 'axios';
// import { createRouter, createWebHistory } from 'vue-router';

// axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.baseURL = 'https://dev-kebencanaan.kotabogor.go.id/admin/';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'SatuDataKebencanaan',
    meta: {
      title: 'Satu Data Kebencanaan Kota Bogor',
    },
    component: () =>
      import('../views/all-home-version/LandingHomeParticle.vue'),
  },

  {
    path: '/landing-home-particle',
    name: 'LandingHomeParticle',
    meta: {
      title:
        'Landing Home',
    },
    component: () =>
      import('../views/all-home-version/LandingHomeParticle.vue'),
  },

  // {
  //   path: '*',
  //   component: Missing,
  //   meta: {
  //     title: '404 - VueJS Creative Agency and Portfolio Template',
  //   },
  // },

  {
    path: '/portfolio',
    name: 'Portfolio',
    meta: {
      title: 'Portofolio',
    },
    component: () => import('../views/portfolio/Portfolio.vue'),
  },
  {
    path: '/edukasi',
    name: 'Edukasi',
    meta: {
      title: 'Edukasi',
    },
    component: () => import('../views/edukasi/Edukasi.vue'),
  },
  {
    path: '/edukasi-details/:id/:kategori',
    name: 'DataEdukasiDetails',
    meta: {
      title: 'Edukasi Details',
    },
    component: () => import('../views/edukasi/BlogDetails.vue'),
    props: true,
  },
  {
    path: '/berita',
    name: 'Berita',
    meta: {
      title: 'Berita',
    },
    component: () => import('../views/berita/Berita.vue'),
  },
  {
    path: '/berita-details/:id',
    name: 'Berita Details',
    meta: {
      title: 'Berita Details',
    },
    component: () => import('../views/berita/BeritaDetails.vue'),
    props: true,
  },
  {
    path: '/data-kebutuhan',
    name: 'Data Kebutuhan',
    meta: {
      title: 'Data Kebutuhan Bencana',
    },
    component: () => import('../views/data-kebutuhan/DataKebutuhan.vue'),
  },
  {
    path: '/datakebutuhan-details/:id',
    name: 'DetailsDataKebutuhan',
    meta: {
      title: 'Details Data Kebutuhan',
    },
    component: () => import('../views/data-kebutuhan/DataKebutuhanDetails.vue'),
    props: true,
  },
  {
    path: '/galeri',
    name: 'GaleriFotoVideo',
    meta: {
      title: 'Galeri Foto & Vidio',
    },
    component: () => import('../views/galeri/Galeri.vue'),
  },
  // kerusakan dan korban
  {
    path: '/bencana/:id/:slug',
    name: 'DataKerusakanDetails',
    meta: {
      title: 'Data Kerusakan & Korban Details | Satu Data Kebencanaan Kota Bogor',
    },
    component: () => import('../views/kerusakanKorban/detail.vue'),
    props: true,
  },
  {
    path: '/bencana/:bencana/:kec/:jenis/selengkapnya',
    name: 'SelengkapnyaKerusakanKorban',
    meta: {
      title: 'Selengkapnya Kerusakan dan Korban | Satu Data Kebencanaan Kota Bogor',
    },
    component: () => import('../views/kerusakanKorban/selengkapnya.vue'),
    props: true,
  },
  {
    path: '/penanggulangan',
    name: 'PenanggulanganBencana',
    meta: {
      title: 'Penanggulangan Bencana | Satu Data Kebencanaan Kota Bogor',
    },
    component: () => import('../views/penanggulangan/Penanggulangan.vue'),
  },

  {
    path: '/sejarah',
    name: 'Sejarah',
    meta: {
      title: 'Sejarah | Satu Data Kebencanaan Kota Bogor',
    },
    component: () =>
      import('../views/profil/Sejarah.vue'),
  },

  {
    path: '/sambutan',
    name: 'SambutanKepalaBPBD',
    meta: {
      title: 'Sambutan Kepala | Satu Data Kebencanaan Kota Bogor',
    },
    component: () =>
      import('../views/profil/Sambutan.vue'),
  },

  {
    path: '/struktur',
    name: 'StrukturOrganisasi',
    meta: {
      title: 'Struktur Organisasi | Satu Data Kebencanaan Kota Bogor',
    },
    component: () =>
      import('../views/profil/Struktur.vue'),
  },
  {
    path: '/visimisi',
    name: 'VisiMisi',
    meta: {
      title: 'Visi & Misi | Satu Data Kebencanaan Kota Bogor',
    },
    component: () =>
      import('../views/profil/Visimisi.vue'),
  },
  {
    path: '/dokumen',
    name: 'Dokumen',
    meta: {
      title: 'Dokumen | Satu Data Kebencanaan Kota Bogor',
    },
    component: () =>
      import('../views/dokumen/Dokumen.vue'),
  },
  // {
  //   path: '/edukasi-details/:id/:kategori',
  //   name: 'DataEdukasiDetails',
  //   meta: {
  //     title: 'Edukasi Details',
  //   },
  //   component: () => import('../views/edukasi/BlogDetails.vue'),
  //   props: true,
  // },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
});

// const router = createRouter({
//   history: createWebHistory(),
//   routes // <-- routes
// })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
