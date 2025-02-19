import http from "http";

const server = http.createServer((req, res)=>{
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end('Hello word1');
})

server.listen(8000,'0.0.0.0', ()=>{
    console.log('Server running at1 http://localhost:8000');
})
