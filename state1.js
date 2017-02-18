demo.state1 = function(){};

let cursors, vel = 500, rocks;

demo.state1.prototype = {
	preload: function(){
		// tilemap(key, path, jsonObj/null, Phaset.Tilemap.TILED_JSON);
		game.load.tilemap('field', 'assets/tilemaps/field.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('grassTile','assets/tilemaps/grassTile.png');
		game.load.image('rockTiles','assets/tilemaps/rockTile.png');
		game.load.image('adam', 'assets/sprites/human.png');
	},
	create: function(){
		// Physics initialize continute to other states
		game.stage.backgroundColor = '#dddddd';
		addChangeStateEventListners();
		// Layers are drawen in the order they we're created:
		let map = game.add.tilemap('field');
		map.addTilesetImage('grassTile');
		map.addTilesetImage('rockTiles');

		let grass = map.createLayer('grass');
		rocks = map.createLayer('rocks');

		// Indexes of collison objects (indexStart, indexEnd, enableCollision, layer)
		map.setCollisionBetween(1, 9, true, 'rocks')

		adam = game.add.sprite(200, 200, 'adam');
		adam.scale.setTo(0.2, 0.2);

		game.physics.enable(adam);

		cursors = game.input.keyboard.createCursorKeys();
	},
	update: function(){
		// Adam collision definiton
		game.physics.arcade.collide(adam, rocks, function(){console.log("hitting rocks!")});

		if(cursors.up.isDown) {
			adam.body.velocity.y = -vel;
		} else if(cursors.down.isDown) {
			adam.body.velocity.y = +vel;
		} else {
			adam.body.velocity.y = 0;
		}
		if(cursors.right.isDown) {
			adam.body.velocity.x = +vel;
		} else if(cursors.left.isDown) {
			adam.body.velocity.x = -vel;
		} else {
			adam.body.velocity.x = 0;
		}

	}
};