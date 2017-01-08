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

	path.moveTo(685,70);
	path.lineTo(700,60);
	path.lineTo(710,65);
	path.lineTo(690,75);

	path.moveTo(615,70);
	path.lineTo(600,60);
	path.lineTo(590,65);
	path.lineTo(610,75);

	path.moveTo(685,130);
	path.lineTo(700,140);
	path.lineTo(710,135);
	path.lineTo(690,125);

	path.moveTo(615,130);
	path.lineTo(600,140);
	path.lineTo(590,135);
	path.lineTo(610,125);

	ctx.fill(path);

	ctx.fillRect(645,10,10,40);
	ctx.fillRect(645,150,10,40);
	ctx.fillRect(560,100,40,10);
	ctx.fillRect(700,100,40,10);

	ctx.fillStyle = "#FFFFFF";
	var path = new Path2D;
	path.arc(120,100,40,0,2*Math.PI);
	path.moveTo(180,100);
	path.arc(180,100,40,0,2*Math.PI);
	path.moveTo(260,100);
	path.arc(260,100,40,0,2*Math.PI);
	path.moveTo(150,60);
	path.arc(150,60,40,0,2*Math.PI);
	path.moveTo(220,60);
	path.arc(220,60,40,0,2*Math.PI);
	path.moveTo(150,130);
	path.arc(150,130,40,0,2*Math.PI);
	path.moveTo(220,130);
	path.arc(220,130,40,0,2*Math.PI);
	ctx.fill(path);

}
//background1();

function background2(){
	ctx.fillStyle = "#C92059";
	ctx.fillRect(0,0,750,370);
	ctx.fillStyle = "#003300";
	ctx.fillRect(0,370,750,130);

	ctx.fillStyle = "#FCDF3A";
	var path = new Path2D;
	path.arc(350,370,250,1*Math.PI,2*Math.PI);
	ctx.fill(path);

	var path = new Path2D;
	path.moveTo(620,330);
	path.lineTo(750,330);
	path.lineTo(750,360);
	path.lineTo(620,360);

	path.moveTo(613,280);
	path.lineTo(750,250);
	path.lineTo(750,310);
	path.lineTo(620,310);

	path.moveTo(590,230);
	path.lineTo(750,150);
	path.lineTo(750,220);
	path.lineTo(607,260);

	path.moveTo(560,190);
	path.lineTo(750,0);
	path.lineTo(750,125);
	path.lineTo(580,215);

	path.moveTo(530,160);
	path.lineTo(580,0);
	path.lineTo(715,0);
	path.lineTo(550,180);

	path.moveTo(480,125);
	path.lineTo(485,0);
	path.lineTo(550,0);
	path.lineTo(510,145);

	path.moveTo(420,100);
	path.lineTo(425,0);
	path.lineTo(465,0);
	path.lineTo(455,113);

	path.moveTo(355,80);
	path.lineTo(360,0);
	path.lineTo(405,0);
	path.lineTo(400,90);
//newnewnewnewnewnewnewnewnewnewnewnewnewnewnew
	path.moveTo(80,330);
	path.lineTo(0,330);
	path.lineTo(0,360);
	path.lineTo(80,360);

	path.moveTo(87,280);
	path.lineTo(0,250);
	path.lineTo(0,310);
	path.lineTo(80,310);

	path.moveTo(110,230);
	path.lineTo(0,150);
	path.lineTo(0,220);
	path.lineTo(93,260);

	path.moveTo(140,190);
	path.lineTo(0,0);
	path.lineTo(0,125);
	path.lineTo(120,215);

	path.moveTo(170,160);
	path.lineTo(150,0);
	path.lineTo(35,0);
	path.lineTo(150,180);

	path.moveTo(220,125);
	path.lineTo(225,0);
	path.lineTo(175,0);
	path.lineTo(190,145);

	path.moveTo(280,100);
	path.lineTo(275,0);
	path.lineTo(240,0);
	path.lineTo(245,113);

	path.moveTo(345,80);
	path.lineTo(345,0);
	path.lineTo(290,0);
	path.lineTo(300,90);


	ctx.fill(path);



}

