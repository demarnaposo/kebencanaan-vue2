<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-up header-one-page-nav-drawer"
      v-model="drawer"
      fixed
      width="320"
    >
      <v-list-item class="pa-5">
         <div class="logo">
          <img src="../../assets/images/logo/logo-symbol-dark.png" alt="brand-image">
       </div>
        <v-spacer></v-spacer>
        <v-btn class="close-icon" icon @click="drawer = !drawer" v-html="iconSvg(closeIcon)">
        </v-btn>
      </v-list-item>

        <scrollactive
        active-class="v-btn--active"
        bezier-easing-value=".5,0,.35,1"
        :offset="70"
      >
        <v-list>
          <v-list-item
            :ripple="false"
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            class="scrollactive-item"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- End mobile menu sidebar item list -->
        </v-list>
      </scrollactive>
    </v-navigation-drawer>
    <!-- End sidebar mobile menu -->

    <v-app-bar
      dark
      color="transparent"
      fixed
      elevate-on-scroll
      class="header-one-page-nav header-one-page-nav-two"
    >
      <router-link to="/" class="logo">
        <img src="../../assets/images/logo/logo-symbol-dark.png" />
      </router-link>
      <!-- End brand logo -->

      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto ml--35">
        <scrollactive
          active-class="v-btn--active"
          bezier-easing-value=".5,0,.35,1"
          :offset="71"
        >
          <v-btn
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
            :ripple="false"
            text
            class="scrollactive-item"
            >{{ item.title }}</v-btn
          >
        </scrollactive>
      </v-toolbar-items>
      <!-- End header menu item -->
      <v-spacer></v-spacer>
      <div class="social-share-inner">
        <socialTwo />
      </div>
      <a class="btn-default btn-border btn-opacity" target="_blank" href="https://themeforest.net/checkout/from_item/32012548?license=regular">
        <span>buy now</span>
      </a>
      <v-btn
        icon
        :ripple="false"
        class="ma-0 pa-0 hidden-md-and-up menu_icon"
        @click="drawer = !drawer"
        v-html="iconSvg(icon)"
      >
      </v-btn>
      <!-- End mobile menu icon -->
    </v-app-bar>
    <!-- End top header navbar -->
  </div>
</template>

<script>
  import feather from "feather-icons";
  import socialTwo from "../social/SocialTwo";
  export default {
    components: {
      socialTwo,
    },
    data: () => ({
      drawer: false,
      items: [
        { title: "Home", to: "#home" },
        { title: "About", to: "#about" },
        { title: "Service", to: "#service" },
        { title: "Portfolio", to: "#portfolio" },
        { title: "Blog", to: "#blog" },
        { title: "Contact", to: "#contact" },
      ],
      icon: "menu",
      closeIcon: "x",
    }),
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
