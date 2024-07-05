<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePage>
      <img slot="logo" :src="logoLight" class="logo-light" />
      <img slot="logo-dark" :src="logoDark" class="logo-dark" />
    </HeaderOnePage>
    <!-- End Header Area -->
    <div class="im_modern_slider" id="home">
      <!-- Start Slider Area -->
      <SliderThree :sliderData="sliderContent1" />
      <!-- End Slider Area -->
    </div>
    <!-- End Slider Area -->
    <!-- Start Portfolio Details Area  -->
    <div id="bencana">
      <div class="rn-portfolio-details ptb--120 bg_color--1">
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="text-center section-title mb--30">
                <h2 class="heading-title">Jumlah Kejadian Bencana</h2>
                <p class="description">
                  Total kejadian bencana sesuai Kecamatan di Kota Bogor
                  <br />
                  Data terbaru pada tanggal 1 November 2023
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <TabTwo />
          </v-row>
        </v-container>
        <v-container
          ><br /><br />
          <v-row>
            <v-col cols="12">
              <div class="text-center section-title mb--30">
                <h2 class="heading-title">Kerusakan dan Korban</h2>
                <p class="description">
                  Total kejadian bencana sesuai Kecamatan di Kota Bogor
                  <br />
                  Data terbaru pada tanggal 1 November 2023
                </p>
              </div>
            </v-col>
          </v-row>
          <form @submit.prevent="onSubmitKerusakan">
            <v-row class="bg-warning">
              <v-col lg="3" md="3" sm="3" cols="3" class="mt_sm--30 mt_md--30">
                <div
                  class="single-column custom-color"
                  style="background: #ffc107"
                >
                  <h6 class="tilte">Jenis Bencana</h6>
                  <p>
                    <select
                      class="form-control"
                      name="bencana"
                      id="bencana"
                      v-model="params.jenis"
                    >
                      <option
                        v-for="jns in jenisbencana"
                        :key="jns.id"
                        :value="jns.id"
                      >
                        {{ jns.jenis }}
                      </option>
                    </select>
                  </p>
                </div>
              </v-col>
              <v-col lg="3" md="3" sm="3" cols="3" class="mt_sm--30 mt_md--30">
                <div
                  class="single-column custom-color"
                  style="background: #ffc107"
                >
                  <h6 class="tilte">Status Bencana</h6>
                  <p>
                    <select
                      class="form-control"
                      name="bencana"
                      id="bencana"
                      v-model="params.bencana"
                    >
                      <option
                        v-for="st in statusbencana"
                        :key="st.id"
                        :value="st.id"
                      >
                        {{ st.nama }}
                      </option>
                    </select>
                  </p>
                </div>
              </v-col>
              <v-col lg="3" md="3" sm="3" cols="3" class="mt_sm--30 mt_md--30">
                <div
                  class="single-column custom-color"
                  style="background: #ffc107"
                >
                  <h6 class="tilte">Kecamatan</h6>
                  <p>
                    <select
                      class="form-control"
                      name="kecamatan_id"
                      v-model="params.kec_id"
                    >
                      <option
                        v-for="kcmtn in kecamatan"
                        :key="kcmtn.id"
                        :value="kcmtn.id"
                      >
                        {{ kcmtn.nama_kecamatan }}
                      </option>
                    </select>
                  </p>
                </div>
              </v-col>
              <v-col lg="3" md="3" sm="3" cols="3" class="mt_sm--30 mt_md--30">
                <br />
                <div
                  class="single-column custom-color"
                  style="background: #ffc107"
                >
                  <button type="submit" class="btn btn-dark btn-md btn-block">
                    Filter
                  </button>
                </div>
              </v-col>
            </v-row>
          </form>
        </v-container>
        <!-- Start Portfolio Area -->
        <div class="portfolio-sacousel-inner pb--30">
          <div class="loader" v-if="loader"></div>
          <div v-if="statusFilter">
            <div class="thumbnail_inner">
              <div class="thumbnail">
                <div
                  class="
                    container
                    alert alert-danger alert-dismissible
                    fade
                    show
                    my-2
                  "
                  role="alert"
                >
                  {{ statusFilter }}
                </div>
              </div>
            </div>
          </div>
          <div v-if="filterKerusakan.length > 0">
            <ListKerusakanKorban :dataKerusakan="filterKerusakan" />
          </div>
        </div>
        <v-container>
          <v-row>
            <v-col lg="12">
              <div v-if="filterKerusakan.length > 0">
                <div class="text-center view-more-btn mt--60">
                  <router-link
                    class="btn-default"
                    :to="{
                      name: 'SelengkapnyaKerusakanKorban',
                      params: {
                        kec: params.kec_id,
                        jenis: params.jenis,
                        bencana: params.bencana,
                      },
                    }"
                    ><span>Lihat Selengkapnya </span></router-link
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <!-- End Portfolio Area -->
      </div>
    </div>
    <!-- Start Call To Action Area  -->
    <div id="edukasi">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
              <h2 class="heading-title">Edukasi Bencana</h2>
              <p class="description">
                Temukan informasi edukasi mengenai kebencanaan agar Anda dapat
                mencegah,<br />
                meminimalisir dan mengantisipasi ketika terjadi bencana.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div
        class="
          call-to-action-wrapper call-to-action
          callto-action-style-2
          text-white-wrapper
        "
        id="getstart"
      >
      <!-- image -> assets -> bg -->
        <div
          class="bg_image bg_image--30 ptb--80 ptb_lg--80 ptb_md--80 ptb_sm--80" 
          
          data-black-overlay="6"
        >
          <v-container>
            <ServiceFour />
          </v-container>
        </div>
      </div>
    </div>
    <!-- End Call To Action Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
              <h2 class="heading-title">Data Kebutuhan Bencana</h2>
              <p class="description">
                Informasi data kebutuhan bencana seperti kebutuhan logistik,
                pangan, papan, sandang, dan paket kematian
              </p>
            </div>
          </v-col>
          <div
            class="card"
            style="height: 700px; overflow-y: scroll; border: none"
          >
            <div class="card-body">
              <div
                class="card mb-6"
                style="max-width: 100%; border: none"
                v-for="kbth in kebutuhanbencana"
                :key="kbth.id"
              >
                <div class="row g-0">
                  <div class="col-md-3 col-sm-12">
                    <img
                      :src="kbth.foto"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-9 col-sm-12">
                    <div class="card-body">
                      <h5 class="card-title">
                        {{ kbth.bencana }}
                      </h5>
                      <p class="card-text">
                        <small class="text-muted"
                          >Tanggal Bencana : {{ kbth.tgl }}</small
                        ><br />
                        <small class="text-muted"> </small><br />
                        <router-link
                          class="btn-default"
                          :to="{
                            name: 'Details Data Kebutuhan',
                            params: { id: kbth.id },
                          }"
                        >
                          <span>Lihat Kebutuhan & Donasi</span>
                        </router-link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-row>
      </v-container>
    </div>
    <div id="galeri">
      <div class="designer-portfolio-area ptb--120 bg_color--1">
        <div class="rn-masonary-wrapper">
          <v-container>
            <v-row>
              <v-col cols="12">
                <div class="text-center section-title mb--30">
                  <h2 class="heading-title">Galeri Foto & Vidio</h2>
                  <p class="description">
                    Galeri yang berisi foto dan vidio tentang kejadian<br />bencana
                    yang sudah terjadi di wilayah Kota Bogor
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
          <div class="wrapper plr--70 plr_sm--15 plr_md--30">
            <div class="tab-default">
              <PortfolioThree :fotoData="galeriFoto" :videoData="galeriVideo" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="berita">
      <!-- Start Blog Area  -->
      <div class="rn-blog-area pt--120 pb--140">
        <v-container>
          <v-row class="mb--10">
            <v-col lg="12">
              <div class="section-title text-center">
                <h2 class="heading-title">Berita Terkini</h2>
                <p class="description">
                  Info berita terkini yang terdiri dari berita bencana dan
                  berita BPBD
                </p>
              </div>
            </v-col>
          </v-row>
          <br />
          <div class="tab-default">
            <BlogTwo />
          </div>
          <v-row>
            <v-col lg="12">
              <div class="text-center view-more-btn mt--60">
                <a class="btn-default" href="/berita"
                  ><span>Lihat Selengkapnya</span></a
                >
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <div id="lapor">
      <div class="rn-contact-us ptb--120 bg_color--5" id="contact">
        <div class="contact-form--1">
          <v-container>
            <Contact>
              <img
                slot="contact-img"
                class="w-100"
                src="https://kotabogor.go.id/uploads/images/Untitled%20design.gif"
                alt="contact images"
              />
            </Contact>
          </v-container>
        </div>
      </div>
    </div>
    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import HeaderOnePage from "../../components/header/HeaderOnePage";
