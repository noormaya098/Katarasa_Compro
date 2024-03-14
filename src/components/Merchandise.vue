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
                            <span class="font-katarasa">Home</span>
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
                                        <v-img src="@/assets/img/merchandise/bannerMar.png" class="align-end" height="auto" width="100%">
                                            <v-card-title>
                                                <v-col>
                                                    <div style="margin-bottom: 0px;">
                                                        <h1 class="font-katarasa" style="color: #FFFBE9;">
                                                            Merchandise
                                                        </h1>
                                                        <div style="text-overflow: auto ; text-align: left; width: 265px;">
                                                            <h3 class="font-katarasa1">
                                                                We provide you something to help you enjoy your coffee
                                                            </h3>
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
                                    Items in Merchandise
                                </h1>
                            </div>
                        </center>
                    </section>
                    <v-container>
                        <v-container fluid>
                            <v-row dense>
                                <v-col  cols="4" v-for="card in cards" :key="card.id" :cols="card.flex">
                                   
                                    <v-card @click="detailProduct(card.slug)" style="margin-right: 10px; margin-bottom: 10px; width: 20%;">
                                        <v-img :src="card.image" class="align-end" height="auto" width="100%">
                                        </v-img>
                                        <h4
                                            style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family: 'Poppins', sans-serif ">
                                            {{ card.name }}
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

}

.font-katarasa2 {
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
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
    name: "Merchandise",
    data: () => ({

        
        cards: [
            // { title: 'Tumblr Black', src: require('@/assets/img/merchandise/BlackTumblr.jpg'), flex: 3 },
            // { title: 'Tumblr Blue', src: require('@/assets/img/merchandise/BlueTumblr.png'), flex: 3 },
            // { title: 'Tumblr Pink', src: require('@/assets/img/merchandise/PinkTumblr.jpg'), flex: 3 },
            // { title: 'Thermos Red', src: require('@/assets/img/merchandise/ThermosRed.png'), flex: 3 },
            // { title: 'Thermos White', src: require('@/assets/img/merchandise/ThermosBlue.jpg'), flex: 3 },
            // { title: 'French Press Coffee', src: require('@/assets/img/merchandise/FrenchPress.jpg'), flex: 3 },
            // { title: 'Alas Tumblr', src: require('@/assets/img/merchandise/AlasTumblr.jpg'), flex: 3 },
            // { title: 'Alas Gelas', src: require('@/assets/img/merchandise/AlasGelas.jpg'), flex: 3 },

        ],

    }),
    components: {
        navigation,
        foote
    },

    mounted() {
        this.fetchData();  
    },
    
    methods: {

        fetchData (){
            var requestOptions = {
            method: 'GET',
            redirect: 'follow'
            };

            fetch("https://api.katarasa.id/product/get-product?page=1&limit=5&keyword=&filter_price=&filter_category=&filter_condition=&filter_preorder=&filter_brand=&filter_etalase=&sort=", requestOptions)
            .then(response => response.json())
            .then(result => this.cards = result.data)
            .catch(error => console.log('error', error));
        },

        detailProduct(slug) {
            // Temukan produk berdasarkan product_id
            this.$router.push({ name: 'DetailProduct', params: { slug: slug } });
            // this.$router.push(`/detailproduct/${productId}`)
            
        },

      
    },
}
</script>



