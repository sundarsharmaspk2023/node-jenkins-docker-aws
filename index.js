import http from "http";

const server = http.createServer((req, res)=>{
       res.writeHead(200,{'Content-Type':'text/plain'});
       res.end('Sunder sharma ji. you are best. you are mern developer');
})

server.listen(8000,'0.0.0.0', ()=>{
    console.log('Server running at2 http://localhost:8000');
})
