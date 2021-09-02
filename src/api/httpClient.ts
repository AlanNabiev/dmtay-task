  
import axios from 'axios'

 const baseURL = 'https://opentdb.com'

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient