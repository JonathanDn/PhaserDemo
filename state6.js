demo.state6 = function(){};
demo.state6.prototype = {
	preload: function(){
		game.load.image('volcano', 'assets/sprites/volcano.png');
		game.load.image('redBall', 'assets/sprites/redBall.png');
		game.load.image('orBall', 'assets/sprites/orBall.png');
	},
	create: function(){
		game.stage.backgroundColor = '#a6ff4d';
		addChangeStateEventListners();

		var volcano = game.add.sprite(centerX, 1000, 'volcano').anchor.setTo(0.5, 1);

		// Location of emitter (x, y, particles amount)
		var emitter = game.add.emitter(centerX, 400, 2000);
		// particles to emit, 0, number of particles to generate, collision with enemys, collision with world
		emitter.makeParticles(['redBall', 'orBall'], 0, 5000, false, true);
		// Horizontal Speed / Vertical Speed
		emitter.maxParticleSpeed.set(300, -300);
		emitter.minParticleSpeed.set(-300, -100);
		// Add gravity to particles:
		emitter.gravity = 300;


		// Time event (happens once) - added loop
		game.time.events.add(2000, function() {
			// explode / or last, duration of lasting, frequency of emitting
			emitter.start(false, 5000, 20);

			game.time.events.loop(500, function(){
				if (emitter.on){
					emitter.false;
				} else {
					emitter.on = true;
				}
			});
		})
	},
	update: function(){}
};