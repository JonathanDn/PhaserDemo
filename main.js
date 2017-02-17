// Args: (Width, Height, renderer)
// Phaser.AUTO - picks renderer for you.
let game = new Phaser.Game(600, 400, Phaser.AUTO);

// Adding a state to our game.
// add(nameOfState, nameOfProperty in Demo Object)
game.state.add('state1', demo.state1);

game.state.start('state1');