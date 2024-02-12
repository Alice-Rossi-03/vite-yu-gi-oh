<script>
import { store } from '../store.js';
export default {
    name: 'AppFoundCards',
    data(){
        return{
            store
        }
    },
}
</script>

<template>
    <div>
        <div class="found-cards">Found {{store.cardList.length}} Cards</div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables.scss' as *; 
    .found-cards{
        background-color: $black;
        color: $white;
        width: 10em;
        text-align: center;
        padding: 0.5em;
        border-radius: 0.5em;
        margin-bottom: 1em; 
    }

</style>