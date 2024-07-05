<template>
  <div>
    <v-tabs v-model="tab" centered flat hide-slider color="primary">
      <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
        item.name
      }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in tabContent" :key="item.id" transition="fade-transition">
        <CoolLightBox
          :items="item.galerifoto"
          :index="index"
          :fullScreen="true"
          :effect="'fade'"
          @close="index = null"
        >
        </CoolLightBox>
        <div
          class="gallery-wrapper gallery-grid mesonry-list grid-metro3"
          id="animated-thumbnials" v-if="item.galerifoto"
        >
          <div
           v-for="(gf, i) in galerifoto"
           :key="i"
           @click="index = i"
            class="image masonry_item portfolio-33-33"
          >
            <div class="item-portfolio-static ">
              <div class="portfolio-static">
                <div class="thumbnail-inner">
                  <div class="thumbnail">
                    <img :src="gf.gambar" height="300px" alt="portfolio image" />
                  </div>
                </div>

                <div class="content">
                  <div class="inner">
                    <p>{{gf.bencana}}</p>
                    <h4></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-col lg="12">
          <div class="text-center view-more-btn mt--60">
            <a class="btn-default" href="/galeri"
              ><span>Lihat Selengkapnya</span></a
            >
          </div>
        </v-col>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';

  export default {
    data() {
      return {
        tab: null,
        index: null,
        tabItems: [
          {
            id: 1,
            name: "Foto",
          },
          {
            id: 2,
            name: "Video",
          }
        ],
        tabContent: [
          {
            id: 1,
            galerifoto: true,
          },
          {
            id: 2,
            content: [
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-03.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-03.jpg"),
                tag: "Web Design",
                title: `Mobile App landing Design`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-04.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-04.jpg"),
                tag: "Web Design",
                title: `Web Design creativity`,
              },
              {
                thumb: require("../../assets/images/portfolio/dp-portfolio-05.jpg"),
                src: require("../../assets/images/portfolio/big/dp-big--portfolio-05.jpg"),
                tag: "Web Design",
                title: `Getting tickets to the big show`,
              },
            ],
          },
        ],
      };
    },
    setup(){
      const galerifoto = ref([]);

      onMounted(() => {
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/galeri/foto?kategori=limit')
        .then(response => {
          galerifoto.value = response.data.data;
          // console.log(response.data.data);
        })
      });

      return {
        galerifoto
      }
    }
  };
</script>
