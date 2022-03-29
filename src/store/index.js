import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const persistedstate = createPersistedState({
  key: 'vuex',
  storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    listBerita: [],
    berita: []
  },
  mutations: {
    setListBerita (state, payload) {
      state.listBerita = payload
    },
    setBerita (state, payload) {
      state.berita = payload
    }
  },
  actions: {
    fetchBerita (store) {
      axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=cde232c8f71b47a1b7b281be2c0eefc2').then(response => {
        store.commit('setListBerita', response.data.articles)
      })
    },
    fetchDetailBerita (store, payload) {
      console.log(payload)
      store.commit('setBerita', payload)
    }
  },

  modules: {}
})
