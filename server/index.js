let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', socket => {
    console.log(`un utilisateur s'est connecté`);
    
});

http.listen(3000, () => {
    console.log('listening on 3000');
})