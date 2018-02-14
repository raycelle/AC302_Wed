var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update });
var score = 0;
var lives = 3;

function preload(){
	game.load.image('sky','assets/sky.png');
	game.load.image('ground', 'assets/platforms.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude',32,48);
	game.load.spritesheet('baddie', 'assets/baddie',32,32);
}

function create(){
	//turn on physics
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//create sky
	game.add.sprite(0,0,'sky');
	//create a group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	//create ground
	var ground = platforms.create(0,550, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	//create ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create();
	ledge.body.immovable = true;

	//setup text
	var style = {font: "bold 32px Arial", fill: "#fff"};

	//create and position score
	scorelabel = game.add.text(300,560, "Score: ", style);
	scoretext = game.add.text(420,560, score, style);

	lifelabel = game.add.text(10,5, "Lives: ", style);
	lifetext = game.add.text(120,5, lives, style);
}

function update(){

}