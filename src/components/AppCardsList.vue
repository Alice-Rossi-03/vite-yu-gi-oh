<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';

export default{
    name: 'AppCardsList',
    components:{
        AppCard
    },
    data(){
        return{
            store
        }
    },
    
}
</script>

<template>


    <div class="container">

        <div class="found-cards">Found 39 Cards</div>

        <AppCard v-for="(element, index) in cardList" :key="index" :propsImg="element.data.ygoprodeck_url" :propsName="element.data.name" :propsSpecies="element.data.archetype"/>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *; 

    .container{
        background-color: $white;
        width: 80%;
        margin: 0 auto;
        display: flex;
        padding: 1em;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1em;

        .found-cards{
            background-color: $black;
            color: $white;
            width: 10em;
            text-align: center;
            padding: 0.5em;
            border-radius: 0.5em;
            margin-bottom: 1em; 

        }
    }

</style>