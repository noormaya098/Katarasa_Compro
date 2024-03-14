<template>
  <div>
    <navigation :color="color" :flat="flat" />
    <div class="about-section">
        <!-- Banner About Us -->
      <section>
        <div class="visi-misi">
          <v-img src="@/assets/img/newimg/aboutus/aboutus/AboutUS.webp"
            style=" margin-bottom: 10px;  height: auto;"></v-img>
        </div>  
        <!-- Logo Katarasa About Us -->
        <div class="visi-misi">
          <!-- <v-img src="@/assets/img/aboutus/sementara.png"
            style="margin-left: 110px; margin-right: 110px; margin-bottom: 10px; margin-top: 20px;"></v-img> -->
          <v-container>
            <center>  
              <div style=" background-color: transparent;" class=" katarasa-icon">
                <v-img src="@/assets/img/aboutus/logoDiAboutUs.png" style="width: 35%; height: auto;"></v-img>
              </div>
            </center>
          </v-container>
          <!-- Text Visi Misi pada About Us -->
          <center>
            <v-container>
              <div style="background-color: #6C4B39; width: 50%; height: auto; border-radius: 10px;">
                <center>
                  <v-container>
                    <h2 class="font-katarasa">Tentang Secangkir Rasa, Penuh Rasa.</h2>
                  </v-container>
                </center>
              </div>
            </v-container>
          </center>
          <v-container style="padding-left: 150px; padding-right: 110px; height: auto;">
            <div class="mt-2 font-visimisi" style="margin-right: 20px ;">
              <span style="color:#6C4B39"> <b>Kata & Rasa </b> Hadir dalam
                konsep kedai kopi dan
                teh, secangkir kafein mampu membangkitkan inspirasi, memori dan daya kreasi anda.</span>
              <br>
              <span style="color:#6C4B39"> <b>Kata &Rasa </b>menjadi tem pat bagi pengunjungnya untuk mengembangkan
                imajinasi kreatif yang menghasilkan narasi, puisi bahkan gambar yang mengandung banyak makna. </span>
              <br>
              <span style="color:#6C4B39">Dalam <b>Kata & Rasa, </b>Kami merangkul terciptanya segala ekspresi komunikasi
                yang mampu mengalihkan ide-ide inovasi bagi penikmatnya. </span>
            </div>
          </v-container>
        </div>
      </section>
      <!-- Team Katarasa -->
      <section>
        <div style="background-color: #3E3834;">
          <center>
            <v-container>
              <h1 style="font-family: 'Poppins', sans-serif; color: white; font-size: larger; ">Meet Our Team!</h1>
            </v-container>
          </center>
          <v-container style="padding-left: 110px;">
            <v-row>
              <v-col cols="2" v-for="(image, index) in images" :key="index">
                <v-card outlined style="border-width: 4px; border-color: #DFCFC4;">
                  <v-img :src="image.src" :alt="image.alt" height="auto" width="100%"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container style="padding-left: 110px; padding-bottom: 50px;">
            <v-row>
              <v-col cols="2" v-for="(image, index) in images2" :key="index">
                <v-card outlined style="border-width: 4px; border-color: #DFCFC4;">
                  <v-img :src="image.src2" :alt="image.alt" height="auto" width="100%"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!-- Maps -->
      <section>
        <div>
          <div class="visi-misi mx-auto" width="50%"
            style="background-color: #6C4B39; margin-bottom: 0px; margin-top: 0px; height: 50px;">
            <center>
              <v-container>
                <h2 class="font-katarasa ">Visit Our Team</h2>
              </v-container>
            </center>
          </div>
         <div class="map-container">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.566822204965!2d106.86903831413868!3d-6.320487613606533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0c80bdb61b%3A0x5b721bf299d9f3b3!2sRT.7%2FRW.9%2C%20Ciracas%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1677566215721!5m2!1sen!2sid"
          width="100%" height="360px" style="border:0; " allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade" class=""></iframe>
         </div>
        </div>
      </section>
      <!-- Backup data untuk responsif gambar sama text -->
     <!-- <div>
      <v-container>
        <v-row>
          <v-col cols="6" sm="4">
            <v-img src="@/assets/img/coffee/kopi1.png"
                  style="  border-radius: 10px; margin-top: 5px; "
                  class="katarasa-menuImg" height="auto" max-width="100%"></v-img>
          </v-col>
          <v-col cols="6" sm="6" class="mt-2">
          <center>
            <h2 style="color: #1D1851 ;font-family: Poppins, sans-serif;" class="mb-2">Menu</h2>
            <p style="color: #1D1851 ; font-family: Poppins, sans-serif;"> Signature Coffee, Espresso Based, Manual Brew, Flavoured Latte, Non Coffee, Choco Series, Tea Series,
              Fruity.</p>
              <router-link to="/Menu" style="color: inherit; text-decoration: none;">
                <div style=" text-align: center;" class="mt-5">
                  <v-btn rounded="pill" class="xs"
                    style=" width: 120px; height: 38px; border: 3px solid #1D1851 ; border-radius: 24px; background-color: transparent;">
                    <h6 class="font-view text-none px-2 __btn-Login-text" style="font-size: medium; color: #3E3834;">
                      View More
                    </h6>
                  </v-btn>
                </div>
              </router-link>
          </center>
          </v-col>
        </v-row>
      </v-container>
     </div> -->
    </div>
    <foote />
  </div>
</template>
<script scope>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer.vue"

export default {
  name: "About",
  data: () => ({
    images: [
      { src: require('@/assets/img/newimg/aboutus/aboutus/PakUntung.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/MbaCantika.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/Barista1.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/Barista2.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/Barista3.webp'), flex: 2 },
    ],
    images2: [
      { src2: require('@/assets/img/newimg/aboutus/aboutus/PakHendi.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki1.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki2.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki3.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki4.webp'), flex: 2 },
    ],
    cards: [
      { src: require('@/assets/img/newimg/aboutus/aboutus/PakUntung.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/MbaCantika.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/Barista1.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/Barista2.webp'), flex: 2 },
      { src: require('@/assets/img/newimg/aboutus/aboutus/Barista3.webp'), flex: 2 },
    ],
    cards2: [
      { src2: require('@/assets/img/newimg/aboutus/aboutus/PakHendi.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki1.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki2.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki3.webp'), flex: 2 },
      { src2: require('@/assets/img/newimg/aboutus/aboutus/Koki4.webp'), flex: 2 },
    ]
  }),
  components: {
    navigation,
    foote,
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.map-container {
  position: relative;
  padding-bottom: 30%; /* aspect ratio of 16:9 */
  height: 0;
  overflow: hidden;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 768px) {
  .map-container {
    padding-bottom: 50%; /* aspect ratio of 4:3 */
  }
}
.font-visimisi {
  /* Text/20 - Title */

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  /* Kata Rasa/03 */
  color: #6C4B39;
  /* Inside auto layout */

}

.font-katarasa {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #fffbe9;
}



.visi-misi {
  width: 100%;
  height: auto;
}

.about-section {
  width: 100%;
  height: auto;
}


.font-katarasa1 {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #A56C16;

}

.font-katarasa2 {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.font-katarasa3 {
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #935330;
}

.font-katarasa4 {
  font-family: 'Poppins', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: white;
}

.font-meet {

  width: 355px;
  height: 60px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */

  letter-spacing: 0.05em;

  color: #FFFFFF;
}
</style>