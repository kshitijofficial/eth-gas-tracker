const app = require("./app");
const initWebSocket = require('./services/websocket')

const WEBSOCKET_PORT = 5000;
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

initWebSocket(WEBSOCKET_PORT)