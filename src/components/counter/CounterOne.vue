<template>
  <v-row class="mt--30">
    <!-- Start Single Counterup  -->
    <v-col
      lg="3"
      md="3"
      sm="6"
      cols="12"
      class="im_single_counterup"
      v-for="kota in kotabogor"
      :key="kota.id"
    >
      <div class="im_counterup">
        <div class="inner">
          <!-- <div class="icon" v-html="iconSvg(counter.icon)"></div> -->
          <h5 class="counter count">
            <!-- <VisibilitySensor @change="onChange">
              <countTo
                :endVal="status ? kota.total : 0"
                :autoplay="countUp"
                :duration="3000"
              ></countTo>
            </VisibilitySensor> -->
            {{ kota.total }}
          </h5>
          <p class="description">
            <b>{{ kota.bencana }}</b>
          </p>
        </div>
      </div>
    </v-col>
    <!-- Start Single Counterup  -->
  </v-row>
</template>

<script>
  import VisibilitySensor from "vue-visibility-sensor";
  import countTo from "vue-count-to";
  import feather from "feather-icons";
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  export default {
    components: {
      countTo,
      VisibilitySensor,
    },
    // data() {
    //   return {
    //     countUp: true,
    //     status: false,
    //     counterUpContent: [
    //       {
    //         icon: "heart",
    //         endVal: 199,
    //         desc: `Staticfied Customers`,
    //       },
    //       {
    //         icon: "clock",
    //         endVal: 575,
    //         desc: `Days Of Operation`,
    //       },
    //       {
    //         icon: "check-circle",
    //         endVal: 49,
    //         desc: `Complete Project`,
    //       },
    //       {
    //         icon: "award",
    //         endVal: 55,
    //         desc: `Win Awards`,
    //       },
    //       {
    //         icon: "award",
    //         endVal: 55,
    //         desc: `Win Awards`,
    //       },
    //       {
    //         icon: "award",
    //         endVal: 55,
    //         desc: `Win Awards`,
    //       },
    //     ],
    //   };
    // },
    methods: {
      onChange(isVisible) {
        if (isVisible) {
          this.status = true;
        }
      },
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
    setup(){
      const kotabogor = ref([]);
      const bout = ref([]);
      const botim = ref([]);
      const botsel = ref([]);
      const bobar = ref([]);
      const boteng = ref([]);
      const tansar = ref([]);

      onMounted(() => {
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana')
        .then(response => {
          kotabogor.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=1')
        .then(response => {
          botsel.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=2')
        .then(response => {
          bout.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=3')
        .then(response => {
          boteng.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=4')
        .then(response => {
          botim.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=5')
        .then(response => {
          tansar.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('http://dev-kebencanaan.kotabogor.go.id/api/bencana?kecamatan_id=6')
        .then(response => {
          bobar.value = response.data.data;
          // console.log(response.data.data);
        })
      });

      return {
        kotabogor,
        bobar,
        bout,
        botim,
        botsel,
        boteng,
        tansar,
        countUp: true,
        status: false
      }
    }
    };

</script>
