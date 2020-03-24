const state = {
  status: ''
}

const mutations = {
  SET_STATUS: (state, status) => {
    state.status = status
  }
}

const actions = {
  setStatus({ commit }, status) {
    commit('SET_STATUS', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
