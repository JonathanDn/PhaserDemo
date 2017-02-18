let barrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200;

demo.state2 = function(){};
demo.state2.prototype = {
	preload: function(){
		game.load.image('base', 'assets/sprites/cannonBase.png');
		game.load.image('barrel', 'assets/sprites/cannonBarrel.png');
		game.load.image('bullet', 'assets/sprites/bullet.png');
	},
	create: function(){
		game.stage.backgroundColor = '#80ff80';
		addChangeStateEventListners();

		let base = game.add.sprite(centerX, centerY, 'base');
		base.anchor.setTo(0.5);
		base.scale.setTo(0.5);

		// Sprite Group
		bullets = game.add.group();
		bullets.enableBody = true;
		bullets.physicsBodyType = Phaser.Physics.ARCADE;
		bullets.createMultiple(50, 'bullet');

		// Define bullets that leave screen - perish
		bullets.setAll('checkWorldBounds', true);
		bullets.setAll('outOfBoundsKill', true);
		// Set Bullets origin:
		bullets.setAll('anchor.y', 0.53);
		// Bullets size:
		bullets.setAll('scale.x', 0.85);
		bullets.setAll('scale.y', 0.85);


		barrel = game.add.sprite(centerX, centerY, 'barrel');
		barrel.anchor.setTo(0.3, 0.5);
		barrel.scale.setTo(1, 1);
	},
	update: function(){
		barrel.rotation = game.physics.arcade.angleToPointer(barrel);
		if (game.input.activePointer.isDown) {
			this.fire();
		}
	},

	fire: function(){
		// Limit Firing Rate:
		if(game.time.now > nextFire) {
			nextFire = game.time.now + fireRate;
			console.log('firing!');
			let bullet = bullets.getFirstDead();
			// Set the bullet origin
			bullet.reset(barrel.x, barrel.y);

			// Enable Bullet velocity
			game.physics.arcade.moveToPointer(bullet, velocity);

			// Rotate bullet according to angle of pointer.
			bullet.rotation = game.physics.arcade.angleToPointer(bullet);
		}
	}
};
