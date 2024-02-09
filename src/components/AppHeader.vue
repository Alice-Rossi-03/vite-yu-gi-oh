<script>
    export default {
        name: 'AppHeader'
    }
</script>

<template>
    <header>
        <figure>
            <img src="../assets/img/logo.png" alt="">
        </figure>
        <h1>
            Yu-Gi-Oh App 
        </h1>
    </header>
</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables' as *; 

    header{
        display: flex;
        padding-block: 0.5em;
        background-color: $white;

        figure{
            width: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 60%;

            }
        }
    }
</style>
