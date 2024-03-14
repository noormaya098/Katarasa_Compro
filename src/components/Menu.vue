<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
            <div class="katarasa-menu1">
                <section>
                    <section>
                        <v-container>
                            <center>
                                <v-col>
                                    <div style="text-align: center; color: #3A332D; ">
                                        <h1 class="font-katarasa1">
                                            Menu Kata Rasa
                                        </h1>
                                    </div>
                                    <h4 class="font-katarasa2">
                                        Choose your favorite and we served you with heart
                                    </h4>
                                </v-col>
                            </center>
                        </v-container>
                    </section>
                    <!-- Coffee -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    Coffee
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <router-link to="/coffee" style="color: inherit; text-decoration: none;">
                                                    <h4
                                                        style=" text-align: right;  color: #935330; font-family:'Poppins', sans-serif ">
                                                        View More
                                                    </h4>
                                                </router-link>
                                            </v-container>
                                        </v-col>
                                    </v-row>
                                </section>
                            </div>
                        </div>
                        <div class="card">
                            <div>
                                <v-container fluid>
                                    <v-row dense>
                                        
                                        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                                            <v-card style="margin-right: 10px;">
                                                <v-img :src="card.src" class="align-end" max-width="100%" height="auto">
                                                </v-img>
                                                <h4
                                                    style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family:'Poppins', sans-serif">
                                                    {{ card.title }}
                                                </h4>
                                                <!-- <v-card-title class="font-katarasa2"
                                                    style="color: #3A332D; text-align: center; padding-left: 50px;">{{
                                                        card.title }}</v-card-title> -->
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </div>
                        </div>
                    </v-container>
                    <!-- Non Coffee -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    Non Coffee
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <router-link to="/NonCoffee" style="color: inherit; text-decoration: none;">
                                                    <h4
                                                        style=" text-align: right;  color: #935330; font-family:'Poppins', sans-serif ">
                                                        View More
                                                    </h4>
                                                </router-link>
                                            </v-container>
                                        </v-col>
                                    </v-row>
                                </section>
                            </div>
                        </div>
                        <div style="margin-left: 20px;">
                            <v-container fluid>
                                <v-row dense>
                                    <v-col v-for="card in cards2" :key="card.title" :cols="card.flex">
                                        <v-card style="margin-right: 10px;">
                                            <v-img :src="card.src2" class="align-end"  max-width="100%" height="auto">
                                            </v-img>
                                            <h4
                                                style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family:'Poppins', sans-serif">
                                                {{ card.title2 }}
                                            </h4>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-container>
                    <!-- To Go -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    To Go
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <router-link to="/togo" style="color: inherit; text-decoration: none;">
                                                    <h4
                                                        style=" text-align: right;  color: #935330; font-family:'Poppins', sans-serif ">
                                                        View More
                                                    </h4>
                                                </router-link>
                                            </v-container>
                                        </v-col>
                                    </v-row>
                                </section>
                            </div>
                        </div>
                        <div style="margin-left: 20px;">
                            <v-container fluid>
                                <v-row dense>
                                    <v-col v-for="card in cards3" :key="card.title" :cols="card.flex">
                                        <v-card style="margin-right: 10px;">
                                            <v-img :src="card.src3" class="align-end" max-width="100%" height="auto">
                                            </v-img>
                                            <h4
                                                style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family:'Poppins', sans-serif">
                                                {{ card.title3 }}
                                            </h4>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-container>
                    <!-- Pastry -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    Foods
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <router-link to="/pastry" style="color: inherit; text-decoration: none;">
                                                    <h4
                                                        style=" text-align: right;  color: #935330; font-family:'Poppins', sans-serif ">
                                                        View More
                                                    </h4>
                                                </router-link>
                                            </v-container>
                                        </v-col>
                                    </v-row>
                                </section>
                            </div>
                        </div>
                        <div style="margin-left: 20px; height: auto; width: 100%;">
                            <v-container fluid>
                                <v-row dense>
                                    <v-col v-for="card in cards4" :key="card.title" :cols="card.flex">
                                        <v-card style="margin-right: 10px;">
                                            <v-img :src="card.src4" class="align-end" max-width="100%" height="auto">
                                            </v-img>
                                            <center>
                                                <h4
                                                    style="color: #3A332D; text-align: center; padding-top: 20px; padding-bottom: 20px; font-family: 'Poppins', sans-serif">
                                                    {{ card.title4 }}
                                                </h4>
                                            </center>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </v-container>
                </section>
            </div>
        </div>
        <foote />
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.grid-2 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}

.grid-3 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}


@media only screen and (max-width: 600px) {
    .katarasa-menu1 {
        width: 100%;
        height: auto;
    }

    .card {
        width: 100%;
        height: auto;
    }

}

@media only screen and (min-width: 500px) {
    .mobile {
        display: none;
    }
}

.font-katarasa {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;

}

.font-katarasa1 {
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: 700;

}

.font-katarasa2 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
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
    name: "Menu",
    data: () => ({
        cards: [
            { title: 'Kopi Susu Tara', src: require('@/assets/img/coffee/KopiSusu.png'), flex: 3 },
            { title: 'Hot Americano', src: require('@/assets/img/coffee/HotAmericano.png'), flex: 3 },
            { title: 'Moccachino', src: require('@/assets/img/coffee/Moccachino.jpg'), flex: 3 },
            { title: 'Tiramissu Latte', src: require('@/assets/img/coffee/TiramissuLatte.jpg'), flex: 3 },
        ],
        cards2: [
            { title2: 'Matcha Frappe', src2: require('@/assets/img/noncoffe/matchaa.jpg'), flex: 3 },
            { title2: 'Choco Frappe', src2: require('@/assets/img/noncoffe/chocofrappee.jpg'), flex: 3 },
            { title2: 'Red Velvet', src2: require('@/assets/img/noncoffe/redvel.jpg'), flex: 3 },
            { title2: 'Oreo Frappe', src2: require('@/assets/img/noncoffe/oreofrappee.jpg'), flex: 3 },
        ],
        cards3: [
            { title3: 'Taro To Go', src3: require('@/assets/img/togo/Taro.jpg'), flex: 3 },
            { title3: 'Matcha To Go', src3: require('@/assets/img/togo/Matcha.jpg'), flex: 3 },
            { title3: 'Kopi Tara To Go', src3: require('@/assets/img/togo/KopiTara.jpg'), flex: 3 },
            { title3: 'Americano To Go', src3: require('@/assets/img/togo/Americano.jpg'), flex: 3 },
        ],
        cards4: [
            { title4: 'Croissant', src4: require('@/assets/img/pastry/croissant.jpg'), flex: 3 },
            { title4: 'Croissant Almond', src4: require('@/assets/img/pastry/croissantalmond.png'), flex: 3 },
            { title4: 'Nasi Goreng Ikan Asin', src4: require('@/assets/img/pastry/nasgor.jpg'), flex: 3 },
            { title4: 'Mie Ayam', src4: require('@/assets/img/pastry/mieayam.jpg'), flex: 3 },

        ],
    }),

    components: {
        navigation,
        foote,
    },
    methods: {
        goToMenuPages() {
            this.$router.push('/MenuPages')
        },
    },
}
</script>



