demo.state5 = function(){};
demo.state5.prototype = {
	preload: function(){},
	create: function(){
		game.stage.backgroundColor = '#cc6699';
		console.log("state5");
		addChangeStateEventListners();
	},
	update: function(){}
};