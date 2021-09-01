  
import axios from 'axios'

// const baseURL = ''

const httpClient = axios.create({
  // baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient