const http = require('http');
const app = require('./app');

const port = 4127;

const server = http.createServer(app);

server.listen(port, ()=>{
    console.log("port 4127");
});