<template>
    <h1 class="text-center">
      Products
    </h1>
    <div class="buttons">
      <div class="search">
        <input type="text" v-model="search" placeholder="search" />
      </div>
      <div>
        <button @click="sortByPrice" class="sort">Sort by Price</button>
        <button @click="sortByName" class="sort">Sort by Name</button>
      </div>
    </div>
  
    <div v-if="Products" class="display container-fluid">
      <CardComp
        v-for="product of Products"
        :key="product.prodID"
        :product="product"
      />
    </div>
    <div v-else class="d-flex justify-content-center">
      <SpinnerComp/>
    </div>
  </template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  data() {
    return {
      search: "",
      Categories: "All",
    };
  },
  methods: {
    sortByPrice() {
      this.$store.commit("sortProducts");
    },
    sortByName() {
      this.$store.commit("sortByName");
    },
  },
  computed: {
    Products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.prodName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (
          this.Categories !== "All" &&
          this.Categories !== product.Categories
        ) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  components: {
    CardComp,
    SpinnerComp,
  },
};
</script>

<style>


.buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search {
  flex: 10;
}

.sort {
  background-color: #EF370E;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}



</style>