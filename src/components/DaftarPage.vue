<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        <div style="margin-top: 20px;">
            <v-container>
                <router-link to="/loginpage" style="text-decoration: none;">
                    <v-icon color="black"
                        style="font-size: 30px; margin-right: 10px; margin-bottom: 10px;">mdi-arrow-left</v-icon>
                    <span class="font-katarasa">Daftar Akun</span>
                </router-link>
            </v-container>
        </div>
        <section>
            <v-container>
                <v-layout wrap style="margin-top: 30px;">
                    <v-flex sm12 md10 offset-md2>
                        <v-row>
                            <v-col>
                                <v-card
                                    style="width: 760px;  height: 800px; margin-right: 10px; margin-left: 10px; margin-top: 10px; box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.3);                                                                              }">
                                    <v-container>
                                        <div>
                                            <p class="font-katarasa1" style="text-align: center; font-weight: bold;">
                                                Daftar Akun Kata Rasa
                                            </p>
                                        </div>
                                    </v-container>
                                    <!-- Username & Password -->
                                    <section>
                                        <v-container style="margin-top: -20px;">
                                            <v-col md="12">
                                                <v-row>
                                                    <v-col cols="12" sm="2" md="12">
                                                        <div class="font-katarasa2">
                                                            Nama
                                                        </div>
                                                        <v-text-field outlined placeholder="Nama Lengkap" variant="solo"
                                                            style="border-radius: 15px;  bottom: -10px !important ; width: 720px; height: 20px;color: #DFCFCA; "
                                                            class="font-katarasa3"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="2" md="12">
                                                        <div class="font-katarasa2" style="margin-top: 30px;">
                                                            Username
                                                        </div>
                                                        <v-text-field outlined placeholder="username" variant="solo"
                                                            style="border-radius: 15px;  bottom: -10px !important ; width: 720px; height: 20px "
                                                            class="font-katarasa3"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="2" md="12">
                                                        <div class="font-katarasa2" style="margin-top: 30px;">
                                                            Nomor Telepon
                                                        </div>
                                                        <v-text-field outlined placeholder="Nomor Telepon" variant="solo"
                                                            style="border-radius: 15px;  bottom: -10px !important ; width: 720px; height: 20px "
                                                            class="font-katarasa3"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="2" md="12">
                                                        <div class="font-katarasa2" style="margin-top: 30px;">
                                                            Password
                                                        </div>
                                                        <v-text-field outlined placeholder="Password" variant="solo"
                                                            style="border-radius: 15px;  bottom: -10px !important ; width: 720px; height: 20px "
                                                            class="font-katarasa3"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="2" md="12">
                                                        <div class="font-katarasa2" style="margin-top: 30px;">
                                                            Re-type Password
                                                        </div>
                                                        <v-text-field outlined placeholder="Password" variant="solo"
                                                            style="border-radius: 15px;  bottom: -10px !important ; width: 720px; height: 20px "
                                                            class="font-katarasa3"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="2" md="12" style="margin-top: 30px;">
                                                        <div>
                                                            <v-row>
                                                                <v-col>
                                                                    <p class="font-katarasa3" style="margin-right: -100px;">
                                                                        Kode Refferal
                                                                    </p>
                                                                </v-col>
                                                                <v-col style="padding-left: 0px;">
                                                                    <p class="font-opsional" style="margin-left: -250px;">
                                                                        (Opsional)
                                                                    </p>
                                                                </v-col>
                                                            </v-row>
                                                        </div>
                                                        <v-text-field outlined placeholder="Kode Refferal" variant="solo"
                                                            style="border-radius: 15px;  bottom: -10px !important ; width: 720px; height: 20px ; margin-top: -20px;"
                                                            class="font-katarasa3"></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <section>
                                                <router-link to="/profile" style="color: inherit; text-decoration: none;">
                                                    <v-btn rounded="pill" text
                                                        style="background: #DFCFCA; width: 720px; height: 48px; margin-top: 60px; margin-left: 5px;">
                                                        <span class="font-katarasa3 text-none px-2 __btn-Login-text">Buat
                                                            Akun</span>
                                                    </v-btn>
                                                </router-link>
                                            </section>
                                        </v-container>
                                    </section>
                                    <!-- Button Login -->
                                </v-card>

                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
            </v-container>
        </section>
        <foote />
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');


.font-katarasa {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;

}

.font-katarasa1 {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    font-weight: 400;
    color: #3A332D;
}

.font-katarasa2 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #935330;
}

.font-opsional {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;

    color: #935330;
}

.font-katarasa3 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #935330;
}

.font-katarasa4 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #DFCFCA;
}

.font-katarasa5 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
}
</style>



<script scope>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer";

export default {
    name: "DaftarPage",
    components: {
        navigation,
        foote
    },

}
</script>



