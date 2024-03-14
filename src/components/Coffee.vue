<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        <div class="katarasa-menu1">
            <section>
                  <!-- Bagian atas -->
                <section>
                    <v-container>
                        <div>
                            <router-link to="/menu" style="text-decoration: none;">
                                <v-icon color="black" style="font-size: 30px; margin-right: 10px; ">mdi-arrow-left</v-icon>
                                <span class="font-katarasa">Coffee</span>
                            </router-link>
                        </div>
                    </v-container>
                </section>
                <!-- untuk gambar di bagian atas -->
                <div style="margin-left: 20px;">
                    <!-- Banner Coffee -->
                   <section>
                    <v-container>
                        <v-container fluid>
                            <v-row dense>
                                <v-col>
                                    <v-card>
                                        <v-img src="@/assets/img/View/view1.png" class="align-end" width="100%" height="auto">
                                            <v-card-title>
                                                <v-col>
                                                    <div>
                                                        <h1 class="font-katarasa" style="color: #FFFBE9;">
                                                            Coffee
                                                        </h1>
                                                        <div style="text-overflow: ; text-align: left; width: 280px;">
                                                            <h4 class="font-katarasa1">
                                                                Most people love coffee before they start their day. And
                                                                now, you can start
                                                                your
                                                                day
                                                                with
                                                                us!
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </v-col>
                                            </v-card-title>
                                        </v-img>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-container>
                   </section>
                   <!-- Text Menu Coffee -->
                    <section>
                        <center>
                            <div style="padding-top: 10px;">
                                <h1 class="font-katarasa">
                                    Menu Coffee
                                </h1>
                            </div>
                        </center>
                    </section>
                    <!-- Daftar Menu Coffee -->
                 <section>
                    <v-container>
                        <!-- <v-row dense>
                        <v-col  cols="2" v-for="card in cards" :key="card.product_id" :cols="card.flex" v-if="card.productCategory == 'Coffee'"
                        class="d-flex child-flex">
                            <v-card>  
                                <v-img
                                :src="'https://api.katarasa.id/assets/images/product/'+card.productDetail[0].productImage" class="align-end gambar-banner"
                                aspect-ratio="1"
                                cover >  
                              </v-img>
                              <h4 style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family:'Poppins', sans-serif">
                                {{ card.productDetail[0].productName }}
                                </h4>
                            </v-card>
                        </v-col>
                          </v-row> -->
                            <v-row dense>
                                <!-- {{ cards }} -->
                                <v-col cols="4" v-for="card in cards" :key="card.product_id" :cols="card.flex" v-if="card.productCategory == 'Coffee'">
                                    <v-card style="margin-right: 10px; margin-bottom: 10px;"  >
                                        <v-img :src="'https://api.katarasa.id/assets/images/product/'+card.productDetail[0].productImage" class="align-end gambar-banner" max-width="100%" height="auto"  aspect-ratio="1"
                                        cover>
                                        </v-img>
                                        <h4
                                            style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family:'Poppins', sans-serif">
                                            {{ card.productDetail[0].productName }}
                                        </h4>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    
                 </section>
                </div>
            </section>
        </div>
        <foote />
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.katarasa-menu1 {
    width: 100%;
    height: auto;
}

.gambar-banner {
    width: 100%;
    height: auto;
}

@media only screen and (max-width: 100px) {
    .katarasa-menu1 {
        width: 100%;
        height: auto;
    }
}


.font-katarasa {
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: black;

}

.font-katarasa1 {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: #FFFBE9;
    font-weight: normal;

}

.font-katarasa2 {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: bold;
}

.font-canada {
    font-family: 'Radio Canada', sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #A56C16;
}
</style>



<script scope>
import navigation from "./NavigationLain.vue";
import foote from "../components/Footer";

export default {
    name: "Coffee",
    data: () => ({
        cards: [
            // { title: 'Kopi Susu Tara', src: require('@/assets/img/newimg/aboutus/coffee/KopiSusuTara.webp'), flex: 3},
            // { title: 'Single Shot Espresso', src: require('@/assets/img/newimg/aboutus/coffee/HotAmericano.webp'), flex: 3 },
            // { title: 'Ice Americano', src: require('@/assets/img/newimg/aboutus/coffee/IceAmericano.webp'), flex: 3 },
            // { title: 'Flavoured Latte', src: require('@/assets/img/newimg/aboutus/coffee/TiramissuLatte.webp'), flex: 3 },
            // { title: 'Salted Caramel', src: require('@/assets/img/newimg/aboutus/coffee/Moccachino.webp'), flex: 3 },
          
        ],
    }),
    components: {
        navigation,
        foote
    },
    mounted() {
    // Panggil API dan isi data products
    this.fetchData();
  },
    methods: {
        fetchData (){
            var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };

            fetch("https://api.katarasa.id/product/get-product?page=1&limit=4&keyword=&sku=&id_kategori=1", requestOptions)
            .then(response => response.json())
            .then(result => this.cards=result.data.data)
            .catch(error => console.log('error', error));
                    }
                },
       
}
</script>



