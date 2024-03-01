<template>
    <div v-if="product" class="container-fluid text-center">
        <h1>{{ product.prodName }}</h1>
        <img :src="product.prodUrl" :alt="product.prodName" class="img-fluid"/>
        <p>Price: R {{ product.amount }}</p>
        <p>Stock Left: {{ product.quantity }}</p>
    </div>
    <div v-else class="d-flex justify-content-center">
        <SpinnerComp/>
    </div>
</template>

<script>
    import SpinnerComp from '@/components/SpinnerComp';
export default {
    props: ["prodID"],
    computed: {
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params );
    },
    components: {
        SpinnerComp
    }
}
</script>

<style  scoped>


</style>