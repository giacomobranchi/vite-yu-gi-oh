<script>
export default {
  name: 'AppHeader',
  props: {
    image: String,
    title: String
  },
  mounted() {
    console.log(this.img);
  },
  methods: {
    getImageUrl(name) {
      return new URL(`${name}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <img :src="getImageUrl(image)" alt="">
      <h2 class="d-inline">{{ title }}</h2>
    </div>
  </header>
</template>


<style lang="scss" scoped>
img {
  width: 100px;
}
</style>