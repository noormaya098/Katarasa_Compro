<template>
    <div>
        <v-navigation-drawer v-model="drawer" app temporary dark src="@/assets/img/homepage/drawer1.png">
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img src="@/assets/img/katarasa1/logokatarasa1.png" alt="Logo" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title">Katarasa</v-list-item-title>
                        <v-list-item-subtitle>WEB</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider />
            <div>
                <v-list>
                    <v-list-item v-for="([icon, text, link], i) in items" :key="i" :to="link">
                        <v-list-item-icon>
                            <v-icon>{{ icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>{{ text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <router-view></router-view>
            </div>
        </v-navigation-drawer>
        <v-app-bar app :color="color" :flat="flat" dark class="px-15" :class="{ expand: flat }"
            :style="{ 'background-image': `url(${backgroundImage})`, 'background-size': 'cover', 'background-color': 'rgba(0, 0, 0, 0.8)' }"
            style="background-color: black ; max-height: 100px; height: 100px; ">
            <v-toolbar-title>
                <router-link to="/" style="text-decoration: none;">
                    <v-img src="@/assets/img/katarasa1/logokatarasa1.png" style="width: 300px; margin-top: 80px; " />
                </router-link>
            </v-toolbar-title>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mr-4" v-if="isXs"
                style="margin-top: 30px; margin-left: 50px;" />
            <div v-else style="margin-top: 50px; width: 100%;" class="ms-5">
                <v-row style="display: flex; justify-content: space-between;">
                    <div>
                        <v-hover v-slot="{ hover }">
                            <v-btn rounded text @click="goToHome"
                                :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                                    class="font-katarasa text-none px-2 __btn-Home-text"
                                    style="color: white">Home</span></v-btn>
                        </v-hover>
                        <v-hover v-slot="{ hover }">
                            <v-btn rounded text @click="goToMenu"
                                :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                                    class="font-katarasa text-none px-2 __btn-Menu-text"
                                    style="color: white">Menu</span></v-btn>
                        </v-hover>
                        <v-hover v-slot="{ hover }">
                            <v-btn rounded text @click="goToPromo"
                                :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                                    class="font-katarasa text-none px-2 __btn-Promo-text"
                                    style="color: white">Promo</span></v-btn>
                        </v-hover>
                        <v-hover v-slot="{ hover }">
                            <v-btn rounded text @click="goToAbout"
                                :style="{ 'background-color': hover ? '#A56C16' : 'black' }"><span
                                    class="font-katarasa text-none px-2 __btn-About-text" style="color: white">About
                                    Us</span></v-btn>
                        </v-hover>
                    </div>
                    <div class="ms-5" style="margin-right: 30px; ">
                        <v-row>
                            <v-col cols="4" class="mt-2" style=" padding: 8px;" >
                                <!-- <v-icon>mdi mdi-account</v-icon> -->
                                <span class="d-sm-inline d-none" style="padding-top: 10px;">{{userProfile.name}}</span>
                            </v-col>
                          <v-col cols="4">
                            <v-hover v-slot="{ hover }">
                              <template v-if="isLoggedIn">
                                <v-btn
                                  rounded
                                  text
                                  @click="logout"
                                  class="mr-2"
                                  :style="{ 'background-color': hover ? '#A56C16' : 'transparent' }"
                                >
                                  <span class="font-katarasa text-none px-2 __btn-Promo-text" style="color: white">
                                    Logout
                                  </span>
                                </v-btn>
                              </template>
                              <template v-else>
                                <v-btn
                                  rounded
                                  text
                                  @click="goToLogin"
                                  class="mr-2"
                                  :style="{ 'background-color': hover ? '#A56C16' : 'transparent' }"
                                >
                                  <span class="font-katarasa text-none px-2 __btn-Promo-text" style="color: white">
                                    Login
                                  </span>
                                </v-btn>
                              </template>
                            </v-hover>
                          </v-col>
                          <v-col cols="4">
                            <router-link to="/cart" style="color: inherit; text-decoration: none;"> 
                                <v-btn
                                  rounded="pill"
                                  text
                                  style="border: 1px solid transparent; border-radius: 30px; width: 20px; height: 40px; margin-left: 20px;"
                                >
                                <v-icon style="color: #FFFBE9;">
                                  mdi-cart-plus
                              </v-icon>
                                </v-btn>
                              </router-link>
                          </v-col>
                        </v-row>
                      </div>
                    <!-- <div class="ms-5" style="margin-right: 30px; ">
                        <v-row>
                            <v-col cols="6" class="mt-1" style=" padding: 8px;" >
                                <v-menu offset-y>
                                    <template v-slot:activator="{ on }">
                                    <v-btn
                                        text
                                        v-on="on"
                                        class="mr-2"
                                        :style="{ 'background-color': hover ? '#A56C16' : 'transparent' }"
                                    >
                                    <v-icon style="margin-right: 10px;">
                                        mdi mdi-account-circle
                                    </v-icon>
                                    <span class="d-sm-inline d-none" style="padding-top: 5px; text-transform: none;">{{userProfile.name}}</span>
                                       
                                    </v-btn>
                                    </template>
                                    <v-list>
                                    <v-list-item @click="goToLogin" v-if="!isLoggedIn">
                                        <v-list-item-title>Login</v-list-item-title>
                                    </v-list-item>
                                    <v-list-item @click="logout" v-if="isLoggedIn">
                                        <v-list-item-title>Logout</v-list-item-title>
                                    </v-list-item>
                                    </v-list>
                                </v-menu>   
                            </v-col>
                         
                            <v-col cols="4">
                                <router-link to="/cart" style="color: inherit; text-decoration: none;"> 
                                  <v-btn
                                    rounded="pill"
                                    text
                                    style="border: 1px solid transparent; border-radius: 30px; width: 20px; height: 40px; margin-left: 20px;"
                                  >
                                  <v-icon style="color: #FFFBE9;">
                                    mdi-cart-plus
                                </v-icon>
                                  </v-btn>
                                </router-link>
                              </v-col>
                        </v-row>
                      </div>         -->
                </v-row>
                <!-- <v-btn rounded outlined text @click="$vuetify.goTo('#contact')">
                    <span class="mr-2">Contate-nos</span>
                </v-btn> -->
            </div>
        </v-app-bar>
    </div>
</template>
  
<style scoped>
.v-toolbar {
    transition: 0.6s;
}

.expand {
    height: 80px !important;
    padding-top: 10px;
}
</style>
  
<script>
import Menu from './Menu.vue';

export default {
    data: () => ({
        backgroundImage: require('@/assets/img/katarasa1/NavbarImg.jpg'),
        drawer: null,
        isXs: false,
        email: "",
        password: "",
        userProfile: [],
        isLoggedIn: false,
        items: [
            ['mdi-home-outline', 'Home', '/'],
            ["mdi-food", "Menu", "/Menu"],
            ["mdi-ticket-percent-outline", "Promo", "/Promo"],
            ['mdi-cart-outline', 'Order Now', '/ordernow']
        ],
    }
    ),
    // data() {
    //     return {
    //         backgroundImage: require('@/assets/img/katarasa1/NavbarImg.jpg')
    //     }
    // },
    props: {
        color: String,
        flat: Boolean,
    },
    methods: {

        checkLoginStatus() {
      // Periksa apakah token tersedia dalam localStorage
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token;
    },
    login() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "email": "sandiirawan859@gmail.com",
        "password": "123456"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://api.katarasa.id/auth/login", requestOptions)
        .then(response => response.text())
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Login gagal");
          }
        })
        .then((data) => {
          // Menyimpan token ke localStorage
          localStorage.setItem("token", data.data);

          // Mengubah status login menjadi true
          this.isLoggedIn = true;
          this.checkLoginStatus();

          // Menampilkan pesan login berhasil
          alert("Login berhasil");
        })
        .catch((error) => {
          console.error(error);
          // Menampilkan pesan login gagal
          alert("Login gagal");
        })
    },
        

    //   fetch("https://api.katarasa.id/auth/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(loginData),
    //   })
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error("Login gagal");
    //       }
    //     })
    //     .then((data) => {
    //       // Menyimpan token ke localStorage
    //       localStorage.setItem("token", data.data);

    //       // Mengubah status login menjadi true
    //       this.isLoggedIn = true;
    //       this.checkLoginStatus();

    //       // Menampilkan pesan login berhasil
    //       alert("Login berhasil");
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //       // Menampilkan pesan login gagal
    //       alert("Login gagal");
    //     });
    // },
    logout() {
      localStorage.clear();
      setTimeout(() => this.$router.push("/loginpage"), 500);
      // this.$router.push("/loginaca");
    },

    dataProfile (){
        const token = localStorage.getItem('token');
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer "+token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://api.katarasa.id/profile/data-profile", requestOptions)
        .then(response => response.json())
        .then(result => this.userProfile = result.data)
        .catch(error => console.log('error', error));
    },

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
            this.$router.push('/loginpage')
        },
        goToDaftar() {
            this.$router.push('/Daftar')
        },
        onResize() {
            this.isXs = window.innerWidth < 850;
        },

        onResize() {
            this.isXs = window.innerWidth < 850;
        },

        // logout(){
        //     localStorage.removeItem("token");
        //     this.$router.push('/loginpage');
        // },
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
         // Cek status login saat komponen dimuat
        this.isLoggedIn = localStorage.getItem("token");
        this.checkLoginStatus();
        this.onResize();
        this.dataProfile();
        window.addEventListener("resize", this.onResize, { passive: true });
    },

};
</script>
  