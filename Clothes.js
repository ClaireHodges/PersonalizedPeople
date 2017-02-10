var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var hairColor = "black";

function legs(){
	ctx.fillStyle = "#FFFF00";
	var path = new Path2D;
	path.moveTo(300,300);

	path.lineTo(275,450);
	path.lineTo(310,450);
	path.lineTo(350,330);

	path.lineTo(390,450);
	path.lineTo(425,450);
	path.lineTo(400,300);
	ctx.fill(path);
}

//legs();

function triangleshirt(){
	ctx.fillStyle = "#D3D3D3";
	//default color, apply later!
	ctx.fillRect(300,150,100,150);

  	var path =new Path2D();
    path.moveTo(300,120);
    path.lineTo(350,150);
    path.lineTo(300,150);

	path.moveTo(400,120);
	path.lineTo(350,150);
	path.lineTo(400,150);
	ctx.fill(path);
}

//triangleshirt();

function curvedshirt(){
	ctx.fillStyle = "#D3D3D3";
	//default color, apply later!
	ctx.fillRect(300,150,100,150);

	var path=new Path2D();
	path.arc(350,90,50,0.2*Math.PI,0.8*Math.PI);
	path.lineTo(300,120);
	path.lineTo(350,150);
	path.lineTo(400,120);
	path.lineTo(390,120);

    path.moveTo(300,120);
    path.lineTo(350,150);
    path.lineTo(300,150);
    
	path.moveTo(400,120);
	path.lineTo(350,150);
	path.lineTo(400,150);
	ctx.fill(path);

}

//curvedshirt();

function shortsleeve(){
	var path = new Path2D;
	path.moveTo(300,120);
	path.lineTo(350,150);
	path.lineTo(275,200);
	path.lineTo(240,160)

	path.moveTo(400,120);
	path.lineTo(350,150);
	path.lineTo(425,200);
	path.lineTo(460,160);
	ctx.fill(path);
}

//shortsleeve();

function longsleeve(){
	var path = new Path2D;
	path.moveTo(300,120);
	path.lineTo(350,150);
	path.lineTo(175,250); //ll
	path.lineTo(150,220); //tl

	path.moveTo(400,120);
	path.lineTo(350,150);
	path.lineTo(525,250); //lr
	path.lineTo(550,220); //tr
	ctx.fill(path);
}

//longsleeve();

function trilong(){
	longsleeve();
	triangleshirt();
}

function trishort(){
	shortsleeve();
	triangleshirt();
}

function curvelong(){
	curvedshirt();
	longsleeve();
}

function curveshort(){
	curvedshirt();
	shortsleeve();
}

function pants1(){
	ctx.fillStyle = "#FFFF00";
	var path = new Path2D;
	path.moveTo(300,300);

	path.lineTo(275,450);
	path.lineTo(310,450);
	path.lineTo(350,330);

	path.lineTo(390,450);
	path.lineTo(425,450);
	path.lineTo(400,300);
	ctx.fill(path);
}

//pants1();

function shorts1(){
	ctx.fillStyle = "#FF0000";
	var path = new Path2D;
	path.moveTo(300,300);

	path.lineTo(290,360);
	path.lineTo(345,360);
	path.lineTo(350,330);

	path.lineTo(355,360);
	path.lineTo(410,360);
	path.lineTo(400,300);
	ctx.fill(path);
}

//shorts1();

function shorts2(){
	ctx.fillStyle = "#FF0000";
	var path = new Path2D;
	path.moveTo(300,300);

	path.lineTo(280,390);
	path.lineTo(340,390);
	path.lineTo(350,330);

	path.lineTo(360,390);
	path.lineTo(420,390);
	path.lineTo(400,300);
	ctx.fill(path);
}

//shorts2();

function skirt1(){
	ctx.fillStyle = "#FF0000";
	var path = new Path2D;
	path.moveTo(300,300);
	path.lineTo(280,370);
	path.lineTo(420,370);
	path.lineTo(400,300);
	ctx.fill(path);
}

//skirt1();

function skirt2(){
	ctx.fillStyle = "#FF0000";
	var path = new Path2D;
	path.moveTo(300,300);
	path.lineTo(280,390);
	path.lineTo(420,390);
	path.lineTo(400,300);
	ctx.fill(path);
}

//skirt2();

function skirt3(){
	ctx.fillStyle = "#FF0000";
	var path = new Path2D;
	path.moveTo(300,300);
	path.lineTo(270,430);
	path.lineTo(430,430);
	path.lineTo(400,300);
	ctx.fill(path);
}

//skirt3();

function shoes5(){
	ctx.fillStyle = "#0000FF";
	ctx.fillRect(390,450,60,25);
	ctx.fillRect(310,450,-60,25);

	var path = new Path2D;
	path.moveTo(310,475);
	path.lineTo(310,480);
	path.lineTo(290,480);
	path.lineTo(290,475);
	path.lineTo(280,480);
	path.lineTo(250,480);
	path.lineTo(250,475);

	path.moveTo(390,475);
	path.lineTo(390,480);
	path.lineTo(410,480);
	path.lineTo(410,475);
	path.lineTo(420,480);
	path.lineTo(450,480);
	path.lineTo(450,475);
	ctx.fill(path);
	
}
//shoes5();

