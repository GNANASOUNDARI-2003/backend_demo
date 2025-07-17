const http=require('http');
const js=require('fs');
const server=http.createServer((req,res)=>{
    js.readFile('in.html',(err,data)=>{
        if(err){
            res.end('onum varala kelambu');
      }else{
        res.setHeader('content-type','file/html');
        res.end(data);
      }
    });

});
server.listen(3000);