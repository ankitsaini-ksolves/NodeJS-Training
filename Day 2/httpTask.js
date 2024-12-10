const http = require("http")

const myServer = http.createServer((req,res)=>{
    switch(req.url){
        case "/":
            res.end("<h1>Hello World!</h1>");
            console.log(req)
            break;
        case "/about":
            res.end("<h1>Welcome to the About Page</h1>");
            break;
        case "/contact":
            res.end("<h1>Welcome to the Contact Page</h1>");
            break;
        default:
            res.end("<h1>404 Page Not Found</h1>");
            break;
    }
});

myServer.listen(8000,()=>{console.log("Server running on 8000")});