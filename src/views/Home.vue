<template>
  <div class="home">
    <div id="nav">
      <h1>Berita Terkini </h1>
      <div class="news">
        <list-berita v-for="(berita, index) in listBerita" :berita="berita" :key="index"></list-berita>
      </div>
    </div>
  </div>
</template>

<script>

import ListBerita from '@/components/ListBerita.vue'
export default {
  components: { ListBerita },
  name: 'App',
  computed: {
    listBerita () {
      return this.$store.state.listBerita
    }
  },
  mounted () {
    this.$store.dispatch('fetchBerita')
  }
}
</script>
