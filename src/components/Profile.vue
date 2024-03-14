<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <section>
                <div style="margin-left: 70px; margin-top: 20px;">
                    <router-link to="/" style="text-decoration: none;">
                        <v-icon color="black"
                            style="font-size: 30px; margin-right: 10px; margin-bottom: 10px; margin-top: 10px;">mdi-arrow-left</v-icon>
                        <span class="font-katarasa">Profile</span>
                    </router-link>
                </div>
            </section>
            <!-- Profile -->
            <section>
                <div>
                    <v-container>
                        <v-img src="@/assets/img/profile/bg.png">
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <v-img src="@/assets/img/profile/org.png"
                                            style="width: 150px; height: 150px; margin-left: 20px;"></v-img>
                                    </v-col>
                                    <v-col>
                                        <div style="margin-left: -180px;">
                                            <p class="font-hello">
                                                Hello, Maya Estianty
                                            </p>
                                            <p class="font-points" style="margin-top: -20px;">
                                                You have 240 points.
                                            </p>
                                            <p class="rounded-text "
                                                style="padding: 8px 20px; width: 139px; height:  39.22px; margin-top: -10px; ">
                                                Silver Badge
                                            </p>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <v-img src="@/assets/img/profile/cardfix.png"
                                            style="width: 325px; height: 162.91px; margin-top: 10px;">
                                            <v-col>
                                                <p class="font-card" style="margin-left: 13px; margin-top: 7px;">
                                                    Maya Estianty
                                                </p>
                                            </v-col>
                                            <v-col>
                                                <p class="font-card1" style="margin-left: 13px; margin-top: 25px;">
                                                    Member Card
                                                </p>
                                            </v-col>
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-img>
                    </v-container>
                </div>
            </section>
            <section>
                <v-container>
                    <v-row justify="Start">
                        <div style="height: 30px; width: 30px; margin-top: 5px;">
                            <v-img src="@/assets/img/profile/CoffeeCup.png"></v-img>
                        </div>
                        <div style="margin-left: 10px;">
                            <p class="font-points">
                                Your Coffee Journey
                            </p>
                        </div>
                    </v-row>
                </v-container>
            </section>
            <!-- Tabel -->
            <section>
                <center>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-card style="width: 750px; height: 500px;">
                                    <div>
                                        <v-data-table :headers="headers" :items="items" style="width: 860px; height: 468px;"
                                            class="font-table">
                                            <template v-slot:progress="{ item }">
                                                <v-progress-linear :value="item.progress" height="6"></v-progress-linear>
                                            </template>
                                        </v-data-table>
                                    </div>
                                </v-card>
                            </v-col>
                            <v-col>
                                <div style="width: 378px; height: 108px;">
                                    <div
                                        style="width: 300px; height: 50px; background: #6C4B39;  border-top-left-radius: 6px;">
                                        <div>
                                            <p class="font-table" style=" padding-top: 10px; color: #DFCFC4;">
                                                Code Refferal
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        style="width: 300px; height: 80px; background: #DFCFC4; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px;  border: 2px solid #DFCFC4;">
                                        <center>
                                            <div>
                                                <p class="font-refferal" style=" padding-top: 20px; ">
                                                    MAYA001
                                                </p>
                                            </div>
                                        </center>
                                    </div>
                                </div>
                                <div
                                    style="width: 300px;height: 200px; background: #FBFBFB; border: 2px solid #000000; border-radius: 6px; margin-top: 40px;">
                                    <center>
                                        <div>
                                            <p class="font-table" style=" padding-top: 10px;">
                                                Refferal Gift
                                            </p>
                                        </div>
                                    </center>
                                    <center>
                                        <div>
                                            <p class="font-refferal" style=" padding-top: 10px;">
                                                08/10
                                            </p>
                                        </div>
                                    </center>
                                    <center>
                                        <div>
                                            <v-btn style="border-radius: 20px; background: #DFCFC4;">
                                                <span class="font-claim text-none px-2 __btn-Login-text ">
                                                    Claim Gift
                                                </span>
                                            </v-btn>
                                        </div>
                                    </center>
                                </div>
                            </v-col>
                        </v-row>

                    </v-container>
                </center>

            </section>
            <section>
                <v-container style="margin-top: 20px;">

                </v-container>
            </section>
            <foote />
        </div>
    </section>
</template>

<script scope>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer.vue"

export default {
    name: "Profile",
    data() {
        return {
            headers: [
                { text: 'Name Menu', value: 'name' },
                { text: 'Category', value: 'category' },
                { text: 'Progress (%)', value: 'progress' },
                { text: 'Calculation', value: 'calcul' },
            ],
            items: [
                {
                    name: 'Americano',
                    category: 'Coffee',
                    progress: '80',
                    calcul: '80 Order',

                },
                {
                    name: 'Milkshake',
                    category: 'Non-Coffee',
                    progress: '70',
                    calcul: '40 Order',

                },
                {
                    name: 'Croissant',
                    category: 'Pastery',
                    progress: '10',
                    calcul: '20 Order',

                },
                {
                    name: 'Ice Chocolate',
                    category: 'Non-Coffee',
                    progress: '10',
                    calcul: '5 Order',

                },
                {
                    name: 'Caramel Latte',
                    category: 'Coffee',
                    progress: '10',
                    calcul: '3 Order',
                },
                {
                    name: 'Affogato',
                    category: 'Coffee',
                    progress: '10',
                    calcul: '3 Order',
                },
                {
                    name: 'Cappucino',
                    category: 'Coffee',
                    progress: '10',
                    calcul: '2 Order',
                },
                {
                    name: 'Mochaccino',
                    category: 'Coffee',
                    progress: '10',
                    calcul: '1 Order',
                },

            ]
        }

    },
    components: {
        navigation,
        foote,
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

.rounded-text {
    border-radius: 30px;
    background-color: #D8D8D8;
    padding: 10px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
}

.font-claim {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 32px;
    /* identical to box height, or 160% */

    letter-spacing: 0.02em;

    /* Kata Rasa/03 */

    color: #6C4B39;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.font-refferal {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #000000;
}

.font-card {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    color: #FFFFFF;
}

.font-table {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */

    text-align: center;
    letter-spacing: 0.02em;

    color: #000000;
}

.font-card1 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    /* identical to box height, or 160% */
    letter-spacing: 0.02em;
    color: #FFFFFF;

}

.font-hello {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: 0.02em;
}

.font-points {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #9F6F4F;
}

.font-journey {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    /* identical to box height */
    letter-spacing: 0.02em;
    /* Kata Rasa/02 */
    color: #9F6F4F;
    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
}

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

.progress {
    height: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    margin-bottom: 0;
}

.progress-bar {
    height: 20px;
    background-color: #007bff;
    border-radius: 10px;
    color: #fff;
    text-align: center;
}
</style>