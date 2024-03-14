<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        <div style="margin-top: 20px; margin-left: 10px;">
            <router-link to="/" style="text-decoration: none;">
                <v-icon color="black"
                    style="font-size: 30px; margin-right: 10px; margin-bottom: 10px;">mdi-arrow-left</v-icon>
                <span class="font-katarasa" style="font-size: 30px;">How To Order</span>
            </router-link>
        </div>
        <div style="margin-top: 20px;" class="katarasa-order">
            <v-row> 
                <v-col cols="6" style="padding-right: 0px;">
                    <div class="div">
                        <v-img src="@/assets/img/ordernow/kiri.png" style="height: auto; width: 100%;">
                            <div style="padding-top: 200px; padding-left: 60px; padding-right: 60px;">
                                <center>
                                    <h2 class="font-katarasa" style="font-size: 30px;">
                                        Order Via WhatsApp
                                    </h2>
                                    <h3 class="font-katarasa1">
                                        Kamu ingin memesan menu Kata Rasa dengan praktis dan cepat? Yuk langsung hubungi
                                        Whatsapp Kata Rasa untuk order!
                                    </h3>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=6281224749911&text=Halo ka, saya ingin memesan menu KataRasa, bagaimana caranya yah ka ?">
                                        <div>
                                            <v-img src="@/assets/img/ordernow/WA.png"
                                                style=" margin-bottom: 20px; margin-top: 20px;  width: 180px; height: auto;"
                                                class="wa"></v-img>
                                        </div>
                                    </a>
                                </center>
                            </div>
                        </v-img>
                    </div>
                </v-col>
                <v-col cols="6" style="padding-left: 0px;">
                    <div class="div">
                        <v-img src="@/assets/img/ordernow/gofood1.png">
                            <div style="padding-top: 200px; padding-left: 60px; padding-right: 60px;">
                                <center>
                                    <h1 class="font-katarasa" style="color: aliceblue; font-size: 30px;">
                                        Order via Gofood
                                    </h1>
                                    <h3 class="font-katarasa4" style="color: alicebluenpm;">
                                        Untuk kamu yang promo hunter, Kata Rasa kini bisa dipesan lewat Gofood dan kamu bisa
                                        nikmati Kata Rasa dengan promo di Gofood!
                                    </h3>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=6281224749911&text=Halo ka, saya ingin memesan menu KataRasa, bagaimana caranya yah ka ?">
                                        <div>
                                            <v-img src="@/assets/img/ordernow/gojek.png"
                                                style=" margin-bottom: 20px; margin-top: 20px; width: 180px; height: auto;"
                                                class="wa"></v-img>
                                        </div>
                                    </a>
                                </center>
                            </div>
                        </v-img>
                    </div>
                </v-col>
            </v-row>
        </div>
        <foote />
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.katarasa-order {
    width: 100%;
    height: auto;
}

.wa {
    width: 50%;
    height: auto;
}

.div {
    width: 100%;
    height: auto;
}


@media only screen and (max-width: 600px) {
    .katarasa-order {
        height: auto;
        width: 100%;
    }
}

.font-katarasa {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 60px;
    /* identical to box height */
    /* Kata Rasa/04 */
    color: #3A332E;
}

.font-katarasa1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    /* or 160% */

    text-align: center;

    /* Kata Rasa/03 */

    color: #6C4B39;
}

.font-katarasa3 {
    /* Text/40 - Headline Home */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */

    letter-spacing: 0.05em;

    /* Kata Rasa/Background Light */

    color: #FBFBFB;

}

.font-katarasa4 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    /* or 160% */

    text-align: center;
    letter-spacing: 0.02em;

    /* Kata Rasa/00 */

    color: #FFFBE9;
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
    name: "OrderNow",
    data() {
        return {
            whatsappNumber: '+6281224749911'
        }
    },
    components: {
        navigation,
        foote
    },
    methods: {
        goToMenuPages() {
            this.$router.push('/faq')
        },
    },
}
</script>



