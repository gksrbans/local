import {all, fork} from 'redux-saga/effects'

import connectionSaga from './connectionSaga';
import coinSaga
 from './coinSaga';
 
export default function* rootSaga() {
    yield all([
        fork(connectionSaga),
        fork(coinSaga),
    ]);
}