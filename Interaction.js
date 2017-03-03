var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//function Draw(){
//if x.checked = true; 
//[1]=x
//}
//array= [body,hair, hats, scar, eyes, glasses, nose, shirts, bottoms, shoes, background]

//draws over pre-set functions, without erasing. Include in if statements instead?
//variable list
var h1 = document.getElementById("h1");//hair
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");
var h4 = document.getElementById("h4");

var hat20 = document.getElementById("hat1");
var hat21 = document.getElementById("hat2");
var hat22 = document.getElementById("hat3");

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

var necklace1 = document.getElementById("necklace1");
var necklace2 = document.getElementById("necklace2");
var necklace3 = document.getElementById("necklace3");

var bracelet1 = document.getElementById("bracelet1");
var bracelet2 = document.getElementById("bracelet2");

var no1 = document.getElementById("none1");
var no2 = document.getElementById("none2");
var no3 = document.getElementById("none3");
var no4 = document.getElementById("none4");
var no5 = document.getElementById("none5");
var no6 = document.getElementById("none6");
var no7 = document.getElementById("none7");

var shirtRed = document.getElementById("radio21");
var shirtBlue = document.getElementById("radio22");
var shirtYellow = document.getElementById("radio23");
var shirtGreen = document.getElementById("radio24");
var shirtPink = document.getElementById("radio25");
var shirtPurple = document.getElementById("radio26");
var shirtOrange = document.getElementById("radio27");

var bottomRed = document.getElementById("radio31");
var bottomBlue = document.getElementById("radio32");
var bottomYellow = document.getElementById("radio33");
var bottomGreen = document.getElementById("radio34");
var bottomPink = document.getElementById("radio35");
var bottomPurple = document.getElementById("radio36");
var bottomOrange = document.getElementById("radio37");

var shoeRed = document.getElementById("radio41");
var shoeBlue = document.getElementById("radio42");
var shoeYellow = document.getElementById("radio43");
var shoeGreen = document.getElementById("radio44");
var shoePink = document.getElementById("radio45");
var shoePurple = document.getElementById("radio46");
var shoeOrange = document.getElementById("radio47");

var hatRed = document.getElementById("radio51");
var hatBlue = document.getElementById("radio52");
var hatYellow = document.getElementById("radio53");
var hatGreen = document.getElementById("radio54");
var hatPink = document.getElementById("radio55");
var hatPurple = document.getElementById("radio56");
var hatOrange = document.getElementById("radio57");

var glassRed = document.getElementById("radio61");
var glassBlue = document.getElementById("radio62");
var glassYellow = document.getElementById("radio63");
var glassGreen = document.getElementById("radio64");
var glassPink = document.getElementById("radio65");
var glassPurple = document.getElementById("radio66");
var glassOrange = document.getElementById("radio67");

var neckRed = document.getElementById("radio71");
var neckBlue = document.getElementById("radio72");
var neckYellow = document.getElementById("radio73");
var neckGreen = document.getElementById("radio74");
var neckPink = document.getElementById("radio75");
var neckPurple = document.getElementById("radio76");
var neckOrange = document.getElementById("radio77");

var braceRed = document.getElementById("radio81");
var braceBlue = document.getElementById("radio82");
var braceYellow = document.getElementById("radio83");
var braceGreen = document.getElementById("radio84");
var bracePink = document.getElementById("radio85");
var bracePurple = document.getElementById("radio86");
var braceOrange = document.getElementById("radio87");

var skin6 = document.getElementById("radio1"); //theses are the buttons
var skin5 = document.getElementById("radio2");
var skin4 = document.getElementById("radio3");
var skin3 = document.getElementById("radio4");
var skin2 = document.getElementById("radio5");
var skin1 = document.getElementById("radio6");

var hair1 = document.getElementById("radio11");//buttons - black
var hair2 = document.getElementById("radio12");//blond
var hair3 = document.getElementById("radio13");//light brown
var hair4 = document.getElementById("radio14");//dark brown
var hair5 = document.getElementById("radio15"); //gray
var hair6 = document.getElementById("radio16"); //dark red

var red = "#FF0000";
var blue ="#0033CC";
var yellow ="#FFFF00";
var green = "#00FF00";
var pink = "#FF6699";
var purple = "#8F00B3";
var orange ="#FF9933";

var hairBlack = "black";
var hairBlond = "#e6b800";
var hairLtBrown = "#b38600";
var hairdBrown = "#663300";
var hairGray = "d1cdc8";
var hairRed = "#AD4E44"

var bottomColor;
var hatColor;
var shirtColor;
var shoeColor;
var glassColor;
var braceColor;
var necklaceColor;
var hairColor;
var skinColor1 = "FFDBAC";
var skinColor2 = "F1C27D";
var skinColor3 = "E0AC69";
var skinColor4 = "C68642";
var skinColor5 = "#8D5524";
var skinColor6 = "#573719";

