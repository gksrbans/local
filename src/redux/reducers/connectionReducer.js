import { CONNECTION_FAILURE, CONNECTION_REQUEST, CONNECTION_SUCCESS } from '../types'

const initialState = {
    isAuthenticated: null,
    isLoading: false,
    connectionFlag: false,
    user: "",
    userId: "",
    userName: "",
    userRole: "",
    errorMsg: "",
    successMsg: "",
    previousMatchMsg: "",
}

const conncetionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONNECTION_REQUEST:
            console.log('REQUEST')
            return {
                ...state,
                isLoading: true,
                errorMsg:"",
            }
        
        case CONNECTION_SUCCESS:
            console.log('SUCCESS', action)
            return {
                ...state,
                ...action.conn,
                isLoading: false,
                errorMsg:"",
                connectionFlag: true,
            }

        case CONNECTION_FAILURE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default conncetionReducer