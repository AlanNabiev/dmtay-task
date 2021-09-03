import httpClient from './httpClient'
const END_POINT = '/post?answer'

function postAnswer(el) {
  return httpClient.post(END_POINT,el)
}

export { postAnswer }