//background2();

function background3(){
	ctx.fillStyle = "#E3E1D8";
	ctx.fillRect(0,0,750,370);
	ctx.fillStyle = "#25A87A";
	ctx.fillRect(0,370,750,130);

	ctx.fillStyle = "#646B68";
	var path = new Path2D;
	path.arc(620,20,40,0,2*Math.PI);
	path.moveTo(660,100);
	path.arc(660,100,40,0,2*Math.PI);
	path.moveTo(600,60);
	path.arc(600,60,40,0,2*Math.PI);
	path.moveTo(730,110);
	path.arc(730,110,40,0,2*Math.PI);
	ctx.fill(path);

	ctx.fillRect(620,0,130,100);

	ctx.fillStyle = "#F5F118"
	var path = new Path2D;
	path.moveTo(655,140);
	path.lineTo(630,130);
	path.lineTo(595,200);
	path.lineTo(630,220);	
	path.lineTo(620,320);
	path.lineTo(660,220);
	path.lineTo(630,200);
	ctx.fill(path);

}

//background3();

function background4(){
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,750,370);
	ctx.fillStyle = "#003300";
	ctx.fillRect(0,370,750,130);

	ctx.fillStyle = "#FFFFFF";
	var path = new Path2D;
	path.arc(100,100,40,0,2*Math.PI);
	ctx.fill(path);

	ctx.fillStyle = "#F4FA87";
	var path = new Path2D;
	path.arc(170,260,2,0,2*Math.PI);
	path.moveTo(540,285);
	path.arc(540,285,2,0,2*Math.PI);
	path.moveTo(660,70);
	path.arc(660,70,2,0,2*Math.PI);
	path.moveTo(480,80);
	path.arc(480,80,2,0,2*Math.PI);
	path.moveTo(655,190);
	path.arc(655,190,2,0,2*Math.PI);
	path.moveTo(70,200);
	path.arc(70,200,2,0,2*Math.PI);
	path.moveTo(240,50);
	path.arc(240,50,2,0,2*Math.PI);
	path.moveTo(490,200)
	path.arc(490,200,2,0,2*Math.PI);
	path.moveTo(60,295);
	path.arc(60,295,2,0,2*Math.PI);
	path.moveTo(690,290);
	path.arc(690,290,2,0,2*Math.PI);
	path.moveTo(580,120);
	path.arc(580,120,2,0,2*Math.PI);
	path.moveTo(30,30);
	path.arc(30,30,2,0,2*Math.PI);
	path.moveTo(250,330);
	path.arc(250,330,2,0,2*Math.PI);
	path.moveTo(620,350);
	path.arc(620,350,2,0,2*Math.PI);
	path.moveTo(220,120)
	path.arc(220,120,2,0,2*Math.PI);
	path.moveTo(430,10);
	path.arc(430,10,2,0,2*Math.PI);
	path.moveTo(570,50);
	path.arc(660,70,2,0,2*Math.PI);
	path.moveTo(450,300);
	path.arc(450,300,2,0,2*Math.PI);
	ctx.fill(path);

}
//background4();

