const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === "/api/orders"){
        res.end(JSON.stringify({status:"API working"}));
    } else {
        res.end("UrbanEats API");
    }
});

server.listen(4000);