demo.state8 = function(){};
demo.state8.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#66ffff';
		console.log("state8");
		addChangeStateEventListners();
	},
	update: function(){}
};