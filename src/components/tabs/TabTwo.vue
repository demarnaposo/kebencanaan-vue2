<template>
  <v-col lg="12">
    <div class="tab-default">
      <v-tabs v-model="tab" flat hide-slider>
        <v-tab v-for="item in items" :key="item.id" :ripple="false">
          {{ item.name }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          transition="fade-transition"
          v-for="item in tabContent"
          :key="item.id"
        >
          <v-card flat>
            <v-card-text>
              <div class="single-tab-content">
                <ul>
                  <li v-for="(item, i) in item.content" :key="i">
                    <router-link to="/service"
                      >{{ item.title }}
                      <span> - {{ item.name }}</span></router-link
                    >
                    {{ item.desc }}
                  </li>
                </ul>
                <!-- Koata Bogor -->
                <div class="rn-counterup-area ptb--0 bg_color--1" v-if="item.kotabogor">
                  <v-container>
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
                  </v-container>
                </div>
                <!-- BOGOR UTARA -->
                <div class="rn-counterup-area ptb--0 bg_color--1" v-if="item.bout">
                  <v-container>
                    <v-row class="mt--30">
                      <!-- Start Single Counterup  -->
                      <v-col
                        lg="3"
                        md="3"
                        sm="6"
                        cols="12"
                        class="im_single_counterup"
                        v-for="bu in bout"
                        :key="bu.id"
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
                              {{ bu.total }}
                            </h5>
                            <p class="description">
                              <b>{{ bu.bencana }}</b>
                            </p>
                          </div>
                        </div>
                      </v-col>
                      <!-- Start Single Counterup  -->
                    </v-row>
                  </v-container>
                </div>
                <!-- BOGOR SELATAN -->
                <div class="rn-counterup-area ptb--0 bg_color--1" v-if="item.botsel">
                  <v-container>
                    <v-row class="mt--30">
                      <!-- Start Single Counterup  -->
                      <v-col
                        lg="3"
                        md="3"
                        sm="6"
                        cols="12"
                        class="im_single_counterup"
                        v-for="bs in botsel"
                        :key="bs.id"
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
                              {{ bs.total }}
                            </h5>
                            <p class="description">
                              <b>{{ bs.bencana }}</b>
                            </p>
                          </div>
                        </div>
                      </v-col>
                      <!-- Start Single Counterup  -->
                    </v-row>
                  </v-container>
                </div>
                <!-- BOGOR TIMUR -->
                <div class="rn-counterup-area ptb--0 bg_color--1" v-if="item.botim">
                  <v-container>
                    <v-row class="mt--30">
                      <!-- Start Single Counterup  -->
                      <v-col
                        lg="3"
                        md="3"
                        sm="6"
                        cols="12"
                        class="im_single_counterup"
                        v-for="bt in botim"
                        :key="bt.id"
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
                              {{ bt.total }}
                            </h5>
                            <p class="description">
                              <b>{{ bt.bencana }}</b>
                            </p>
                          </div>
                        </div>
                      </v-col>
                      <!-- Start Single Counterup  -->
                    </v-row>
                  </v-container>
                </div>
                <!-- BOGOR BARAT -->
                <div class="rn-counterup-area ptb--0 bg_color--1" v-if="item.bobar">
                  <v-container>
                    <v-row class="mt--30">
                      <!-- Start Single Counterup  -->
                      <v-col
                        lg="3"
                        md="3"
                        sm="6"
                        cols="12"
                        class="im_single_counterup"
                        v-for="bb in bobar"
                        :key="bb.id"
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
                              {{ bb.total }}
                            </h5>
                            <p class="description">
                              <b>{{ bb.bencana }}</b>
                            </p>
                          </div>
                        </div>
                      </v-col>
                      <!-- Start Single Counterup  -->
                    </v-row>
                  </v-container>
                </div>
                <!-- BOGOR TENGAH -->
                <div class="rn-counterup-area ptb--0 bg_color--1" v-if="item.boteng">
                  <v-container>
                    <v-row class="mt--30">
                      <!-- Start Single Counterup  -->
                      <v-col
                        lg="3"
                        md="3"
                        sm="6"
                        cols="12"
                        class="im_single_counterup"
                        v-for="bt in boteng"
                        :key="bt.id"
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
                              {{ bt.total }}
                            </h5>
                            <p class="description">
                              <b>{{ bt.bencana }}</b>
                            </p>
                          </div>
                        </div>
                      </v-col>
                      <!-- Start Single Counterup  -->
                    </v-row>
                  </v-container>
                </div>
                <!-- TANAH SEREAL -->
                <div class="rn-counterup-area ptb--0 bg_color--1" v-if="item.tansar">
                  <v-container>
                    <v-row class="mt--30">
                      <!-- Start Single Counterup  -->
                      <v-col
                        lg="3"
                        md="3"
                        sm="6"
                        cols="12"
                        class="im_single_counterup"
                        v-for="ts in tansar"
                        :key="ts.id"
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
                              {{ ts.total }}
                            </h5>
                            <p class="description">
                              <b>{{ ts.bencana }}</b>
                            </p>
                          </div>
                        </div>
                      </v-col>
                      <!-- Start Single Counterup  -->
                    </v-row>
                  </v-container>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-col>
</template>
<script>
 import VisibilitySensor from "vue-visibility-sensor";
  import CounterOne from "../../components/counter/CounterOne";
  import countTo from "vue-count-to";
  import feather from "feather-icons";
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  export default {
    components:{
      CounterOne,
      countTo,
      VisibilitySensor
    },
    data() {
      return {
        tab: null,
        items: [
          {
            id: 1,
            name: "Kota Bogor",
          },
          {
            id: 2,
            name: "Bogor Utara",
          },
          {
            id: 3,
            name: "Bogor Selatan",
          },
          {
            id: 4,
            name: "Bogor Timur",
          },
          {
            id: 5,
            name: "Bogor Barat",
          },
          {
            id: 6,
            name: "Bogor Tengah",
          },
          {
            id: 7,
            name: "Tanah Sareal",
          },
        ],

        tabContent: [
          {
            id: 1,
            kotabogor: true,
          },
          {
            id: 2,
            bout: true,
          },
          {
            id: 3,
            botsel: true,
          },
          {
            id: 4,
            botim: true,
          },
          {
            id: 5,
            bobar: true,
          },
          {
            id: 6,
            boteng: true,
          },
          {
            id: 7,
            tansar: true,
          },
        ],
      };
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
        axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana')
        .then(response => {
          kotabogor.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=1')
        .then(response => {
          botsel.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=2')
        .then(response => {
          bout.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=3')
        .then(response => {
          boteng.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=4')
        .then(response => {
          botim.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=5')
        .then(response => {
          tansar.value = response.data.data;
          // console.log(response.data.data);
        }),
        axios.get('https://dev-kebencanaan.kotabogor.go.id/admin/api/bencana?kecamatan_id=327106')
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
