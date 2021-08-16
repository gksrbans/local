const connectWebSocket = () => {
    return new Promise(function (resolve, reject) {
        let conn = new WebSocket("wss://api.upbit.com/websocket/v1")
        conn.binaryType = 'blob';
        conn.onopen = function() {
            resolve(conn)
        };
        conn.onerror = function() {
            reject(conn)
        };
    })
}

export default connectWebSocket