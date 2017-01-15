var canvas = document.getElementById("canvas");

function showCoords(){
	var x = event.clientX - canvas.offsetLeft;
	var y = event.clientY - canvas.offsetTop;
	//var x = event.clientX -8;
	//var y = event.clientY -8;//relative to the frame it's inside of
	var coords = "X coords: " + x + " , Y coords: " + y;
	document.getElementById("coordinates").innerHTML = coords;
}


//later if want to link: src="./Clothes.js"
var canvas = document.getElementById("canvas");
//canvas.addEventListener( 'click', processMouseInput);
//window.addEventListener('keydown', processKeyboardInput);
var ctx = canvas.getContext("2d");

function dftFace(){ //gray circle
	ctx.fillStyle = "#d3d3d3";
	ctx.beginPath();
	ctx.arc(350, 85, 44, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
	//if we want a border
	//ctx.lineWidth = 2;
	//ctx.stroke();
	//ctx.fillStyle = "black";
}
dftFace();

function neck(){ //all necks are same except for color
	ctx.fillStyle = "#d3d3d3";
	ctx.beginPath();
	ctx.stroke();
	ctx.fillRect(329.5, 115, 44, 35);//x, y, width , height

}

neck();

function dftNose(){ //just a triangle
	ctx.fillStyle = "#d3d3d3";
	var path =new Path2D();
    path.moveTo(350,82);
    path.lineTo(341,100);
    path.lineTo(352, 100);
    ctx.stroke(path);

}
dftNose();

function dftMouth(){
	ctx.fillStyle = "d3d3d3";
	var path =new Path2D();
	//right side
    path.moveTo(350,107.5);
    path.lineTo(355,106);
    path.lineTo(363,110);
    //left side
    path.moveTo(350,107.5);
    path.lineTo(345, 106);
    path.lineTo(337, 110);
    //bottom left
    path.moveTo(337, 110);
    path.lineTo(344, 114);
   
       //bottom right
    path.moveTo(363,110);
    path.lineTo(356, 114);
    //bottom
    path.lineTo(344, 114);
    ctx.stroke(path);



}

dftMouth();

function closedLEye(){ 
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(330, 77, 10, 45 *Math.PI/180, 135 * Math.PI/180);
	ctx.stroke();

}

closedLEye();

function closedREye(){ 
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(370, 77, 10, 45*Math.PI/180, 135 * Math.PI/180);
	ctx.stroke();
}
closedREye();

function LArm(){
	ctx.fillStyle = "#d3d3d3";
	var path = new Path2D;
	path.moveTo(289,141);
	path.lineTo(350,143);
	path.lineTo(175,250); //ll
	path.lineTo(157,227);
	ctx.fill(path);
}

LArm();


function RArm(){
	var path = new Path2D;
	ctx.fillStyle = "#d3d3d3";

	path.moveTo(410,141);
	path.lineTo(350,145);
	path.lineTo(525,250); //lr
	path.lineTo(539,227); //t
	ctx.fill(path);
	
}

RArm();

function dftLLeg(){

}
function RHand(){
	ctx.fillStyle = "#d3d3d3";
	ctx.beginPath();
	ctx.arc(533, 238.5, 18, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
}
RHand();

function LHand(){
	ctx.fillStyle = "#d3d3d3";
	ctx.beginPath();
	ctx.arc(164, 238.5, 18, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
}
LHand();

function sHair(){
	var path = new Path2D();
	ctx.fillStyle = "black";
	path.moveTo(330, 52);
	path.lineTo(370, 52);
	ctx.stroke(path);
}
//sHair();
function mHair(){
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.arc(370, 77, 10, 45*Math.PI/180, 135 * Math.PI/180);
	ctx.stroke();

}
function lHair(){

}
function spikeHair(){
	ctx.fillStyle = "black"; //insert variable here
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

	path.moveTo(370, 56);
	path.lineTo(372, 50);
	ctx.stroke(path);

}

//spikeHair();


