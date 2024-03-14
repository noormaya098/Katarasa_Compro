<template>
  <div>
    <navigation :color="color" :flat="flat" />
    <!-- Carousel Banner -->
    <section id="hero">
      <div class="katarasa-carousel" style="margin-top: 6%;">
  
        <v-carousel
        :cycle="true"
        :hide-delimiter-background="false"
        :items-per-page="2"
        :hide-controls="true"
        :height="calculateHeight"
        :show-arrows="false"
        style="margin-top: 98px;"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-img :src="'https://api.katarasa.id'+slide.link" :alt="slide.alt" max-width="100%"></v-img>
        </v-carousel-item>
      </v-carousel>
       
      </div>
    </section>
    <div>
      <!-- Logo Katarasa -->
      <section>
        <v-container>
          <center>
            <div style=" background-color: transparent;" class=" katarasa-icon">
              <v-img src="@/assets/img/homepage/katarasa.png" style="width: 50%;"></v-img>
            </div>
          </center>
        </v-container>
      </section>
      <!-- Gambar About Us -->
    <section>
      <div>
        <v-container>
          <v-row>
            <v-col cols="4">
              <router-link to="/about">
                <v-img src="@/assets/img/homepage/aboutUs.png"></v-img>
              </router-link>
            </v-col>
            <v-col cols="4">
              <router-link to="/Menu">
                <v-img src="@/assets/img/homepage/Menu.png"></v-img>
              </router-link>
            </v-col>
            <v-col cols="4">
              <v-img src="@/assets/img/homepage/recoment.png">
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </section>
      <!-- TakeUs -->
  <section>
    <v-container>
      <div>
        <v-col>
          <h2 style="text-align: center; font-family: Poppins, sans-serif; " >Take Us To Bring Your Joy!</h2>
        </v-col>
      </div>
    </v-container>
  </section>
      <!-- Menu -->
   <section>
    <div style=" height: 344px; background-color: transparent; " class="katarasa-menu">
      <v-container>
        <v-row>
          <v-col cols="6" class="mt-4">
            <center>
              <!-- <v-col cols="6" md="8" class="d-flex justify-center align-items-center ">
                <v-img src="@/assets/img/coffee/kopi1.png" height="auto" max-width="100%"></v-img>
              </v-col> -->
                <!-- opsi 2 -->
                <v-img src="@/assets/img/coffee/kopi1.png"
                style="height: 280px; width: 425px ;  border-radius: 10px; margin-top: 5px; "
                class="katarasa-menuImg"></v-img>
            </center>
          </v-col>
          <v-col cols="6">
            <center>
              <div class="text-xs-center text-sm-center text-md-center text-lg-center mt-5">
                <h1 style="color: #1D1851 ;font-family: Poppins, sans-serif;">Menu</h1>
              </div>
              <div style="display: flex; " >
                <div class="text-xs-center text-sm-center text-md-center text-lg-center mt-5" style="color: #1D1851 ; font-family: Poppins, sans-serif;">
                  <h4> Signature Coffee, Espresso Based, Manual Brew, Flavoured Latte, Non Coffee, Choco Series, Tea Series,
                    Fruity.</h4>
                    </div>
              </div>
              <router-link to="/Menu" style="color: inherit; text-decoration: none;">
                <div style=" text-align: center;" class="mt-5">
                  <v-btn rounded="pill"
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
    </div>
   </section>
      <!-- Our Coffee -->
      <section>
        <div style=" height: 344px; background-color: #3E3834; " class="katarasa-menu">
          <v-container>
            <v-row>
              <v-col cols="6">
                <center>
                  <h2 class="font-katarasa mt-10" style="color: #FBFBFB ;">Our Coffee</h2>
                  <div>
                    <div class="text-xs-center text-sm-center text-md-center text-lg-center mt-5" style="color: #FBFBFB ; font-family: Poppins, sans-serif;">
                      <h4>  Try the sensation of quality Gayo Coffee at Low Prices!</h4>
                        </div>
                    <!-- <h6 class="font-katarasa1 mt-1" style="color: #FBFBFB;">
                      Try the sensation of quality Gayo Coffee at Low Prices!
                    </h6> -->
                  </div>
                  <router-link to="/Product" style="color: inherit; text-decoration: none;">
                    <div style=" text-align: center;" class="mt-5">
                      <v-btn rounded="pill"
                        style=" width: 120px; height: 38px; border: 3px solid #FBFBFB; border-radius: 24px; background-color: transparent;">
                        <h6 class="font-view text-none px-2 __btn-Login-text" style="font-size: medium; color: #FBFBFB;">
                          View More
                        </h6>
                      </v-btn>
                    </div>
                  </router-link>
                </center>
              </v-col>
              <v-col cols="6" class="mt-4">
                <center>
                  <v-img src="@/assets/img/newimg/aboutus/homepage/biji.jpg"
                    style="height: 280px; width: 425px ;  border-radius: 10px; margin-top: 5px; "
                    class="katarasa-menuImg"></v-img>
                </center>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </section>
      <!-- Marchendise -->
     <section>
      <div style=" height: 344px; background-color: transparent; " class="katarasa-menu">
        <v-container>
          <v-row>
            <v-col cols="6" class="mt-4">
              <center>
                <v-img src="@/assets/img/newimg/aboutus/homepage/product.jpg"
                  style="height: 280px; width: 425px ;   border-radius: 10px; margin-top: 5px; "
                  class="katarasa-menuImg"></v-img>
              </center>
            </v-col>
            <v-col cols="6">
              <center>
                <div style="height: auto; width: 100%; ">
                  <h2 class="font-katarasa mt-8" style="color: #131035;">Product</h2>
                  <div class="text-xs-center text-sm-center text-md-center text-lg-center mt-5" style="color: #1D1851 ; font-family: Poppins, sans-serif;">
                    <h4> Barista Tools & Special Tumbler for you!</h4>
                      </div>
                  <!-- <h6 class="font-katarasa1 mt-1" style="color: #1D1851 ;">
                    Barista Tools & Special Tumbler for you!
                  </h6> -->
                  <router-link to="/merchandise" style="color: inherit; text-decoration: none;">
                    <div style=" text-align: center;" class="mt-5">
                      <v-btn rounded="pill"
                        style=" width: 120px; height: 38px; border: 3px solid #1D1851 ; border-radius: 24px; background-color: transparent;">
                        <h6 class="font-view text-none px-2 __btn-Login-text"
                          style="font-size: medium; color: #1D1851; width: 100%; height: auto;">
                          View More
                        </h6>
                      </v-btn>
                    </div>
                  </router-link>
                </div>
              </center>
            </v-col>
          </v-row>
        </v-container>
      </div>
     </section>
    </div>
    <foote />
  </div>
