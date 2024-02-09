<script>

export default{
    name: 'AppSelect'
}
</script>

<template>
    <div class="container">
            <div class="select">
                <select name="species" id="species-select">
                    <option value="">-- Choose An Option --</option>
                    <option value="dog">Alien</option>
                    <option value="cat">Human</option>
                    <option value="hamster">Dragon</option>
                    <option value="parrot">Coder</option>
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
            margin-bottom: 3em;
            
            select{
                min-height: 2.5em;
                min-width: 15em;
                border: 0;
                border-radius: 0.5em;
            }
        }
    }
</style>