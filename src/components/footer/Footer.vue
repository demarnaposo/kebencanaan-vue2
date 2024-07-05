<template>
  <footer class="footer-area footer-style-01 ptb--20 bg_color--6">
      <v-container class="container">
        <v-row>
          <v-col lg="6" md="4" sm="6" cols="12">
            <div class="ft-text">
              <div class="logo">
                <a href="/"><img :src="logo" alt="brand image" /></a>
              </div>
            </div>
          </v-col>
          <v-col lg="6" md="4" sm="6" cols="12">
            <div class="ft-text ptb--20">
              <p>
                Copyright © {{ new Date().getFullYear() }} <a href="https://kominfo.kotabogor.go.id/">Dinas Komunikasi dan Informatika Kota Bogor</a>
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../../assets/images/logo/logo-light.png"),
      socialList: [
        {
          icon: "fa-facebook-f",
          url: "https://www.facebook.com/",
        },
        {
          icon: "fa-linkedin-in",
          url: "https://www.linkedin.com/",
        },
        {
          icon: "fa-twitter",
          url: "https://twitter.com/",
        },
        {
          icon: "fa-instagram",
          url: "https://www.instagram.com/",
        },
      ],
    };
  },
};
</script>
