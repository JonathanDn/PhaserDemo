let sound;

demo.state3 = function(){};
demo.state3.prototype = {
	preload: function(){
		game.load.image('button1', 'assets/sprites/button1.png');
		game.load.image('button2', 'assets/sprites/button2.png');
		game.load.image('button3', 'assets/sprites/button3.png');

		game.load.audio('pops', 'assets/sounds/buttonPops.mp3')
	},
	create: function(){
		game.stage.backgroundColor = '#2067B2';
		addChangeStateEventListners();

		sound =  game.add.audio('pops');
		sound.addMarker('regular', 0, 1);
		// Split sounds when in sheet
		//sound.addMarker('low', 0, 0.5);
		//sound.addMarker('high', 0.5, 1);

		let b1 = game.add.button(100, 100, 'button1', function() {
			changeState(null, 1);
		});

		let b2 = game.add.button(400, 400, 'button2', function() {
			changeState(null, 2);
		});

		let b3 = game.add.button(700, 700, 'button3');

		b3.onInputDown.add(this.tint, b3);
		b2.onInputDown.add(this.tint, b2);
		b1.onInputDown.add(this.tint, b1);

		b3.onInputUp.add(this.unTint, b3);
		b2.onInputUp.add(this.unTint, b2);
		b1.onInputUp.add(this.unTint, b1);
	},
	update: function(){},

	tint: function() {
		// Greyer
		this.tint = 0xbbbbbb;
		sound.play('regular');
	},
	unTint: function() {
		// Whiter
		this.tint = 0xFFFFFF;
		//sound.play('regular');
	}
};