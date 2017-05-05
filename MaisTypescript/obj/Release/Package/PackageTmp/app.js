var GAME_WIDTH = 1080;
var GAME_HEIGHT = 720;
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
    game.load.spritesheet('button', 'images/tux.png', 193, 71);
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
    button = game.add.button(game.world.centerX, 400, 'button', actionOnClick, this, 2, 1, 0);
    button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    var discardedpilepos = new position(700, 50);
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
    var gameid = 56;
    var playergame = new PlayerGame();
    var listofplayersresults = playergame.allocatePlayersToGame(gameid);
    var cardsinfull = new PlayerGame();
    var listofcards = cardsinfull.getplayerscards(gameid);
    var player = new PlayerGame();
    var listofplayers = player.getplayersgame(gameid);
    for (var _i = 0, listofplayers_1 = listofplayers; _i < listofplayers_1.length; _i++) {
        var playergameitem = listofplayers_1[_i];
    }
    var player1_posx = 50;
    var player1_posy = 250;
    var player2_posx = 250;
    var player2_posy = 50;
    var player3_posx = 600;
    var player3_posy = 250;
    var player4_posx = 250;
    var player4_posy = 450;
    for (var _a = 0, listofcards_1 = listofcards; _a < listofcards_1.length; _a++) {
        var entry = listofcards_1[_a];
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
