<template>
  <v-row>
    <!-- <input type="text" v-model="searchFilter" /> -->
    <!-- Start Single Portfolio  -->

    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      class="mt--40"
      v-for="(item, i) in dataSelengkapnya"
      :key="i"
    >
      <div class="im_portfolio text-center">
        <div class="thumbnail_inner">
          <div class="thumbnail">
            <a href="portfolio-details.html">
              <img class="w-100" :src="item.foto" alt="Portfolio Images" />
            </a>
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
                  >{{ item.bencana }}</router-link
                >
              </div>
            </div>
            <div class="portfolio_hover">
              <p>
                Kecamatan {{ item.kecamatan }} Kelurahan {{ item.kelurahan }}
              </p>
            </div>
          </div>
        </div>
        <router-link
          :to="{
            name: 'DataKerusakanDetails',
            params: { id: item.id, slug: item.slug },
          }"
        ></router-link>
      </div>
    </v-col>
    <!-- End Single Portfolio  -->
  </v-row>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      searchFilter: "",
    };
  },
  computed: {
    dataSelengkapnya() {
      var check = this.searchFilter.length > 0;
      if (!check) {
        return this.items;
      } else {
        // alert('hai')
        return this.items.filter(
          (data) => !data.bencana.indexOf(this.searchFilter)
        );
      }
    },
  },
};
</script>

<style scoped>
.im_portfolio {
  width: 100%;
  height: auto !important;
  max-height: 15vw !important;
}
</style>
