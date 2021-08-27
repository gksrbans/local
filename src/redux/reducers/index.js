import { combineReducers } from "redux";
import {connectRouter} from 'connected-react-router'
import conncetionReducer  from "./connectionReducer";
import coinReducer from "./coinReducer";

const createRootReducer = (history) => 
    combineReducers({
        router: connectRouter(history),
        connect: conncetionReducer,
        coin: coinReducer,
    })

export default createRootReducer;