var skinColor;

var accentSkin1 = "F1C27D";
var accentSkin2 = "E0AC69";
var accentSkin3 = "C68642";
var accentskin4 = "#8D5524";
var accentSkin5 = "black"; //this should be adjusted

var accentSkin;

function check(){
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,0,750,500);




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
	if(shirtRed.checked == true){ //red orange yellow green blue purple pink
		shirtColor= red;
	}
	else if(shirtOrange.checked == true){
		shirtColor = orange;
	}
	else if(shirtPurple.checked == true){
		shirtColor = purple;
	}
	else if(shirtPink.checked == true){
		shirtColor = pink;
	}
	else if(shirtYellow.checked == true){
		shirtColor = yellow;
	}
	else if(shirtGreen.checked == true){
		shirtColor = green;
	}
	else if(shirtBlue.checked == true){
		shirtColor = blue;
	}
	else{
		shirtColor = green;
	}
	
	
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
	if(hair1.checked == true){
		hairColor = black;
	}
	else if(hair2.checked == true){
		hairColor = blond;
	}
	else if(hair3.checked == true){
		hairColor = hairLtBrown;
	}
	else if(hair4.checked == true){
		hairColor = hairdBrown;
	}
	else if(hair5.checked == true){
		hairColor = hairGray;
	}
	else{
		hairColor = hairdBrown;
	}


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
	if(hatRed.checked == true){ //red orange yellow green blue purple pink
		hatColor= red;
	}
	else if(hatOrange.checked == true){
		hatColor = orange;
	}
	else if(hatPurple.checked == true){
		hatColor = purple;
	}
	else if(hatPink.checked == true){
		hatColor = pink;
	}
	else if(hatYellow.checked == true){
		hatColor = yellow;
	}
	else if(hatGreen.checked == true){
		hatColor = green;
	}
	else if(hatBlue.checked == true){
		hatColor = blue;
	}
	else{
		hatColor = blue;
	}

	if (hat20.checked == true){
		hat6();
	}
	else if(hat21.checked == true){
		hat5();
	}
	else if(hat22.checked == true){
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
	if(glassRed.checked == true){ //red orange yellow green blue purple pink
		glassColor= red;
	}
	else if(glassOrange.checked == true){
		glassColor = orange;
	}
	else if(glassPurple.checked == true){
		glassColor = purple;
	}
	else if(glassPink.checked == true){
		glassColor = pink;
	}
	else if(glassYellow.checked == true){
		glassColor = yellow;
	}
	else if(glassGreen.checked == true){
		glassColor = green;
	}
	else if(glassBlue.checked == true){
		glassColor = blue;
	}
	else{
		glassColor = purple;
	}

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
	if(bottomRed.checked == true){ //red orange yellow green blue purple pink
		bottomColor= red;
	}
	else if(bottomOrange.checked == true){
		bottomColor = orange;
	}
	else if(bottomPurple.checked == true){
		bottomColor = purple;
	}
	else if(bottomPink.checked == true){
		bottomColor = pink;
	}
	else if(bottomYellow.checked == true){
		bottomColor = yellow;
	}
	else if(bottomGreen.checked == true){
		bottomColor = green;
	}
	else if(bottomBlue.checked == true){
		bottomColor = blue;
	}
	else{
		bottomColor = blue;
	}

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

	//Necklace
	if (necklace1.checked == true){
		necklace5();
	}
	else if(necklace2.checked == true){
		necklace4(); 
	}
	else if(necklace3.checked == true){
		necklace6(); 
	}
	else{
		none(); 
	}

	//Shoes
	if(shoeRed.checked == true){ //red orange yellow green blue purple pink
		shoeColor= red;
	}
	else if(shoeOrange.checked == true){
		shoeColor = orange;
	}
	else if(shoePurple.checked == true){
		shoeColor = purple;
	}
	else if(shoePink.checked == true){
		shoeColor = pink;
	}
	else if(shoeYellow.checked == true){
		shoeColor = yellow;
	}
	else if(shoeGreen.checked == true){
		shoeColor = green;
	}
	else if(shoeBlue.checked == true){
		shoeColor = blue;
	}
	else{
		shoeColor = red;
	}

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

	
	//Bracelet
	if (bracelet1.checked == true){
		bracelet4();
	}
	else if(bracelet2.checked == true){
		bracelet5(); 
	}
	else{
		none(); 
	}

	dftMouth();

}

// var button = document.getElementById('btn-download');
// button.addEventListener('click', function (e) {
// 	var canvas1 = document.getElementById("canvas")
//     var dataURL = canvas1.toDataURL('image/png');
//     button.href = dataURL;
//});
//not listening to function at all. why??
