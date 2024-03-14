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
                                    <div style="text-align: center; color: #3A332D; " class="font-katarasa1">
                                        <h1 class="font-katarasa1">
                                            Product Of Katarasa
                                        </h1>
                                    </div>
                                    <div class="font-katarasa2">
                                        <h4 class="font-katarasa2">
                                            Now, you can make your own coffee at home!
                                        </h4>
                                    </div>
                                </v-col>
                            </center>
                        </v-container>
                    </section>
                    <!-- Beans -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    Beans
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <!-- <router-link to="/coffee" style="color: inherit; text-decoration: none;"> -->
                                                <!-- <div style="font-size: 20px; text-align: right;  color: #935330">
                                                    View More
                                                </div> -->
                                                <!-- </router-link> -->
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
                        </div>
                    </v-container>
                    <!-- Coffee Maker -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    Coffee Maker
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <!-- <router-link to="/NonCoffee" style="color: inherit; text-decoration: none;">
                                                    <div style="font-size: 20px; text-align: right;  color: #935330; ">
                                                        View More
                                                    </div>
                                                </router-link> -->
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
                                            <v-img :src="card.src2" class="align-end" height="auto" width="100%">
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
                    <!-- Tools -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    Tools
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <!-- <router-link to="/togo" style="color: inherit; text-decoration: none;">
                                                    <div style="font-size: 20px; text-align: right;  color: #935330">
                                                        View More
                                                    </div>
                                                </router-link> -->
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
                                            <v-img :src="card.src3" class="align-end" height="auto" width="100%">
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
                    <!-- Merchandise -->
                    <v-container>
                        <div class="grid-2">
                            <div class="ms-1 mt-1">
                                <section>
                                    <v-row>
                                        <v-col>
                                            <v-container>
                                                <h2 class="font-katarasa">
                                                    Merchandise
                                                </h2>
                                            </v-container>
                                        </v-col>
                                        <v-col>
                                            <v-container>
                                                <router-link to="/merchandise"
                                                    style="color: inherit; text-decoration: none;">
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
                                            <v-img :src="card.src4" class="align-end" height="auto" width="100%">
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
    name: "Product",
    data: () => ({
        cards: [
            { title: 'Arabica', src: require('@/assets/img/beans/beans1.jpg'), flex: 3 },
            { title: 'Robusta', src: require('@/assets/img/beans/beans2.jpg'), flex: 3 },
            { title: 'Aceh Gayo', src: require('@/assets/img/beans/beans3.jpg'), flex: 3 },
            { title: 'Toraja', src: require('@/assets/img/beans/beans4.jpg'), flex: 3 },
        ],
        cards2: [
            { title2: 'Coffee Stiring v2', src2: require('@/assets/img/coffeemaker/cm1.jpg'), flex: 3 },
            { title2: 'Coffee Driller', src2: require('@/assets/img/coffeemaker/cm2.jpg'), flex: 3 },
            { title2: 'Coffee Brewer', src2: require('@/assets/img/coffeemaker/cm4.jpg'), flex: 3 },
            { title2: 'Coffee Filter', src2: require('@/assets/img/coffeemaker/cm3.jpg'), flex: 3 },
        ],
        cards3: [
            { title3: 'Metal Glass', src3: require('@/assets/img/tools/tool1.jpg'), flex: 3 },
            { title3: 'Lever Machine', src3: require('@/assets/img/tools/tool2.jpg'), flex: 3 },
            { title3: 'Coffee Jar', src3: require('@/assets/img/tools/tool3.jpg'), flex: 3 },
            { title3: 'Metal Stirer', src3: require('@/assets/img/tools/tool4.jpg'), flex: 3 },
        ],
        cards4: [
            { title4: 'Totebag Tara', src4: require('@/assets/img/merchandise/totebag.jpg'), flex: 3 },
            { title4: 'Wood Plate', src4: require('@/assets/img/merchandise/wood.jpg'), flex: 3 },
            { title4: 'Thermos Bottle', src4: require('@/assets/img/merchandise/thermos.jpg'), flex: 3 },
            { title4: 'Travel Mug', src4: require('@/assets/img/merchandise/travelMug.jpg'), flex: 3 },

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



