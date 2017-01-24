var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//function Draw(){
//if x.checked = true; 
//[1]=x
//}
//array= [body,hair, hats, scar, eyes, glasses, nose, shirts, bottoms, shoes, background]

function check(){
var draw = []
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");
var h0 = document.getElementById("h0");
/*var b1 = document.getElementById("b1");
var b1 = document.getElementById("b1");
var b1 = document.getElementById("b1");
var b1 = document.getElementById("b1");
var b1 = document.getElementById("b1");*/
//var b1 = document.getElementById("b1");
	if (h1.checked == true){
		draw[1] = sHair();
		h2.checked = true;
	}
	else if(h2.checked == true){
		draw[1] = mHair();
	}
	else if(h3.checked == true){
		draw[1] = lHair();
	}
	else if(h4.checked == true){
		draw[1] = spikeHair();
	}
	/*else(){
		draw[1] = none();
	} SOMETHING WRONG WITH THIS SECTION!!!!!!!*/


	/*if (b1.checked == false){
		b1.checked = true;
	}*/
}
document.getElementById("canvas").draw[1];
