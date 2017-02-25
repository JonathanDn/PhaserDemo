var text;

WebFontConfig = {
	google: {families: [ 'candal', 'Montserrat']}
};

demo.state8 = function(){};
demo.state8.prototype = {
	preload: function(){
		// Google font API script - configurable by WebFontConfig on top
		game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
	},
	create: function(){
		game.stage.backgroundColor = '#66ffff';
		addChangeStateEventListners();

		text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
			'Etiam congue urna et hendrerit bibendum. Donec sed urna enim. ' +
			'Donec vel orci eu massa pharetra ultricies. Aenean non nunc id ante ' +
			'ultricies consequat. Aenean dignissim auctor sem, at venenatis risus sagittis nec. ' +
			'In velit ante, sollicitudin non lacus in, aliquam laoreet sem. Curabitur quis purus ' +
			'sit amet lacus volutpat ornare quis quis purus. Proin ultricies sem in nisl efficitur, vitae ' +
			'gravida sem volutpat. Etiam vel convallis eros. Donec semper sem vitae tellus vestibulum.';

		// this.spellOutText(100, 100, 1000, text, 40, 40, '#fff', 'Candal');
		this.spellOutText(100, 100, 1000, text, 40, 20, '#000', 'Montserrat');
		// x, y, text say:, font and varios css font properties
		// game.add.text(100, 400, 'Hello World!');
	},
	update: function(){},

	spellOutText: function(x, y, width, text, fontSize, speed, fill, font) {
		var sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
		var currentLine = game.add.text(10, 10, '', {fontSize: fontSize + 'px', font: font});
		currentLine.alpha = 0;
		var loop = game.time.events.loop(speed, addChar);

		var index = 0;

		function addChar() {
			sentence.text += text[index];
			currentLine.text += text[index];

			// compares invisible line to text line to know when to keep writing to an other row
			// && condition - makes sure a word would not be cut in the middle
			if(currentLine.width > width && text[index] === ' ') {
				sentence.text += '\n';
				currentLine.text = '';
			}
			// when text is finished stop looping
			if(index >= text.length -1) {
				game.time.events.remove(loop);
				console.log('stop')
			}

			index++;
		}

	}
};