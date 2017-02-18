// Tween Animations
let i;
demo.state4 = function(){};
demo.state4.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ff66cc';
		addChangeStateEventListners();

		a1 = game.add.sprite(50, 100, 'adam');
		a2 = game.add.sprite(350, 100, 'adam');
		a3 = game.add.sprite(650, 100, 'adam');
		a4 = game.add.sprite(950, 100, 'adam');
		a5 = game.add.sprite(1250, 100, 'adam');

		// (position to tween, duration, ease, bool);
		game.add.tween(a1).to({y: 400}, 2000, 'Linear', true);
		// Can Also give .to({y: '+400'})

		// Click screen to see
		i = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Linear');

		game.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true);

		// 5th delay - number
		// 6th loop - boolean / number
		// 7th bool - yoyo(back and forth)
		//game.add.tween(a4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, 2, true);
		// for INFINITE loop set to false & .loop(true)
		game.add.tween(a4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, false, true).loop(true);

		// Opacity
		game.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true);


	},
	update: function(){}
};