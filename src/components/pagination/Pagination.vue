<template>
  <ul class="page-list">
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li>
      <a href="#"><i class="fas fa-angle-right"></i></a>
    </li>
  </ul>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default {
  data() {
    return {};
  },
  setup() {
    const berita = ref([]);
    const beritabpbd = ref([]);

    //define route
    //  const route = useRoute();

    onMounted(() => {
      axios
        .get("https://dev-kebencanaan.kotabogor.go.id/api/bencana/berita?page=1")
        .then((response) => {
          berita.value = response.data.data.data;
          // console.log(response.data.data.data);
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
      beritabpbd,
    };
  },
};
</script>
