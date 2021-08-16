import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { CONNECTION_REQUEST } from '../redux/types'

import connectWebSocket from '../api/connectSocket'

const CoinTable = () => {  
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch()
    useEffect(() => {

        connectBithumb()

    }, [])
    const connect = useSelector((state) => state.connect)

    console.log(connect, 'temp임', connect.connectionFlag)
    if (connect.connectionFlag) {
        connect.conn.onmessage = ({ data }) => {
            if (data instanceof Blob) {
                let reader = new FileReader();
                reader.onload = () => {
                  let result = JSON.parse(reader.result);
                  console.log(result.trade_price, 'data in')
                  setPrice(result.trade_price)
                };
                reader.readAsText(data);
              }
    
          };
        connect.conn.send('[{"ticket":"test"},{"type":"ticker","codes":["KRW-BTC"]}]')
    }
    
    const connectBithumb = async () => {
        const conn = await connectWebSocket()
        dispatch({
            type:CONNECTION_REQUEST,
            conn: conn,
        })

        // conn.onmessage = ({ data }) => {
        //     let tmp = JSON.parse(data)
        //     console.log(tmp, '123123213')
        //     if (data instanceof Blob) {
        //       console.log('blob 들어옴 ?')
        //       let reader = new FileReader();
        //       reader.onload = () => {
        //         let result = JSON.parse(reader.result);
        //         console.log(result, 'result')
        //       };
        //       reader.readAsText(data);
        //     }
        //   };
        // conn.send('{"type":"ticker", "symbols": ["BTC_KRW", "ETH_KRW"], "tickTypes": ["30M", "1H", "12H", "24H", "MID" ]}')
        // console.log(conn, 'ttt')
    }
    
    return (
        
        <div>비트코인 가격 : {price} </div>
    )
}

export default CoinTable