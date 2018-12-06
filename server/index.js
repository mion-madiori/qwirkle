let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let listPlayers = [];



io.on('connection', socket => {
    console.log(`un utilisateur s'est connecté`);
    socket.emit('messageSending', 'coucou du serveur');

    socket.emit('sendPlayers', listPlayers);

    socket.on('addPlayer', player => {
        console.log(`Un joueur s'est ajouté.`);
        for (let i = 0; i < listPlayers.length; i++) {
            console.log('boucle');
            
            if(player === listPlayers[i]){
                return;
            }
            
        }
    
            
        listPlayers.push(player);
    
        io.emit('listPlayer', listPlayers);
    });
});

http.listen(3000, () => {
    console.log('listening on 3000');
});