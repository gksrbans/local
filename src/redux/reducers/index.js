import { combineReducers } from "redux";
import {connectRouter} from 'connected-react-router'
import conncetionReducer  from "./connectionReducer";

const createRootReducer = (history) => 
    combineReducers({
        router: connectRouter(history),
        connect: conncetionReducer,
    })

export default createRootReducer;