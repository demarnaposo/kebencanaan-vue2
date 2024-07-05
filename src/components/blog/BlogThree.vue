<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in tabContent" :key="item.id">
          <div class="single-tab-content">
            <div v-if="item.isDesc">
              <p>
                {{ item.desc }}
              </p>
              <p>
                {{ item.desc2 }}
              </p>
            </div>

            <!-- BERITA BENCANA -->
            <div class="list0style-inner mt--30" v-if="item.beritabencana">
              <v-row class="mt--30 mt_sm--40">
                <!-- Start Blog Area  -->
                <v-col lg="3" md="4" sm="6" cols="12" v-for="brt in berita" :key="brt.id">
                  <div class="im_box mt--30">
                    <div class="thumbnail">
                      <router-link  :to="{
                            name: 'Berita Details',
                            params: { id: brt.id },
                          }">
                        <img class="w-100" :src="brt.foto" alt="Blog Images" />
                      </router-link>
                    </div>
                    <div class="content">
                      <div class="inner">
                        <div class="content_heading">
                          <div class="category_list">
                            <router-link  :to="{
                            name: 'Berita Details',
                            params: { id: brt.id },
                          }">{{ brt.tgl }}</router-link>
                          </div>
                          <h4 class="heading-title">
                            <router-link  :to="{
                            name: 'Berita Details',
                            params: { id: brt.id },
                          }">{{ brt.judul }}</router-link>
                          </h4>
                        </div>
                        <div class="content_footer">
                          <router-link  :to="{
                            name: 'Berita Details',
                            params: { id: brt.id },
                          }" class="rn-btn btn-opacity">
                            Selengkapnya
                          </router-link>
                        </div>
                      </div>
                      <router-link
                        class="transparent_link"
                         :to="{
                            name: 'Berita Details',
                            params: { id: brt.id },
                          }"
                      ></router-link>
                    </div>
                  </div>
                </v-col>
                <br><br>
                <!-- End Blog Area  -->
              </v-row>
                  <!-- Start Portfolio Area  -->
              <div class="portfolio-area ptb--120">
                <v-container>
                  <v-pagination
                    class="mt-4"
                    v-model="pagination.current"
                    :length="pagination.total"
                    @input="onePageChange"
                  ></v-pagination>
                </v-container>
              </div>
              <!-- Start Portfolio Area  -->
            </div>
               
            <!-- BERITA BENCANA -->
            <div class="list0style-inner mt--30" v-if="item.beritabpbd">
              <v-row class="mt--30 mt_sm--40">
                <!-- Start Blog Area  -->
                <v-col
                  lg="3"
                  md="4"
                  sm="6"
                  cols="12"
                  v-for="bpbd in bencana" :key="bpbd.id"
                >
                  <div class="im_box mt--30">
                    <div class="thumbnail">
                      <router-link :to="{
                            name: 'Berita Details',
                            params: { id: bpbd.id },
                          }">
                        <img class="w-100" :src="bpbd.foto" alt="Blog Images" />
                      </router-link>
                    </div>
                    <div class="content">
                      <div class="inner">
                        <div class="content_heading">
                          <div class="category_list">
                            <router-link :to="{
                            name: 'Berita Details',
                            params: { id: bpbd.id },
                          }">{{ bpbd.tgl }}</router-link>
                          </div>
                          <h4 class="heading-title">
                            <router-link :to="{
                            name: 'Berita Details',
                            params: { id: bpbd.id },
                          }">{{ bpbd.judul }}</router-link>
                          </h4>
                        </div>
                        <div class="content_footer">
                          <router-link :to="{
                            name: 'Berita Details',
                            params: { id: bpbd.id },
                          }" class="rn-btn btn-opacity">
                            Selengkapnya
                          </router-link>
                        </div>
                      </div>
                      <router-link
                        class="transparent_link"
                        :to="{
                            name: 'Berita Details',
                            params: { id: bpbd.id },
                          }"
                      ></router-link>
                    </div>
                  </div>
                </v-col>
                <!-- End Blog Area  -->
              </v-row>
            </div>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
<script>
import feather from "feather-icons";
import Vue from "vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import VueRouter from "vue-router";
//import hook useRoute
// import { useRoute } from 'vue-router';

Vue.use(VueRouter);

export default {
  data() {
    return {
      pagination: {
        current: 1,
        total: 0,
      },
      paginationBencana: {
        current: 1,
        total: 0,
      },
      berita: [],
      bencana: [],
      tab: null,
      items: [
        {
          id: 1,
          name: "Berita Bencana",
        },
        {
          id: 2,
          name: "Berita BPBD",
        },
      ],
      tabContent: [
        {
          id: 1,
          beritabencana: true,
        },
        {
          id: 2,
          beritabpbd: true,
        },
      ],
    };
  },
  methods: {
    getItem() {
      axios
        .get(
          "https://dev-kebencanaan.kotabogor.go.id/admin/api/beritabencana?page=" +
            this.pagination.current
        )
        .then((response) => {
          console.log(response.data.data.current_page);
          this.berita = response.data.data.data;
          this.pagination.current = response.data.data.current_page;
          this.pagination.total = response.data.data.last_page;
        });

      axios
        .get(
          "https://dev-kebencanaan.kotabogor.go.id/admin/api/beritabpbd?page=" +
            this.paginationBencana.current
        )
        .then((response) => {
          console.log(response.data.data);
          this.bencana = response.data.data.data;
          this.paginationBencana.current = response.data.data.current_page;
          this.paginationBencana.total = response.data.data.last_page;
        });
    },
    onePageChange() {
      this.getItem();
    },
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
  mounted() {
    this.getItem();
  },
};
</script>
