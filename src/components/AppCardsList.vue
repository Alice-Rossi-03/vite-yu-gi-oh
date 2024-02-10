<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';
import axios from 'axios';

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
    methods: {
        getCardList(){
            axios
              .get(store.apiUrl)
              .then( result => {
                  console.log(result.data)
                  store.cardList = result.data.response
              }
            )
        }
    },
    mounted(){
        this.getCardList()
        // console.log(result.data)
    }
}
</script>

<template>

    <div class="container">

        <div class="found-cards">Found 20 Cards</div>

        <div class="container-flex">
            <!-- <AppCard/> -->

            <!-- <AppCard v-for="(element, index) in store.cardList" :key="index" :propsImg="element.ygoprodeck_url" :propsName="element.name" :propsSpecies="element.archetype"/> -->

            <AppCard v-for="(element, index) in store.cardList" :key="index" :propsProperty="element"/>

        </div>

        <!-- <AppCard v-for="(element, index) in cardList" :key="index" :propsImg="data.ygoprodeck_url" :propsName="data.name" :propsSpecies="data.archetype"/> -->
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *; 

    .container{
        background-color: $white;
        width: 80%;
        margin: 0 auto;
        padding: 1em;

        .container-flex{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 1em;
            margin-top: 1em;
        }

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