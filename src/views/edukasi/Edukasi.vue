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
      class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100">
              <h2 class="heading-title">Edukasi Kebencanaan</h2>
              <ul class="page-list">
                <li class="rn-breadcrumb-item" v-for="(item, i) in breadcrumbs" :key="i">
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
    <br /><br /><br />
    <!-- End Breadcrump Area  -->
    <TabEdukasi />

    <Footer />
  </div>
</template>

<script>
import Header from "../../components/header/Header";
import ServiceThree from "../../components/service/ServiceThree";
import ServiceFour from "../../components/service/ServiceFour";
import ServiceTwo from "../../components/service/ServiceTwo";
import Footer from "../../components/footer/Footer";
import TabEdukasi from "../../components/tabs/TabEdukasi";
import feather from "feather-icons";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default {
  components: {
    Header,
    ServiceThree,
    ServiceFour,
    ServiceTwo,
    Footer,
    TabEdukasi,
  },
  data() {
    return {
      logoLight: require("../../assets/images/logo/logo-light.png"),
      logoDark: require("../../assets/images/logo/logo-dark.png"),
      breadcrumbs: [
        {
          text: "Home",
          to: "/",
          disabled: false,
        },
        {
          text: "Edukasi",
          to: "",
          disabled: true,
        },
      ],
    };
  },

  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>

<style lang="scss">
.service-white-wrapper .service-main-wrapper .service.service__style--2.bg-gray {
  background: #fff;
}
</style>
