<script setup lang="ts">
import kantorbpbd from "../../assets/img/bpbd.jpeg";
import imgKotaBogor from "../../assets/img/kota-bogor.png";
import imgBPBDKotaBogor from "../../assets/img/bpbd_bogor.png";
</script>
<template>
  <section class="section-header">
    <div class="card-bg-header">
      <img :src="kantorbpbd" class="d-block w-100" style="object-fit: cover" />
      <div class="bg-black absolute opacity-65 w-100 h-100 z-10"></div>
    </div>
    <div class="flex justify-center flex-col align-middle gap-4">
      <div class="logo-right flex justify-center align-middle z-20">
        <img :src="imgKotaBogor" alt="logo kota bogor" />
        <img :src="imgBPBDKotaBogor" alt="logo bpbd bogor" />
      </div>

      <div class="title z-20">
        Badan Penanggulangan Bencana Daerah (BPBD)<br />
        Kota Bogor
      </div>
    </div>
  </section>
</template>
