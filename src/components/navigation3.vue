<template>
    <div>
        <v-navigation-drawer v-model="drawer" app temporary dark src="@/assets/img/bgDrawer.jpg">
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="@/assets/img/katarasa1/logokatarasa.png" alt=" " />
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
        </v-navigation-drawer>
        <!-- app :color="color" :flat="flat" dark class="px-5" :class="{ expand: flat }" -->
        <v-app-bar
            :style="{ 'background-image': `url(${backgroundImage})`, 'background-size': 'cover', 'background-color': 'rgba(0, 0, 0, 0.8)' }"
            style="height: 155px;">
            <v-toolbar-title>
                <v-img src="@/assets/img/katarasa1/logokatarasa.png" max-width="100px"
                    style="width: 89px; height: 82px; margin-top: 100px;" />
            </v-toolbar-title>
            <!-- <div style="margin-top: 100px;" class="ms-3">
                <v-hover v-slot="{ hover }">
                    <v-btn rounded text @click="goToHome"
                        :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                            class="font-katarasa">Home</span></v-btn>
                </v-hover>
            </div> -->
            <!-- <div style="margin-top: 100px;" class="ms-3">
                <v-hover v-slot="{ hover }">
                    <v-btn rounded text @click="goToMenu"
                        :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                            class="font-katarasa">Menu</span></v-btn>
                </v-hover>
            </div> -->
            <!-- <div style="margin-top: 100px;" class="ms-3">
                <v-hover v-slot="{ hover }">
                    <v-btn rounded text @click="goToPromo"
                        :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                            class="font-katarasa">Promo</span></v-btn>
                </v-hover>
            </div> -->
            <!-- <div style="margin-top: 100px;" class="ms-3">
                <v-hover v-slot="{ hover }">
                    <v-btn rounded text @click="goToAbout"
                        :style="{ 'backgroundColor': hover ? '#A56C16' : 'black' }"><span class="font-katarasa">About
                            Us</span></v-btn>
                </v-hover>
            </div> -->
            <!-- <v-spacer /> -->
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-2" v-if="isXs" />
            <!-- untuk bagian daftar dan loginnya -->
            <!-- <div style="margin-top: 100px;">
                <router-link to="/Login">
                    <v-btn text style="backgroundColor: rgba(165, 108, 22, 0.8);">
                        <span class="font-katarasa">Masuk</span>
                    </v-btn>
                </router-link>
            </div> -->
            <!-- <v-app-bar-nav-icon @click="goToDaftar" v-if="isXs" />
            <div class="ms-5" style="margin-top: 100px;">
                <router-link to="/Daftar">
                    <v-btn text style="background: rgba(165, 108, 22, 0.8);">
                        <span class="font-katarasa">Daftar</span>
                    </v-btn>
                </router-link>
            </div> -->
        </v-app-bar>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');


.font-katarasa {
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    font-weight: bold;
    color: beige;
}

.img-navbar {
    height: 100px;
    width: 100%;
}

.font-katarasa2 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: bold;
}

.font-katarasa3 {
    font-family: 'Poppins', sans-serif;
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
            backgroundImage: require('@/assets/img/katarasa1/vektornavbar.jpg')
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

