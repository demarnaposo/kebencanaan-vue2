<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          transition="fade-transition"
          v-for="item in tabContent"
          :key="item.id"
        >
          <v-card flat>
            <v-card-text>
              <div class="single-tab-content">
                <ul>
                  <li v-for="(item, i) in item.content" :key="i">
                    <router-link to="/service"
                      >{{ item.title }}
                      <span> - {{ item.name }}</span></router-link
                    >
                    {{ item.desc }}
                  </li>
                </ul>

                <!-- TAB SEMUA -->
                <div class="rn-blog-area ptb--50 bg_color--1" v-if="item.Semua">
                  <v-container>
                    <v-row>
                      <v-col
                        lg="4"
                        md="4"
                        sm="6"
                        cols="12"
                        v-for="edu in edukasi"
                        :key="edu.id"
                      >
                        <div v-if="edu.kategori_artikel == 'Gambar'">
                          <div class="card h-100 shadow-sm border-0 rounded-lg">
                            <div class="content">
                              <img
                                style="
                                  width: 100%;
                                  height: 220px;
                                  border-top-left-radius: 0.3rem;
                                  border-top-right-radius: 0.3rem;
                                "
                                :src="edu.gambar"
                                frameborder="0"
                              />
                              <div class="card-body">
                                <div class="title">
                                  {{ edu.judul }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else-if="edu.kategori_artikel == 'Video'">
                          <div class="card h-100 shadow-sm border-0 rounded-lg">
                            <div class="content">
                              <iframe
                                style="
                                  width: 100%;
                                  height: 220px;
                                  border-top-left-radius: 0.3rem;
                                  border-top-right-radius: 0.3rem;
                                "
                                :src="
                                  'https://www.youtube.com/embed/' +
                                  edu.embed_video
                                "
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              >
                              </iframe>
                              <div class="card-body">
                                <div class="title">
                                  {{ edu.judul }}
                                </div>

                                <div class="card-art">
                                  {{ edu.isi_artikel.substring(0, 50) + ".." }}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-else>
                          <div class="card h-100 shadow-sm border-0 rounded-lg">
                            <div class="content">
                              <!-- <div class="card-body"> -->
                              <div class="title">
                                {{ edu.judul }}
                              </div>
                              <!-- </div> -->
                              <div class="card-art">
                                <!-- <img style="width:100%;height:220px;border-top-left-radius:.3rem;border-top-right-radius:.3rem"  frameborder="0"/> -->
                                <!-- {{ substring(eduA.isi_artikel, 0, 20) }} -->
                                {{ edu.isi_artikel.substring(0, 250) + ".." }}
                              </div>

                              <div class="content_footer">
                                <router-link
                                  :to="{
                                    name: 'DataEdukasiDetails',
                                    params: {
                                      id: edu.id,
                                      kategori: edu.kategori_artikel,
                                    },
                                  }"
                                  class="rn-btn"
                                >
                                  Baca Selengkapnya
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-col>
                      <!-- <v-col lg="12">
                          <div class="text-center rn-pagination mt--60 mt_sm--30">
                            <PaginationAll />
                          </div>
                        </v-col> -->
                    </v-row>
                  </v-container>
                </div>
                <!-- END TUTUP SEMUA  -->

                <!-- TAB GAMBAR -->
                <div
                  class="rn-blog-area ptb--50 bg_color--1"
                  v-if="item.Gambar"
                >
                  <v-container>
                    <v-row>
                      <v-col
                        lg="4"
                        md="4"
                        sm="6"
                        cols="12"
                        v-for="eduG in edukasiGambar"
                        :key="eduG.id"
                      >
                        <div class="card h-100 shadow-sm border-0 rounded-lg">
                          <div class="content">
                            <img
                              style="
                                width: 100%;
                                height: 220px;
                                border-top-left-radius: 0.3rem;
                                border-top-right-radius: 0.3rem;
                              "
                              :src="eduG.gambar"
                              frameborder="0"
                            />
                            <div class="card-body">
                              <div class="title">
                                {{ eduG.judul }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-col>
                      <!-- <v-col lg="12">
                          <div class="text-center rn-pagination mt--60 mt_sm--30">
                            <PaginationAll />
                          </div>
                        </v-col> -->
                    </v-row>
                  </v-container>
                </div>
                <!-- END TUTUP GAMBAR  -->

                <!-- TAB VIDIO -->
                <div class="rn-section ptb--120 bg_color--1" v-if="item.Vidio">
                  <v-container>
                    <v-row>
                      <!-- Start Single Video Button  -->
                      <v-col
                        lg="4"
                        md="4"
                        sm="6"
                        cols="12"
                        v-for="eduV in edukasiVidio"
                        :key="eduV.id"
                        :class="eduV.responisve"
                      >
                        <div class="card h-100 shadow-sm border-0 rounded-lg">
                          <div class="content">
                            <iframe
                              style="
                                width: 100%;
                                height: 220px;
                                border-top-left-radius: 0.3rem;
                                border-top-right-radius: 0.3rem;
                              "
                              :src="
                                'https://www.youtube.com/embed/' +
                                eduV.embed_video
                              "
                              frameborder="0"
                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                              allowfullscreen
                            >
                            </iframe>
                            <div class="card-body">
                              <div class="title">
                                {{ eduV.judul }}
                              </div>

                              <div class="card-art">
                                {{ eduV.isi_artikel.substring(0, 50) + ".." }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </v-col>
                      <!-- End Single Video Button  -->
                    </v-row>
                    <!-- <CoolLightBox :items="gridItems" :index="index" @close="index = null">
                      </CoolLightBox> -->
                    <CoolLightBox
                      items="eduv.embed_video"
                      :index="index"
                      @close="index = null"
                    >
                    </CoolLightBox>
                  </v-container>
                </div>

                <!-- TAB ARTIKEL -->
                <div
                  class="rn-blog-area ptb--50 bg_color--1"
                  v-if="item.Artikel"
                >
                  <v-container>
                    <v-row>
                      <v-col
                        lg="4"
                        md="4"
                        sm="6"
                        cols="12"
                        v-for="eduA in edukasiArtikel"
                        :key="eduA.id"
                      >
                        <!-- <div class="im_box mt--30">
                            <div class="thumbnail">
                              <router-link
                                :to="{
                                  name: 'DataEdukasiDetails',
                                  params: { id: eduA.id, kategori: eduA.kategori_artikel },
                                }"
                              >
                                <img class="w-100" :src="eduA.gambar" alt="Blog Images" />
                              </router-link>
                            </div>
                            <div class="content">
                              <div class="inner">
                                <div class="content_heading">
                                  <div class="category_list">
                                    <router-link
                                      :to="{
                                        name: 'DataEdukasiDetails',
                                        params: {
                                          id: eduA.id,
                                          kategori: eduA.kategori_artikel,
                                        },
                                      }"
                                      >{{ eduA.tanggal }}</router-link
                                    >
                                  </div>
                                  <h4 class="heading-title">
                                    <router-link
                                      :to="{
                                        name: 'DataEdukasiDetails',
                                        params: {
                                          id: eduA.id,
                                          kategori: eduA.kategori_artikel,
                                        },
                                      }"
                                      >{{ eduA.judul }}</router-link
                                    >
                                  </h4>
                                </div>
                                <div class="content_footer">
                                  <router-link
                                    :to="{
                                      name: 'DataEdukasiDetails',
                                      params: {
                                        id: eduA.id,
                                        kategori: eduA.kategori_artikel,
                                      },
                                    }"
                                    class="rn-btn btn-opacity"
                                  >
                                    Baca Selengkapnya
                                  </router-link>
                                </div>
                              </div>
                              <router-link class="transparent_link"
                                :to="{ name: 'DataEdukasiDetails', params:{id:eduA.id, kategori:eduA.kategori_artikel}}">
                              </router-link>
                            </div>
                          </div> -->

                        <div class="card h-100 shadow-sm border-0 rounded-lg">
                          <div class="content">
                            <!-- <div class="card-body"> -->
                            <div class="title">
                              {{ eduA.judul }}
                            </div>
                            <!-- </div> -->
                            <div class="card-art">
                              <!-- <img style="width:100%;height:220px;border-top-left-radius:.3rem;border-top-right-radius:.3rem"  frameborder="0"/> -->
                              <!-- {{ substring(eduA.isi_artikel, 0, 20) }} -->
                              {{ eduA.isi_artikel.substring(0, 250) + ".." }}
                            </div>

                            <div class="content_footer">
                              <router-link
                                :to="{
                                  name: 'DataEdukasiDetails',
                                  params: {
                                    id: eduA.id,
                                    kategori: eduA.kategori_artikel,
                                  },
                                }"
                                class="rn-btn"
                              >
                                Baca Selengkapnya
                              </router-link>
                            </div>
                          </div>
                        </div>
                      </v-col>
                      <!-- <v-col lg="12">
                          <div class="text-center rn-pagination mt--60 mt_sm--30">
                            <PaginationAll />
                          </div>
                        </v-col> -->
                    </v-row>
                  </v-container>
                </div>
                <!-- END TUTUP ARTIKEL  -->
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
  <script>
