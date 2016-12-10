var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function triangleshirt(){
	ctx.fillStyle = "#D3D3D3";
	//default color, apply later!
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



function curvedshirt(){
	ctx.fillStyle = "#D3D3D3";
	//default color, apply later!
	ctx.fillRect(300,150,100,150);

	var path=new Path2D();
	path.arc(350,90,50,0.2*Math.PI,0.8*Math.PI);
	path.lineWidth = 1;
	path.lineTo(300,120);
	path.lineTo(350,150);
	path.lineTo(400,120);
	path.lineTo(390,120);
	ctx.fill(path);



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

curvedshirt()

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
	path.lineTo(460,160);
	ctx.fill(path);
}

function longsleeve(){
	var path = new Path2D;
	path.moveTo(300,120);
	path.lineTo(350,150);
	path.lineTo(175,250); //ll
	path.lineTo(150,220); //tl
	ctx.fill(path);

	var path = new Path2D;
	path.moveTo(400,120);
	path.lineTo(350,150);
	path.lineTo(525,250); //lr
	path.lineTo(550,220); //tr
	ctx.fill(path);
}

longsleeve()

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

function shorts1(){
	ctx.fillStyle = "#FF0000";
	var path = new Path2D;
	path.moveTo(300,300);

	path.lineTo(275,450);
	path.lineTo(310,450);
	path.lineTo(350,300);

	path.lineTo(390,450);
	path.lineTo(400,425);
	path.lineTo(400,300);
	ctx.fill(path);
}

shorts1()



function shoes1(){
	ctx.fillStyle = "#0000FF";
	ctx.fillRect(390,450,60,25);
	ctx.fillRect(310,450,-60,25);
}

shoes1()



function proportions(){
	ctx.fillStyle = "#FF5500";
	var path = new Path2D;
	path.moveTo(200,125);
	//shoulders top

	path.lineTo(300,50);
	//head top
	path.lineTo(300,300);
	//hip area, where pants begin
	path.lineTo(200,475);
	//top of shoe

	ctx.fill(path);
}

//proportions()

