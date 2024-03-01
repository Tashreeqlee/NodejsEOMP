<template>
    <div class="fixed bottom">
            <p class="lead">
                Matrix Performance &copy; <span>{{ currYear }}</span>
            </p>
        </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
.lead {
    background-color: #EF370E;
    color: #EEEBDD;
    justify-content: center;
  }

</style>