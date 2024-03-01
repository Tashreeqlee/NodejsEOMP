<template>
    <div>
        <button class="btn" type="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 class="modal-title" id="exampleModalLabel">Add Product</h2>
                        <button class="btn-close" type="button" aria-label="close"></button>
                    </div>
                    <div class="modal-body">
                        <input class="input m-2" type="text" placeholder="Product Name" v-model="model.product.prodName">
                        <input class="input m-2" type="text" placeholder="Quantity" v-model="model.product.quantity">
                        <input class="input m-2" type="text" placeholder="Price" v-model="model.product.amount">
                        <input class="input m-2" type="text" placeholder="Category" v-model="model.product.category">
                        <input class="input m-2" type="text" placeholder="Url" v-model="model.product.prodUrl">
                    </div>
                    <div class="modal-footer">
                        <button class="btn" type="button" data-bs-dismiss="modal">Close</button>
                        <button class="btn" type="button" data-bs-dismiss="modal" @click="addProduct">Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
        data() {
            return {
                model: {
                    product: {
                        prodName: "",
                        quantity: "",
                        amount: "",
                        category: "",
                        prodUrl: "",
                    }
                }
            };
        },
        methods: {
            addProduct() {
                this.$store.dispatch("addProduct", this.model.product);
                setTimeout(() => {
                    location.reload();
                }, 500);
            },
        },
    };
</script>


<style scoped>
.btn {
        background-color: #EF370E;
        color: white;
        border-radius:0%;
        width: 60px;
        margin-top: 7px;
        margin-bottom: 7px;
    }

    .btn:hover {
        background-color: white;
        color: #EF370E;
    }

</style>