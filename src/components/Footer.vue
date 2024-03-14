<template>
  <div class="katarasa-footer">
    <div class="my-footer">
      <div class="grid-4">
        <!-- Kata & Rasa -->
     <section>
      <div>
        <div class="ms-10 mt-4">
          <h2 class="font-katarasa ">Kata & Rasa </h2>
          <div>
            <router-link to="/about" style="color: inherit; text-decoration: none;">
              <h6 class="font-katarasa1 mt-1">
                Tentang Kami
              </h6>
            </router-link>
          </div>
          <div>
            <router-link to="/syaratdanketentuan" style="color: inherit; text-decoration: none;">
              <h6 class="font-katarasa1 mt-1">
                Syarat dan Ketentuan
              </h6>
            </router-link>
          </div>
          <div>
            <router-link to="/kontakkami" style="color: inherit; text-decoration: none;">
              <h6 class="font-katarasa1 mt-1">
                Kontak Kami
              </h6>
            </router-link>
          </div>
        </div>
      </div>
     </section>
        <!-- Kategori -->
      <section>
        <div>
          <div class="ms-10 mt-4">
            <h2 class="font-katarasa ">Kategori </h2>
            <div>
              <router-link to="/Korporasi" style="color: inherit; text-decoration: none;">
                <h6 class="font-katarasa1 mt-1">
                  Korporasi
                </h6>
              </router-link>
            </div>
            <div>
              <router-link to="/Bantuan" style="color: inherit; text-decoration: none;">
                <h6 class="font-katarasa1 mt-1">
                  Bantuan
                </h6>
              </router-link>
            </div>
          </div>
        </div>
      </section>
        <!-- Social Media -->
       <section>
        <div>
          <div class="ms-10 mt-4">
            <p class=" font-katarasa">
              Social Media
            </p>
            <div>
              <a href="https://www.instagram.com/kopi.katarasa/">
                <img src="@/assets/img/footer/IG.png" alt="" style="width: 36px; height: 36px; margin-right: 5px;">
              </a>
              <a href="https://www.facebook.com/profile.php?id=100064984783621">
                <img src="@/assets/img/footer/FB.png" alt="" style="width: 36px; height: 36px; margin-right: 5px;">
              </a>
              <a href="https://www.tiktok.com/@kopi_katarasa?_t=8aF8Eh5SkJW&_r=1">
                <img src="@/assets/img/footer/TT.png" alt="" style="width: 36px; height: 36px;">
              </a>
            </div>
          </div>
        </div>
       </section>
        <!-- Availabel On -->
       <section>
        <div>
          <div class="ms-10 mt-4">
            <p class=" font-katarasa">
              Available On
            </p>
            <div>
              <a href="https://gofood.link/a/FojVDNU">
                <img src="@/assets/img/icon/GoFoodFix.png" alt="" style="height: 40px; width: 67.55px;">
              </a>
            </div>
          </div>
        </div>
       </section>
        <!-- ============ -->
      </div>
      <!-- Partners In Eureka  -->
      <section>
        <div>
          <div class="ms-10 mt-4">
            <p class="font-katarasa">
              Partners
            </p>
            <v-img src="@/assets/img/footer/Perusahaan.png" class="mt-3 mb-3 logo-perusahaan"></v-img>
            <br>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/kopi.katarasa/",
      },
      {
        text: "mdi-facebook",
        link: "https://www.facebook.com/profile.php?id=100064984783621",
      },
      {
        text: "mdi-twitter",
        link: "https://gofood.link/a/FojVDNU",
      },
    ],
  }),
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.katarasa-footer {
  width: 100%;
  height: auto;

}

.my-footer {
  background-image: url('~@/assets/img/footer/footer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;
  width: 100%
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.logo-perusahaan {
  width: 85%;
  height: auto;
}

.font-katarasa {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fffbe9;
}

.font-katarasa1 {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 200;
  color: #fffbe9;
}

@media only screen and (max-width: 600px) {
  .katarasa-footer {
    width: 100%;
    height: auto;
  }

  .grid-4 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

}
</style>