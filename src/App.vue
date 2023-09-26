<script>
import logo from './assets/img/logo.png'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      logo
    }

  }


}
</script>

<template>
  <AppHeader :title="'Yu-Gi-Oh Api'" :image="logo"></AppHeader>
  <AppMain></AppMain>
</template>


<style lang="scss" scoped></style>