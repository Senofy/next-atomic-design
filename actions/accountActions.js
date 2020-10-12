import { LOAD_USER_LOADING, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from '../constants/accountConstants'
import { fetchMe } from '../api/accountAPI'

export const loadMe = () => async dispatch => {
    dispatch({ type: LOAD_USER_LOADING })

    try {
        const data = await fetchMe()
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({ type: LOAD_USER_ERROR, error: error.message || 'Unexpected Error' })
    }
}