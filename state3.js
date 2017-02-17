demo.state3 = function(){};
demo.state3.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#lalaff';
		console.log("state3");
		addChangeStateEventListners();
	},
	update: function(){}
};