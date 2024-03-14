<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            Hai Tentang
        </div>
        <foote />
    </section>
</template> 

<script scope>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer.vue";

export default {

    name: "TentangKami",
    components: {
        navigation,
        foote
    },

}
</script>

