<script>
import Card from './Card.vue'
import Axios from 'axios';

export default {
    name: 'AppMain',
    components: {
        Card
    },
    data() {
        return {
            cards: []
        }
    },

    mounted() {
        Axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then(response => {
            this.cards = response.data.data
        });
        /* this.cards = this.getC() */
    }
}
</script>
        
<template>
    <main class="p-4">
        <div class="container">
            <select name="Archetype" id="">
                <option value="Alien">Alien</option>
            </select>
            <div class="row">
                <Card v-for="card in cards" :image="card.card_images[0].image_url" :cName="card.name"
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
}

main {
    background-color: orange;

    & .container {
        background-color: white;
        padding: 1rem;

        & .row {
            justify-content: space-around;
        }
    }
}
</style>