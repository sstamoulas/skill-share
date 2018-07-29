import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://shared-skills.herokuapp.com/api', //base URL goes here
})