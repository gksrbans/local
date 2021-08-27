import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { COIN_DATA, CONNECTION_REQUEST } from '../redux/types'
import { Table } from 'reactstrap';
import connectWebSocket from '../api/connectSocket'

import CoinGrid from './CoinGrid';

const CoinTable = () => {  
    const [price, setPrice] = useState(0);
    const [Field, setField] = useState();
    const [data, setData] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        connectBithumb()
    }, [])
    const connect = useSelector((state) => state.connect)
    const temp = useSelector((state) => state.coin)
    console.log(temp, '결과값')

    let coinDataList = {}

    //sconsole.log(connect, 'temp임', connect.connectionFlag)
    if (connect.connectionFlag) {
        connect.conn.onmessage = ({ data }) => {
            if (data instanceof Blob) {
                let reader = new FileReader();
                reader.onload = () => {
                  let result = JSON.parse(reader.result);
                  console.log(result, 'data in')
                  coinDataList[result.code] = result

                  // Coin 데이타 송신
                  dispatch({
                    type: COIN_DATA,
                    payload: coinDataList,
                  })
            
                };
                reader.readAsText(data);
              }
    
          };
        connect.conn.send('[{"ticket":"test"},{"type":"ticker","codes":["KRW-BTC","KRW-ETH"]}]')
    }
    
    const connectBithumb = async () => {
        const conn = await connectWebSocket()
        dispatch({
            type:CONNECTION_REQUEST,
            conn: conn,
        })
    }
    
    return (
        <>
        <div>비트코인 가격 : {price} </div>
        { data &&
          <CoinGrid props={data} />
        }
        </>
    )
}

export default CoinTable