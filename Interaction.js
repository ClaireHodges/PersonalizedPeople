var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//function Draw(){
//if x.checked = true; 
//[1]=x
//}
//array= [body,hair, hats, scar, eyes, glasses, nose, shirts, bottoms, shoes, background]

function check(){
	ctx.fillStyle = "#FFFFFF"
	ctx.fillRect(0,0,750,500);
//draws over pre-set functions, without erasing. Include in if statements instead?
//variable list
var h1 = document.getElementById("h1");//hair
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");

var hat1 = document.getElementById("hat1");
var hat2 = document.getElementById("hat2");
var hat3 = document.getElementById("hat3");

var scar1 = document.getElementById("scar1");

var e1 = document.getElementById("e1"); //eyes
var e2 = document.getElementById("e2");
var e3 = document.getElementById("e3");
var e4 = document.getElementById("e4");

var g1 = document.getElementById("g1");//glasses
var g2 = document.getElementById("g2");
var g3 = document.getElementById("g3");
var g4 = document.getElementById("g4");

var n1 = document.getElementById("n1");//nose
var n2 = document.getElementById("n2");

var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");

var shoes1 = document.getElementById("shoes1");
var shoes2 = document.getElementById("shoes2");
var shoes3 = document.getElementById("shoes3");

var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");

var no1 = document.getElementById("none1");
var no2 = document.getElementById("none2");
var no3 = document.getElementById("none3");
var no4 = document.getElementById("none4");
var no5 = document.getElementById("none5");

	//Background

	if (b1.checked == true){
		background1();
	}
	else if(b2.checked == true){
		background2();
	}
	else if(b3.checked == true){
		background3();
	}
	else if(b4.checked == true){
		background4();
	}
	else if (b5.checked == true){
		background5();
	}
	else if(b6.checked == true){
		background6();
	}
	else if (no5.checked == true){
		none();
	}
	else{
		none();
	}
	//background draws in front of person. REORDER ARRAY
		body();

	//Scar
	//can't see well with hair
	if(scar1.checked == true){
		hp();
	}
	else if(no3.checked == true){
		none();
	}

	//Shirts
	if(s1.checked == true){
		curveshort();
	}
	else if(s2.checked == true){
		curvelong();
	}
	//arms don't align to sleeves

	else if (s3.checked == true){
		trishort();
	}
	else if(s4.checked == true){
		trilong();
	}
	else{
		curveshort();
	}

	//HAIR
	if (h1.checked == true){
		sHair();

	}
	else if(h2.checked == true){
		mHair();
	}
	else if(h3.checked == true){
		lHair();
	}
	else if(h4.checked == true){
		baldoHair();
	}
	else if(no1.checked == true){
		none();
	}
	

	//HAT
	if (hat1.checked == true){
		hat6();
	}
	else if(hat2.checked == true){
		hat5();
	}
	else if(hat3.checked == true){
		hat4();
	}
	else if(no2.checked == true){
		none();
	}

	
	//Eyes
	//incomplete open eyes
	if (e1.checked == true){
		close();
	}
	else if(e2.checked == true){
		open();
	}
	else if(e3.checked == true){
		closedEyelash();
	}
	else if(e4.checked == true){
		openEyelash();
	}
	else{
		close();
	}

	//Glasses
	if (g1.checked == true){
		glasses1();
	}
	else if(g2.checked == true){
		glasses2();
	}
	else if(g3.checked == true){
		glasses3();
		
	}
	else if(g4.checked == true){
		glasses4();
		 
	}
	else if(no4.checked == true){
		none();
		 
	}

	//Nose
	if (n1.checked == true){
		dftNose();
		 
	}
	else if(n2.checked == true){
		roundNose();
		 
	}
	else{
		roundNose();
		 
	}

	//Bottoms
	if(p1.checked == true){
		pants1();
		 
	}
	else if(p2.checked == true){
		shorts1();
		 
	}
	else if (p3.checked == true){
		shorts2();
		 
	}
	else if(p4.checked == true){
		skirt1();
		 
	}
	else if(p5.checked == true){
		skirt2();
		 
	}
	else if(p6.checked == true){
		if(shoes3.checked == true){
			boots();
		}
		skirt3();
		 
	}
	else{
		pants1();
		none();
		 
	}


	//Shoes
	if (shoes1.checked == true){
		shoes5();
		 
	}
	else if(shoes2.checked == true){
		shoes4();
		 
	}
	else if(shoes3.checked == true){
		if(p6.checked == false){
			boots();
		}
		 
	}
	else{
		shoes5();
		 
	}
	//these draw over the skirt. Reorder array list!!! Have to have seperate skirt and pants order
	//because boots need to draw over pants and under skirt


	//run through array
	//for (i = 0; i =11; i++) {
    //draw[i]();
	//}

}
//document.getElementById("canvas").draw[1];



/*
Test...
hair not working
white fill on glasses
white fill on sleeves in tri shirt

*/

