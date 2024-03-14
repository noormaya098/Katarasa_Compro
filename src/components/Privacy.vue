<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            <!-- <h1> Ini class Menu</h1> -->
        </div>
        <div>
            hai Privacy
        </div>
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
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer";

export default {
    name: "Privacy",
    components: {
        navigation,
        foote
    },

}
</script>



