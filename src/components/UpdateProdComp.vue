<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      data-bs-target="#editProduct"
    >
      Edit Product
    </button>
  
    <!-- Modal -->
    <div
      class="modal fade"
      id="editProduct"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Update Product
            </h1>
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
              <input type="text" v-model="prodName" />
            </div>
  
            <div class="inputs">
              <label>Quantity</label>
              <input type="number" v-model="quantity" />
            </div>
  
            <div class="inputs">
              <label>Price</label>
              <input type="number" v-model="amount" />
            </div>
  
            <div class="inputs">
              <label>Category</label>
              <input type="text" v-model="category" />
            </div>
  
            <div class="inputs">
              <label>Image URL</label>
              <input type="url" v-model="prodUrl" />
            </div>
  
          </div>
          <div class="modal-footer">
            <button type="button" @click="updateProduct(productID)" class="">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
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
      async updateProduct(id) {
          try {
              await axios.patch(`https://nodejseomp-fpm6.onrender.com/Products/${id}`, {
                  prodName: this.prodName,
                  quantity: this.quantity,
                  amount: this.amount,
                  category: this.category,
                  prodUrl: this.prodUrl,
              });
              this.prodName= "";
              this.quantity = "";
              this.amount= ""; 
              this.category= "";
              this.prodUrl= "";
              alert("Product Has Been Updated");
              window.location.reload();
          } catch (error) {
              alert (error);
          }
      },
    },
  };
</script>

<style lang="scss" scoped>

</style>