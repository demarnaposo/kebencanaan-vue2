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
                      <router-link to="/blog-details">
                        <img class="w-100" :src="brt.foto" alt="Blog Images" />
                      </router-link>
                    </div>
                    <div class="content">
                      <div class="inner">
                        <div class="content_heading">
                          <div class="category_list">
                            <router-link to="/blog-details">{{ brt.tgl }}</router-link>
                          </div>
                          <h4 class="heading-title">
                            <router-link to="/blog-details">{{ brt.judul }}</router-link>
                          </h4>
                        </div>
                        <div class="content_footer">
                          <router-link to="/blog-details" class="rn-btn btn-opacity">
                            Read More
                          </router-link>
                        </div>
                      </div>
                      <router-link class="transparent_link" to="/blog-details"></router-link>
                    </div>
                  </div>
                </v-col>
                <!-- End Blog Area  -->
              </v-row>  
            </div>
            <!-- BERITA BENCANA -->
            <div class="list0style-inner mt--30" v-if="item.beritabpbd">
              <v-row class="mt--30 mt_sm--40">
                <!-- Start Blog Area  -->
                <v-col lg="3" md="4" sm="6" cols="12" v-for="bpbd in beritabpbd" :key="bpbd.id">
                  <div class="im_box mt--30">
                    <div class="thumbnail">
                      <router-link to="/blog-details">
                        <img class="w-100" :src="bpbd.foto" alt="Blog Images" />
                      </router-link>
                    </div>
                    <div class="content">
                      <div class="inner">
                        <div class="content_heading">
                          <div class="category_list">
                            <router-link to="/blog-details">{{ bpbd.tgl }}</router-link>
                          </div>
                          <h4 class="heading-title">
                            <router-link to="/blog-details">{{ bpbd.judul }}</router-link>
                          </h4>
                        </div>
                        <div class="content_footer">
                          <router-link to="/blog-details" class="rn-btn btn-opacity">
                            Read More
                          </router-link>
                        </div>
                      </div>
                      <router-link class="transparent_link" to="/blog-details"></router-link>
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
  import { ref, onMounted } from 'vue';
  import VueRouter from "vue-router";
  //import hook useRoute
  // import { useRoute } from 'vue-router';

  Vue.use(VueRouter);

  export default {
    data() {
      return {
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
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },

    setup(){
      const berita = ref([]);
      const beritabpbd = ref([]);

           //define route
    //  const route = useRoute();

      onMounted(() => {
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/api/bencana/berita?limit=4")
          .then((response) => {
            berita.value = response.data.data;
            // console.log(response.data.data);
          });
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/api/beritabpbd?limit=4")
          .then((response) => {
            beritabpbd.value = response.data.data;
            // console.log(response.data.data);
          });
      });

      return {
        berita,
        beritabpbd
      }
    }
  };
</script>
