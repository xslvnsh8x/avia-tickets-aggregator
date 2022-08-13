import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { CompanyDto, TicketDto } from '~/core/entities/consts'

export const state = () => ({
  counter: 0 as number,
  tickets: [] as TicketDto[],
  companies: [] as CompanyDto[],
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  myGetter(state){ return state.counter + 1000},
}

export const mutations: MutationTree<RootState> = {
  setTickets(state, payload: TicketDto[]) {
    state.tickets = payload
  },

  setCompanies(state, payload: CompanyDto[]) {
    state.companies = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  async getTickets({ commit }) {
    const data = await this.$axios.$get('https://api.npoint.io/163b5e66df9f2741243e')
    commit('setTickets', data)
  },

  async getCompanies({ commit }) {
    const data = await this.$axios.$get('https://api.npoint.io/a1b1c28b32d9785bb26c')
    commit('setCompanies', data)
  },
}
