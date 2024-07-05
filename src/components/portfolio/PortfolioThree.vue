<template>
  <div>
    <v-tabs v-model="tab" centered flat hide-slider color="primary">
      <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
        item.name
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in tabContent"
        :key="item.id"
        transition="fade-transition"
      >
        <div
          v-if="item.data == 'foto'"
          class="gallery-wrapper gallery-grid mesonry-list grid-metro3"
          id="animated-thumbnials"
        >
          <CoolLightBox
            :items="fotoData"
            :index="index"
            :fullScreen="true"
            :effect="'fade'"
            @close="index = null"
          >
          </CoolLightBox>
          <div
            v-for="(item, i) in fotoData"
            :key="i"
            @click="index = i"
            class="image masonry_item portfolio-33-33"
          >
            <div class="item-portfolio-static">
              <div class="portfolio-static">
                <div class="thumbnail-inner">
                  <div class="thumbnail">
                    <img :src="item.gambar" :alt="item.id" />
                  </div>
                </div>

                <div class="content">
                  <div class="inner">
                    <p>{{ item.bencana }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="item.data == 'video'"
          class="gallery-wrapper gallery-grid mesonry-list grid-metro3"
          id="animated-thumbnials"
        >
          <CoolLightBox
            :items="videoData"
            :index="index"
            :fullScreen="true"
            :effect="'fade'"
            @close="index = null"
          >
          </CoolLightBox>
          <div
            v-for="(vid, x) in videoData"
            :key="x"
            @click="index = x"
            class="image masonry_item portfolio-33-33"
          >
            <div class="item-portfolio-static">
              <div class="portfolio-static">
                <div class="thumbnail-inner">
                  <div class="thumbnail">
                    <img :src="vid.cover" :alt="vid.id" />
                  </div>
                </div>

                <div class="content">
                  <div class="inner">
                    <p>{{ vid.judul }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  props: ["fotoData", "videoData"],
  data() {
    return {
      tab: null,
      index: null,
      hai: this.fotoData,
      tabItems: [
        {
          id: 1,
          name: "Foto",
        },
        {
          id: 2,
          name: "Video",
        },
      ],
      tabContent: [
        {
          id: 1,
          data: "foto",
        },
        {
          id: 2,
          data: "video",
        },
      ],
    };
  },
};
</script>

<style scoped>
.item-portfolio-static .thumbnail img {
  width: 100%;
  height: auto !important;
  max-height: 20vw !important;
}
</style>
