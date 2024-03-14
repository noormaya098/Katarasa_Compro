<template>
    <section>
        <div>
            <navigation :color="color" :flat="flat" />
            Blog
        </div>
        <foote />
    </section>
</template> 

<script scope>
import navigation from "../components/NavigationLain.vue";
import foote from "../components/Footer.vue";

export default {

    name: "Blog",
    components: {
        navigation,
        foote
    },

}
</script>

