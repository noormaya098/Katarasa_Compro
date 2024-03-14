<template>
  <div class="katarasa-nav">
    <div class="grid-3">
      <v-app-bar app
        :style="{ 'background-image': `url(${backgroundImage})`, 'background-size': 'cover', 'background-color': 'rgba(0, 0, 0, 0.8)' }"
        color="color" :flat="flat" dark class="px-15" :class="{ expand: flat }"
        style="background-color: black  max-height: 100%; height: 100px;">
        <div class="ms-10 mt-12 mr-5">
          <router-link to="/" style="text-decoration: none;">
            <v-img src="@/assets/img/katarasa1/logokatarasa1.png" style="width: 200px; height: 200px; " />
          </router-link>
        </div>
        <div class="grid-4">
        </div>
        <!-- <v-btn text @click="$vuetify.goTo('#hero')">
        <span class="font-katarasa">Home</span>
      </v-btn> -->
        <div style="margin-top:100px;">
          <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs" /> -->
        </div>
        <div style="margin-top: 50px;" class="ms-3">
          <v-hover v-slot="{ hover }">
            <v-btn rounded text @click="goToHome" :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                class="font-katarasa text-none px-2 __btn-Home-text" style="color: white">Home</span></v-btn>
          </v-hover>
        </div>
        <div style="margin-top: 50px;" class="ms-3">
          <v-hover v-slot="{ hover }">
            <v-btn rounded text @click="goToMenu" :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                class="font-katarasa text-none px-2 __btn-Menu-text" style="color: white">Menu</span></v-btn>
          </v-hover>
        </div>
        <!-- <div style="margin-top: 50px;" class="ms-3">
        <v-hover v-slot="{ hover }">
          <v-btn rounded text @click="goToProduct" :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
              class="font-katarasa text-none px-2 __btn-Product-text" style="color: white ">Store</span></v-btn>
        </v-hover>
      </div> -->
        <div style="margin-top: 50px;" class="ms-3">
          <v-hover v-slot="{ hover }">
            <v-btn rounded text @click="goToPromo" :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                class="font-katarasa text-none px-2 __btn-Promo-text" style="color: white">Promo</span></v-btn>
          </v-hover>
        </div>
        <div style="margin-top: 50px;" class="ms-3">
          <v-hover v-slot="{ hover }">
            <v-btn rounded text @click="goToAbout" :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                class="font-katarasa text-none px-2 __btn-About-text" style="color: white">About
                Us</span></v-btn>
          </v-hover>
        </div>
        <v-spacer />
        <section>
          <v-row>
            <!-- <v-col>
            <v-app-bar-nav-icon @click="goToLogin" v-if="isXs" />
            <div v-else style="margin-top:50px; margin-right: -30px;">
              <router-link to="/loginpage" style="color: inherit; text-decoration: none;">
                <v-btn rounded="pill" text style="background: #DFCFCA;  width: 110px; height: 40px;">
                  <span class="font-katarasa text-none px-2 __btn-login-text">Login</span>
                </v-btn>
              </router-link>
            </div>
          </v-col> -->
            <v-col>
              <v-app-bar-nav-icon @click="goToDaftar" v-if="isXs" />
              <div class="ms-5" style="margin-top: 50px; margin-right: 50px;">
                <router-link to="/ordernow" style="color: inherit; text-decoration: none;">
                  <v-btn rounded="pill" text
                    style="border: 3px solid #FFFBE9;border-radius: 24px;  width: 110px; height: 40px;">
                    <span class="font-katarasa text-none px-2 __btn-Order-text">Order Now</span>
                  </v-btn>
                </router-link>
              </div>
            </v-col>
          </v-row>
        </section>
      </v-app-bar>
    </div>
    <!-- <v-navigation-drawer v-model="drawer" app temporary dark src="@/assets/img/bgDrawer.jpg">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/katarasa1/logokatarasa1.png" alt=" " />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="font-katarasa2">Katarasa</v-list-item-title>
            <v-list-item-subtitle class="font-katarasa3">Website</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list dense>
        <v-list-item v-for="([icon, text, link], i) in items" :key="i" link @click="$vuetify.goTo(link)">
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Faustina:ital,wght@0,300;0,400;0,500;1,300;1,500&display=swap');

.katarasa-nav {
  width: 100%;
  height: auto;
}

.grid-4 {
  display: flex;
  grid-template-columns: repeat(4, 2fr);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}


@media only screen and (max-width: 100px) {
  .katarasa-nav {
    width: 100%;
  }
}

.font-katarasa {
  font-family: 'Poppins', serif;
  font-size: 10px;
  font-weight: bold;

}

.font-katarasa2 {
  font-family: 'Poppins', serif;
  font-size: 20px;
  font-weight: bold;
}


.font-katarasa3 {
  font-family: 'Poppins', serif;
  font-size: 10px;
  font-weight: 300;
}

.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 150px !important;
  padding-top: 20px;
}
</style>

<script>
import { RouterLink, RouterView } from 'vue-router'


export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "Download", "#download"],
      ["mdi-email-outline", "Contatos", "#contact"],
    ],
  }),
  components: {
    RouterLink,
    RouterView
  },
  name: "Navbar",
  data() {
    return {
      backgroundImage: require('@/assets/img/katarasa1/NavbarImg.jpg')
    }
  },

  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goToAbout() {
      this.$router.push('/about')
    },
    goToMenu() {
      this.$router.push('/Menu')

    },
    goToProduct() {
      this.$router.push('/Product')
    },
    goToPromo() {
      this.$router.push('/Promo')
    },
    goToLogin() {
      this.$router.push('/login')
    },
    goToDaftar() {
      this.$router.push('/Daftar')
    },
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
