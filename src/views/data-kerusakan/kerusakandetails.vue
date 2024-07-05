<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <!-- <img slot="logo" :src="item[0].foto" /> -->
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--34"
      data-black-overlay="7"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center blog-single-page-title pt--100">
              <h2 class="heading-title theme-gradient">
                {{ item.jenis }}
              </h2>
              <ul class="justify-center blog-meta d-flex align-center">
                <li class="d-flex" v-for="(meta, i) in metaList" :key="i">
                  <span v-html="iconSvg(meta.icon)"></span>{{ item.tgl }}
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
              <div class="inner">
                <blockquote class="rn-blog-quote">
                  {{ item.bencana }}
                </blockquote>
                <div class="flex-wrap blog-single-list-wrapper d-flex">
                  <div class="thumbnail">
                    <img
                      class="w-100"
                      :src="item.foto"
                      alt="BLog Images"
                    /><span>Gambar</span>
                  </div>
                  <div class="content">
                    <p v-html="item.penyebab"></p>
                    <p v-html="item.deskripsi"></p>
                  </div>
                </div>
                <div>
                  <h3 class="mt-4 text-center">
                    KERUSAKAN SEKTOR DAN BANGUNAN
                  </h3>
                  <hr />
                </div>
                <div class="row marginTop">
                  <div class="col-md-6">
                    <h5 class="heading-title">Bangunan</h5>
                    <ul class="list-style">
                      <li v-for="(row, i) in item.kerusakan" :key="i">
                        <div v-if="row.jenis_kerusakan === 'Bangunan'">
                          {{ row.bangunan }} ({{ row.kerusakan }}), Kerugian :
                          {{
                            "Rp. " +
                            row.kerugian
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
                          }}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <h5 class="heading-title">Sektor</h5>
                    <ul class="list-style">
                      <li v-for="(row, u) in item.kerusakan" :key="u">
                        <div v-if="row.jenis_kerusakan === 'Sektor'">
                          {{ row.bangunan }} ({{ row.kerusakan }}), Kerugian :
                          {{
                            "Rp. " +
                            row.kerugian
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1\.")
                          }}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mt-6">
                  <div class="marginTop">
                    <h3 class="mt-4 text-center">JUMLAH KORBAN</h3>
                    <hr />
                  </div>
                  <div class="row marginTop">
                    <div
                      class="col-md-12"
                      v-for="(korban, i) in item.korban"
                      :key="i"
                    >
                      <li class="h5 heading-title" v-if="i == 'jmlMeninggal'">
                        Meninggal : {{ korban }} Orang
                      </li>
                      <li class="h5 heading-title" v-if="i == 'jmlHilang'">
                        Hilang : {{ korban }} Orang
                      </li>
                      <li class="h5 heading-title" v-if="i == 'jmlLukaBerat'">
                        Luka Berat : {{ korban }} Orang
                      </li>
                      <li class="h5 heading-title" v-if="i == 'jmlLukaRingan'">
                        Luka Ringan : {{ korban }} Orang
                      </li>
                      <li class="h5 heading-title" v-if="i == 'jmlPengungsi'">
                        Pengungsi : {{ korban }} Orang
                      </li>
                      <li class="h5 heading-title" v-if="i == 'jmlPenderitaTerdampak'">
                        Penderita Terdampak : {{ korban }} Orang
                      </li>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import feather from "feather-icons";
import axios from "axios";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
import { ref, onMounted } from "vue";

export default {
  props: ["slug", "id"],
  components: {
    Header,
    Footer,
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      logo: require("../../assets/images/logo/logo.png"),
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
        item: [],
      },
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
    const item = ref();
    console.log(props);

    onMounted(() => {
      axios
        .get(
          `https://dev-kebencanaan.kotabogor.go.id/api/bencana/kebutuhan/detail?id=${props.id}`
        )
        .then((response) => {
          item.value = response.data.data[0];
        });
    });

    return {
      item,
    };
  },
};
</script>
<style scoped>
.rn-blog-quote {
  margin-top: -70px !important;
}
.marginTop {
  margin-top: 30px;
}
</style>
