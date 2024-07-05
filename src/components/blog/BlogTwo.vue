<template>
  <v-row>
    <v-col cols="12">
      <v-tabs v-model="tab" centered flat hide-slider color="primary">
        <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
          item.name
        }}</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          transition="fade-transition"
          v-for="item in tabContent"
          :key="item.id"
        >
          <!-- Content -->
          <div
            class="slick-space-gutter--15 slickdot--20"
            v-if="item.beritabencana"
          >
            <VueSlickCarousel
              v-if="beritabencana.length"
              v-bind="settings"
              class="rn-slick-activation portfolio-slick-activation item-fluid slick-dotted rn-slick-dot mt--40 mt_sm--40"
            >
              <!-- Start Single Blog  -->

              <div
                class="im_box mt--30"
                v-for="(brt, i) in beritabencana"
                :key="i"
              >
                <div class="thumbnail">
                  <router-link
                    :to="{ name: 'Berita Details', params: { id: brt.id } }"
                  >
                    <img class="w-100" :src="brt.foto" alt="Blog Images" />
                  </router-link>
                </div>
                <div class="content">
                  <div class="inner">
                    <div class="content_heading">
                      <div class="category_list">
                        <router-link
                          :to="{
                            name: 'Berita Details',
                            params: { id: brt.id },
                          }"
                          >{{ brt.jenis }}</router-link
                        >
                      </div>
                      <h4 class="heading-title">
                        <router-link
                          :to="{
                            name: 'Berita Details',
                            params: { id: brt.id },
                          }"
                          >{{ brt.judul }}</router-link
                        >
                      </h4>
                    </div>
                    <div class="content_footer">
                      <router-link
                        :to="{ name: 'Berita Details', params: { id: brt.id } }"
                        class="rn-btn btn-opacity"
                      >
                        Baca Selengkapnya
                      </router-link>
                    </div>
                  </div>
                  <router-link
                    class="transparent_link"
                    :to="{ name: 'Berita Details', params: { id: brt.id } }"
                  ></router-link>
                </div>
              </div>

              <!-- End Single Blog  -->
            </VueSlickCarousel>
          </div>
          <!-- Content -->
          <div
            class="slick-space-gutter--15 slickdot--20"
            v-if="item.beritabpbd"
          >
            <VueSlickCarousel
              v-bind="settings"
              class="rn-slick-activation slick-dotted rn-slick-dot mt--10"
            >
              <!-- Start Single Blog  -->

              <div
                class="im_box mt--30"
                v-for="(bpbd, i) in beritabpbd"
                :key="i"
              >
                <div class="thumbnail">
                  <router-link to="/blog-details">
                    <img class="w-100" :src="bpbd.foto" alt="Blog Images" />
                  </router-link>
                </div>
                <div class="content">
                  <div class="inner">
                    <div class="content_heading">
                      <div class="category_list">
                        <router-link
                          :to="{
                            name: 'Berita Details',
                            params: { id: bpbd.id },
                          }"
                          >{{ bpbd.jenis }}</router-link
                        >
                      </div>
                      <h4 class="heading-title">
                        <router-link
                          :to="{
                            name: 'Berita Details',
                            params: { id: bpbd.id },
                          }"
                          >{{ bpbd.judul }}</router-link
                        >
                      </h4>
                    </div>
                    <div class="content_footer">
                      <router-link
                        :to="{
                          name: 'Berita Details',
                          params: { id: bpbd.id },
                        }"
                        class="rn-btn btn-opacity"
                      >
                        Baca Selengkapnya
                      </router-link>
                    </div>
                  </div>
                  <router-link
                    class="transparent_link"
                    to="/blog-details"
                  ></router-link>
                </div>
              </div>

              <!-- End Single Blog  -->
            </VueSlickCarousel>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
  </v-row>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      tab: null,
      index: null,
      tabItems: [
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
      // for all works
      settings: {
        // centerMode: true,
        // centerPadding: "20px",
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 1263,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              infinite: true,
              dots: true,
            },
          },
        ],
      },
    };
  },
  setup() {
    const beritabencana = ref([]);
    const beritabpbd = ref([]);

    onMounted(() => {
      axios
        .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/beritabencana?limit=4")
        .then((response) => {
          beritabencana.value = response.data.data;
          console.log(response.data.data);
        }),
        axios
          .get("https://dev-kebencanaan.kotabogor.go.id/admin/api/beritabpbd?limit=4")
          .then((response) => {
            console.log(response.data)
            beritabpbd.value = response.data.data;
          });
    });

    return {
      beritabencana,
      beritabpbd,
    };
  },
};
</script>
