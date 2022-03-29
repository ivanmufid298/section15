<template>
  <div class="news">
    <h1>{{berita.title}}</h1>
    <img :src="berita.urlToImage" :alt="berita.title" />
    <p>{{berita.description}}</p>
    <p>{{ berita.content }}</p>
    <span>Read More... </span><a :href="berita.url" target="_blank">Disini</a>
    <hr/>
    <router-link to="/"><button>Back</button></router-link>
  </div>
</template>
<script>
export default {
  computed: {
    berita () {
      return this.$store.state.berita
    }
  }
}
</script>
