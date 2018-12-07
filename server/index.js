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

            if (JSON.stringify(player) === JSON.stringify(listPlayers[i])) {

                console.log(`${player.firstname} ${player.lastname} existe déjà!`);

                return;
            }
        }

        io.emit('playerAdded', {
            firstname: player.firstname,
            lastname: player.lastname
        });

        listPlayers.push(player);

        io.emit('sendPlayers', listPlayers);
    });

    socket.on('setScore', player => {
        for (let i = 0; i < listPlayers.length; i++) {
            if (player.id === listPlayers[i].id) {
                listPlayers[i].score += player.score;
                return;
            };
        }
        socket.emit('sendPlayers', listPlayers);
    })

    socket.on('getPlayers', () => {
        console.log('ranking récupération joueurs');

        socket.emit('sendPlayers', listPlayers);
    })

    socket.on('destroyPlayer', player => {
        for (let i = 0; i < listPlayers.length; i++) {
            if (JSON.stringify(listPlayers[i]) === JSON.stringify(player)) {
                listPlayers.splice(i, 1);
                return;
            }
        }

        console.log(`${player.firstname} ${player.lastname} a quitté le jeu`);

    })
});

http.listen(3000, () => {
    console.log('listening on 3000');
});