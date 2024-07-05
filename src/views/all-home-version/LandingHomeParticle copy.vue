
<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePage>
      <img slot="logo" :src="logoLight" class="logo-light" />
      <img slot="logo-dark" :src="logoDark" class="logo-dark" />
    </HeaderOnePage>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="im_modern_slider poss_relative" id="home">
      
      <img src="../../assets/images/logo/1.jpeg" width="1920px;" height="950px;">
   </div>
    <!-- End Slider Area -->

    <!-- Start Service Area  -->
    <div>
    <!-- Start Portfolio Details Area  -->
    <div class="rn-portfolio-details ptb--120 bg_color--1">
      <v-container>
        
        <v-row>
          <v-col>
            <div class="portfolio-details">
              
              <div class="row row--25 mb--30">
                
                <div class="col-lg-12">
                  <!-- Navigasi-->
                  <nav class="col-md-12 mb-2">
                                       <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                           <button class="nav-link active" id="nav-kotabogor-tab" data-bs-toggle="tab" data-bs-target="#kotabogor" type="button" role="tab" aria-controls="kotabogor" aria-selected="false">Kota Bogor</button>
                                           <button class="nav-link" id="nav-bogorbarat-tab" data-bs-toggle="tab" data-bs-target="#bogorbarat" type="button" role="tab" aria-controls="bogorbarat" aria-selected="false">Bogor Barat</button>
                                           <button class="nav-link" id="nav-bogorutara-tab" data-bs-toggle="tab" data-bs-target="#bogorutara" type="button" role="tab" aria-controls="bogorutara" aria-selected="false">Bogor Utara</button>
                                           <button class="nav-link" id="nav-bogortengah-tab" data-bs-toggle="tab" data-bs-target="#bogortengah" type="button" role="tab" aria-controls="bogortengah" aria-selected="false">Bogor Tengah</button>
                                           <button class="nav-link" id="nav-bogorselatan-tab" data-bs-toggle="tab" data-bs-target="#bogorselatan" type="button" role="tab" aria-controls="bogorselatan" aria-selected="false">Bogor Selatan</button>
                                           <button class="nav-link" id="nav-bogortimur-tab" data-bs-toggle="tab" data-bs-target="#bogortimur" type="button" role="tab" aria-controls="bogortimur" aria-selected="false">Bogor Timur</button>
                                           <button class="nav-link" id="nav-tanahsareal-tab" data-bs-toggle="tab" data-bs-target="#tanahsareal" type="button" role="tab" aria-controls="tanahsareal" aria-selected="false">Tanah Sareal</button>
                                       
                                         </div>
                                   </nav>

                                   <div class="tab-content" id="nav-tabContent">
                                       <div class="tab-pane fade show active" id="kotabogor" role="tabpanel" aria-labelledby="nav-kotabogor-tab">
                                           <div class="row">
                                            <div class="col-md-3 mt-2 mb-2 py-3" v-for="bogor in kotabogor" :key="bogor.id">
                                                   <div class="card text-white">
                                                    <div class="card-header bg-danger" align="center">{{ bogor.bencana }}</div>
                                                    <div class="card-body text-dark" align="center"><h2>{{ bogor.total }}</h2></div>
                                                  </div>
                                                  <br>                                                     
                                               </div>

                                               </div>
                                       </div>
                                       <div class="tab-pane fade show" id="bogorbarat" role="tabpanel" aria-labelledby="nav-bogorbarat-tab">
                                           <div class="row">
                                            <div class="col-md-3 mt-2 mb-2 py-3" v-for="barat in bobar" :key="barat.id">
                                                   <div class="card text-white">
                                                    <div class="card-header bg-danger" align="center">{{ barat.bencana }}</div>
                                                    <div class="card-body text-dark" align="center"><h2>{{ barat.total }}</h2></div>
                                                  </div>
                                                  <br>                                                     
                                               </div>

                                               </div>
                                       </div>
                                       <div class="tab-pane fade show" id="bogorutara" role="tabpanel" aria-labelledby="nav-bogorutara-tab">
                                           <div class="row">
                                            <div class="col-md-3 mt-2 mb-2 py-3" v-for="utara in bout" :key="utara.id">
                                                   <div class="card text-white">
                                                    <div class="card-header bg-danger" align="center">{{ utara.bencana }}</div>
                                                    <div class="card-body text-dark" align="center"><h2>{{ utara.total }}</h2></div>
                                                  </div>
                                                  <br>                                                     
                                               </div>

                                               </div>
                                       </div>
                                       <div class="tab-pane fade show" id="bogortengah" role="tabpanel" aria-labelledby="nav-bogortengah-tab">
                                           <div class="row">
                                            <div class="col-md-3 mt-2 mb-2 py-3" v-for="tengah in boteng" :key="tengah.id">
                                                   <div class="card text-white">
                                                    <div class="card-header bg-danger" align="center">{{ tengah.bencana }}</div>
                                                    <div class="card-body text-dark" align="center"><h2>{{ tengah.total }}</h2></div>
                                                  </div>
                                                  <br>                                                     
                                               </div>

                                               </div>
                                       </div>
                                       <div class="tab-pane fade show" id="bogorselatan" role="tabpanel" aria-labelledby="nav-bogorselatan-tab">
                                           <div class="row">
                                            <div class="col-md-3 mt-2 mb-2 py-3" v-for="selatan in botsel" :key="selatan.id">
                                                   <div class="card text-white">
                                                    <div class="card-header bg-danger" align="center">{{ selatan.bencana }}</div>
                                                    <div class="card-body text-dark" align="center"><h2>{{ selatan.total }}</h2></div>
                                                  </div>
                                                  <br>                                                     
                                               </div>

                                               </div>
                                       </div>
                                       <div class="tab-pane fade show" id="bogortimur" role="tabpanel" aria-labelledby="nav-bogortimur-tab">
                                           <div class="row">
                                            <div class="col-md-3 mt-2 mb-2 py-3" v-for="timur in botim" :key="timur.id">
                                                   <div class="card text-white">
                                                    <div class="card-header bg-danger" align="center">{{ timur.bencana }}</div>
                                                    <div class="card-body text-dark" align="center"><h2>{{ timur.total }}</h2></div>
                                                  </div>
                                                  <br>                                                     
                                               </div>

                                               </div>
                                       </div>
                                       <div class="tab-pane fade show" id="tanahsareal" role="tabpanel" aria-labelledby="nav-tanahsareal-tab">
                                           <div class="row">
                                            <div class="col-md-3 mt-2 mb-2 py-3" v-for="sareal in tansar" :key="sareal.id">
                                                   <div class="card text-white">
                                                    <div class="card-header bg-danger" align="center">{{ sareal.bencana }}</div>
                                                    <div class="card-body text-dark" align="center"><h2>{{ sareal.total }}</h2></div>
                                                  </div>
                                                  <br>                                                     
                                               </div>

                                               </div>
                                       </div>
                                   </div>

                  <!--End nav-->
                </div>
                <!-- <div class="col-lg-3">
                  <div
                    class="portfolio-details-accordion mt_lg--40 mt_md--40 mt_sm--40"
                  >
                    <div class="inner">
                      <div class="section-title">
                        <img src="https://kotabogor.go.id/uploads/images/Untitled%20design.gif?1666084610460" width="100%" height="100%">
                      </div>
                    </div>
                  </div>
                </div> -->
              </div>
              
            </div>
          </v-col>
        </v-row>
      </v-container>
    
    <!-- End Portfolio Details Area  -->
  
  
      <v-container>
        <v-row class="bg-warning">
          
          <v-col lg="4" md="3" sm="3" cols="3" class="mt_sm--30 mt_md--30"
          >
            <div class="single-column custom-color" style="background:#ffc107;">
              <h6 class="tilte">Jenis Bencana</h6>
              <p>
                <select class="form-control" name="cars" id="cars">
                <option value="volvo" v-for="jns in jenisbencana" :key="jns.id">{{ jns.jenis}}</option>
              </select>
              </p>
            </div>
           </v-col>
           <v-col lg="4" md="3" sm="3" cols="3" class="mt_sm--30 mt_md--30"
          >
            <div class="single-column custom-color" style="background:#ffc107;">
              <h6 class="tilte">Kecamatan</h6>
              <p>
                <select class="form-control" name="cars" id="cars">
                <option value="volvo" v-for="kcmtn in kecamatan" :key="kcmtn.id">{{ kcmtn.nama_kecamatan}}</option>
              </select>
              </p>
            </div>
           </v-col>
          
          <v-col lg="4" md="3" sm="3" cols="3" class="mt_sm--30 mt_md--30"
          >
          <br>
            <div class="single-column custom-color" style="background:#ffc107;">
              <button type="button" class="btn btn-dark btn-md btn-block">Filter</button>
            </div>
          
          </v-col>
          
        </v-row>
      </v-container>
      
    </div>
    <v-container>
        <v-row>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
                  <div class="card-body text-dark" align="center"><h2>65210</h2><br><h6>Kerusakan Rumah</h6></div>
            </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
                  <div class="card-body text-dark" align="center"><h2>65210</h2><br><h6>Kerusakan Bangunan</h6></div>
            </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
                  <div class="card-body text-dark" align="center"><h2>65210</h2><br><h6>Kerusakan Tempat Ibadah</h6></div>
            </div>                     
            </div>
            <br>
          </v-col>
          
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
                  <div class="card-body text-dark" align="center"><h2>65210</h2><br><h6>Korban Meninggal</h6></div>
            </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
                  <div class="card-body text-dark" align="center"><h2>65210</h2><br><h6>Korban Luka Berat</h6></div>
            </div>                     
            </div>
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
                  <div class="card-body text-dark" align="center"><h2>65210</h2><br><h6>Korban Hilang</h6></div>
            </div>                     
            </div>
          </v-col>
          
          
        </v-row>
      </v-container>
      <br>
    </div>
    <!-- Start About Area  -->
    <div class="rn-counterup-area pt--140 p pb--110 bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-left section-title mb--30">
              <!--<span class="subtitle">What we can do for you</span>-->
              <h2 class="heading-title">Edukasi Bencana.</h2>
              <p class="description">
                Memberi Pengetahuan kepada pembaca mengenai kesiap siagaan dalam mengahadapi bencana apabila suatu bencana terjadi.

              </p>
            </div>
          </v-col>
        </v-row>
        <ServiceFour />
        <br><br><br>
  
  </v-container>
    </div>
    
    <!-- Start About Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-left section-title mb--30 mb_sm--0">
              
              <h2 class="heading-title" align="center">Data Kebutuhan Bencana</h2>
              
            </div>
            
          </v-col>
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-warning" align="center">Banjir - Malabar</div>
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
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-warning" align="center">Tanah Longsor - Kebon Kalapa</div>
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
          <v-col lg="4" md="4" sm="4" cols="4" class="mt_sm--30 mt_md--30">
            <div class="single-column" >
            <div class="card text-white">
              <div class="card-header bg-warning" align="center">Pohon Tumbang - Pabaton</div>
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
    <!-- End Portfolio Area -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="12">
            <div class="text-left section-title">
              
              <h2 class="heading-title">Berita Terkini</h2>
              <p class="description">
                
                Informasi Sepurtar Kebencanaan di Kota Bogor

              </p>
            </div>
          </v-col>
        </v-row>
        <BlogTwo />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Contact Area  -->
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
    <!-- End Contact Area  -->

    <!-- End Brand Area -->

    <!-- End Counterup Area -->
    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePage from "../../components/header/HeaderOnePage";
  import Banner from "../../components/slider/Banner";
  import About from "../../components/about/About";
  import ServiceFour from "../../components/service/ServiceFour";
  import PortfolioNine from "../../components/portfolio/PortfolioNine";
  import CounterOne from "../../components/counter/CounterTwo";
  import Team from "../../components/team/Team";
  import Testimonial from "../../components/testimonial/Testimonial";
  import BlogTwo from "../../components/blog/BlogTwo";
  import Contact from "../../components/contact/Contact";
  import Brand from "../../components/brand/Brand";
  import Footer from "../../components/footer/FooterTwo";
  import Vue from 'vue'
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
//  import App from './App.vue'
  import VueRouter from 'vue-router'

  Vue.use(VueRouter);

  //import bootstrap css & js
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'popper.js/dist/popper.min'
  import 'bootstrap/dist/js/bootstrap.min'

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
    },
    data() {
      return {
        logoLight: require("../../assets/images/logo/logo-light.png"),
        logoDark: require("../../assets/images/logo/logo-dark.png"),
        slidebr: require("../../assets/images/logo/FOTO_HR.jpg"),
      };
    },
    setup(){
      const kotabogor = ref([]);
      const bout = ref([]);
      const botim = ref([]);
      const botsel = ref([]);
      const bobar = ref([]);
      const boteng = ref([]);
      const tansar = ref([]);
      const jenisbencana = ref([]);
      const kecamatan = ref([]);
      const beritaacara = ref([]);
      const bencanas_loader = ref(2);

      onMounted(() => {
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana')
        .then(response => {
          kotabogor.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=1')
        .then(response => {
          botsel.value = response.data.data;
          console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=2')
        .then(response => {
          bout.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=3')
        .then(response => {
          boteng.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=4')
        .then(response => {
          botim.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=5')
        .then(response => {
          tansar.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=6')
        .then(response => {
          bobar.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/jenis/bencana')
        .then(response => {
          jenisbencana.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/kecamatan')
        .then(response => {
          kecamatan.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/beritabencana')
        .then(response => {
          beritaacara.value = response.data.data;
          // console.log(response.data.data);
        })
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
        beritaacara,
        bencanas_loader
      }
    }
  };
</script>
