// Gravity & Acceleration:
// - 1 weird bug is adam collides on top and bottom part of he's object on surace and other objects
let accel = 400, platform, platformGroup;

demo.state5 = function(){};
demo.state5.prototype = {
	preload: function(){
		game.load.image('platform', 'assets/sprites/platform.png');
	},
	create: function(){
		game.stage.backgroundColor = '#cc6699';
		addChangeStateEventListners();

		// Add Adam
		adam = game.add.sprite(centerX, 300, 'adam');
		adam.scale.setTo(0.6);
		platform = game.add.sprite(0, 800, 'platform');
		platformGroup = game.add.group();
		platformGroup.create(650, 400, 'platform');
		platformGroup.create(1150, 400, 'platform');


		// Enable Physics - Multiple sprites
		game.physics.enable([adam, platform, platformGroup]);
		// Give Gravity - y means vertical gravity
		adam.body.gravity.y = 500;
		// Bounce when hit ground:
		adam.body.bounce.y = 0.3;
		// Make body slow down:
		adam.body.drag.x = 400;
		// Collide with world bounds:
		adam.body.collideWorldBounds = true;

		platform.body.immovable = true;

		platformGroup.setAll('body.immovable', true);

	},
	update: function(){
		// 2nd arg - can also be array
		game.physics.arcade.collide(adam, [platform, platformGroup]);

		// Acceleration - time to build up speed
		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
			adam.body.acceleration.x = -accel;
		} else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			adam.body.acceleration.x = +accel;
		} else {
			adam.body.acceleration.x = 0;
		}
		// Jump
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
			adam.body.velocity.y = -300;
		}
	}
};