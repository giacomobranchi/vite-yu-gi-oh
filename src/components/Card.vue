<script>
export default {
    name: 'Card',
    props: {
        image: String,
        cName: String,
        archetype: String
    }

}
</script>

<template>
    <div class="card my-4" style="width:18rem;">
        <img :src="image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ cName }}</h5>
            <h6 class="card-subtitle mb-2 text-muted ">{{ archetype }}</h6>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {
    background-color: orange;
    padding-top: 1rem;
}
</style>