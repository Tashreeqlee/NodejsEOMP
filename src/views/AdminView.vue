<template>
    <h1 class="text-center animate__animated animate__fadeInUp">Admin</h1>
  <div class="userSection">
    <div class="titles">
      <h3>Users</h3>
      <div>
        <AddUserComp />
      </div>
    </div>
    <div class="userTable">
      <table>
        <tr>
          <th>userID</th>
          <th>First Name</th>
          <th class="remove">Last Name</th>
          <th class="emailHead">Email Address</th>
          <th class="remove">Gender</th>
          <th class="remove">Age</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
        <tbody v-for="user of users" :key="user.userID" :user="user">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td class="remove">{{ user.lastName }}</td>
            <td class="emailHead">{{ user.emailAdd }}</td>
            <td class="remove">{{ user.gender }}</td>
            <td class="remove">{{ user.userAge }}</td>
            <td><button @click="delUser(user.userID)" class="delButton">Delete</button></td>
            <td>
              <UpdateUserComp/>
            </td>
          </tr>
          <tr v-else>
            no
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="productSection">
    <div class="titles">
      <h3>Products</h3>
      <div>
        <AddProdComp />
      </div>
    </div>
    <div class="productsTable">
      <table>
        <thead>
          <tr>
            <th class="remove">Product ID</th>
            <th>Product Name</th>
            <th class="remove">Quantity</th>
            <th class="remove">Price</th>
            <th class="imgHead">Category</th>
            <th class="imgHead">Image</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody
          v-for="product of products"
          :key="product.prodID"
          :product="product"
        >
          <tr v-if="products">
            <td class="remove">{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td class="remove">{{ product.quantity }}</td>
            <td class="remove">{{ product.amount }}</td>
            <td class="imgHead">{{ product.category }}</td>
            <td class="imgHead"><img :src="product.prodUrl" :alt="product.prodName" /></td>
            <td>
              <button @click="delProduct(product.prodID)" class="delButton">Delete</button>
            </td>
            <td>
                <UpdateProdComp/>
            </td>
          </tr>
          <tr v-else>
            no
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AddProdComp from '@/components/AddProdComp.vue';
import AddUserComp from '@/components/AddUserComp.vue';
import UpdateProdComp from '@/components/UpdateProdComp.vue';
import UpdateUserComp from '@/components/UpdateUserComp.vue';
import axios from 'axios';


export default {
  created() {
    this.$store.dispatch("fetchProducts"), this.$store.dispatch("fetchUsers");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    async delProduct(id) {
      try {
        await axios.delete(
          `https://nodejseomp-fpm6.onrender.com/delete/${id}`
        );
        this.$store.dispatch("fetchProducts");
        alert("Product Removed");
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    },
    async delUser(id) {
      try {
        await axios.delete(`https://nodejseomp-fpm6.onrender.com/users/${id}`);
        this.$store.dispatch("fetchUsers");
        alert("This user has been removed");
        window.location.reload();
      } catch (error) {
        alert(error);
      }
    },
  },
  components: {
    AddUserComp,
    AddProdComp,
    UpdateProdComp,
    UpdateUserComp
  },
};
</script>

<style lang="scss" scoped>

</style>