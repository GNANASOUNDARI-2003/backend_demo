const http=require('http');
const server=http.createServer((req,res)=>{
if(req.url==='/'){
    res.end('we are in the home page');
}else if(req.url==='/about_us'){
    res.end('we are here to help you!know us');
}else if(req.url==='/about_page'){
    res.end('we are here to help you!know us for more');
}else{
    res.statusCode=404;
    res.end('routes not matching');
}
});
server.listen(5000);

