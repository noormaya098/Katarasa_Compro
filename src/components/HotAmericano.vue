<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        <!-- Bagian atas -->
        <section>
            <div style="margin-left: 70px; margin-top: 20px;">
                <router-link to="/view1" style="text-decoration: none;">
                    <v-icon color="black"
                        style="font-size: 30px; margin-right: 10px; margin-bottom: 10px; margin-top: 10px;">mdi-arrow-left</v-icon>
                    <span class="font-katarasa">Coffee</span>
                </router-link>
            </div>
        </section>
        <section>
            <v-row>
                <v-col>
                    <div style="margin-left: 70px;">
                        <v-img src="@/assets/img/coffee/HotAmericano.png"
                            style="height: 360px; width: 760px; border-radius: 10px;"></v-img>
                    </div>
                </v-col>
                <v-col>
                    <div>
                        <p class="font-katarasa">
                            Hot Americano
                        </p>
                        <p class="font-katarasa1">
                            Americano Coffee hot make you warm and relax
                        </p>
                    </div>
                    <v-row>
                        <v-col>
                            <a href="https://gofood.link/a/FojVDNU" style="text-decoration: none;">
                                <v-btn rounded="pill" text style="background: #DFCFCA; height: 48px; width: 240px;">
                                    <span class="font-katarasa1  text-none px-2 __btn-login-text">Order in apps</span>
                                </v-btn>
                            </a>
                        </v-col>
                        <v-col>
                            <v-img src="@/assets/img/katarasa1/btn1.png"
                                style="height: 45px; width: 45px; margin-left: -20px;">
                            </v-img>

                        </v-col>
                        <v-col>
                            <v-img src="@/assets/img/katarasa1/btn2.png"
                                style="height: 45px; width: 45px; margin-left: -100px;">
                            </v-img>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <section>
                <v-col>
                    <div style="margin-left: 60px;">
                        <p class="font-katarasa3">
                            Rekomendasi
                        </p>
                    </div>
                </v-col>
            </section>
            <section>
                <v-row>
                    <v-col class="d-flex" style="margin-right: -50px; margin-left: 20px;">
                        <v-card style="width: 240px; height: 250px; margin-left: 40px; margin-right: 20px;">
                            <v-row>
                                <v-col>
                                    <v-img src="@/assets/img/coffee/TiramissuLatte.jpg" cover class="bg-grey-lighten"
                                        style="height: 173px; width: 228px; margin-left: 5px; margin-top: 5px;"></v-img>
                                    <div style="text-align: center; margin-top: 10px;">
                                        <p class="font-katarasa4">
                                            Tirramissu Latte
                                        </p>
                                        <p style="margin-top: -10px;" class="font-katarasa1">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col class="d-flex" style=" margin-left: 20px;">
                        <v-card style="width: 240px; height: 250px; ">
                            <v-row>
                                <v-col>
                                    <v-img src="@/assets/img/coffee/KopiSusu.png" cover class="bg-grey-lighten"
                                        style="height: 173px; width: 228px; margin-left: 5px; margin-top: 5px;"></v-img>
                                    <div style="text-align: center; margin-top: 10px;">
                                        <p class="font-katarasa4">
                                            Kopi Susu Tara
                                        </p>
                                        <p style="margin-top: -10px;" class="font-katarasa1">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col class="d-flex" style="margin-left: -30px; margin-right: 20px;">
                        <v-card style="width: 240px; height: 250px; ">
                            <v-row>
                                <v-col>
                                    <v-img src="@/assets/img/coffee/IceAmericano.jpg" cover class="bg-grey-lighten"
                                        style="height: 173px; width: 228px; margin-left: 5px; margin-top: 5px;"></v-img>
                                    <div style="text-align: center; margin-top: 10px;">
                                        <p class="font-katarasa4">
                                            Ice Americano
                                        </p>
                                        <p style="margin-top: -10px;" class="font-katarasa1">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col class="d-flex" style="margin-left: -50px; margin-right: 10px;">
                        <v-card style="width: 240px; height: 250px;">
                            <v-row>
                                <v-col>
                                    <v-img src="@/assets/img/coffee/HotAmericano.png" cover class="bg-grey-lighten"
                                        style="height: 173px; width: 228px; margin-left: 5px; margin-top: 5px;"></v-img>
                                    <div style="text-align: center; margin-top: 10px;">
                                        <p class="font-katarasa4">
                                            Hot Americano
                                        </p>
                                        <p style="margin-top: -10px;" class="font-katarasa1">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col class="d-flex" style="margin-left: -40px; margin-right: 40px;">
                        <v-card style="width: 240px; height: 250px;">
                            <v-row>
                                <v-col>
                                    <v-img src="@/assets/img/coffee/kopi14.jpg" cover class="bg-grey-lighten"
                                        style="height: 173px; width: 228px; margin-left: 5px; margin-top: 5px;"></v-img>
                                    <div style="text-align: center; margin-top: 10px;">
                                        <p class="font-katarasa4">
                                            Creamy Milk Latte
                                        </p>
                                        <p style="margin-top: -10px;" class="font-katarasa1">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-container>
                    </v-container>
                </v-row>
            </section>
        </section>
        <foote />
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.font-katarasa {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: black;
}

.font-katarasa1 {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #503828;
}

.font-katarasa3 {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: bold;
    color: #935330;
}

.font-katarasa4 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #3A332D;
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
    name: "HotAmericano",
    components: {
        navigation,
        foote
    },
    methods: {
        goToMenuPages() {
            this.$router.push('/des1')
        },
    },
}
</script>



