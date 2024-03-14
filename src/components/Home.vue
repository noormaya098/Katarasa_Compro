<template>
  <section>
    <div>
      <navigation :color="color" :flat="flat" />
      <!-- <h1> Ini class Menu</h1> -->
    </div>
    <div>
      <div class="katarasa-carousel ">
        <v-carousel
          class="image-slider"
          :show-arrows="false"
          :interval="5000"
          :cycle="true"
        >
          <v-carousel-item v-for="banner in banners" :key="banner.id">
            <img :src="'https://api.katarasa.id' + banner.link" alt="Banner" />
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div>
      <section>
        <div class="ms-5 mt-4">
          <div style=" background-color: transparent;" class=" katarasa-icon">
            <v-img src="@/assets/img/homepage/katarasa.png"></v-img>
          </div>
        </div>
      </section>
    </div>
    <foote />
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap");

.font-katarasa {
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.font-katarasa1 {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #503828;
}

.font-katarasa3 {
  font-family: "Poppins", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #935330;
}

.font-katarasa4 {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #3a332d;
}

.font-canada {
  font-family: "Radio Canada", sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #a56c16;
}
</style>

<script scoped>
import contact from "../components/ContactSection";
import navigation from "../components/backup";
import foote from "../components/Footer";

export default {
  data() {
    return {
      banners: [],
    };
  },
  components: {
    contact,
    navigation,
    foote,
  },
  mounted() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch("https://api.katarasa.id/nimda/other/data-banner", requestOptions)
        .then((response) => response.json())
        .then((result) => (this.banners = result.data))
        .catch((error) => console.log("error", error));
    },
  },
};
</script>
