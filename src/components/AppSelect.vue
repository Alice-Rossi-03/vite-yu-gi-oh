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
                    <option value="alien">Alien</option>
                    <option value="human">Human</option>
                    <option value="dragon">Dragon</option>
                    <option value="coder">Coder</option>
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
                padding-inline: 0.7em;

                &:hover{
                    opacity: 80%;
                }
            }
        }
    }
</style>