<template>
  <section class="pb-2" id="contact">
    <!-- Icon Katarasa Pada Home Page -->
    <section>
      <div class="ms-8 mt-4">
        <div style=" background-color: transparent;" class=" katarasa-icon">
          <v-img src="@/assets/img/homepage/katarasa.png"></v-img>
        </div>
      </div>
    </section>
    <!-- Gambar pada Home page menggunakan v-row -->
 <section>
  <div class="katarasa-img">
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
            <v-img src="@/assets/img/homepage/recoment.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
 </section>
<!-- Text Take Us To Bring Your Joy! -->
   <section>
    <div>
      <v-col>
        <p style="text-align: center;" class="font-takeus">Take Us To Bring Your Joy!</p>
      </v-col>
    </div>
   </section>
    <!-- <section>
      <div class="katarasa-takeus">
        <v-container>
          <v-row justify="center">
            <div style="height: 72px; width: 500px; ">
              <v-img src="@/assets/img/homepage/TakeUs.png"></v-img>
            </div>
            <div style="height: 72px; width: 220px;  margin-left: 10px; margin-top: 10px;">
          <v-img src="@/assets/img/homepage/GooglePlay.png"></v-img>
        </div>
          </v-row>
        </v-container>
      </div>
    </section> -->
    <!-- pertama -->
    <section>
      <div style=" height: 344px; background-color: #3A332D; " class="katarasa-menu">
        <v-container>
          <div>
            <v-row align=" center" justify="center">
              <v-col cols="6">
                <v-img src="@/assets/img/homepage/kopi.png" style="height: 300px; width: 500px;  border-radius: 10px;"
                  class="katarasa-menuImg">
                </v-img>
              </v-col>
              <v-col cols="6">
                <div style="text-align: center;">
                  <p class="font-nyoba">
                    Menu
                  </p>
                </div>
                <div style=" text-align: center;">
                  <p class="font-nyoba1">
                    Signature Coffee, Espresso Based, Manual Brew, Flavoured Latte, Non Coffee, Choco Series, Tea Series,
                    Fruity.
                  </p>
                </div>
                <router-link to="/Menu" style="color: inherit; text-decoration: none;">
                  <div style=" text-align: center;">
                    <v-btn rounded="pill" color="#DFCFCA" style=" width: 147px; height: 48px;">
                      <span class="font-view text-none px-2 __btn-Login-text">
                        View More
                      </span>
                    </v-btn>
                  </div>
                </router-link>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </section>
    <!-- kedua -->
    <section>
      <div style=" height: 344px; background-color:  #DFCFC4; " class="katarasa-menu">
        <v-container>
          <div>
            <v-row align=" center" justify="center">
              <v-col cols="6">
                <div style="text-align: center; margin-top: 20px;">
                  <p class="font-nyoba" style="color: #6C4B39; font-weight: bold;">
                    Our Coffee
                  </p>
                </div>
                <div style=" text-align: center;">
                  <p class="font-nyoba1" style="color: #6C4B39;">
                    Try the sensation of quality Gayo Coffee at low prices!
                  </p>
                </div>
                <router-link to="/Product" style="color: inherit; text-decoration: none;">
                  <div style=" text-align: center;">
                    <v-btn rounded="pill"
                      style=" width: 147px; height: 48px; border: 3px solid #6C4B39; border-radius: 24px; background-color: transparent;">
                      <span class="font-view text-none px-2 __btn-Login-text">
                        View More
                      </span>
                    </v-btn>
                  </div>
                </router-link>
              </v-col>
              <v-col cols="6">
                <v-img src="@/assets/img/homepage/biji.jpg" style="height: 300px; width: 500px;  border-radius: 10px;"
                  class="katarasa-menuImg">
                </v-img>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </section>
    <!-- ketiga -->
    <section>
      <div style=" height: 344px; background-color: #3A332D; " class="katarasa-menu">
        <v-container>
          <div>
            <v-row align=" center" justify="center">
              <v-col cols="5">
                <v-img src="@/assets/img/homepage/alat.png" style="height: 300px; width: 500px;  border-radius: 10px;"
                  class="katarasa-menuImg">
                </v-img>
              </v-col>
              <v-col cols="6" style="margin-top: 30px;">
                <div style="text-align: center;">
                  <p class="font-nyoba">
                    Merchandise
                  </p>
                </div>
                <div style=" text-align: center; ">
                  <p class="font-nyoba1">
                    Barista Tools & Special Tumbler for you!
                  </p>
                </div>
                <router-link to="/Product" style="color: inherit; text-decoration: none;">
                  <div style=" text-align: center;">
                    <v-btn rounded="pill" color="#DFCFCA" style=" width: 147px; height: 48px;">
                      <span class="font-view text-none px-2 __btn-Login-text">
                        View More
                      </span>
                    </v-btn>
                  </div>
                </router-link>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </section>
    <!-- <section>
      <div style=" height: 344px; background-color: #DFCFC4;">
        <v-container>
          <div>
            <v-row align="center" justify="center">
              <v-col>
                <div style="text-align: center;">
                  <p class="font-katarasa3" style="color: #3A332D;">
                    Our Coffee
                  </p>
                </div>
                <div style=" text-align: center;">
                  <p class="font-katarasa4" style="color: #3A332D; ">
                    Try the sensation of quality Gayo Coffee at low prices!
                  </p>
                </div>
                <router-link to="/Product" style="color: inherit; text-decoration: none;">
                  <div style=" text-align: center;">
                    <v-btn rounded="pill"
                      style="border: 3px solid #6C4B39; border-radius: 24px; width: 147px; height: 48px; background-color: transparent;">
                      <span class="font-view text-none px-2 __btn-Login-text">
                        View More
                      </span>
                    </v-btn>
                  </div>
                </router-link>
              </v-col>
              <div style="margin-left: 100px;">
                <v-col>
                  <v-img src="@/assets/img/homepage/biji.jpg"
                    style="height: 300px; width: 500px; border-radius: 10px; margin-top: 15px;">
                  </v-img>
                </v-col>
              </div>
            </v-row>
          </div>
        </v-container>
      </div>
    </section>
    <section>
      <div style=" height: 344px; background-color: #3A332D;">
        <v-container>
          <div>
            <v-row align="center" justify="center">
              <v-col>
                <v-img src="@/assets/img/homepage/alat.png" style="height: 300px; width: 500px;  border-radius: 10px;">
                </v-img>
              </v-col>
              <v-col>
                <div style="text-align: center;">
                  <p class="font-nyoba">
                    Merchandise
                  </p>
                </div>
                <div style=" text-align: center;">
                  <p class="font-nyoba1">
                    Barista Tools & Special Tumbler for you!
                  </p>
                </div>
                <router-link to="/Product" style="color: inherit; text-decoration: none;">
                  <div style=" text-align: center;">
                    <v-btn rounded="pill" color="#DFCFCA" style=" width: 147px; height: 48px;">
                      <span class="font-view text-none px-2 __btn-Login-text">
                        View More
                      </span>
                    </v-btn>
                  </div>
                </router-link>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
    </section> -->
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600&family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Faustina:ital,wght@0,300;0,400;0,500;1,300;1,500&display=swap');


