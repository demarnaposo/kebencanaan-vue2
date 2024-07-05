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
              <div class="breadcrumb-inner pt--100 pt_sm--40 pt_md--50">
                <h2 class="heading-title">Visi & Misi</h2>
                <ul class="page-list">
                  <!-- <li v-for="(item, i) in breadcrumbs" :key="i">
                    <router-link :to="item.to" :disabled="item.disabled">{{
                      item.text
                    }}</router-link>
                  </li> -->
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Breadcrump Area  -->
  
      <!-- Start Portfolio Area  -->
      <div class="portfolio-area ptb--50 bg_color--1">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="section-title text-center mb--10">
                
                <span class="subtitle">Visi & Misi Badan Penanggulangan Bencana Daerah Kota Bogor</span>
                <h2 class="heading-title"></h2>
                <div class="flex justify-center">
                <img :src="'https://dev-kebencanaan.kotabogor.go.id/admin/uploads/profilbpbd/' + data[2].gambar" alt="struktur-organisasi">
                </div>
                <p class="description">
                  <div v-html="data[2].isi">

                  </div>
                </p>
              </div>
            </v-col>
          </v-row>
          <!-- End .row -->
          <!-- <PortfolioTwo /> -->
        </v-container>
      </div>
      <!-- Start Portfolio Area  -->
  
      <Footer />
    </div>
  </template>
  
  <script>
    import Header from "../../components/header/Header";
    import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
    import PortfolioFour from "../../components/portfolio/PortfolioFour";
    import Portfolio from "../../components/portfolio/Portfolio";
    import Footer from "../../components/footer/Footer";


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
        Header,
        PortfolioTwo,
        PortfolioFour,
        Portfolio,
        Footer,
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
            // {
            //   text: "Portfolio",
            //   to: "",
            //   disabled: true,
            // },
          ],

          data : []
        };
      },

      methods : {
        async getProfil() {

          try {

            const {data} = await axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/profilbpbd')
            console.log(data.data)
            this.data=data.data
            
          } catch (error) {
            console.log(error)
            
          }
        }
      },

      created() {
        this.getProfil();
      }
    };
  </script>
  