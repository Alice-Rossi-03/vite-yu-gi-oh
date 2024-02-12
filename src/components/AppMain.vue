<script>
import AppSelect from '../components/AppSelect.vue'
import AppCardsList from '../components/AppCardsList.vue'
import { store } from '../store.js';
import axios from 'axios';


export default {
    name: 'AppMain',
    components:{
        AppSelect,
        AppCardsList
    },
    data(){
        return{
            store
        }
    },
    methods: {
        getCardList(){

            store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0'

            if(store.archetypeValue != ''){
                store.apiUrl += '?archetype=${store.archetypeValue}'
            }

            axios
              .get(store.apiUrl)
              .then( result => {
                  console.log(result.data)
                  store.cardList = result.data.data
              }
            )
        }
    },
    mounted(){
        this.getCardList()
    }
}
</script>

<template>
    <main>
        <AppSelect @filterArchetype="getCardList"/>

        
        <AppCardsList/>
        
    </main>
</template>

<style scoped lang="scss">
    @use '../styles/partials/variables' as *; 
    
    main{
        background-color: $orange;
    }

</style>