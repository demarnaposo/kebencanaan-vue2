<template>
  <div>
    <VueSlickCarousel
      v-if="sliderData.length"
      v-bind="settings"
      class="slider-digital-agency slider-activation rn-slick-dot dot-light mb--0 color-white"
    >
      <div
        class="slide slide-style-2 fullscreen d-flex align-center bg_image"
        data-black-overlay="2"
        v-for="(slider, i) in sliderData"
        :key="i"
        :style="{ backgroundImage: 'url(' + slider.gambar + ')' }"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="text-center">
                <h1 class="heading-title text-white text-uppercase">
                  {{ slider.judul }}<br /><br /><br />
                </h1>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
  </div>
</template>

<script>
import Vue from "vue";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  props: ["sliderData"],
  components: { VueSlickCarousel },
  data() {
    return {
      sliderContent: [],
      settings: {
        fade: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 20,
        adaptiveHeight: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slick-slide {
  img {
    display: block;
    width: 100%;
  }
}
</style>
