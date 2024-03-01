<template>
    <div v-if="product" class="container-fluid text-center">
        <h1>{{ product[0].prodName }}</h1>
        <img :src="product[0].prodUrl" :alt="product[0].prodName" class="img-fluid"/>
        <p>Price: R {{ product[0].amount }}</p>
        <p>Stock Left: {{ product[0].quantity }}</p>
    </div>
    <div v-else class="d-flex justify-content-center">
        <SpinnerComp/>
    </div>
</template>

<script>
    import SpinnerComp from '@/components/SpinnerComp.vue';
export default {
    props: ["prodID"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params.id );
    },
    components: {
        SpinnerComp
    }
}
</script>

<style  scoped>

</style>