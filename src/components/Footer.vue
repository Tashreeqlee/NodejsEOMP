<template>
    <div>
        <div class="container-fluid">
            <p class="lead">
                Matrix Performance &copy; <span>{{ currYear }}</span>
            </p>
        </div>
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

</style>