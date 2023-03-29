const http =  require('http')

const server  = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('welcome to our homepage')
    }
    else if(req.url === '/about')
    {
        res.end('here is short history')
    }
    else{
    res.end(`
    <h1> !oops </h1>
    <p> we cant seem to find </p>
    <a href="/"> back home </a>`)
    }
})
server.listen(5000)