function background5(){
	ctx.fillStyle = "#E3E1D8";
	ctx.fillRect(0,0,750,370);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(0,370,750,130);

	ctx.fillStyle = "#646B68";
	var path = new Path2D;
	path.arc(30,100,40,0,2*Math.PI);
	path.moveTo(100,100);
	path.arc(100,100,40,0,2*Math.PI);
	path.moveTo(170,100);
	path.arc(170,100,40,0,2*Math.PI);
	path.moveTo(240,100);
	path.arc(240,100,40,0,2*Math.PI);
	path.moveTo(310,100);
	path.arc(310,100,40,0,2*Math.PI);
	path.moveTo(380,100);
	path.arc(380,100,40,0,2*Math.PI);
	path.moveTo(450,100);
	path.arc(450,100,40,0,2*Math.PI);
	path.moveTo(520,100);
	path.arc(520,100,40,0,2*Math.PI);
	path.moveTo(590,100);
	path.arc(590,100,40,0,2*Math.PI);
	path.moveTo(660,100);
	path.arc(660,100,40,0,2*Math.PI);
	path.moveTo(730,100);
	path.arc(730,100,40,0,2*Math.PI);
	ctx.fill(path);

	ctx.fillRect(0,0,750,100);

	ctx.fillStyle = "#FFFFFF";
	var path = new Path2D;
	path.arc(170,260,5,0,2*Math.PI);
	path.moveTo(540,285);
	path.arc(540,285,5,0,2*Math.PI);
	path.moveTo(660,70);
	path.arc(660,270,5,0,2*Math.PI);
	path.moveTo(480,80);
	path.arc(480,280,5,0,2*Math.PI);
	path.moveTo(655,190);
	path.arc(655,390,5,0,2*Math.PI);
	path.moveTo(70,200);
	path.arc(70,200,5,0,2*Math.PI);
	path.moveTo(240,50);
	path.arc(240,250,5,0,2*Math.PI);
	path.moveTo(490,200)
	path.arc(490,400,5,0,2*Math.PI);
	path.moveTo(60,295);
	path.arc(60,295,5,0,2*Math.PI);
	path.moveTo(690,290);
	path.arc(690,290,5,0,2*Math.PI);
	path.moveTo(580,120);
	path.arc(580,320,5,0,2*Math.PI);
	path.moveTo(30,30);
	path.arc(30,230,5,0,2*Math.PI);
	path.moveTo(250,330);
	path.arc(250,330,5,0,2*Math.PI);
	path.moveTo(620,350);
	path.arc(620,350,5,0,2*Math.PI);
	path.moveTo(220,120)
	path.arc(220,320,5,0,2*Math.PI);
	path.moveTo(430,10);
	path.arc(430,210,5,0,2*Math.PI);
	path.moveTo(570,50);
	path.arc(660,270,5,0,2*Math.PI);
	path.moveTo(450,300);
	path.arc(450,300,5,0,2*Math.PI);
	path.moveTo(530,190);
	path.arc(530,190,5,0,2*Math.PI);
	path.moveTo(690,180);
	path.arc(690,180,5,0,2*Math.PI);
	path.moveTo(610,230);
	path.arc(610,230,5,0,2*Math.PI);
	ctx.fill(path);
}

//background5();

function background6(){
	ctx.fillStyle = "#46C7F2";
	ctx.fillRect(0,0,750,200);
	ctx.fillStyle = "#0AC927";
	ctx.fillRect(0,200,750,300);

	ctx.fillStyle = "#F4FA87";
	var path = new Path2D;
	path.arc(650,100,40,0,2*Math.PI);

	path.moveTo(685,70);
	path.lineTo(700,60);
	path.lineTo(710,65);
	path.lineTo(690,75);

	path.moveTo(615,70);
	path.lineTo(600,60);
	path.lineTo(590,65);
	path.lineTo(610,75);

	path.moveTo(685,130);
	path.lineTo(700,140);
	path.lineTo(710,135);
	path.lineTo(690,125);

	path.moveTo(615,130);
	path.lineTo(600,140);
	path.lineTo(590,135);
	path.lineTo(610,125);

	ctx.fill(path);

	ctx.fillRect(645,10,10,40);
	ctx.fillRect(645,150,10,40);
	ctx.fillRect(560,100,40,10);
	ctx.fillRect(700,100,40,10);

	ctx.fillStyle = "#0000CC";
	var path = new Path2D;
	path.arc(422,170,150,0.25*Math.PI,0.85*Math.PI);
	path.arc(225,280,75,1.8*Math.PI,0.7*Math.PI,true);
	path.arc(170,370,30,1.65*Math.PI,0.02*Math.PI);
	/**/path.arc(250,380,50,1.05*Math.PI,0.25*Math.PI,true);
	path.arc(323,450,50,1.3*Math.PI,1.76*Math.PI);
	path.arc(423,360,84,0.7*Math.PI,0.16*Math.PI,true);
	path.arc(522,417,30,1.2*Math.PI,1.7*Math.PI);
	path.arc(580,330,75,0.6*Math.PI,1.25*Math.PI,true);
	ctx.fill(path);

}
background6();














































