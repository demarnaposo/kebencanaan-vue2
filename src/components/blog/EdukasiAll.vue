<template>
  <v-row class="mt_dec--30">
    <!-- Start Blog Area  -->
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
          <router-link to="/edukasi-details">
            <img class="w-100" src="../../assets/images/blog/blog-01.jpg" alt="Blog Images" />
          </router-link>
        </div>
        <div class="content">
          <div class="inner">
            <div class="content_heading">
              <div class="category_list">
                <router-link to="/edukasi-details">Gempa Bumi</router-link>
              </div>
              <h4 class="heading-title">
                <router-link to="/edukasi-details">Waspada</router-link>
              </h4>
            </div>
            <div class="content_footer">
              <router-link to="/edukasi-details" class="rn-btn btn-opacity">
                Read More
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
    <!-- End Blog Area  -->
  </v-row>
</template>

<script>
export default {
  setup(){
    const edukasi = ref([]);

    onMounted(() => {
      axios.get('http://dev-kebencanaan.kotabogor.go.id/api/edukasi/bencana')
        .then(response => {
          edukasi.value = response.data;
          console.log(response.data.data);
        })
    });

    return {
      edukasi
    }
  }
}
</script>
