import { Company } from '~/core/entities/consts'

export const state = () => ({
  counter: 0,
  tickets: [],
  companies: [],
})

export const getters = {
  myGetter(state){ return state.counter + 1000},
}

export const mutations = {
  setCounter(state, value){
    state.counter = value
  },

  setTickets(state, payload) {
    state.tickets = payload
  },

  setCompanies(state, payload) {
    state.companies = payload
  }
}

export const actions = {
  counterUp({ state, commit }){
    commit('setCounter', state.counter + 1)
  },

  async getTickets({ commit }) {
    const data = await this.$axios.$get('https://api.npoint.io/163b5e66df9f2741243e')
    commit('setTickets', data)
  },

  async getCompanies({ commit }) {
    const data = await this.$axios.$get('https://api.npoint.io/a1b1c28b32d9785bb26c')
    commit('setCompanies', data)
  },
}
