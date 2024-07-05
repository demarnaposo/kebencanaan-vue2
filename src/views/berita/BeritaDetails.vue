<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logoLight" class="logo-light" />
      <img slot="logo-dark" :src="logoDark" class="logo-dark" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--8"
      data-black-overlay="7"
    >
      <v-container v-for="bt in beritadetail" :key="bt.id">
        <v-row>
          <v-col cols="12">
            <div class="text-center blog-single-page-title pt--100">
              <h2 class="heading-title theme-gradient">
                {{ bt.judul }}
              </h2>
              <ul class="justify-center blog-meta d-flex align-center">
                <li class="d-flex" v-for="(meta, i) in metaList" :key="i">
                  <span v-html="iconSvg(meta.icon)"></span>Tanggal : {{ bt.tgl }}
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
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner" v-for="dd in beritadetail" :key="dd.id">
                <p v-html="dd.isi">
                </p>
                <div class="thumbnail">
                  <img :src="dd.foto" alt="Gambar" />
                </div>
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
import Vue, { ref, onMounted } from "vue";
import axios from "axios";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default {
  props: ["id"],
  components: {
    Header,
    Footer,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      logo: require("../../assets/images/logo/logo.png"),
      metaList: [
        {
          icon: "clock",
          text: "May 18, 2020",
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
    const beritadetail = ref([]);

    onMounted(() => {
      axios
        .get(`https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana/berita/${props.id}`)
        .then((response) => {
          beritadetail.value = response.data.data;
          console.log(response.data.data);
        });
    });
    return {
      beritadetail,
    };
  },
};
</script>
