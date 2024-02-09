<script>
  import AppHeader from './components/AppHeader.vue'
  import AppMain from './components/AppMain.vue'
  import axios from 'axios';
  import { store } from './store.js';

  export default{
    components:{
      AppHeader,
      AppMain
    },
    data(){
      return{
        store
      }
    },
    methods(){
        getCardList();{
            axios
              .get(store.apiUrl)
              .then( result => {
                  console.log(result.data)
                  store.cardList = result.data.response
              })
        }
    },
    mounted(){
        this.cardList 
    }
  }
</script>

<template>
  
    <AppHeader/>
  
  
    <AppMain/>
  
</template>

<style lang="scss">
  @use './styles/general.scss'; 


</style> 