function shoes4(){
	ctx.fillStyle = "#0000FF";
	ctx.fillRect(390,450,40,25);
	ctx.fillRect(310,450,-40,25);


	var path = new Path2D;
	path.arc(430,465,15, 0, 2* Math.PI);
	ctx.fill(path);

	var path = new Path2D;
	path.arc(267,465,15, 0, 2* Math.PI);

	path.moveTo(310,475);
	path.lineTo(310,480);
	path.lineTo(290,480);
	path.lineTo(290,475);
	path.lineTo(280,480);
	path.lineTo(265,480);
	path.lineTo(265,475);

	path.moveTo(390,475);
	path.lineTo(390,480);
	path.lineTo(410,480);
	path.lineTo(410,475);
	path.lineTo(420,480);
	path.lineTo(435,480);
	path.lineTo(435,475);
	ctx.fill(path);
	
}
//shoes2();

function boots(){
	ctx.fillStyle = "#0000FF";
	ctx.fillRect(390,450,70,30);
	ctx.fillRect(310,450,-70,30);

	var path = new Path2D;
	path.moveTo(275,450);
	path.lineTo(280,390);
	path.lineTo(330,390);
	path.lineTo(310,480);
	path.lineTo(310,485);
	path.lineTo(290,485);
	path.lineTo(290,480);
	path.lineTo(280,485);
	path.lineTo(240,485);
	path.lineTo(240,480);


	path.moveTo(425,450);
	path.lineTo(420,390);
	path.lineTo(370,390);
	path.lineTo(390,480);
	path.lineTo(390,485);
	path.lineTo(410,485);
	path.lineTo(410,480);
	path.lineTo(420,485);
	path.lineTo(460,485);
	path.lineTo(460,480);
	ctx.fill(path);
}

//boots();

function glasses1(){
	var path = new Path2D;
	path.arc(330,85,10,0,2*Math.PI);
	path.moveTo(380,85);
	path.arc(370,85,10,0,2*Math.PI);

	path.moveTo(360,85);
	path.lineTo(340,85);

	path.moveTo(320,82);
	path.lineTo(310,70);

	path.moveTo(380,82);
	path.lineTo(390,70);
	ctx.stroke(path);

}

//glasses1();

function glasses2(){
	var path = new Path2D;
	path.arc(330,80,15,0,1*Math.PI);
	path.moveTo(385,80);
	path.arc(370,80,15,0,1*Math.PI);

	path.moveTo(309,70);
	path.lineTo(315,80);
	path.lineTo(385,80);
	path.lineTo(391,70);

	ctx.stroke(path);

}

//glasses2();

function glasses3(){
	var path = new Path2D;
	path.arc(330,80,15,0,1*Math.PI);
	path.moveTo(385,80);
	path.arc(370,80,15,0,1*Math.PI);
	ctx.fill(path);

	var path = new Path2D;
	path.moveTo(309,70);
	path.lineTo(315,80);
	path.lineTo(385,80);
	path.lineTo(391,70);
	ctx.stroke(path);

}

//glasses3();

function glasses4(){
	var path = new Path2D;
	path.arc(330,85,15,0,2*Math.PI);
	path.moveTo(385,85);
	path.arc(370,85,15,0,2*Math.PI);

	path.moveTo(355,85);
	path.lineTo(345,85);

	path.moveTo(315,82);
	path.lineTo(310,70);

	path.moveTo(385,82);
	path.lineTo(390,70);
	ctx.stroke(path);

}

//glasses4();

function hp(){
	var path = new Path2D;
	path.moveTo(330,50);
	path.lineTo(327,60);
	path.lineTo(335,55);
	path.lineTo(331,67);
	ctx.stroke(path);

}

//hp();

function hat6(){
	var path = new Path2D;
	path.arc(350,70,45,1*Math.PI,2*Math.PI);
	path.lineTo(305,68);
	path.lineTo(275,68);
	path.lineTo(275,62);
	path.lineTo(307,62);
	ctx.fill(path);
}

//hat1();

//wand

function hat5(){
	var path = new Path2D;
	path.arc(350,70,45,1*Math.PI,2*Math.PI);
	ctx.fill(path); 

	ctx.fillRect(305,60,90,10);
	fillStyle = "#FFFFFF";
	ctx.strokeRect(305,60,10,10);
	ctx.strokeRect(315,60,10,10);
	ctx.strokeRect(325,60,10,10);
	ctx.strokeRect(335,60,10,10);
	ctx.strokeRect(345,60,10,10);
	ctx.strokeRect(355,60,10,10);
	ctx.strokeRect(365,60,10,10);
	ctx.strokeRect(375,60,10,10);
	ctx.strokeRect(385,60,10,10);

}

//hat2();

function hat4(){
	ctx.strokeRect(285,60,130,10);
	ctx.fillRect(285,60,130,10);

	var path = new Path2D;
	path.moveTo(305,60);
	path.lineTo(320,35);
	path.lineTo(380,35);
	path.lineTo(395,60);
	ctx.fill(path);
}

