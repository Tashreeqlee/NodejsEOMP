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

<style scoped>
.card {
  width: 20rem;
  margin: 20px;
  background-color: #1b1717;
  color: #eeebdd;
  border: 2px solid #EF370E;
  border-radius: 30px;
  padding: 5px;
}
.card:hover {
  box-shadow: 0 0 30px 5px #EF370E
}
.card-img-top {
  height: 40vh;
  width: 18rem;
  border-radius: 30px;
  margin: auto;
  padding: 15px;
}

a {
    text-decoration: none;
}

@media only screen and (max-width: 700px) {
    .card {
        width: 18rem;
    }
    .card-img-top {
        width: 16rem;
        height: 14rem;
    }
}

@media only screen and (max-width: 450px) {
    .card {
        width: 16rem;
    }
    .card-img-top {
        width: 14rem;
        height: 16rem;
    }
  }

</style>