var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


function background1(){
	ctx.fillStyle = "#46C7F2";
	ctx.fillRect(0,0,750,370);
	ctx.fillStyle = "#0AC927";
	ctx.fillRect(0,370,750,130);

	ctx.fillStyle = "#F4FA87";
	var path = new Path2D;
	path.arc(650,100,40,0,2*Math.PI);
	path.moveTo(650,50);
	path.lineTo(650,20);
	//path.lineTo(320,35);
	//path.lineTo(380,35);
	//path.lineTo(395,60);
	ctx.fill(path);

	var img = document.getElementById("cloud");
	ctx.drawImage(img,60,60,180,140);
}
//background1()