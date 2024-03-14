<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <div class="katarasa-korporasi">
                <v-container class="font-bantuans">
                    <h3 class="font-syarat">Korporasi</h3>
                </v-container>
            </div>
            <center>
                <div class="gambar">
                    <div>
                        <v-img src="@/assets/img/aboutus/coffeeloading.png"
                            style=" margin-bottom: 20px; margin-top: 20px;"></v-img>
                    </div>
                </div>
            </center>
        </div>
        <foote />
    </section>
</template> 

<script scope>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer.vue";

export default {

    name: "Korporasi",
    components: {
        navigation,
        foote
    },

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.katarasa-korporasi {
    width: 100%;
    height: auto;
}

.gambar {
    width: 40%;
    height: auto;
}

@media only screen and (max-width: 100px) {
    .katarasa-korporasi {
        width: 100%;
    }
}

.font-bantuans {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 54px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;
}

.font-judul {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    /* or 160% */

    letter-spacing: 0.02em;

    color: #000000;

}

.font-des {

    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    color: #000000;
}
</style>

