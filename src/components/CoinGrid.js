import {Table} from 'reactstrap'

const CoinGrid = (props) => {

    console.log(props.props, '프랍')
    console.log(typeof(props.props), '프랍타입')
    console.log(String(props.props))
    const temp = props.props
    console.log(temp.code, '코드나오냐')
    return (
        <>
          <div>hello</div>
          <div>{props.props.code}</div>
          <Table hover>
              <thead>
                  <th>Simbol</th>
                  <th>이름</th>
                  <th>현재가</th>
              </thead>

              <tbody>
                <tr>
                    <th scope="row">😊</th>
                    <th>{props.props.code}</th>
                    <th>{props.props.trade_price}</th>
                </tr>
              </tbody>
          </Table>
          
        </>
    )
}

export default CoinGrid

/* api refer
acc_ask_volume: 7707.49383791
acc_bid_volume: 9374.62748837
acc_trade_price: 64523733635.06135
acc_trade_price_24h: 275818607840.53845
acc_trade_volume: 17082.12132628
acc_trade_volume_24h: 75747.95175461
ask_bid: "ASK"
change: "RISE"
change_price: 44000
change_rate: 0.0117521368
code: "KRW-ETH"
delisting_date: null
high_price: 3801000
highest_52_week_date: "2021-05-12"
highest_52_week_price: 5410000
is_trading_suspended: false
low_price: 3730000
lowest_52_week_date: "2020-09-23"
lowest_52_week_price: 370050
market_state: "ACTIVE"
market_state_for_ios: null
market_warning: "NONE"
opening_price: 3744000
prev_closing_price: 3744000
signed_change_price: 44000
signed_change_rate: 0.0117521368
stream_type: "SNAPSHOT"
timestamp: 1629426629086
trade_date: "20210820"
trade_price: 3788000
trade_status: null
trade_time: "023028"
trade_timestamp: 1629426628000
trade_volume: 0.01965035
type: "ticker"
*/