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
                                        <v-img src="@/assets/img/pastry/bannerpastry.jpg" class="align-end" width="100%" height="auto">
                                            <v-card-title>
                                                <v-col>
                                                    <div style="margin-bottom: 0px;">
                                                        <h1 class="font-katarasa" style="color: #FFFBE9;">
                                                            Food & Pastry
                                                        </h1>
                                                        <div style="text-overflow: ; text-align: left; width: 290px;">
                                                            <h4 class="font-katarasa1">
                                                                Need something to accompany your drink? we got you! We
                                                                served food
                                                                and pastry.
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
                                    Menu Food & Pastry
                                </h1>
                            </div>
                        </center>
                    </section>
                    <v-container>
                        <v-container fluid>
                            <v-row dense>
                                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                                    <v-card style="margin-right: 10px; margin-bottom: 10px;">
                                        <v-img :src="card.src" class="align-end" height="auto" width="100%">
                                        </v-img>
                                        <h4
                                            style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family:'Poppins', sans-serif">
                                            {{ card.title }}
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
    name: "Pastry",
    data: () => ({
        cards: [
            { title: 'Croissant', src: require('@/assets/img/newimg/aboutus/pastry/Croissant.webp'), flex: 3 },
            { title: 'Croissant Almond', src: require('@/assets/img/newimg/aboutus/pastry/CroissantAlmond.webp'), flex: 3 },
            { title: 'Danish Blueberry', src: require('@/assets/img/newimg/aboutus/pastry/DanishBluberry.webp'), flex: 3 },
            { title: 'Danish Cheese', src: require('@/assets/img/newimg/aboutus/pastry/DansihCheese.webp'), flex: 3 },
            { title: 'Cinnamon Roll', src: require('@/assets/img/newimg/aboutus/pastry/CinnamonRoll.webp'), flex: 3 },
            { title: 'Nasi Goreng Ikan Asin', src: require('@/assets/img/newimg/aboutus/pastry/NasiGorengIkanAsin.webp'), flex: 3 },
            { title: 'Nasi Jinggo', src: require('@/assets/img/newimg/aboutus/pastry/NasiJinggo.webp'), flex: 3 },
            { title: 'Mie Ayam', src: require('@/assets/img/newimg/aboutus/pastry/MieAyam.webp'), flex: 3 },

        ],

    }),
    components: {
        navigation,
        foote
    },

}
</script>