hat4();

function bracelet1(){
	fillStyle = "#FFFFFF"
	var path = new Path2D;
	path.moveTo(510,240);
	path.lineTo(520,220);
	ctx.stroke(path);
}

//bracelet1();

function sHair(){
	var path = new Path2D();
	ctx.fillStyle = hairColor;

	ctx.beginPath();
	ctx.arc(350, 85, 44, 0, 280*Math.PI/180, true);
	ctx.closePath(); //10, 45 *Math.PI/180, 135 * Math.PI/180);
	ctx.fill();

	ctx.beginPath();
	ctx.arc(350, 85, 44, 210*Math.PI/180, 330* Math.PI/180);
	ctx.closePath();
	ctx.fill();

	ctx.beginPath();
	ctx.arc(350, 85, 44, 180* Math.PI/180, 260* Math.PI/180);
	ctx.closePath();
	ctx.fill();
	//if we want a border
	//ctx.lineWidth = 2;
	//ctx.stroke();
	//ctx.fillStyle = "black";
	//350,85
}
//sHair();
function mHair(){
	ctx.fillStyle = hairColor;
	ctx.beginPath();
	ctx.arc(350, 85, 50, 0, 2*Math.PI/1.4, true);
	ctx.closePath(); //10, 45 *Math.PI/180, 135 * Math.PI/180);
	ctx.fill(path);

	ctx.beginPath();
	ctx.arc(350, 85, 50, 180* Math.PI/180, 310* Math.PI/180);
	ctx.closePath();
	ctx.fill(path);

	//left side
	var path = new Path2D();
	ctx.beginPath();
	ctx.arc(350, 85, 45, 119*Math.PI/180, 185*Math.PI/180);
	ctx.stroke();
	ctx.moveTo(300, 84);
	path.moveTo(300, 84);
	path.lineTo(300, 135);
	path.moveTo(329, 124);
	path.lineTo(329, 135);
	path.lineTo(300, 135);


	//right side
	ctx.beginPath();
	ctx.arc(350, 85, 45, 355*Math.PI/180, 59*Math.PI/180);
	ctx.stroke();
	path.moveTo(400, 84);
	path.lineTo(400, 135);
	path.moveTo(373, 124);
	path.lineTo(373, 135);
	path.lineTo(400,135);

	//to fill in
	ctx.stroke(path);
}
//mHair();
function lHair(){
	ctx.fillStyle = hairColor;
	ctx.beginPath();
	ctx.arc(350, 85, 50, 0, 2*Math.PI/1.4, true);
	ctx.closePath(); //10, 45 *Math.PI/180, 135 * Math.PI/180);
	ctx.fill(path);

	ctx.beginPath();
	ctx.arc(350, 85, 50, 180* Math.PI/180, 310* Math.PI/180);
	ctx.closePath();
	ctx.fill(path);

	//left side
	var path = new Path2D();
	path.moveTo(300, 84);
	path.lineTo(300, 185);
	path.moveTo(329, 124);
	path.lineTo(329, 185);
	path.lineTo(300, 185);
	path.moveTo(300, 120);
	//to fill in the botton part
	path.lineTo(300, 185);
	path.lineTo(329, 185);
	path.lineTo(329, 124);
	ctx.fill(path);

	//right side
	path.moveTo(400, 84);
	path.lineTo(400, 185);
	path.moveTo(373, 124);
	path.lineTo(373, 185);
	path.lineTo(400,185);

	//to fill in
	ctx.stroke(path);
}

//lHair();
function baldoHair(){
	ctx.fillStyle = hairColor; 
	var path = new Path2D();
	path.moveTo(332, 51);
	path.lineTo(327, 42);

	path.moveTo(359,50);
	path.lineTo(364,41);

	path.moveTo(376, 51);
	path.lineTo(381, 42);

	path.moveTo(324, 60);
	path.lineTo(314, 49);

	path.moveTo(346, 44);
	path.lineTo(345, 35);

	path.moveTo(379, 58);
	path.lineTo(384, 53);

	path.moveTo(348, 51);
	path.lineTo(348, 43);

	path.moveTo(340, 53);
	path.lineTo(339,45);

	path.moveTo(362,55);
	path.lineTo(370,46);

	path.moveTo(317,60);
	path.lineTo(310,55);

	path.moveTo(383,61);
	path.lineTo(390,55);

	path.moveTo(354,53);
	path.lineTo(355,41);

	path.moveTo(326,50);
	path.lineTo(321, 44);

	path.moveTo(333, 57);
	path.lineTo(330, 52);

	path.moveTo(381, 67);
	path.lineTo(388, 61);

	path.moveTo(338, 44);
	path.lineTo(334, 36);

	path.moveTo(317, 65);
	path.lineTo(309, 60);

	path.moveTo(365, 45);
	path.lineTo(370, 37);

	path.moveTo(370, 56);
	path.lineTo(372, 50);
	ctx.stroke(path);

}

//baldoHair();






































