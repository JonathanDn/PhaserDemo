demo.state4 = function(){};
demo.state4.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#ff66cc';
		console.log("state4");
		addChangeStateEventListners();
	},
	update: function(){}
};