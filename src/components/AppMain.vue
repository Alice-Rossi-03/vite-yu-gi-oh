<script>
import AppSelect from '../components/AppSelect.vue'
import AppCardsList from '../components/AppCardsList.vue'


export default {
    name: 'AppMain',
    components:{
        AppSelect,
        AppCardsList
    }
}
</script>

<template>
    <main>
        <AppSelect/>
        <AppCardsList/>
    </main>
</template>

<style scoped lang="scss">
    @use '../styles/partials/variables' as *; 
    
    main{
        background-color: $orange;
    }

</style>