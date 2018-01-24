console.log("test");

var c = document.getElementById("myCanvas1");
var ctx = c.getContext('2d');

var img = new Image();
img.src = 'smiley.jpg';

img.onload = function(){
	ctx.drawImage(img, 100,100, 150,150);
}