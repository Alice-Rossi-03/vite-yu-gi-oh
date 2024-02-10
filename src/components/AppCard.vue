<script>
import { store } from '../store.js';


export default{
    name: 'AppCard',
    // props:{
    //     propsName: String,
    //     propsImg: String,
    //     propsSpecies: String
    // },
    props: [
        'propsProperty'
    ],
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <!-- <div class="card">
        <figure>
            <img :src="propsImg" :alt="propsName">
        </figure>
        <h3>{{propsName}}</h3>
        <div class="species">{{propsSpecies}}</div>
    </div> -->

    <div class="card">
        <figure>
            <img :src="propsProperty.ygoprodeck_url" :alt="propsName">
        </figure>
        <h3>{{propsProperty.name}}</h3>
        <div class="species">{{propsProperty.archetype}}</div>
    </div>

    <!-- <div class="card">
        <figure>
            <img src="" alt="">
        </figure>
        <h3>propsName</h3>
        <div class="species">propsSpecies</div>
    </div> -->

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *; 

.card{
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    width: calc((100% / 5) - 1em);
    text-align: center;
    background-color: $orange;
    padding: 0.5em;

    h3{
        color: $white;
    }
    .species{
        font-size: 0.7em;
    }

}


</style>