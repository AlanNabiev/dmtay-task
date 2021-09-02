import { getQuestions } from '@/api/getQuestions.api'
import { questionsApi } from '@/types'


export interface questionsState {
    questions: Array<questionsApi>
}

const state: questionsState = {
    questions: []
}
const mutations = {
  setQuestions(state: questionsState, questions: Array<questionsApi>) {
    state.questions = questions
  }
}
const actions = {
  async fetchQuestions({ commit }) {
    const questions = await getQuestions()
    commit('setQuestions', questions.data.results)
  }
}
const getters = {
  questions: (s: questionsState) => s.questions
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}