<template>
  <div class="bgcolor">
    <h2 class="text-center display-2 text-animation">
      Products
    </h2>
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
  </div>
  </template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp';

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

<style scoped>

.bgcolor{
  background-color: #C8C8C8;
}
.text-animation {
  overflow: hidden;
  animation: typing 3s backwards;
  white-space: nowrap;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.buttons {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px;
}

.search {
  flex: 10;
}

.sort {
  background-color: #EF370E;
  color: white;
  padding: 10px 20px;
  margin-right: 10px;
}
.sort:hover{
  transform: scale(1.1);
}

input {
  color: #eeebdd !important;
  border: 2px solid #EF370E;
  background: #EF370E !important;
  border-radius: 20px;
}

::placeholder {
  color: #eeebdd;
}

.display {
  display: grid;
  grid-template-columns: auto auto auto auto;
}

@media only screen and (max-width: 705px) {
    .display {
        display: grid;
        grid-template-columns: auto auto;
    }
}
@media only screen and (max-width: 305px) {
    .display {
        display: grid;
        grid-template-columns: auto;
    }
    .buttons {
        display: flex;
        flex-direction: column;
        
    }
    input, .sort {
        width: 90%;
        margin: 10px;
    }
}




</style>