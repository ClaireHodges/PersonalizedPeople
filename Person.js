var canvas = document.getElementById("canvas");

// function showCoords(){
// 	var x = event.clientX - canvas.offsetLeft;
// 	var y = event.clientY - canvas.offsetTop;
// 	//var x = event.clientX -8;
// 	//var y = event.clientY -8;//relative to the frame it's inside of
// 	var coords = "X coords: " + x + " , Y coords: " + y;
// 	document.getElementById("coordinates").innerHTML = coords;
// }


//later if want to link: src="./Clothes.js"
var canvas = document.getElementById("canvas");
//canvas.addEventListener( 'click', processMouseInput);
//window.addEventListener('keydown', processKeyboardInput);
var ctx = canvas.getContext("2d");

function dftFace(){ //gray circle
	ctx.fillStyle = skinColor;
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
	ctx.fillStyle = skinColor;
	ctx.beginPath();
	ctx.stroke();
	ctx.fillRect(329.5, 115, 44, 35);//x, y, width , height

}

neck();

function dftNose(){ //just a triangle
	ctx.fillStyle = accentSkin;
	var path =new Path2D();
    path.moveTo(350,82);
    path.lineTo(341,100);
    path.lineTo(352, 100);
    ctx.stroke(path);

}
//dftNose();

function roundNose(){
	ctx.fillStyle = accentSkin;
	ctx.beginPath();
	ctx.arc(350, 88, 7, 45*Math.PI/180, 135 * Math.PI/180);
	ctx.stroke();

}

roundNose();

function dftMouth(){
	ctx.fillStyle = accentSkin;
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
	ctx.fillStyle = accentSkin;
	ctx.beginPath();
	ctx.arc(330, 77, 10, 45 *Math.PI/180, 135 * Math.PI/180);
	ctx.stroke();

}

closedLEye();

function closedREye(){ 
	ctx.fillStyle = accentSkin;
	ctx.beginPath();
	ctx.arc(370, 77, 10, 45*Math.PI/180, 135 * Math.PI/180);
	ctx.stroke();
}
closedREye();

function openREye(){
	ctx.fillStyle = accentSkin;
	//lower eye
	ctx.beginPath();
	ctx.arc(370, 77, 10, 30*Math.PI/180, 135 * Math.PI/155);
	ctx.stroke();
	//upper eye
	ctx.beginPath();
	ctx.arc(370, 87, 10, 205*Math.PI/180, 330*Math.PI/180);
	ctx.stroke();
	//iris
	ctx.beginPath();
	ctx.arc(370, 82, 4, 0*Math.PI, 2*Math.PI);
	ctx.stroke();
	//pupil
	ctx.fillStyle = "#000000"
	ctx.beginPath();
	ctx.arc(370,82,2,0*Math.PI, 2*Math.PI);
	ctx.fill();


}
//openREye();

function openLEye(){
	ctx.fillStyle = accentSkin;
	//lower eye
	ctx.beginPath();
	ctx.arc(330, 77, 10, 30*Math.PI/180, 135 * Math.PI/155);
	ctx.stroke();
	//upper eye
	ctx.beginPath();
	ctx.arc(330, 87, 10, 205*Math.PI/180, 330*Math.PI/180);
	ctx.stroke();
	//iris
	ctx.beginPath();
	ctx.arc(330, 82, 4, 0*Math.PI, 2*Math.PI);
	ctx.stroke();
	//pupil
	ctx.fillStyle = "#000000"
	ctx.beginPath();
	ctx.arc(330,82,2,0*Math.PI, 2*Math.PI);
	ctx.fill();
}

//openLEye();

