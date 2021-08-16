import {all, fork} from 'redux-saga/effects'

import connectionSaga from './connectionSaga';

export default function* rootSaga() {
    yield all([
        fork(connectionSaga),
    ]);
}