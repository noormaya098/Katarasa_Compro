<template>
    <section>
        <div >
            <navigation :color="color" :flat="flat" />
            <section>       
                <div style="width: 100%; height: 360px; background-color: #232323; " class="kontak-kami">
                    <center>
                        <v-col cols="12">
                            <v-container>
                                <div style="width: 619px;  height: 239px;">
                                    <h1 class="font-Judul" style=" margin-top: 20px; margin-bottom: 20px;">
                                        Contact Us
                                    </h1>
                                    <h3 class="font-des">
                                        For Urgently needed, You can contact us 24 hours to a local or international number
                                    </h3>
                                    <a
                                        href="https://api.whatsapp.com/send?phone=6281224749911&text=Halo ka, saya mau order nih, gimana caranya yah ?">
                                        <div>
                                            <v-img src="@/assets/img/ordernow/WA.png"
                                                style=" margin-bottom: 20px; margin-top: 20px; " class="wa"></v-img>
                                        </div>
                                    </a>
                                </div>
                            </v-container>
                        </v-col>
                    </center>
                </div>
            </section>
            <section>
                <div style="width: 100%; height: 360px; background-color: #DFCFC4; ">
                    <center>
                        <div style="width: 619px;  height: 239px;  ">
                            <v-col>
                                <v-container>
                                    <h1 class="font-Judul" style="color: #6C4B39; margin-top: 20px; margin-bottom: 20px;">
                                        Contact Us
                                    </h1>
                                    <h3 class="font-des" style="color: #6C4B39;">
                                        For any bussiness, you can contact us through e-mail.
                                    </h3>
                                    <a href="mailto:Kedai.kopikatarasa@gmail.com">
                                        <div>
                                            <v-img src="@/assets/img/ordernow/email1.png"
                                                style=" margin-bottom: 20px; margin-top: 20px; " class="email"></v-img>
                                        </div>
                                    </a>
                                </v-container>
                            </v-col>
                        </div>
                    </center>
                </div>
            </section>
        </div>
        <foote />
    </section>
</template> 

<script scope>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer.vue";

export default {

    name: "Kebijakan",
    components: {
        navigation,
        foote
    },

}
</script>

<!-- Font style -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.kontak-kami {
    width: 100%;
    height: auto;
}

.wa {
    width: 40%;
    height: auto;
} 
 
.email {
    width: 60%;
    height: auto;
}

@media only screen and (max-width: 600px) {
    .kontak-kami1 {
        width: 100%;
        height: auto;
    }

    .card {
        width: 100%;
        height: auto;
    }

}

.font-Judul {
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

.font-des {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    /* or 160% */

    text-align: center;
    letter-spacing: 0.02em;

    /* Kata Rasa/Background Light */

    color: #FBFBFB;
}
</style>