.katarasa-menuImg {
  height: auto;

}

@media only screen and (max-width: 600px) {
  .katarasa-menuImg {
    width: 100%;
    height: auto;

  }

}

.katarasa-menu {
  width: 100%;
  height: auto;
}


@media only screen and (max-width: 600px) {
  .katarasa-menu {
    width: 100%;
  }
}

.katarasa-takeus {
  width: 20%;
  height: auto;
}

@media only screen and (max-width: 100px) {
  .katarasa-takeus {
    width: 100%;
  }
}

.katarasa-icon {
  width: 100%;
  height: auto;
}

.katarasa-imgcenter {
  width: 100%;
  height: auto;
}

@media only screen and (max-width: 600px) {
  .katarasa-icon {
    width: 100%;
  }
}



@media only screen and (max-width: 600px) {
  .katarasa-img {
    width: 100%;
    height: auto;
  }

  .katarasa-img2 {
    width: 200%;
  }
}



#contact {
  background-color: #f4f7f5;
}

.font-takeus {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  /* identical to box height */
  letter-spacing: 0.02em;
  /* Kata Rasa/04 */

  color: #3A332E;
}

.font-nyoba {
  font-family: 'Poppins', serif;
  font-size: 40px;
  font-weight: 400;
  color: white;
}

.font-nyoba1 {
  font-family: 'Poppins', serif;
  font-size: 20px;
  font-weight: 500;
  color: white;
}


.font-view {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #935330;
}


.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
</style>

<script>
import foote from "../components/Footer";
// import {db} from '@/main'

export default {
  components: {
    foote,
  },
  data: () => ({
    // icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    // valid: true,
    // name: "",
    // nameRules: [
    //   (v) => !!v || "O campo nome é obrigatório",
    //   (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    // ],  
    // email: "",
    // emailRules: [
    //   (v) => !!v || "O campo email é obrigatório",
    //   (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    // ],
    // textArea: "",
    // textAreaRules: [
    //   (v) => !!v || "O campo de texto é obrigatório",
    //   (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    // ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }

  }),
  methods: {
    submit() {
      /*db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })*/

    }
  }
};
</script>
