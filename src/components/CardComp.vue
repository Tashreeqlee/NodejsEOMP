<template>
    <router-link :to="{ name: 'product', params: { id: product.prodID } }">
      <div class="card">
        <img
          :src="product.prodUrl"
          class="card-img-top"
          :alt="product.prodName"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.prodName }}</h5>
          <p class="card-text">Price: R {{ product.amount }}</p>
        </div>
      </div>
    </router-link>
  </template>



<script>
    export default {
  props: ["product"],
};
</script>

<style lang="scss" scoped>

</style>