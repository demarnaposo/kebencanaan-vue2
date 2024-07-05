<template>
  <div>
    <v-row class="mx-3">
      <!-- Start Single Portfolio  -->
      <v-col
        xl="3"
        lg="3"
        md="4"
        sm="6"
        cols="12"
        class="portfolio-tilthover"
        v-for="(item, i) in dataKerusakan"
        :key="i"
      >
        <div class="im_portfolio">
          <div class="thumbnail_inner">
            <div class="thumbnail">
              <a
                :to="{
                  name: 'DataKerusakanDetails',
                  params: { id: item.id, slug: item.slug },
                }"
              >
                <img class="w-100" :src="item.foto" alt="Portfolio Images" />
              </a>
            </div>
          </div>
          <div class="content">
            <div class="inner">
              <div class="portfolio_heading mb-6">
                <div class="category_list">
                  <router-link
                    :to="{
                      name: 'DataKerusakanDetails',
                      params: { id: item.id, slug: item.slug },
                    }"
                    >{{ item.kecamatan }}</router-link
                  >
                </div>
                <h4 class="heading-title">
                  <router-link
                    :to="{
                      name: 'DataKerusakanDetails',
                      params: { id: item.id, slug: item.slug },
                    }"
                  >
                    Kecamatan {{ item.kecamatan }}, Kelurahan
                    {{ item.kelurahan }}</router-link
                  >
                </h4>
              </div>
              <div class="portfolio_hover">
                <p>{{ item.bencana }}</p>
              </div>
            </div>
          </div>
          <router-link
            class="transparent_link"
            :to="{
              name: 'DataKerusakanDetails',
              params: { id: item.id, slug: item.slug },
            }"
          ></router-link>
        </div>
      </v-col>
      <!-- End Single Portfolio  -->
    </v-row>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
export default {
  props: ["dataKerusakan"],
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      // for all works
      settings: {
        // centerMode: true,
        // centerPadding: "20px",
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1500,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
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
        ],
      },
    };
  },
};
</script>

<style scoped>
.im_portfolio {
  width: 100%;
  height: auto !important;
  max-height: 20vw !important;
}
</style>
