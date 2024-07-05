<template>
  <v-row class="service-main-wrapper mt_dec--30">
    <!-- Start Single Service  -->
    <v-col
      lg="3"
      md="3"
      sm="6"
      cols="12"
      v-for="(service, i) in serviceContent"
      :key="i"
    >
      <div class="service service__style--2 text-left bg-gray">
        <div v-if="service.icon != 'layers'">
          <router-link :to="service.link">
            <div class="service">
              <div class="icon" v-html="iconSvg(service.icon)"></div>
              <div class="content">
                <h3 class="heading-title">{{ service.title }}</h3>
                <p>
                  {{ service.desc }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
        <div v-else>
          <a :href="service.link">
            <div class="service">
              <div class="icon" v-html="iconSvg(service.icon)"></div>
              <div class="content">
                <h3 class="heading-title">{{ service.title }}</h3>
                <p>
                  {{ service.desc }}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </v-col>
    <!-- End Single Service  -->
  </v-row>
</template>

<script>
import feather from "feather-icons";
export default {
  data() {
    return {
      serviceContent: [
        {
          icon: "cast",
          title: "Edukasi",
          link: "/edukasi",
          desc: `  Temukan informasi edukasi mengenai kebencanaan agar Anda dapat mencegah, meminimalisir dan mengantisipasi ketika terjadi bencana. `,
        },
        {
          icon: "layers",
          title: "Titik Rawan Bencana & Peta Bencana",
          link: "http://petarawankamtibmas.kotabogor.go.id/",
          desc: `
                Cari tahu titik-titik daerah rawan bencana di Kota 
                Bogor & Anda juga dapat melaporkan titik rawan 
                bencana melalui website Mitigasi Bencana Kota Bogor 
              `,
        },
        {
          icon: "cast",
          title: "Laporan Kejadian",
          link: "/edukasi",
          desc: ` 
                Menampilkan laporan kejadian bencana yang dilaporkan 
                oleh netizen melalui media sosial twitter yang disampaikan ke petabencana.id
              `,
        },
        {
          icon: "cast",
          title: "Penanggulangan Bencana",
          link: "/penanggulangan",
          desc: `Memberi Pengetahuan kepada pembaca mengenai sistem atau langkah-langkah dalam menaggulangi bencana dengan serius sehingga dapat meminimalisir dampak yang terjasi akibat bencana tersebut.`,
        },
      ],
    };
  },

  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
  },
};
</script>
