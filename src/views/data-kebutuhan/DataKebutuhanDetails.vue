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
      v-for="dtl in details"
      :key="dtl.id"
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--8"
      data-black-overlay="7"
    >
      <v-container v-for="dt in details" :key="dt.id">
        <v-row>
          <v-col cols="12">
            <div class="text-center blog-single-page-title pt--100">
              <h2 class="heading-title theme-gradient">
                <div>{{ dt.bencana }}</div>
              </h2>
              <ul class="justify-center blog-meta d-flex align-center">
                <li class="d-flex" v-for="(meta, i) in metaList" :key="i">
                  <span v-html="iconSvg(meta.icon)"></span>Tanggal :
                  {{ dtl.tgl }} <br />Jam :
                  {{ dtl.jam }}
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Blog Details Area  -->
    <div
      class="rn-blog-details pt--110 pb--70 bg_color--1"
      v-for="dtl in details"
      :key="dtl.id"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner">
                <p class="mt--40" v-html="dtl.deskripsi"></p>
                <div class="thumbnail">
                  <img :src="dtl.foto" alt="Blog Images" />
                </div>
                <br /><br />
                <v-row>
                  <v-col md="8" cols="12">
                    <div class="text-left section-title mb--30">
                      <h2 class="heading-title">Data Kebutuhan</h2>
                      <p class="description">
                        Berikut data yang dibutuhkan di lokasi kejadian bencana
                      </p>
                    </div>
                  </v-col>
                </v-row>
                <div style="overflow: scroll; height: 500px">
                  <div v-for="p in dtl.logistik" :key="p">
                    <br />
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Kategori</th>
                          <th scope="col">Barang</th>
                          <th scope="col">Jumlah</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="j in p" :key="j">
                          <th scope="row">></th>
                          <td>
                            <b>{{ j.kategori }}</b>
                          </td>
                          <td>{{ j.logistik }}</td>
                          <td>
                            {{ j.jumlah }} <b>{{ j.satuan }}</b>
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center view-more-btn mt--60">
              <!-- {{ slugs }} -->
              <a
                class="btn-default"
                target="_blank"
                :href="
                  'https://dev-kebencanaan.kotabogor.go.id/bantuna-logistik/bencana/' +
                  slugs
                "
              >
                <span>Donasi </span>
              </a>
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
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min";
// import { useRoute } from 'vue-router';

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
      logoLight: require("../../assets/images/logo/logo-light.png"),
      logoDark: require("../../assets/images/logo/logo-dark.png"),
      slidebr: require("../../assets/images/logo/FOTO_HR.jpg"),
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      itemstabel: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      items: [
        {
          thumb: require("../../assets/images/blog/bl-big-01.jpg"),
          src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
        },
      ],
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
    const details = ref([]);
    const slugs = ref([]);

    // const route = useRoute();

    onMounted(() => {
      axios
        .get(
          `https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana/kebutuhan/detail?id=${props.id}`
        )
        .then((response) => {
          details.value = response.data.data;
          slugs.value = response.data.data[0].slug;
          console.log(response.data.data[0].slug);
        });
    });

    return {
      details,
      slugs,
    };
  },
};
</script>
