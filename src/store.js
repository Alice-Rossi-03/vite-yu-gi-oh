import { reactive } from 'vue' 

export const store = reactive ({
    saerchText: '',
    loading: true,
    cardList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
})



