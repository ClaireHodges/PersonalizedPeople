var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//function Draw(){
//if x.checked = true; 
//[1]=x
//}
//array= [body,hair, hats, scar, eyes, glasses, nose, shirts, bottoms, shoes, background]

function check(){
var draw = [body(),none(),none(),none(),closedEyelash(),none(),roundNose(),curveshort(),pants1(),shoes4(),none()]
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


	//HAIR
	if (h1.checked == true){
		draw[1] = sHair();
		h2.checked = true;

	}
	else if(h2.checked == true){
		draw[1] = mHair();
		h1.checked = true;
	}
	else if(h3.checked == true){
		draw[1] = lHair();
		h2.checked = true;
	}
	else if(h4.checked == true){
		draw[1] = baldoHair();
		h2.checked = true;
	}
	

	//HAT
	else if (hat1.checked == true){
		draw[2] = hat6();
		h2.checked = true;
	}
	else if(hat2.checked == true){
		draw[2] = hat5();
		h2.checked = true;
	}
	else if(hat3.checked == true){
		draw[2] = hat4();
		h2.checked = true;
	}

	//Scar
	else if(scar1.checked == true){
		draw[3] = hp();
		h2.checked = true;
	}
	
	//Eyes
	else if (e1.checked == true){
		draw[4] = close();
		h2.checked = true;
	}
	else if(e2.checked == true){
		draw[4] = open();
		h2.checked = true;
	}
	else if(e3.checked == true){
		draw[4] = closedEyelash();
		h2.checked = true;
	}
	else if(e4.checked == true){
		draw[4] = openEyelash();
		h2.checked = true;
	}

	//Glasses
	else if (g1.checked == true){
		draw[5] = glasses1();
		h2.checked = true;
	}
	else if(g2.checked == true){
		draw[5] = glasses2();
		h2.checked = true;
	}
	else if(g3.checked == true){
		draw[5] = glasses3();
		h2.checked = true;
	}
	else if(g4.checked == true){
		draw[5] = glasses4();
		h2.checked = true;
	}

	//Nose
	else if (n1.checked == true){
		draw[6] = dftNose();
		h2.checked = true;
	}
	else if(n2.checked == true){
		draw[6] = roundNose();
		h2.checked = true;
	}

	//Shirts
	else if(s1.checked == true){
		draw[6] = curveshort();
		h2.checked = true;
	}
	else if(s2.checked == true){
		draw[6] = curvelong();
		h2.checked = true;
	}

	else if (s3.checked == true){
		draw[7] = trilong();
		h2.checked = true;
	}
	else if(s4.checked == true){
		draw[7] = trishort();
		h2.checked = true;
	}

	//Bottoms
	else if(p1.checked == true){
		draw[7] = pants1();
		h2.checked = true;
	}
	else if(p2.checked == true){
		draw[7] = shorts1();
		h2.checked = true;
	}
	else if (p3.checked == true){
		draw[8] = shorts2();
		h2.checked = true;
	}
	else if(p4.checked == true){
		draw[8] = skirt1();
		h2.checked = true;
	}
	else if(p5.checked == true){
		draw[8] = skirt2();
		h2.checked = true;
	}
	else if(p6.checked == true){
		draw[8] = skirt3();
		h2.checked = true;
	}

	//Shoes
	else if (shoes1.checked == true){
		draw[9] = shoes5();
		h2.checked = true;
	}
	else if(shoes2.checked == true){
		draw[9] = shoes4();
		h2.checked = true;
	}
	else if(shoes3.checked == true){
		draw[9] = boots();
		h2.checked = true;
	}

	//Background
	else if (b1.checked == true){
		draw[10] = background1();
		h2.checked = true;
	}
	else if(b2.checked == true){
		draw[10] = background2();
		h2.checked = true;
	}
	else if(b3.checked == true){
		draw[10] = background3();
		h2.checked = true;
	}
	else if(b4.checked == true){
		draw[10] = background4();
		h2.checked = true;
	}
	else if (b5.checked == true){
		draw[10] = background5();
		h2.checked = true;
	}
	else if(b6.checked == true){
		draw[10] = background6();
		h2.checked = true;
	}
	//When No is option
	else if (no1.checked == true){
		draw[1] = none();
		h2.checked = true;
	}
	else if(no2.checked == true){
		draw[2] = none();
		h2.checked = true;
	}
	else if(no3.checked == true){
		draw[3] = none();
		h2.checked = true;
	}
	else if(no4.checked == true){
		draw[5] = none();
		h2.checked = true;
	}
	else if (no5.checked == true){
		draw[10] = none();
		h2.checked = true;
	}
	else{
		h1.checked = true;
	}
	for (i = 0; i < draw.length; i++) {
    draw[i]();
	}

}
//document.getElementById("canvas").draw[1];