// Tab Semua
import EdukasiAll from "../../components/blog/EdukasiAll";
import PaginationAll from "../../components/pagination/PaginationAll";
// Tab Gambar
import EdukasiGambar from "../../components/blog/EdukasiGambar";
import PaginationGambar from "../../components/pagination/PaginationGambar";
// Tab Vidio
import EdukasiVidio from "../../components/blog/EdukasiVidio";
import PaginationVidio from "../../components/pagination/PaginationVidio";
// Tab Artikel
//   import EdukasiArtikel from "../../components/blog/EdukasiArtikel";
import PaginationArtikel from "../../components/pagination/PaginationArtikel";
import axios from "axios";
import Vue, { ref, onMounted } from "vue";

import feather from "feather-icons";

export default {
  components: {
    EdukasiAll,
    PaginationAll,
    EdukasiGambar,
    PaginationGambar,
    EdukasiVidio,
    PaginationVidio,
    //   EdukasiArtikel,
    PaginationArtikel,
  },
  data() {
    return {
      tab: null,
      items: [
        {
          id: 1,
          name: "Semua",
        },
        {
          id: 2,
          name: "Gambar",
        },
        {
          id: 3,
          name: "Video",
        },
        {
          id: 4,
          name: "Artikel",
        },
      ],

      tabContent: [
        {
          id: 1,
          Semua: true,
        },
        {
          id: 2,
          Gambar: true,
        },
        {
          id: 3,
          Vidio: true,
        },
        {
          id: 4,
          Artikel: true,
        },
      ],
      index: null,
      index2: null,
      index3: null,
    };
  },
  setup() {
    const edukasi = ref([]);
    const edukasiGambar = ref([]);
    const edukasiVidio = ref([]);
    const edukasiArtikel = ref([]);

    onMounted(() => {
      axios
        .get("http://dev-kebencanaan.kotabogor.go.id/admin/api/penaggulangan/bencana")
        .then((response) => {
          edukasi.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios
          .get(
            "http://dev-kebencanaan.kotabogor.go.id/admin/api/penaggulangan/bencana?kategori=Gambar"
          )
          .then((response) => {
            edukasiGambar.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get(
            "http://dev-kebencanaan.kotabogor.go.id/admin/api/penaggulangan/bencana?kategori=Video"
          )
          .then((response) => {
            edukasiVidio.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get(
            "http://dev-kebencanaan.kotabogor.go.id/admin/api/penaggulangan/bencana?kategori=Artikel"
          )
          .then((response) => {
            edukasiArtikel.value = response.data.data;
            // console.log(response.data.data);
          });
    });

    return {
      edukasi,
      edukasiGambar,
      edukasiVidio,
      edukasiArtikel,
    };
  },
};
</script>

  <<style scoped>
  .card{
    /* color: black; */
    height: 370px;
    background-color: #F8FAFD;
    box-shadow: #b4c6e1;
    margin:10px 0px;
    /* padding: 5px; */
    /* font-size: 5px; */
  }

  .content{
    font-size: 14px;
  }

  .card-body{
   font-size: 14px;
  }

  .card-art{
    padding: 21px;
  }

  .content .title{
    font-size: 18px !important;
    font-weight: bold;
    line-height: 1.5;
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
  }
  
  .shadow-sm{
    /* box-shadow: #F8FAFD; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .content_footer{
    /* opacity: 0; */
    position: absolute;
    padding: 70px 100px 10px;

  }
  </style>
  