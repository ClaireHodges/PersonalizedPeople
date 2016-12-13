<script type="text/javascript">

// Set up!
var canvas = document.getElementById("canvas");
canvas.addEventListener('click', processMouseInput);
var context = canvas.getContext("2d");


// circle
context.fillStyle = "yellow";
context.beginPath();
context.arc(95, 85, 44, 0, 2*Math.PI);
context.closePath();
context.fill();
context.lineWidth = 2;
context.stroke();
context.fillStyle = "black";

//rectangle
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.rect(25, 20, 400, 100);
ctx.stroke();

//triangle
 function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            var sWidth = canvas.width;
            var sHeight = canvas.height;
            var path=new Path2D();
            path.moveTo((sWidth/2)+50,sHeight/2);
            path.lineTo((sWidth/2),(sHeight/2)-50);
            path.lineTo((sWidth/2)-50,sHeight/2);
            ctx.fill(path);
        }
    }
draw();


//could draw many connecting circles with repeat for loop that adds an amount onto the coordinates
//overlap shapes to avoid white areas

//for a half circle just do pi instead of 2*Pi
//line join to get the an arc?

//draw images:
//make an image variable
//var img = document.getElementById("image");
//ctx.drawiImage(img, 10, 10);

