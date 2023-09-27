import { reactive } from 'vue';
import axios from 'axios';
export const state = reactive({
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: [],
    name: null,
    archetype: null,


    fetchData(url, arc) {
        if (arc == undefined) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.cards = response.data.data
                })
        }
        else {
            axios
                .get(url + '&archetype=' + arc)
                .then(response => {
                    console.log(response);
                    this.cards = response.data.data
                })
        }

    },
    getArchetypes() {
        axios
            .get('https://db.ygoprodeck.com/api/v7/archetypes.php')
            .then(response => {
                console.log(response);
                this.archetype = response.data
            })
    }
})