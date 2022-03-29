import axios from 'axios'

const state = () => ({
  list_berita: []

})

const mutations = {
  setBerita (state, payload) {
    state.list_berita = payload
  }
}

const actions = {
  fetchBerita (store) {
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=99da639dc1ce4117912c24440c9ecf6d').then(response => {
      store.commit('setBerita', response.data.articles)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
