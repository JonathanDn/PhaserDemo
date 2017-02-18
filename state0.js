// Game Obejct - only make once:
let demo = {}, centerX = 1500 / 2, centerY = 1000 / 2, adam, speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
	preload: function(){
		// Load Sprite / Sprite Sheet
		//game.load.image('human', 'assets/sprites/human4.png');
		game.load.spritesheet('human', 'assets/spritesheets/adamSheet.png', 260, 500);
		game.load.image('treeBG', 'assets/backgrounds/road.png');
	},
	create: function(){
		// Initializing Specified Game Physics:
		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.stage.backgroundColor = '#80ff80';
		console.log("state0");
		addChangeStateEventListners();

		// Set Game Bounds:
		game.world.setBounds(0, 0, 2013, 1000);

		// Resizes the game According to game window size, carries on to all states.
		// 4  Other scale modes - FYI
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// Draw Background first
		let treeBG = game.add.sprite(0, 0, 'treeBG');


		// Add Sprite:
		adam = game.add.sprite(centerX, centerY, 'human');
		adam.anchor.setTo(0.5, 0.5);
		// Scale Adam's width / height with SetTo
		adam.scale.setTo(0.7, 0.7);
		// Add Physics to Image - and if hitting game bounds collide.
		game.physics.enable(adam);
		adam.body.collideWorldBounds = true;
		// Add Animation to Adam:
		adam.animations.add('walk', [0, 1, 2, 3, 4])

		// Camera:
		game.camera.follow(adam);
		// DeadZone - (originX, OriginY, width, height)
		game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);

	},
	update: function(){
		if( game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			adam.scale.setTo(0.7, 0.7);
			adam.x += speed;
			// play(Key, FPS, Loop)
			adam.animations.play('walk', 14, true);
		} else if( game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			adam.scale.setTo(-0.7, 0.7);
			adam.x -= speed;
			adam.animations.play('walk', 14, true);
		} else {
			// When not clicking right / left stop walking
			adam.animations.stop('walk');
			// Set back to 0 frame:
			adam.frame = 0;
		}

		if( game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			adam.y -= speed;
			if (adam.y < 395) {
				adam.y = 395;
			}
		} else if( game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
			adam.y += speed;
		}
	}
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