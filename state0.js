// Game Obejct - only make once:
let demo = {};
let centerX = 1500 / 2;
let centerY = 1000 / 2;
demo.state0 = function(){};
demo.state0.prototype = {
	preload: function(){
		// Load Sprite
		game.load.image('human', 'assets/sprites/human4.png');
	},
	create: function(){
		game.stage.backgroundColor = '#80ff80';
		console.log("state0");
		addChangeStateEventListners();
		// Resizes the game According to game window size, carries on to all states.
		// 4  Other scale modes - FYI
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// Add Sprite:
		game.add.sprite(centerX, centerY, 'human')
	},
	update: function(){}
};

// Functions declared like so are Global

// Phaser Functions 1st argument is the Event Object
function changeState(i, stateNum) {
	game.state.start('state' + stateNum)
}

function addKeyCallback(key, fn, args) {
	// - .add(funcName, listenerContext, priority , arguments passed to the func)
	game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListners() {
	// Event Listeners - are Local - 0-10 states:
	addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
	addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
	addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
	addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
	addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
	addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
	addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
	addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
	addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
	addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}