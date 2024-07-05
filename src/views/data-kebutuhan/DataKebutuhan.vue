<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
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
              <h2 class="heading-title">Data Kebutuhan Bencana</h2>
              <ul class="page-list">
                <li>Data terakhir update : 29 November 2022</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area ptb--120 bg_color--1">
      <v-container>
        <v-col cols="12">
            <div class="text-center section-title mb--30">
              <h2 class="heading-title">Klik Donate Untuk Membantu Korban Bencana Dalam Memenuhi Kebutuhan Logistiknya</h2>
              
            </div>
          </v-col>
        <v-row>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-success" align="center">Banjir - Malabar<br> <button class="btn btn-sm btn-warning">Donate</button> </div>
              <div class="card-body text-dark">
                <h6>Papan : </h6>
                <h6>Pangan : </h6>
                <h6>Sandang : </h6>
                <h6>Logistik : </h6>
                <h6>Paket Kematian : </h6>
              </div>
              </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-success" align="center">Banjir - Malabar<br> <button class="btn btn-sm btn-warning">Donate</button> </div>
              <div class="card-body text-dark">
                <h6>Papan : </h6>
                <h6>Pangan : </h6>
                <h6>Sandang : </h6>
                <h6>Logistik : </h6>
                <h6>Paket Kematian : </h6>
              </div>
              </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-success" align="center">Banjir - Malabar<br> <button class="btn btn-sm btn-warning">Donate</button> </div>
              <div class="card-body text-dark">
                <h6>Papan : </h6>
                <h6>Pangan : </h6>
                <h6>Sandang : </h6>
                <h6>Logistik : </h6>
                <h6>Paket Kematian : </h6>
              </div>
              </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-success" align="center">Banjir - Malabar<br> <button class="btn btn-sm btn-warning">Donate</button> </div>
              <div class="card-body text-dark">
                <h6>Papan : </h6>
                <h6>Pangan : </h6>
                <h6>Sandang : </h6>
                <h6>Logistik : </h6>
                <h6>Paket Kematian : </h6>
              </div>
              </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-success" align="center">Banjir - Malabar<br> <button class="btn btn-sm btn-warning">Donate</button> </div>
              <div class="card-body text-dark">
                <h6>Papan : </h6>
                <h6>Pangan : </h6>
                <h6>Sandang : </h6>
                <h6>Logistik : </h6>
                <h6>Paket Kematian : </h6>
              </div>
              </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-success" align="center">Banjir - Malabar<br> <button class="btn btn-sm btn-warning">Donate</button> </div>
              <div class="card-body text-dark">
                <h6>Papan : </h6>
                <h6>Pangan : </h6>
                <h6>Sandang : </h6>
                <h6>Logistik : </h6>
                <h6>Paket Kematian : </h6>
              </div>
              </div>                     
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import BlogThree from "../../components/blog/BlogThree";
  import Pagination from "../../components/pagination/Pagination";
  import Footer from "../../components/footer/Footer";
    //import bootstrap css & js
    import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'popper.js/dist/popper.min'
  import 'bootstrap/dist/js/bootstrap.min'
  export default {
    components: {
      Header,
      BlogThree,
      Pagination,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
      };
    },

    methods: {},
  };
</script>
