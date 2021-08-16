import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { CONNECTION_FAILURE, CONNECTION_REQUEST, CONNECTION_SUCCESS } from '../types'

// Connection

const connectAPI = (connectData) => {
    console.log(connectData,'connectData')
    return connectData
}

function* connectCoin(action) {
    console.log(action, 'connectCoin 들어옴')
    try {
      const result = yield call(connectAPI, action)
      console.log(result,'result')
      yield put({
          type: CONNECTION_SUCCESS,
          conn: result
      })
    } catch(e) {
        yield put({
            type: CONNECTION_FAILURE,
            payload: e.response
        })
    }
}

function* watchConnect() {
    yield takeEvery(CONNECTION_REQUEST, connectCoin)
}

export default function* connectionSaga() {
    yield all([
        fork(watchConnect),
    ])
}