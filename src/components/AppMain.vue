<script>
import Card from './Card.vue'
import { state } from '../state.js'

export default {
    name: 'AppMain',
    components: {
        Card,

    },
    data() {
        return {
            state,
            arc: ''
        }
    },

    mounted() {
        state.fetchData(state.base_url);
        state.getArchetypes()
        /* Axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then(response => {
            this.cards = response.data.data
        }); */
        /* this.cards = this.getC() */
    }
}
</script>
        
<template>
    <main class="p-4">
        <div class="container">
            <select v-model="arc" @change="state.fetchData(state.base_url, arc)" name="Archetype" id="">
                <option v-for="archetype in state.archetype" :value="archetype.archetype_name">{{ archetype.archetype_name
                }}</option>
            </select>
            <div class="row">
                <Card v-for="card in state.cards" :image="card.card_images[0].image_url" :cName="card.name"
                    :archetype="card.archetype">
                </Card>
            </div>

        </div>
    </main>
</template>


<style lang="scss" scoped>
select {
    border-radius: 8px;
    padding: 0.1rem 0.5rem;
    margin-bottom: 1rem;
}

main {
    background-color: orange;

    & .container {
        padding: 1rem;
    }

    & .row {
        background-color: white;
        justify-content: space-around;
    }
}
</style>