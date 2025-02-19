import http from "http";

const server = http.createServer((req, res)=>{
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end('Hello word');
})

server.listen(4000, ()=>{
    console.log('Server running at this112345 http://localhost:4000');
})