</template>
 
<script>
import contact from "../components/ContactSection";
import navigation from "../components/backup";
import foote from "../components/Footer";

export default {
  data() {
    return {
      slides: [
        // {  src: require('@/assets/img/newimg/aboutus/event/eventRamadhan.webp'), },
        // {  src: require('@/assets/img/homepage/banner1.png'), },
        // {  src: require('@/assets/img/newimg/aboutus/aboutus/AboutUS.webp'),} ,   
      ]
    }
  },
  computed: {
    calculateHeight() {
      // calculate the height of the carousel based on the aspect ratio of the slides
      return `${(9 / 28) * this.$vuetify.breakpoint.width}px`
    }
  },
  
  methods: {
    prev() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
    getBanner() {
      
            var requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };

            fetch("https://api.katarasa.id/nimda/other/data-banner", requestOptions)
              .then(response => response.json())
              .then(result => this.slides=result.data)
              .catch(error => console.log('error', error));
              console.log("iniii banner", this.slides);
              
            },
  },

  components: {
    contact,
    navigation,
    foote,
  },
  mounted() {

        const token= localStorage.getItem('token')
        console.log('tokenLogin', token),

        this.getBanner();

        setInterval(() => {
    this.getBanner();
  }, 5000);
    },

  
}
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 450;
  stroke-dashoffset: 450;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }

        30% {
          transform: translateX(-5px);
        }

        50% {
          transform: translateX(5px);
        }

        70% {
          transform: translateX(-2px);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style scoped>
.katarasa-menu {
  height: auto;
  width: 100%;
}



.font-katarasa {
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #fffbe9;
}

.font-katarasa1 {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 200;
  color: #fffbe9;
}

@media (max-width: 600px) {

  .font-takeus {
    font-family: 'Poppins', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    /* identical to box height */
    /* Kata Rasa/04 */
    color: #3A332E;
  }

  .font-view {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #935330;
  }
}

@media (min-width: 601px) and (max-width: 960px) {

  .font-takeus {
    font-family: 'Poppins', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    /* identical to box height */
    /* Kata Rasa/04 */
    color: #3A332E;
  }

  .font-view {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #935330;
  }
}

@media (min-width: 961px) {


  .font-takeus {
    font-family: 'Poppins', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    /* identical to box height */
    /* Kata Rasa/04 */
    color: #3A332E;
  }


  .font-view {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #935330;
  }
}

@media only screen and (max-width: 600px) {
  .katarasa-carousel {
    width: 100%;
    height: auto;
  }



  .font-view {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #935330;
  }

}

@media only screen and (max-width: 768px) {

  .katarasa-carousel {
    width: 100%;
    height: auto;
  }
}

section {
  position: relative;
}

.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 1;
}

.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>