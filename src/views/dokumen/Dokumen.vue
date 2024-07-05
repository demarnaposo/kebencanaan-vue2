<template>
    <div>
      <!-- Start Header Area -->
      <HeaderOnePage>
        <img slot="logo" :src="logoLight" class="logo-light" />
      <img slot="logo-dark" :src="logoDark" class="logo-dark" />
      </HeaderOnePage>
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
                <h2 class="heading-title">Dokumen</h2>
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
                <div class="table-responsive">
                                        <table id="myTable" class="table table-hover responsive" style="width: 100%">
                                            <thead>
                                                <tr>
                                                    <th class="text-center">No.</th>
                                                    <th class="text-center">Nama</th>
                                                    <th class="text-center">Kategori</th>
                                                    <th class="text-center">Perihal/Tentang</th>
                                                    <th class="text-center">File</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                                    <tr v-for="(data,no) in datas" :key="data.id">
                                                        <td class="text-center">{{ no+1 }}.</td>
                                                        <td class="text-center">{{ data.judul }}</td>
                                                        <td class="text-center">Dokumen</td>
                                                        <td class="text-center" width="25%">{{ data.perihal }}</td>
                                                        <!-- <td class="text-center" width="25%">{{ data.file }}</td> -->
                                                        <td class="text-center" width="15%">
                                                            <a :href="'https://dev-kebencanaan.kotabogor.go.id/admin/uploads/dokumen/' + data.file" class="btn btn-outline-danger badge-danger-alt btn-sm" target="_blank">
                                                                <i class="fas fa-file-pdf"></i> Lihat Dokumen
                                                            </a>
                                                        </td>
                                                        
                                                    </tr>
                                            </tbody>
                                        </table>
                                        </div>

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
    import HeaderOnePage from "../../components/header/HeaderOnePage";
    import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
    import PortfolioFour from "../../components/portfolio/PortfolioFour";
    import Pagination from "../../components/pagination/Pagination";
    import Portfolio from "../../components/portfolio/Portfolio";
    import Footer from "../../components/footer/Footer";


    import Vue from "vue";
    import axios from "axios";

  

       //import jquery
    import "bootstrap/dist/css/bootstrap.css";
    import "jquery/dist/jquery.min";
    import "popper.js/dist/popper.min";
    import "bootstrap/dist/js/bootstrap.min";
    // import { ref, onMounted } from "vue";
    //  import App from './App.vue'
    import VueRouter from "vue-router";

    

    Vue.use(VueRouter);
    export default {
      // name: 'DokumenComponent',
        mounted() {  
            this.dt = $("#myTable").DataTable({
                responsive: true,
                language: {
                    "lengthMenu": "Tampilkan _MENU_ data per halaman",
                    "zeroRecords": "Tidak ada data",
                    "info": "Menampilkan halaman _PAGE_ dari _PAGES_",
                    "infoEmpty": "Tidak ada data",
                    "infoFiltered": "(difilter dari _MAX_ total data)",
                    "search": "Cari:",
                    "paginate": {
                        "previous": "Sebelumnya",
                        "next": "Selanjutnya"
                    }
                }
            });

            $(document).ready(function() {
                // $(".js-example-basic-single").select2();
            });
        },
        watch: {
            datas() {
            this.dt.destroy();
            this.$nextTick(() => {
                this.dt = $("#myTable").DataTable({
                responsive: true,
                language: {
                    "lengthMenu": "Tampilkan _MENU_ data per halaman",
                    "zeroRecords": "Tidak ada data",
                    "info": "Menampilkan halaman _PAGE_ dari _PAGES_",
                    "infoEmpty": "Tidak ada data",
                    "infoFiltered": "(difilter dari _MAX_ total data)",
                    "search": "Cari:",
                    "paginate": {
                        "previous": "Sebelumnya",
                        "next": "Selanjutnya"
                    }
                }
                });
            })
            }
        },
      components: {
        HeaderOnePage,
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

          datas  : []
        };
      },

      methods : {
        async getDokumen() {

          try {

            const {data} = await axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/dokumen')
            console.log(data.data)
            this.datas=data.data
            
          } catch (error) {
            console.log(error)
            
          }
        }
      },

      created() {
        this.getDokumen();
      },
    };
  </script>
  