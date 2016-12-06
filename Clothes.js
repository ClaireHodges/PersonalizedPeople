var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function triangleshirt(){
	ctx.fillStyle = "#FF0000";
	ctx.fillRect(300,150,100,150);

  	var path =new Path2D();
    path.moveTo(300,120);
    path.lineTo(350,150);
    path.lineTo(300,150);
    ctx.fill(path);

    var path = new Path2D;
	path.moveTo(400,120);
	path.lineTo(350,150);
	path.lineTo(400,150);
	ctx.fill(path);
}

triangleshirt()

function shortsleeve(){
	var path = new Path2D;
	path.moveTo(300,120);
	path.lineTo(350,150);
	path.lineTo(275,200);
	path.lineTo(240,160)
	ctx.fill(path);

	var path = new Path2D;
	path.moveTo(400,120);
	path.lineTo(350,150);
	path.lineTo(425,200);
	path.lineTo(460,160)
	ctx.fill(path);
}

shortsleeve()

function pants1(){
	ctx.fillStyle = "#FFFF00";
	var path = new Path2D;
	path.moveTo(300,300);

	path.lineTo(275,450);
	path.lineTo(310,450);
	path.lineTo(350,300);

	path.lineTo(390,450);
	path.lineTo(425,450);
	path.lineTo(400,300);
	ctx.fill(path);
}

pants1()

function shoes1(){
	ctx.fillStyle = "#0000FF";
	ctx.fillRect(390,450,60,25);
	ctx.fillRect(310,450,-60,25);
}

shoes1()

function size(){
	ctx.fillStyle = "#FF5500";
	var path = new Path2D;
	path.moveTo(200,125);
	//shoulders top

	path.lineTo(300,50);
	//head top
	path.lineTo(300,300);
	//hip area, where pants begin
	path.lineTo(200,450);
	//top of shoe

	ctx.fill(path);
}

