// Game Obejct - only make once:
let demo = {};
demo.state1 = function(){};
demo.state1.prototype = {
	//  Loading Images
	preload: function(){},
	//  Loading background Images
	create: function(){
		game.stage.backgroundColor = '#dddddd';
		console.log("state1");
	},
	// Updates frame of the game (60 fps)
	// Each frame of the game is a still image
	update: function(){}
};