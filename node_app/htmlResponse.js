const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.end('<h1>welcome to node.js with HTML!</h1>');
});
server.listen(2000);