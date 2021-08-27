import {COIN_DATA, COIN_DATA_FAILURE, COIN_DATA_SAVE} from '../types'

const initialState = {
    // 빈 object에 차곡 차곡 아직 할게없눈
}

const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case COIN_DATA:
            // console.log('COIN REQUEST')
            // console.log(action, 'action임')
            // console.log(action.result, 'action임2')
            return {
                ...state,
            }
        
        case COIN_DATA_SAVE:
            // console.log(state,'COIN SUCCESS', action)
            return {
                ...state,
                ...action.payload
            }

        case COIN_DATA_FAILURE:
            return {
                ...state,
                ...action,
            }    
        default:
            return state
    }
}

export default coinReducer