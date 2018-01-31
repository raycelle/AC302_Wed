console.log("test");

var c = document.getElementById("myCanvas1");
var ctx = c.getContext('2d');

var WIDTH = 600;
var HEIGHT = 400;

//coordinates and movement
var x, y;
var mx, my;

//draw shape
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.strokeStyle = "navy";
	ctx.stroke();
	// ctx.fillStyle = "cyan";
	// ctx.fill();
}

//initialize animation
function init(){
	x = 300;
	y = 200;
	mx = 3;
	my = 4;
	return setInterval(draw,20);
}

function random(){
  return Math.floor(Math.random()*255);
}

function draw(){
	clear();
	circle(x,y,30);
	ctx.fillStyle = "rgb(" + random() + "," + random() + "," + random() + ")";
	ctx.fill();

	//bounce
	if(x+mx < 0 || x+mx > WIDTH){
		mx = -mx;
	}
	if(y+my < 0 || y+my > HEIGHT){
		my = -my;
	}

	//update x and y
	x = x + mx; //x += mx
	y = y +my;
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

init();
















