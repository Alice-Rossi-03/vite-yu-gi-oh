<script>
import { store } from '../store.js';

export default{
    name: 'AppCard',
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

    <div class="card">
        <figure>
            <img :src="propsProperty.card_images[0].image_url" :alt="propsName">
        </figure>
        <div>
            <h3>{{propsProperty.name}}</h3>
            <div class="species">{{propsProperty.archetype}}</div>
        </div>
    </div>

</template>

<style scoped lang="scss">

@use '../styles/partials/variables' as *; 

.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7em;
    max-width: calc((100% / 5) - 1em);
    height: 22em;
    text-align: center;
    background-color: $orange;
    padding: 0.8em;
    border-radius: 0.8em;

    figure{
        width: 80%;

        img{
            width: 100%;
            height: 100%;
        }
    }

    h3{
        color: $white;
        margin-bottom: 0.3em;

    }
    .species{
        font-size: 0.7em;
    }

}
</style>