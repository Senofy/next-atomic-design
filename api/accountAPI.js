import axios from 'axios'
import { getToken } from '../utils/AccountAccess'

export const fetchMe = () => {
    if (!getToken()) {
        throw 'No Authentication'
    }

    return axios.get(`${process.env.API_URL || 'http://localhost:5000'}/v1/users/me`, {
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
}