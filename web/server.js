const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("UrbanEats Web Running");
});

server.listen(3000);