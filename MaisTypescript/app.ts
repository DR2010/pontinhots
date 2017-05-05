var GAME_WIDTH = 1080;
var GAME_HEIGHT = 720;



//Game Variables
var ship;
var card;
var game;
var listofcards;
var lasers;
var mouseTouchDown = false;
var cursors;
var playertux;
var phaserKeys;
var players;
var platforms;
var discardedpilepos;
var lastdiscarded;
var button;
var background;

game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update, init: init, render: render });

function preload() {

    game.load.spritesheet('button', 'images/distribute.png', 207, 73);
    game.load.image('background', 'images/shot.png');


    HelperPontinho.loadAllImages(this.game);

}

function update() {

}

function init() {

}

function render() {

}

function create() {

    game.stage.backgroundColor = '#182d3b';

    button = game.add.button(100, 600, 'button', actionOnClick, this, 2, 1, 0);

    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

    game.physics.startSystem(Phaser.Physics.ARCADE);

    let discardedpilepos = new position(700, 50);

}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick() {

    distributeCardsToPlayerslink();

}


function distributeCardsToPlayerslink() {

    let gameid = 56;

    let playergame = new PlayerGame();
    let listofplayersresults = playergame.allocatePlayersToGame(gameid);

    let cardsinfull = new PlayerGame();
    let listofcards = cardsinfull.getplayerscards(gameid);

    let player = new PlayerGame();
    let listofplayers = player.getplayersgame(gameid);

    for (let playergameitem of listofplayers) {
        // playergameitem.ID 
    }

    let player1_posx = 50; // side
    let player1_posy = 250; // down

    let player2_posx = 350;
    let player2_posy = 50;

    let player3_posx = 600;
    let player3_posy = 250;

    let player4_posx = 350;
    let player4_posy = 450;

    for (let entry of listofcards) {

        if (entry.CardIsWithPlayerID == listofplayers[0].ID) {
            game.add.sprite(player1_posx += 20, player1_posy, entry.ImageName);
        }
        if (entry.CardIsWithPlayerID == listofplayers[1].ID) {
            game.add.sprite(player2_posx += 20, player2_posy, entry.ImageName);
        }
        if (entry.CardIsWithPlayerID == listofplayers[2].ID) {
            game.add.sprite(player3_posx += 20, player3_posy, entry.ImageName);
        }
        if (entry.CardIsWithPlayerID == listofplayers[3].ID) {
            game.add.sprite(player4_posx += 20, player4_posy, entry.ImageName);
        }

    }
    return false;
}
