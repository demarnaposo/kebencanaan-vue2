<template>
  <div>
    <!-- Start Portfolio Activation  -->
    <VueSlickCarousel
      v-bind="settings"
      class="
        rn-slick-activation
        portfolio-slick-activation
        item-fluid
        slick-dotted
        rn-slick-dot
        mt--40
        mt_sm--40
      "
    >
      <!-- Start Single Portfolio  -->
      <div class="im_portfolio" v-for="(item, i) in dataKerusakan" :key="i">
        <div class="thumbnail_inner">
          <div class="thumbnail">
            <img class="" :src="item.foto" alt="Portfolio Images" />
          </div>
        </div>
        <div class="content">
          <div class="inner">
            <div class="portfolio_heading">
              <div class="category_list">
                <router-link
                  :to="{
                    name: 'DataKerusakanDetails',
                    params: { id: item.id, slug: item.slug },
                  }"
                >
                  <span class="h4 text-white">
                    Kecamatan {{ item.kecamatan }} </span
                  ><br />
                  <span class="h5 text-white font-weight-light"
                    >Kelurahan {{ item.kelurahan }}
                  </span>
                </router-link>
              </div>
            </div>
            <div class="portfolio_hover">
              <p>{{ item.bencana }}</p>
            </div>
          </div>
        </div>
        <!-- <router-link
          class="transparent_link"
          to="/portfolio-details"
        ></router-link> -->
      </div>
      <!-- End Single Portfolio  -->
    </VueSlickCarousel>
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
