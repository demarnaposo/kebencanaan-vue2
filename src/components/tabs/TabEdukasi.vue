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
                      >{{ item.title }} <span> - {{ item.name }}</span></router-link
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
                        <div class="im_box mt--30">
                          <div class="thumbnail">
                            <router-link
                              :to="{
                                name: 'DataEdukasiDetails',
                                params: { id: edu.id, kategori: edu.kategori_artikel },
                              }"
                            >
                              <img class="w-100" :src="edu.gambar" alt="Blog Images" />
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
                                        id: edu.id,
                                        kategori: edu.kategori_artikel,
                                      },
                                    }"
                                    >{{ edu.tanggal }}<br />
                                    {{ edu.kategori_artikel }}</router-link
                                  >
                                </div>
                                <h4 class="heading-title">
                                  <router-link
                                    :to="{
                                      name: 'DataEdukasiDetails',
                                      params: {
                                        id: edu.id,
                                        kategori: edu.kategori_artikel,
                                      },
                                    }"
                                    >{{ edu.judul }}</router-link
                                  >
                                </h4>
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
                                  class="rn-btn btn-opacity"
                                >
                                  Baca Selengkapnya
                                </router-link>
                              </div>
                            </div>
                            <router-link class="transparent_link" to="#"></router-link>
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
                <div class="rn-blog-area ptb--50 bg_color--1" v-if="item.Gambar">
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
                        <div class="im_box mt--30">
                          <div class="thumbnail">
                            <router-link
                              :to="{
                                name: 'DataEdukasiDetails',
                                params: { id: eduG.id, kategori: eduG.kategori_artikel },
                              }"
                            >
                              <img class="w-100" :src="eduG.gambar" alt="Blog Images" />
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
                                        id: eduG.id,
                                        kategori: eduG.kategori_artikel,
                                      },
                                    }"
                                    >{{ eduG.tanggal }}</router-link
                                  >
                                </div>
                                <h4 class="heading-title">
                                  <router-link
                                    :to="{
                                      name: 'DataEdukasiDetails',
                                      params: {
                                        id: eduG.id,
                                        kategori: eduG.kategori_artikel,
                                      },
                                    }"
                                    >{{ eduG.judul }}</router-link
                                  >
                                </h4>
                              </div>
                              <div class="content_footer">
                                <router-link
                                  :to="{
                                    name: 'DataEdukasiDetails',
                                    params: {
                                      id: eduG.id,
                                      kategori: eduG.kategori_artikel,
                                    },
                                  }"
                                  class="rn-btn btn-opacity"
                                >
                                  Baca Selengkapnya
                                </router-link>
                              </div>
                            </div>
                            <router-link
                              class="transparent_link"
                              to="/edukasi-details"
                            ></router-link>
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
                <div class="rn-blog-area ptb--50 bg_color--1" v-if="item.Vidio">
                  <v-container>
                    <v-row>
                      <v-col
                        lg="4"
                        md="4"
                        sm="6"
                        cols="12"
                        v-for="eduV in edukasiVidio"
                        :key="eduV.id"
                      >
                        <div class="im_box mt--30">
                          <div class="thumbnail">
                            <router-link
                              :to="{
                                name: 'DataEdukasiDetails',
                                params: {
                                  id: eduV.id,
                                  kategori: eduV.kategori_artikel,
                                },
                              }"
                            >
                              <img class="w-100" :src="eduV.gambar" alt="Blog Images" />
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
                                        id: eduV.id,
                                        kategori: eduV.kategori_artikel,
                                      },
                                    }"
                                    >{{ eduV.tanggal }}</router-link
                                  >
                                </div>
                                <h4 class="heading-title">
                                  <router-link
                                    :to="{
                                      name: 'DataEdukasiDetails',
                                      params: {
                                        id: eduV.id,
                                        kategori: eduV.kategori_artikel,
                                      },
                                    }"
                                    >{{ eduV.judul }}</router-link
                                  >
                                </h4>
                              </div>
                              <div class="content_footer">
                                <router-link
                                  :to="{
                                    name: 'DataEdukasiDetails',
                                    params: {
                                      id: eduV.id,
                                      kategori: eduV.kategori_artikel,
                                    },
                                  }"
                                  class="rn-btn btn-opacity"
                                >
                                  Baca Selengkapnya
                                </router-link>
                              </div>
                            </div>
                            <router-link
                              class="transparent_link"
                              :to="{
                                name: 'DataEdukasiDetails',
                                params: {
                                  id: eduV.id,
                                  kategori: eduV.kategori_artikel,
                                },
                              }"
                            ></router-link>
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
                <!-- END TUTUP VIDIO  -->

                <!-- TAB ARTIKEL -->
                <div class="rn-blog-area ptb--50 bg_color--1" v-if="item.Artikel">
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
                        <div class="im_box mt--30">
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
                            <router-link
                              class="transparent_link"
                              to="{ name: '/edukasi-details', params:{id:eduA.id}}"
                            ></router-link>
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
import EdukasiArtikel from "../../components/blog/EdukasiArtikel";
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
    EdukasiArtikel,
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
          name: "Vidio",
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
    };
  },
  setup() {
    const edukasi = ref([]);
    const edukasiGambar = ref([]);
    const edukasiVidio = ref([]);
    const edukasiArtikel = ref([]);

    onMounted(() => {
      axios
        .get("http://dev-kebencanaan.kotabogor.go.id/admin/api/edukasi/bencana")
        .then((response) => {
          edukasi.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios
          .get(
            "http://dev-kebencanaan.kotabogor.go.id/admin/api/edukasi/bencana?kategori=Gambar"
          )
          .then((response) => {
            edukasiGambar.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get(
            "http://dev-kebencanaan.kotabogor.go.id/admin/api/edukasi/bencana?kategori=Video"
          )
          .then((response) => {
            edukasiVidio.value = response.data.data;
            // console.log(response.data.data);
          }),
        axios
          .get(
            "http://dev-kebencanaan.kotabogor.go.id/admin/api/edukasi/bencana?kategori=Artikel"
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
