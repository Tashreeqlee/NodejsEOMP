<template>
    <button
    type="button"
    class=""
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Add a Product
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            X
          </button>
        </div>
        <div class="modal-body">
          <div class="inputs">
            <label>Product Name</label>
            <input
              type="text"
              v-model="prodName"
              placeholder="..."
            /><br />
          </div>

          <div class="inputs">
            <label>Quantity</label>
            <input type="number" v-model="quantity" placeholder="..." /><br />
          </div>

          <div class="inputs">
            <label>Price</label>
            <input type="number" v-model="amount" placeholder="..." /><br />
          </div>

          <div class="inputs">
            <label>Category</label>
            <input type="text" v-model="category" placeholder="..." /><br />
          </div>

          <div class="inputs">
            <label>Image URL</label>
            <input type="url" v-model="prodUrl" /><br />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" @click="addNewProduct()">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

    export default {
  data() {
    return {
      prodName: "",
      quantity: "",
      amount: "",
      category: "",
      prodUrl: "",
    };
  },
  methods: {
    async addNewProduct() {
      try {
        await axios.post("https://nodejseomp-fpm6.onrender.com/product", {
          prodName: this.prodName,
          quantity: this.quantity,
          amount: this.amount,
          category: this.category,
          prodUrl: this.prodUrl,
        });
        this.prodName = "";
        this.quantity = "";
        this.amount = "";
        this.category = "";
        this.prodUrl = "";
        alert("Product was successfully added");
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>


<style lang="scss" scoped>

</style>