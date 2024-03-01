<template>
    <div class="overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5">Products</h1>
        </div>
    </div>
    <div class="bgcolor">
        <AddProdComp/>
        <table class="table-responsive-md table table-bordered">
        <thead>
            <tr>
                <th scope="col">Product Id</th>
                <th scope="col">Product Name</th>
                <th class="no2" scope="col">Quantity</th>
                <th class="no1" scope="col">Price</th>
                <th class="no1" scope="col">Category</th>
                <th class="no" scope="col">ProductUrl</th>
                <th scope="col">Edit/Delete Product</th>
            </tr>
        </thead>
        <tbody class="prod-display" v-for="product in products" :key="product.prodID" :product="product">
            <tr v-if="products">
                <td>{{ product.prodID }}</td>
                <td>{{ product.prodName }}</td>
                <td class="no2">{{ product.quantity }}</td>
                <td class="no1">{{ product.amount }}</td>
                <td class="no1">{{ product.category }}</td>
                <td class="no"><img class="admin-img" :src=product.prodUrl></td>
                <td><UpdateProdComp :product="product"/>
                    <button class="btn" @click="deleteProduct(product.prodID)">Delete</button>
                </td>
            </tr>
            <div class="m-5" v-else>
                <SpinnerComp/>
            </div>
        </tbody>
        </table>
        <div class="overflow-hidden text-center" id="hero">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
            <h1 class="display-5">Users</h1>
        </div>
    </div>
        <AddUserComp/>
        <table class="table-responsive-md table table-bordered">
        <thead>
            <tr>
                <th scope="col">User Id</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th class="no2" scope="col">Age</th>
                <th class="no2" scope="col">Gender</th>
                <th class="no" scope="col">User Role</th>
                <th class="no1" scope="col">Email Address</th>
                <th class="no" scope="col">Password</th>
                <th class="no" scope="col">User Profile</th>
                <th scope="col">Edit/Delete User</th>
            </tr>
        </thead>
        <tbody class="user-display" v-for="user in users" :key="user.userID" :user="user">
            <tr v-if="users">
                <td>{{ user.userID }}</td>
                <td>{{ user.firstName }}</td>
                <td>{{ user.lastName }}</td>
                <td class="no2">{{ user.userAge }}</td>
                <td class="no2">{{ user.gender }}</td>
                <td class="no">{{ user.userRole }}</td>
                <td class="no1">{{ user.emailAdd }}</td>
                <td class="no">{{ user.userPass }}</td>
                <td class="no"><img class="admin-img" :src=user.userProfile></td>
                <td><UpdateUserComp :user="user"/>
                    <button class="btn" @click.prevent="deletingUser(user)">Delete</button>
                </td>
            </tr>
            <div class="m-5" v-else>
                <SpinnerComp/>
            </div>
        </tbody>
        </table>
    </div>
</template>
<script>
import AddProdComp from '@/components/AddProdComp.vue';
import AddUserComp from '@/components/AddUserComp.vue';
import UpdateProdComp from '@/components/UpdateProdComp.vue';
import UpdateUserComp from '@/components/UpdateUserComp.vue';
import SpinnerComp from '@/components/SpinnerComp';
export default {
  computed: {
            products() {
                return this.$store.state.products;
            },
            product() {
                return this.$store.state.product;
            },
            users() {
                return this.$store.state.users;
            },
            user() {
                return this.$store.state.user;
            }
        },
        mounted() {
            this.$store.dispatch("fetchProducts")
            this.$store.dispatch("fetchUsers")
        },
        methods: {
            deleteProduct(prodID) {
                if (confirm("you sure?")) {
                    this.$store.dispatch("deleteProduct", prodID);
                    setTimeout(() => {
                        location.reload()
                    }, 500)
                }
            },
            deletingUser(user) {
                if (confirm("You sure?")) {
                    this.$store.dispatch("deleteUser", user);
                    setTimeout(() => {
                        location.reload();
                    }, 500);
                }
            },
        },
  components: {
    AddUserComp,
    AddProdComp,
    UpdateProdComp,
    UpdateUserComp,
    SpinnerComp
  },
};
</script>
<style scoped>
.bgcolor {
    background-color: #C8C8C8;
}

#hero {
    background-color: black;
    color: white;
    height: 10rem;
  }

  .admin-img {
    width: 100px;
    height: 100px;
  }

  table {
    border-color: black;
  }

  .btn {
    background-color: black;
    color: white;
    margin-top: 5px;
  }
  .btn:hover {
        background-color: white;
        color: black;
    }

     @media screen and (max-width: 1000px) {
        .no {
            display:none;
        }
    }
    @media screen and (max-width: 800px) {
        .no {
            display:none;
        }
    }
    @media screen and (max-width: 500px) {
        .no, .no1, .no2 {
            display:none;
        }
    }
</style>