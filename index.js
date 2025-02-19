import http from "http";

const server = http.createServer((req, res)=>{
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end('Hello word1');
})

server.listen(3000, ()=>{
    console.log('Server running at1 http://localhost:3000');
})
