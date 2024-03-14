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
                                        <v-img src="@/assets/img/togo/BannerToGo.jpg" class="align-end" width="100%" height="auto">
                                            <v-card-title>
                                                <v-col>
                                                    <div style="margin-bottom: 0px;">
                                                        <h1 class="font-katarasa" style="color: #FFFBE9;">
                                                            TO GO!
                                                        </h1>
                                                        <div style="text-overflow: ; text-align: left; width: 265px;">
                                                            <h6 class="font-katarasa1">
                                                                You need more coffe and drink for cheers up your family or
                                                                friends at home? we got you!
                                                            </h6>
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
                                    Menu TO GO !
                                </h1>
                            </div>
                        </center>
                    </section>
                    <v-container>
                        <v-container fluid>
                            <v-row dense>
                                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                                    <v-card style="margin-right: 10px; margin-bottom: 10px;">
                                        <v-img :src="card.src" class="align-end" width="100%" height="auto">
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
    font-size: 18px;
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
    name: "ToGo",
    data: () => ({
        cards: [
            { title: 'Americano', src: require('@/assets/img/newimg/aboutus/togo/america.webp'), flex: 3 },
            { title: 'Kopi Susu Tara', src: require('@/assets/img/newimg/aboutus/togo/white.webp'), flex: 3 },
            { title: 'Red Velvet', src: require('@/assets/img/newimg/aboutus/togo/redvelvet.webp'), flex: 3 },
            { title: 'Taro', src: require('@/assets/img/newimg/aboutus/togo/taro.webp'), flex: 3 },
            { title: 'Chocolate', src: require('@/assets/img/newimg/aboutus/togo/chocolate.webp'), flex: 3 },
            { title: 'Matcha', src: require('@/assets/img/newimg/aboutus/togo/matcha.webp'), flex: 3 },
            { title: 'Thai Tea', src: require('@/assets/img/newimg/aboutus/togo/thaitea.webp'), flex: 3 },
            { title: 'White Coffee', src: require('@/assets/img/newimg/aboutus/togo/whitecoffee.webp'), flex: 3 },
        ],

    }),
    components: {
        navigation,
        foote
    },

}
</script>



