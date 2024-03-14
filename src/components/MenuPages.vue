<template>
    <div>
        <navigation :color="color" :flat="flat" />
        <v-container>
            <div style="margin-left: 20px;">
                <v-col>
                    <div style="margin-bottom: 10px;">
                        <p class="font-katarasa1">
                            Moccacino
                        </p>
                    </div>
                    <v-row>
                        <div style="height: 277px; width: 342px; margin-top: 10px;">
                            <v-img src="@/assets/img/katarasa1/Moccacino.jpg">
                            </v-img>
                        </div>
                        <v-col>
                            <v-row>
                                <div style="margin-left: 30px;">
                                    <p class="font-katarasa1" style="color: grey;">
                                        Description
                                    </p>
                                    <div>
                                        <p class="font-kataras2">
                                            Coffee mocha atau seing juga disebut moka adalah campuran antara cappuccino
                                            dan
                                            cokelat panas. Moka dibuat dengan campuran cokelat bubuk dan satu shot
                                            espreso.
                                            Campuran ini kemudian dilanjutkan dengan proses pembuatan cappuccino pada
                                            umumnya.
                                        </p>
                                    </div>
                                    <v-row style="margin-left: 2px;">
                                        <div>
                                            <v-img style="height: 27.97px; width: 27.97px;"
                                                src="@/assets/img/icon/IconLove.png" alt=""></v-img>
                                        </div>
                                        <div style="margin-left: 5px;">
                                            <v-img style="height: 27.97px; width: 27.97px;"
                                                src="@/assets/img/icon/IconInformations.jpg" alt=""></v-img>
                                        </div>
                                        <div style="margin-left: 5px;">
                                            <v-img style="height: 27.97px; width: 27.97px;"
                                                src="@/assets/img/icon/IconShare.jpg" alt=""></v-img>
                                        </div>
                                    </v-row>
                                </div>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <div class="font-kataras2">
                        <p>
                            Rekomendasi
                        </p>
                    </div>
                    <v-row>
                        <div>
                            <v-img src="@/assets/img/icon/ThaiTea1.jpg" style="height: 76px; width: 185px;">
                            </v-img>
                        </div>
                        <div>
                            <v-img src="@/assets/img/icon/ThaiTea2.jpg" style="height: 76px; width: 185px;">
                            </v-img>
                        </div>
                        <div>
                            <v-img src="@/assets/img/icon/ThaiTea1.jpg" style="height: 76px; width: 185px;">
                            </v-img>
                        </div>
                        <div>
                            <v-img src="@/assets/img/icon/ThaiTea2.jpg" style="height: 76px; width: 185px;">
                            </v-img>
                        </div>
                        <div>
                            <v-img src="@/assets/img/icon/ThaiTea1.jpg" style="height: 76px; width: 185px;">
                            </v-img>
                        </div>
                        <div>
                            <v-img src="@/assets/img/icon/ThaiTea2.jpg" style="height: 76px; width: 185px;">
                            </v-img>
                        </div>
                    </v-row>
                </v-col>
            </div>
        </v-container>
    </div>
</template>

<script scope>
import navigation from "../components/NavigationLain.vue";

export default {

    name: "MenuPages",
    components: {
        navigation
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.font-katarasa1 {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #A56C16;
}

.font-kataras2 {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #474545;
}
</style>
