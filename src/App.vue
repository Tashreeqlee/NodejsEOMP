<template>
  <NavbarComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import NavbarComp from './components/Navbar.vue';
import FooterComp from './components/Footer.vue';

export default {
  components: {
    NavbarComp,
    FooterComp,
  }
}

</script>




<style>
@import url("https://fonts.googleapis.com/css2?family=Nova+Square&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&display=swap'); */


#app {
  /* font-family: "Anta", sans-serif; */
  font-family: "Nova Square", sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
