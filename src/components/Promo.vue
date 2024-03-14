<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        <div class="about-section">
            <section>
                <div class="visi-misi">
                    <v-img src="@/assets/img/promo/bannerpromo.png" style=" margin-bottom: 10px;  height: auto; margin-top: 5px;"></v-img>
                </div>
                <center>
                    <div class="mt-2 mb-2">
                        <h1 class="font-katarasa">
                            Our Promo!
                        </h1>
                    </div>
                </center>
                <div class="gambar-banner mb-5 ">
                   <v-container>
                    <v-row dense>
                        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                            <v-card class="mr-5 ml-5">
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
                </div>
            </section>
        </div>
        <!-- Bagian atas -->

        <foote />
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.about-section {
    width: 100%;
    height: auto;
}

.visi-misi {
    width: 100%;
    height: auto;
}

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
    name: "Promo",
    data: () => ({
        cards: [
            { title: 'Upss... Maaf Promo belum tersedia...', src: require('@/assets/img/bg/bg1.png'), flex: 6 },
            { title: 'Upss... Maaf Promo belum tersedia...', src: require('@/assets/img/bg/bg1.png'), flex: 6 },


        ],

    }),
    components: {
        navigation,
        foote
    },

}
</script>



