import { authType } from '../actions/auth/types'

const initial = {
    loading: false
}

export default (state = initial, action) => {
    console.log(action)
    
    switch (action.type) {
        case authType.LOGIN_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break
    }
    return state
}
 

