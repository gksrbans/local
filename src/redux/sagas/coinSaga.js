import { call, put, takeEvery, all, fork } from 'redux-saga/effects'
import { COIN_DATA, COIN_DATA_FAILURE, COIN_DATA_SAVE } from '../types'

// Connection

const coinAPI = (coinData) => {
    //console.log(coinData,'coinData')
    // 아직할게 없네
    return coinData
}

function* receiveCoinData(action) {
    //console.log(action, 'receiveCoinData 들어옴')
    try {
      const result = yield call(coinAPI, action)
      //console.log(result,'result')

      yield put({
          type: COIN_DATA_SAVE,
          payload: result
      })
    } catch(e) {
        yield put({
            type: COIN_DATA_FAILURE,
            payload: e.response
        })
    }
}

function* watchCoin() {
    yield takeEvery(COIN_DATA, receiveCoinData)
}

export default function* coinSaga() {
    yield all([
        fork(watchCoin),
    ])
}