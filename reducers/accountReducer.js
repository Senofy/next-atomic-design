import { LOAD_USER_LOADING, LOAD_USER_SUCCESS, LOAD_USER_ERROR } from '../constants/accountConstants'

const initialState = {
    id: '',
    loading: false,
    error: ''
}
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_LOADING: 
            return {
                ...state,
                loading: true,
                error: ''
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                loading: false
            }
        case LOAD_USER_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}
  
export default reducer
  