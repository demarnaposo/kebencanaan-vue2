<template>
    <div>
      <!-- Start Header Area -->
      <Header>
        <img slot="logo" :src="logo" />
      </Header>
      <!-- End Header Area -->
  
      <!-- Start Breadcrump Area  -->
      <div
        class="rn-page-title-area pt--120 pb--190 bg_image bg_image--27"
        data-black-overlay="7"
      >
        <v-container v-for="dt in details" ::key="dt.id">
          <v-row>
            <v-col cols="12">
              <div class="text-center blog-single-page-title pt--100">
                <h2 class="heading-title theme-gradient">
                  {{ dt.judul }}
                </h2>
                <ul class="justify-center blog-meta d-flex align-center">
                  <li class="d-flex" v-for="(meta, i) in metaList" :key="i">
                    <span v-html="iconSvg(meta.icon)"></span>{{ dt.tanggal }}
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Breadcrump Area  -->
  
      <!-- Start Blog Details Area  -->
      <div class="rn-blog-details pt--110 pb--70 bg_color--1">
        <v-container v-for="dtl in details" :key="dtl.id">
          <v-row>
            <v-col cols="12">
              <div class="inner-wrapper">
                <div class="inner">
                  <!-- GAMBAR -->
                  <div class="thumbnail" v-if="dtl.kategori_artikel === 'Artikel'">
                    <img :src="dtl.gambar" alt="Blog Images" />
                  </div>
                  <div class="thumbnail" v-if="dtl.kategori_artikel === 'Gambar'">
                    <img :src="dtl.gambar" alt="Blog Images" />
                  </div>
                  <br />
                  <!-- VIDEO -->
                  <div
                    class="video-wrapper position-relative mb--40"
                    v-if="dtl.kategori_artikel === 'Video'"
                  >
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe
                        class="embed-responsive-item"
                        :src="dtl.embed_video"
                        allowfullscreen
                        style="width: 100%; height: 500px"
                      ></iframe>
                    </div>
                  </div>
                  <p class="mt--40">
                    {{ dtl.isi_artikel }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Blog Details Area  -->
  
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from "../../components/header/Header";
  import Footer from "../../components/footer/Footer";
  import feather from "feather-icons";
  import { ValidationObserver } from "vee-validate";
  import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
  import Vue from "vue";
  import axios from "axios";
  import { ref, onMounted } from "vue";
  import VueRouter from "vue-router";
  import Embed from "v-video-embed";
  
  // global register
  Vue.use(Embed);
  Vue.use(VueRouter);
  export default {
    props: ["id", "kategori"],
    components: {
      Header,
      Footer,
      ValidationObserver,
      ValidationProvider,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
        items: [
          {
            thumb: require("../../assets/images/blog/bl-big-01.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        metaList: [
          {
            icon: "clock",
          },
        ],
        index: null,
      };
    },
  
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
      onSubmit() {
        console.log(this.formData);
      },
    },
    setup(props) {
      const details = ref([]);
  
      // const route = useRoute();
  
      onMounted(() => {
        axios
          .get(
            `https://dev-kebencanaan.kotabogor.go.id/api/edukasi/detail/${props.id}/${props.kategori}`
          )
          .then((response) => {
            details.value = response.data.data;
            // console.log(response.data.data);
          });
      });
  
      return {
        details,
      };
    },
  };
  </script>
  