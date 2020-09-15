const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
    console.log("a user connected...");
    socket.on('message', (msg)=>{
        console.log("message: ", msg);
        io.emit('message', msg);
    })
})

http.listen(5000, ()=>{
    console.log("Server Listening on port 5000");
})