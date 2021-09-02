import httpClient from './httpClient'
const END_POINT = '/api.php?amount=10&type=multiple'

const getQuestions = () => {
  return httpClient.get(END_POINT)
}

export { getQuestions }