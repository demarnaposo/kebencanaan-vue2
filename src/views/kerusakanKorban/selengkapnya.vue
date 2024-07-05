<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <!-- <img slot="logo" :src="logo" /> -->
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--34"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
              <h2 class="heading-title">Lihat Selengkapnya</h2>
              <ul class="page-list">
                <li v-for="(item, i) in breadcrumbs" :key="i">
                  <router-link :to="item.to" :disabled="item.disabled">{{
                    item.text
                  }}</router-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Portfolio Area  -->
    <div class="portfolio-area ptb--120 bg_color--5">
      <v-container>
        <ListSelengkapnya :items="item" />
        <v-pagination
          class="mt-4"
          v-model="pagination.current"
          :length="pagination.total"
          @input="onPageChange"
        ></v-pagination>
      </v-container>
    </div>
    <!-- Start Portfolio Area  -->

    <Footer />
  </div>
</template>

<script>
import Header from "../../components/header/Header";
import ListSelengkapnya from "../../components/kerusakanKorban/ListSelengkapnya";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  props: ["bencana", "kec", "jenis"],
  components: {
    Header,
    ListSelengkapnya,
    Footer,
  },
  data() {
    return {
      item: null,
      pagination: {
        current: 1,
        total: 0,
      },
      logo: require("../../assets/images/logo/logo.png"),
      breadcrumbs: [
        {
          text: "Home",
          to: "/",
          disabled: false,
        },
        {
          text: "Kerusakan dan Korban",
          to: "",
          disabled: true,
        },
      ],
    };
  },
  methods: {
    getItem() {
      let params = {
        kecamatan_id: this.kec,
        jenis_id: this.jenis,
        statusbencana_id: this.bencana,
      };

      axios
        .post(
          "http://backend-kebencanaan.test/api/bencana/kerusakan/korban/filter?page=" +
            this.pagination.current,
          params
        )
        .then((response) => {
          this.item = response.data.data;
          this.pagination.current = response.data.current_page;
          this.pagination.total = response.data.last_page;
        });
    },
    onPageChange() {
      this.getItem();
    },
  },
  mounted() {
    this.getItem();
  },
  // setup(props) {
  //   const item = ref();

  //   let params = {
  //     kecamatan_id: props.kec,
  //     jenis_id: props.jenis,
  //     statusbencana_id: props.bencana,
  //   };

  //   onMounted(() => {
  //     axios
  //       .post(
  //         "http://dev-kebencanaan.kotabogor.go.id/api/bencana/kerusakan/korban/filter",
  //         params
  //       )
  //       .then((response) => {
  //         item.value = response.data;
  //       });
  //   });

  //   return {
  //     item,
  //   };
  // },
};
</script>
