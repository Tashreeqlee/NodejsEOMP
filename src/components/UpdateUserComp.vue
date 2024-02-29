<template>
    <!-- Button trigger modal -->
    <button
      type="button"
      class=""
      data-bs-toggle="modal"
      data-bs-target="#editProduct"
    >
      Edit User
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
              Update User
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
              <label>First Name</label>
              <input type="text" v-model="firstName" />
            </div>
  
            <div class="inputs">
              <label>Last Name</label>
              <input type="text" v-model="lastName" />
            </div>
  
            <div class="inputs">
              <label>Email Address</label>
              <input type="text" v-model="emailAdd" />
            </div>
  
            <div class="inputs">
              <label>Gender</label>
              <input type="text" v-model="gender" />
            </div>
  
            <div class="inputs">
              <label>Age</label>
              <input type="number" v-model="userAge" />
            </div>
            
            <div class="inputs">
              <label>Password</label>
              <input type="password" v-model="userPass" />
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" @click="updateUser(userID)" class="">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>