import Banner from "../../components/slider/Banner";
import About from "../../components/about/About";
import SliderThree from "../../components/slider/SliderThree";
import ServiceFour from "../../components/service/ServiceFour";
import PortfolioNine from "../../components/portfolio/PortfolioNine";
import CounterOne from "../../components/counter/CounterTwo";
import Team from "../../components/team/Team";
import Testimonial from "../../components/testimonial/Testimonial";
import BlogTwo from "../../components/blog/BlogTwo";
import Contact from "../../components/contact/Contact";
import Brand from "../../components/brand/Brand";
import Blog from "../../components/blog/Blog";
import PortfolioThree from "../../components/portfolio/PortfolioThree";
import Footer from "../../components/footer/FooterTwo";
import TabTwo from "../../components/tabs/TabTwo";

// kerusakan dan korban
import ListKerusakanKorban from "../../components/kerusakanKorban/List";

import Vue from "vue";
import axios from "axios";
import { ref, onMounted } from "vue";
//  import App from './App.vue'
import VueRouter from "vue-router";

Vue.use(VueRouter);

//import bootstrap css & js
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";

export default {
  components: {
    HeaderOnePage,
    Banner,
    About,
    ServiceFour,
    PortfolioNine,
    CounterOne,
    Team,
    Testimonial,
    BlogTwo,
    Brand,
    Contact,
    Footer,
    TabTwo,
    Blog,
    SliderThree,
    PortfolioThree,
    // kerusakan dan korban
    ListKerusakanKorban,
  },
  data() {
    return {
      logoLight: require("../../assets/images/logo/logo-light.png"),
      logoDark: require("../../assets/images/logo/logo-dark.png"),
      slidebr: require("../../assets/images/logo/FOTO_HR.jpg"),
      params: [],
      filterKerusakan: [],
      loader: false,
      statusFilter: null,
    };
  },

  methods: {
    async onSubmitKerusakan() {
      this.loader = true;
      this.statusFilter = null;

      let params = {
        kecamatan_id: this.params.kec_id,
        jenis_id: this.params.jenis,
        statusbencana_id: this.params.bencana,
      };

      // send api post
      let result = await axios.post(
        "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana/kerusakan/korban/filter",
        params
      );
      // console.log(result.data.length);
      if (result.status == 200) {
        if (result.data.length > 0) {
          this.filterKerusakan = result.data;
          this.statusFilter = null;
          this.loader = false;
        } else {
          this.filterKerusakan = [];
          this.statusFilter = "Data Kosong";
          this.loader = false;
        }
      }
    },
  },

  setup() {
    const kotabogor = ref([]);
    const bout = ref([]);
    const botim = ref([]);
    const botsel = ref([]);
    const bobar = ref([]); 
    const boteng = ref([]);
    const tansar = ref([]);
    const jenisbencana = ref([]);
    const kecamatan = ref([]);
    const beritabencana = ref([]);
    const statusbencana = ref([]);
    const kebutuhanbencana = ref([]);
    const sliderContent1 = ref([]);
    const galeriFoto = ref([]);
    const galeriVideo = ref([]);

    onMounted(() => {
      // axios
      //   .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana")
      //   .then((response) => {
      //     kotabogor.value = response.data.data;
      //     console.log(response.data.data);
      //   }),
        // axios
        //   .get(
        //     "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=327101"
        //   )
        //   .then((response) => {
        //     botsel.value = response.data.data;
        //     // console.log(response.data.data);
        //   }),
        // axios
        //   .get(
        //     "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=327102"
        //   )
        //   .then((response) => {
        //     bout.value = response.data.data;
        //     // console.log(response.data.data);
        //   }),
        // axios
        //   .get(
        //     "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=327103"
        //   )
        //   .then((response) => {
        //     boteng.value = response.data.data;
        //     // console.log(response.data.data);
        //   }),
        // axios
        //   .get(
        //     "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=327104"
        //   )
        //   .then((response) => {
        //     botim.value = response.data.data;
        //     // console.log(response.data.data);
        //   }),
        // axios
        //   .get(
        //     "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=327105"
        //   )
        //   .then((response) => {
        //     tansar.value = response.data.data;
        //     // console.log(response.data.data);
        //   }),
        // axios
        //   .get(
        //     "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=327106"
        //   )
        //   .then((response) => {
        //     bobar.value = response.data.data;
        //     // console.log(response.data.data, '<<<<<<<<<<<<<');
        //   }),
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/jenis/bencana")
          .then((response) => {
            jenisbencana.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/kecamatan")
          .then((response) => {
            kecamatan.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/beritabencana")
          .then((response) => {
            beritabencana.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/status/bencana")
          .then((response) => {
            statusbencana.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get(
            "https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana/kebutuhan?limit=9"
          )
          .then((response) => {
            kebutuhanbencana.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/slider")
          .then((response) => {
            sliderContent1.value = response.data.data;
            // console.warn(sliderContent1);
          }),
        axios
          .get(
            "https://dev-kebencanaan.kotabogor.go.id/admin/api/galeri/foto?kategori=limit"
          )
          .then((response) => {
            galeriFoto.value = response.data.data;
            // console.warn(galeriFoto);
          }),
        axios
          .get(
            "https://dev-kebencanaan.kotabogor.go.id/admin/api/galeri/video?kategori=limit"
          )
          .then((response) => {
            galeriVideo.value = response.data.data;
            // console.warn(galeri);
          });
    });

    return {
      kotabogor,
      bobar,
      bout,
      botim,
      botsel,
      boteng,
      tansar,
      jenisbencana,
      kecamatan,
      beritabencana,
      kebutuhanbencana,
      statusbencana,
      sliderContent1,
      galeriFoto,
      galeriVideo,
    };
  },
};
</script>

<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #ffc107;
  width: 80px;
  height: 80px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  display: block;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
