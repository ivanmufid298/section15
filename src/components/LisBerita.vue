<template>
  <div>
    <div class="berita">
      <div class="image" @click="redirect">
        <img :src="berita.urlToImage" :alt="berita.title"/>
      </div>
      <div class="content">
        <h4>{{ berita.author }}</h4>
        <a @click="redirect">
          <h2>{{ berita.title }}</h2>
        </a>
        <p>{{ berita.description }}</p>
        <span>{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBerita',
  props: ['berita'],
  data () {
    return {
      url: '',
      time: ''
    }
  },
  methods: {
    redirect () {
      this.$store.dispatch('fetchDetailBerita', this.berita)
      this.$router.push({ name: 'berita', params: { id: this.url } })
    },
    process (value) {
      return value === undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
    },
    publishTime (value) {
      const date = new Date(value)
      var hari = date.getDay()
      let bulan = date.getMonth()
      const day = date.getDate()
      const year = date.getFullYear()
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()
      switch (hari) {
        case 0:
          hari = 'Minggu'
          break
        case 1:
          hari = 'Senin'
          break
        case 2:
          hari = 'Selasa'
          break
        case 3:
          hari = 'Rabu'
          break
        case 4:
          hari = 'Kamis'
          break
        case 5:
          hari = "Jum'at"
          break
        case 6:
          hari = 'Sabtu'
          break
      }
      switch (bulan) {
        case 0:
          bulan = 'Januari'
          break
        case 1:
          bulan = 'Februari'
          break
        case 2:
          bulan = 'Maret'
          break
        case 3:
          bulan = 'April'
          break
        case 4:
          bulan = 'Mei'
          break
        case 5:
          bulan = 'Juni'
          break
        case 6:
          bulan = 'Juli'
          break
        case 7:
          bulan = 'Agustus'
          break
        case 8:
          bulan = 'September'
          break
        case 9:
          bulan = 'Oktober'
          break
        case 10:
          bulan = 'November'
          break
        case 11:
          bulan = 'Desember'
          break
      }
      return `${hari} ${day} ${bulan} ${year} ${hour}:${minute}:${second}`
    }
  },
  computed: {
    detailBerita () {
      return this.$route.params.berita
    }
  },
  mounted () {
    this.url = this.process(this.berita.title)
    this.time = this.publishTime(this.berita.publishedAt)
  }
}
</script>
<style scoped>
.berita {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  text-align: left;
}
.berita .image {
  width: 300px;
  height: 200px;
  background-color: #eee;
  margin-right: 20px;
}
.berita .image img {
  width: 300px;
  height: 200px;
}
.berita h4 {
  font-size: 14px;
  margin-block: 0;
}
.berita h2 {
  font-size: 18px;
}
</style>
