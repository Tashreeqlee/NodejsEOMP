<template>
    <div>
        <button class="btn" type="button" @click="editModal(product.prodID)" data-bs-toggle="modal" :data-bs-target="'#updateProductModal' + product.prodID">Edit</button>
        <div class="modal fade" :id="'updateProductModal' + product.prodID" tabindex="-1" :aria-labelledBy="'exampleModalLabel' + product.prodID" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Edit</h2>
                        <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input" type="text" name="name" placeholder="Product Name" v-model="payload.prodName">
                        <input class="input" type="text" name="name" placeholder="Quantity" v-model="payload.quantity">
                        <input class="input" type="text" name="name" placeholder="Price" v-model="payload.amount">
                        <input class="input" type="text" name="name" placeholder="Category" v-model="payload.category" >
                        <input class="input" type="text" name="name" placeholder="Url" v-model="payload.prodUrl">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" data-bs-dismiss="modal" @click.prevent="updateProd">SAVE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
        props: ["product"],
        data() {
            return {
                editProduct: {
                    ...this.product,
                },
                payload: {
                    prodID: this.product.prodID,
                    prodName: this.product.prodName,
                    quantity: this.product.quantity,
                    amount: this.product.amount,
                    category: this.product.category,
                    prodUrl: this.product.prodUrl,
                },
                editProductID: null,
            };
        },
        computed: {
            currentProd() {
                return this.$store.state.product;
            },
        },
        methods: {
            editModal(prodID) {
                this.editProductID = prodID;
                this.editProduct = {
                    ...this.$store.state.products.find(
                        (product) => product.prodID === prodID
                    ),
                };
            },
            updateProd() {
        
                this.$store.dispatch("updateProduct", this.payload);
            },
        },
    };
</script>

<style scoped>
.btn {
        background-color: #EF370E;
        color: white;
        margin-bottom: 5px;
    }

    .btn:hover {
        background-color: white;
        color: black;
    }

    .modal-content {
        background-color: #EF370E;
        color: white;
    }

    .modal-body {
        background-color: #EF370E;
    }

</style>