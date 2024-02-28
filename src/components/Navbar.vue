<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img
            src="https://i.postimg.cc/9fKpzgtd/fe6f6a97-75c5-46dd-834e-cd8c93c605b9.jpg"
            alt="Logo"
            class="navImage"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
              <router-link to="/" class="navButtons">Home</router-link>
              <router-link to="/about" class="navButtons"
                >About</router-link
              >
            <router-link to="/products" class="navButtons"
              >Products</router-link
            >
            <router-link to="/admin" class="navButtons"
              >Admin</router-link
            >
            <router-link to="/contact" class="navButtons"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </template>

<script>
    export default {
        name: 'NavbarComp'
        
    }
</script>

<style scoped>
  nav {
    background-color: #EF370E !important;
    
    
  }
  .navImage {
    height: 90px;
    width: 90px;
    
  }
  .navbar-nav {
    margin: auto;
  }
  .navButtons {
    margin-right: 20px;
    color: #EEEBDD;
    font-size: x-large; 
  }

  
  a {
    text-decoration: none;
  }
  nav a.router-link-exact-active {
  border-bottom: 2px solid ;
}

</style>