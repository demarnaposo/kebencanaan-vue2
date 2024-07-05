
<template>
  <div>
    <section class="section-header">
    <div class="card-bg-header">
      <img :src="kantorbpbd" class="d-block w-full" style="object-fit: cover" />
      <div class="bg-black absolute opacity-65 w-100 h-100 z-10"></div>
    </div>
    <div class="flex justify-center flex-col align-middle gap-4">
      <div class="logo-right flex justify-center align-middle z-20">
        <img :src="imgKotaBogor" alt="logo-kota-bogor" />
        <img :src="imgBPBDKotaBogor" alt="logo-bpbd-bogor" />
      </div>

      <div class="title z-20">
        <h1>Badan Penanggulangan Bencana Daerah (BPBD)<br />
        Kota Bogor</h1>
      </div>
    </div>
  </section>
  
    <section class="section-card mt-15 mb-5">
      <div class="container">
        <h3 class="text-center">
          Website Informasi Kebencanaan Kota Bogor
        </h3>
        <div class="row mt-10">
          <div class="col-lg-4">
            <a href="" class="card shadow-md p-3">
              <img
                :src="web"
                class="icon-column mb-2"
                style="width: 50px"
                alt="https://www.flaticon.com/free-icons/network"
              />
              <h5 class="text-center" style="color: #525252;">Website BPBD Kota Bogor</h5>
              <p class="text-center">
                Informasi mengenai profil lembaga, termasuk tugas, fungsi,
                struktur organisasi, serta informasi terkait penanggulangan
                bencana di wilayah Kota Bogor
              </p>
            </a>
          </div>

          <div class="col-lg-4">
            <a
              href="https://dev-kebencanaan.kotabogor.go.id/website-sdk"
              target="_blank"
              class="card shadow-md p-3"
            >
              <img
                :src="ux"
                class="icon-column mb-2"
                style="width: 50px"
                alt="https://www.flaticon.com/free-icons/design"
              />
              <h5 class="text-center" style="color: #525252;">Satu Data Kebencanaan</h5>
              <p class="text-center">
                Penanganan 3 masa dalam siklus penanggulangan bencana yaitu Pra
                Bencana, Tanggap Darurat dan Paska Bencana
              </p>
            </a>
          </div>
          <div class="col-lg-4">
            <a href="" class="card shadow-md p-3">
              <img
                :src="treasuremap"
                class="icon-column mb-2"
                style="width: 50px"
                alt="https://www.flaticon.com/free-icons/map"
              />
              <h5 class="text-center"style="color: #525252;">Satu Peta Kebencanaan</h5>
              <p class="text-center">
                Informasi geografis mengenai bencana, potensi bencana, riwayat
                bencana, beserta kawasan rawan bencana
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="section-footer">
    <!-- <img :src="imgfooter" class="d-block w-100" /> -->
    <div class="container">
      <div class="row text-center">
        <div class="contact">
          <div class="title mt-5">
            Badan Penanggulangan Bencana Daerah (BPBD) Kota Bogor
          </div>
          <div class="alamat">
            Alamat :
            <span class="deskripsi">
              <a style="color: #525252;"
                href="https://maps.app.goo.gl/ppU8uUAjue8T9gft7"
                target="_blank"
              >
                Jl. Pool Bina Marga No.2, RT.02/RW.01, Kayu Manis, Kec. Tanah
                Sereal, Kota Bogor, Jawa Barat 16169
              </a>
            </span>
          </div>
          <div class="telp">
            No. Telp :
            <span class="deskripsi"
              ><a style="color: #525252;" href="tel:(0251) 8576126">(0251) 8576126</a></span
            >
          </div>
        </div>
        <div class="social-media d-flex justify-content-center mt-3">
          <a
            href="https://web.facebook.com/p/BPBD-Kota-Bogor-100066649897300/?_rdc=1&_rdr"
            target="_blank"
            ><i
              class="fa-brands fa-facebook fa-xl mx-2"
              style="color: #0c2d57"
            ></i
          ></a>
          <a href="https://www.instagram.com/bpbd.kotabogor/" target="_blank"
            ><i
              class="fa-brands fa-instagram fa-xl mx-2"
              style="color: #0c2d57"
            ></i
          ></a>
          <a href="https://x.com/bpbdkotabogor" target="_blank"
            ><i
              class="fa-brands fa-x-twitter fa-xl mx-2"
              style="color: #0c2d57"
            ></i
          ></a>
          <a href="https://www.tiktok.com/@bpbdkotabogor" target="_blank"
            ><i
              class="fa-brands fa-tiktok fa-xl mx-2"
              style="color: #0c2d57"
            ></i
          ></a>
          <a href="https://www.youtube.com/@bpbdkotabogor9429" target="_blank"
            ><i
              class="fa-brands fa-youtube fa-xl mx-2"
              style="color: #0c2d57"
            ></i
          ></a>
        </div>
      </div>
    </div>
  </section>
  <footer class="copyright text-end p-4">
    <!-- <hr> -->
    Copyright &copy; 2023 Pemerintah Kota Bogor
  </footer>    
  </div>
</template>

<script setup lang="ts">
import web from "../../assets/img/web.png";
import treasuremap from "../../assets/img/treasure-map.png";
import ux from "../../assets/img/ux.png";
import kantorbpbd from "../../assets/img/bpbd.jpeg";
import imgKotaBogor from "../../assets/img/kota-bogor.png";
import imgBPBDKotaBogor from "../../assets/img/bpbd_bogor.png";
</script>
