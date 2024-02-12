import { reactive } from 'vue' 

export const store = reactive ({
    // loading: true,
    cardList: [],
    archetypeList:[],
    apiUrl: '',
    apiArchetypeUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypeValue: ''
})



