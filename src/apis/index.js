import axios from 'axios'
import { API_BASE } from '../constants'

export function loadMoviesData (search) {
    return axios.get(`${API_BASE}search?keyword=${search}`)

}
