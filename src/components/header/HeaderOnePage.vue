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
          <img
            src="../../assets/images/logo/logo-symbol-dark.png"
            alt="brand-image"
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="close-icon"
          icon
          @click="drawer = !drawer"
          v-html="iconSvg(closeIcon)"
        >
        </v-btn>
      </v-list-item>
      <scrollactive
        active-class="v-btn--active"
        bezier-easing-value=".5,0,.35,1"
        :offset="71"
      >
        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-if="item.children"
            :value="item.expanded"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.children"
              :key="child.title"
              :to="child.to"
              link
              class="scrollactive-item"
            >
              <v-list-item-content>
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            v-if="!item.children"
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
      class="header-one-page-nav"
    >
      <router-link to="/" class="logo">
        <slot name="logo"></slot>
        <slot name="logo-dark"></slot>
      </router-link>
      <!-- End brand logo -->
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto">
        <scrollactive
          active-class="v-btn--active"
          bezier-easing-value=".5,0,.35,1"
        >
          <v-menu
            v-for="item in items"
            :key="item.title"
            v-if="item.children"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                text
                class="scrollactive-item"
              >{{ item.title }}</v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="child in item.children"
                :key="child.title"
                :to="child.to "
                link
              >
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            v-for="item in items"
            :key="item.title"
            v-if="!item.children"
            :to="item.to"
            link
            text
            class="scrollactive-item"
          >{{ item.title }}</v-btn>
        </scrollactive>
      </v-toolbar-items>
      <!-- End header menu item -->
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
  export default {
    data: () => ({
      drawer: false,
      items: [
      {
          title: "Profil",
          children: [
            { title: "Sejarah", to: "/sejarah" },
            { title: "Sambutan", to: "/sambutan" },
            { title: "Struktur Organisasi", to: "/struktur" },
            { title: "Visi Misi", to: "/visimisi" },
            
          ]
        },
        { title: "Dokumen", to: "/dokumen" },
        { title: "Bencana", to: "#bencana" },
        { title: "Edukasi", to: "#edukasi" },
        { title: "Berita", to: "#berita" },
        { title: "Galeri", to: "#galeri" },
        { title: "Lapor Kejadian", to: "#lapor" },
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