function clREyelash(){
	ctx.fillStyle = accentSkin;
	var path = new Path2D();
	 path.moveTo(324,84);
	 path.lineTo(321,87);

	path.moveTo(327.25,86);
	path.lineTo(325, 89); 

	path.moveTo(330.5, 86);//the total length of each eyelash is 4.24
	path.lineTo(330.5, 90);

	path.moveTo(333.75,86);
	path.lineTo(335.75, 89);
	
	path.moveTo(337,84);
	path.lineTo(340, 87);

	ctx.stroke(path);
}
//clREyelash();
function clLEyelash(){
	ctx.fillStyle = accentSkin;
	var path = new Path2D();
	path.moveTo(377,84);
	path.lineTo(380,87);

	path.moveTo(373.5, 86); 
	path.lineTo(375.5, 89);

	path.moveTo(370, 86);
	path.lineTo(370, 90);

	path.moveTo(366.5, 86);
	path.lineTo(364.5, 89);
	
	path.moveTo(363, 84);
	path.lineTo(360,87);
	ctx.stroke(path);
}

function openLEyelash(){
	ctx.fillStyle = accentSkin;
	var path = new Path2D();
	path.moveTo(377,80);
	path.lineTo(380,77);

	path.moveTo(373.5, 78); 
	path.lineTo(375.5, 75);

	path.moveTo(370, 78);
	path.lineTo(370, 74);

	path.moveTo(366.5, 78);
	path.lineTo(364.5, 75);
	
	path.moveTo(363, 80);
	path.lineTo(360,77);
	ctx.stroke(path);
}
//openLEyelash();

function openREyelash(){
	ctx.fillStyle = accentSkin;
	var path = new Path2D();
	path.moveTo(323,80);
	path.lineTo(320,77);

	path.moveTo(326.5, 78); 
	path.lineTo(324.5, 75);

	path.moveTo(330, 78);
	path.lineTo(330, 74);

	path.moveTo(333.5, 78);
	path.lineTo(335.5, 75);
	
	path.moveTo(337, 80);
	path.lineTo(340,77);
	ctx.stroke(path);
}
//openREyelash();

//clLEyelash();

// function oREyelash(){
// 	ctx.fillStyle = accentSkin;
// 	var path = new Path2D();
// 	path.moveTo();
// 	path.lineTo();

// 	path.moveTo();
// 	path.lineTo();

// 	path.moveTo();
// 	path.lineTo();

// 	path.moveTo();
// 	path.lineTo();
	
// 	path.moveTo();
// 	path.lineTo();
// }
// function oLEyelash(){
// 	ctx.fillStyle = accentSkin;
// 	var path = new Path2D();
// 	path.moveTo();
// 	path.lineTo();

// 	path.moveTo();
// 	path.lineTo();

// 	path.moveTo();
// 	path.lineTo();

// 	path.moveTo();
// 	path.lineTo();
	
// 	path.moveTo();
// 	path.lineTo();
// }

function closedEyelash(){
	closedREye();
	closedLEye();
	clLEyelash();
	clREyelash();
}

function openEyelash(){
	openREye();
	openLEye();
	openLEyelash();
	openREyelash();
}

function close(){
	closedREye();
	closedLEye();
}

function open(){
	openREye();
	openLEye();
}

function LArm(){
	ctx.fillStyle = skinColor;
	var path = new Path2D;
	path.moveTo(289,141);
	path.lineTo(350,143);
	path.lineTo(170,245); //ll
	path.lineTo(150,227);
	ctx.fill(path);
}

LArm();


function RArm(){
	var path = new Path2D;
	ctx.fillStyle = skinColor;

	path.moveTo(410,141); // shoulder top
	path.lineTo(350,145); // armpit
	path.lineTo(530,245); //inner wrist
	path.lineTo(550,227); //outer wrist
	ctx.fill(path);
	
}

RArm();

function legs(){
	ctx.fillStyle = skinColor;
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

legs();
function RHand(){
	ctx.fillStyle = skinColor;
	ctx.beginPath();
	ctx.arc(547, 241, 18, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
}
RHand();

function LHand(){
	ctx.fillStyle = skinColor;
	ctx.beginPath();
	ctx.arc(153, 241, 18, 0, 2*Math.PI);
	ctx.closePath();
	ctx.fill();
}
LHand();

function body(){
	LHand();
	RHand();
	RArm();
	LArm();
	dftMouth();
	dftFace();
	neck();
	legs();
}


