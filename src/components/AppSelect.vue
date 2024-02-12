<script>
import { store } from '../store.js';
import axios from 'axios';

export default{
    name: 'AppSelect',
    data(){
        return{
            store
        }
    },
    methods: {
        getArchetype(){
            axios
              .get(store.apiArchetypeUrl)
              .then( result => {
                  console.log(result.data)
                  store.archetypeList = result.data
              }
            )
        }
    },
    mounted(){
        this.getArchetype()
    }
    
}
</script>

<template>
    <div class="container">
            <div class="select">
                <select name="species" id="species-select">
                    <option v-for="(element, index) in store.archetypeList" :key="index">{{element.archetype_name}}</option>
                </select>
            </div>
        </div>
</template>

<style scoped lang="scss">

    .container{
        width: 80%;
        margin: 0 auto;

        .select{
            padding-block: 1em;
            margin-bottom: 1em;
            max-height: 10em;
            overflow: hidden;


            select{
                height: 2.5em;
                min-width: 15em;
                border: 0;
                border-radius: 0.5em;
                padding-inline: 0.7em;

                &:hover{
                    opacity: 80%;
                }
            }
        }
    }
</style>