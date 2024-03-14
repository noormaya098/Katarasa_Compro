<template>
    <section>
      <div>
        <navigation :color="color" :flat="flat" />
      </div>
      <section>
      </section>
      <section>
        <v-img src="@/assets/img/bg/bgLogin.png" style="width: 1440px;height: 811px;">
          <v-container>
            <v-layout wrap style="margin-top: 40px;">
              <v-flex sm11 md6 offset-md3>
                <v-row>
                  <v-col>
                    <v-card style="height: 450px; width: 500px; margin-right: 10px; margin-left: 10px; margin-top: 70px;  box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.3); border-radius: 10px;">
                      <v-container>
                        <div>
                          <p class="font-katarasa1" style="text-align: center; font-weight: bold;">
                            Login
                          </p>
                        </div>
                      </v-container>
  
                      <section>
                        <v-container style="margin-top: -40px;">
                          <v-sheet max-width="300" class="mx-auto">
                            <v-form validate-on="submit lazy" @submit.prevent="logIn">
                              <div class="font-katarasa2" style="margin-top: 30px;">
                                Username
                              </div>
                              <v-text-field
                                v-model="email"
                                :rules="rules"
                                label="Email"
                                outlined
                                placeholder="Username"
                                variant="solo"
                                style="border-radius: 15px; bottom: -10px !important ; height: 40px; width: 460px; color: #DFCFCA;"
                                class="font-katarasa3"
                              ></v-text-field>
  
                              <div class="font-katarasa2" style="margin-top: 30px;">
                                Password
                              </div>
                              <v-text-field
                                v-model="password"
                                :rules="rules"
                                label="Password"
                                outlined
                                placeholder="Password"
                                variant="solo"
                                style="border-radius: 15px; height: 40px; width: 460px;"
                                class="font-katarasa3"
                              ></v-text-field>
  
                              <v-btn
                                :loading="loading"
                                type="submit"
                                block
                                class="mt-6"
                                text="Submit"
                                rounded="pill"
                                style="background: #DFCFCA; height: 40px; width: 100px; margin-top: 40px; margin-left: 5px;"
                              >
                                <span class="font-katarasa3 text-none px-2 __btn-Login-text">Login</span>
                              </v-btn>
                            </v-form>
                          </v-sheet>
                        </v-container>
                      </section>
  
                      <!-- <v-container>
                        <div>
                          <center>
                            <v-row>
                              <v-col>
                                <p class="font-katarasa5" style="margin-right: -100px; color: #DFCFCA;">
                                  Belum Punya Akun ?
                                </p>
                              </v-col>
                              <v-col>
                                <router-link to="/daftarpage" style="color: inherit; text-decoration: none;">
                                  <p class="font-katarasa3" style="margin-left: -200px; color: #DFCFCA;">
                                    Daftar disini
                                  </p>
                                </router-link>
                              </v-col>
                            </v-row>
                          </center>
                        </div>
                      </v-container> -->
                    </v-card>
                    <v-container>
                    </v-container>
                  </v-col>
                </v-row>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </section>
      <foote />
    </section>
  </template>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
  
    .font-katarasa1 {
      font-family: 'Poppins', sans-serif;
      font-size: 36px;
      font-weight: 400;
      color: #3A332D;
    }
  
    .font-katarasa2 {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: bold;
      color: #935330;
    }
  
    .font-katarasa3 {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: bold;
      color: #935330;
    }
  
    .font-katarasa4 {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: bold;
      color: #DFCFCA;
    }
  
    .font-katarasa5 {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: bold;
    }
  </style>
  
  <script>
  import navigation from "../components/NavigationLain.vue";
  import foote from "../components/Footer";
  import { VCard, VCardTitle, VCardText, VForm, VTextField, VBtn } from 'vuetify/lib'
  
  export default {
    name: "LoginPage",
    components: {
      VCard,
      VCardTitle,
      VCardText,
      VForm,
      VTextField,
      VBtn,
      navigation,
      foote
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        loading: false,
        rules: [(value) => this.checkApi(value)],
        timeout: null,
        email: '',
        password: ''
      };
    },
    methods: {
      async logIn() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        var raw = JSON.stringify({
          "email": this.email,
          "password": this.password
        });
  
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
  
        fetch("https://api.katarasa.id/auth/login", requestOptions)
          .then(response => response.json())
          .then(result => {
            // Tangani respons dari permintaan login
            console.log("hasil login", result);
  
            // Jika login berhasil, arahkan pengguna ke halaman Dashboard
            if (result.status.code === 200) {
              localStorage.setItem("token", String(result.data.token))
              this.$router.push('/')
              alert('Berhasil Login');
            } else {
              alert('Maaf Data belum terdaftar');
            }
          })
          .catch(error => console.log('error', error));
      },
      async checkApi(userName) {
        return new Promise(resolve => {
          clearTimeout(this.timeout);
  
          this.timeout = setTimeout(() => {
            if (!userName) return resolve('Please enter a user name.');
            if (userName === 'johnleider') return resolve('User name already taken. Please try another one.');
  
            return resolve(true);
          }, 1000);
        });
      }
    }
  }
  </script>
  