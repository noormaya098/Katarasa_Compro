<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        <!-- Bagian atas -->
        <div class="katarasa-menu1">
            <section>
                <v-container>
                    <div>
                        <router-link to="/menu" style="text-decoration: none;">
                            <v-icon color="black" style="font-size: 30px; margin-right: 10px; ">mdi-arrow-left</v-icon>
                            <span class="font-katarasa">Menu</span>
                        </router-link>
                    </div>
                </v-container>
                <!-- untuk gambar di bagian atas -->
                <div style="margin-left: 20px;">
                    <v-container>
                        <v-container fluid>
                            <v-row dense>
                                <v-col>
                                    <v-card>
                                        <v-img src="@/assets/img/noncoffe/NonCoffeeBanner.png" class="align-end"
                                             width="100%" height="auto" cover>
                                            <v-card-title>
                                                <v-col>
                                                    <div style="margin-bottom: 0px;">
                                                        <h1 class="font-katarasa" style="color: #FFFBE9;">
                                                            Non Coffee
                                                        </h1>
                                                        <div style="text-overflow: auto; text-align: left; width: 280px;">
                                                            <h4 class="font-katarasa1">
                                                                We all know coffee is not for everybody. So here our menu
                                                                without Coffee!
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
                    <section>
                        <center>
                            <div style="padding-top: 10px;">
                                <h1 class="font-katarasa">
                                    Menu Non-Coffee
                                </h1>
                            </div>
                        </center>
                    </section>
                    <v-container>
                        <v-container fluid>
                            <v-row dense>
                                <!-- {{ cards }} -->
                                <v-col cols="5" v-for="card in cards" :key="card.product_id" :cols="card.flex" v-if="card.productCategory == 'Non Coffee'">
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
                    </v-container>
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
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer";

export default {
    name: "NonCoffee",
    data: () => ({
        cards: [
            // { title: 'Ice Chocolate', src: require('@/assets/img/newimg/aboutus/noncoffee/Choconut.webp'), flex: 3 },
            // { title: 'Chocomel', src: require('@/assets/img/newimg/aboutus/noncoffee/Chomel.webp'), flex: 3},
            // { title: 'Matcha', src: require('@/assets/img/newimg/aboutus/noncoffee/MatchaIce.webp'), flex: 3 },
            // { title: 'Taro', src: require('@/assets/img/newimg/aboutus/noncoffee/TaroIce.webp'), flex: 3},
            // { title: 'Red Velvet', src: require('@/assets/img/newimg/aboutus/noncoffee/RedVelvetIce.webp'), flex: 3 },
            // { title: 'Berry Smoothies', src: require('@/assets/img/newimg/aboutus/noncoffee/StrawberrySmoothies.webp'), flex: 3 },
            // { title: 'Mango Smoothies', src: require('@/assets/img/newimg/aboutus/noncoffee/MangoSmoothies.webp'), flex: 3 },
            // { title: 'Kiwi Smoothies', src: require('@/assets/img/newimg/aboutus/noncoffee/KiwiSmoothies.webp'), flex: 3 },
            // { title: 'Lychee Tea', src: require('@/assets/img/newimg/aboutus/noncoffee/LechyeeTea.webp'), flex: 3 },
            // { title: 'Summer Vibes', src: require('@/assets/img/newimg/aboutus/noncoffee/PeachTea.webp'), flex: 3 },
            // { title: 'Lemon Tea', src: require('@/assets/img/newimg/aboutus/noncoffee/LemonTea.webp'), flex: 3 },
            // // { title: 'Milk Tea', src: require('@/assets/img/newimg/aboutus/noncoffee/MilkTea.webp'), flex: 3 },
            // { title: 'Thai Tea', src: require('@/assets/img/newimg/aboutus/noncoffee/ThaiteaLatte.webp'), flex: 3 },
            // { title: 'Oreo Frappe', src: require('@/assets/img/newimg/aboutus/noncoffee/OreoFrappe.webp'), flex: 3 },
            // { title: 'Taro Frappe', src: require('@/assets/img/newimg/aboutus/noncoffee/TaroFrappe.webp'), flex: 3 },
            // { title: 'RedVelvet Frappe', src: require('@/assets/img/newimg/aboutus/noncoffee/StrawberryFrape.webp'), flex: 3 },
            // { title: 'Matcha Frappe', src: require('@/assets/img/newimg/aboutus/noncoffee/MatchaFrappe.webp'), flex: 3 },
            // { title: 'Cookies and Cream', src: require('@/assets/img/newimg/aboutus/noncoffee/ChocolateFrappe.webp'), flex: 3 },
           
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

            fetch("https://api.katarasa.id/product/get-product?page=1&limit=100&keyword=&sku=&id_kategori=2", requestOptions)
            .then(response => response.json())
            .then(result => this.cards=result.data.data)
            .catch(error => console.log('error', error));
                    }
                },

}
</script>



