<script>
import AppCard from './AppCard.vue';
import AppFoundCards from './AppFoundCards.vue';
import { store } from '../store.js';

export default{
    name: 'AppCardsList',
    components:{
        AppFoundCards,
        AppCard,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>


    <div class="container">

        <AppFoundCards/>

        <div class="container-flex">

            <AppCard v-for="(element, index) in store.cardList" :key="index" :propsProperty="element"/>

        </div>

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

        // .found-cards{
        //     background-color: $black;
        //     color: $white;
        //     width: 10em;
        //     text-align: center;
        //     padding: 0.5em;
        //     border-radius: 0.5em;
        //     margin-bottom: 1em; 

        // }
    }

</style>