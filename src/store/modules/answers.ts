import {answersInfo} from '@/types/index'

export interface answersState {
    answers: Array<answersInfo>
}

const state: answersState = {
    answers: []
}
const mutations = {
  setAnswers(state: answersState, answers: Array<answersInfo>) {
    state.answers = answers
  }
}
const getters = {
    answers: (s: answersState) => s.answers
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}