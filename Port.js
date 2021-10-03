//   Canon Animation    ****************************************************************
var velX = {};
var velY = {};
var i = 1;
function fireCanon() {if (i > 25){alert("You have reached the maximum number of allowable canon balls for this page!"); return;};	
	velX[i] = 3; velY[i] = -1;
    	var bgColor = "rgb(" + Math.floor(Math.random() * 256) + "," + (100 + Math.floor(Math.random() * 256)) + "," + (50 + Math.floor(Math.random() * 256)) + ")";
  		ball = document.createElement("div");
  		ball.style.backgroundColor = bgColor;
  		ball.className = "ball";
		ball.id = "ball" + i;
  		ball.style.height = "20px"; ball.style.width = "20px";
  		ball.style.bottom = "80px"; ball.style.left = "118px";
  		ball.style.border= "solid";
  		document.body.appendChild(ball);i++;
}
function moveBall(){
	var els = document.getElementsByClassName("ball");
	if( els.length > 0){
    	var edgew = window.innerWidth - 26; var edgeh = window.innerHeight -26;
	var c; 
	for (c = 1; c < i; c++){
		var posX = document.getElementById("ball" + c).offsetLeft; posX = posX + velX[c]; document.getElementById("ball" + c).style.left = posX +'px';
		var posY = document.getElementById("ball" + c).offsetTop; posY = posY + velY[c]; document.getElementById("ball" + c).style.top = posY +'px';
			if (posX >= edgew || posX <= 1){velX[c] = velX[c] * -1;}
			if (posY >= edgeh || posY <= 1){velY[c] = velY[c] * -1;}
		}
	}	
}
setInterval(moveBall, 1);

//   Pacman Animation   ****************************************************************
var pos = 0; 
var direction = 0;
var focus = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

function Run() {
	let pageWidth = window.innerWidth;
 	let img = document.getElementById('PacMan');
  	let imgWidth = img.width;
  	focus = (focus + 1) % 2;
  	direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  	img.src = pacArray[direction][focus];
  		if (direction) {
    			pos -= 20;
    			img.style.left = pos + 'px';
  		} else {
    			pos += 20;
    			img.style.left = pos + 'px';
  		}
	}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
	if (pos >= pageWidth - imgWidth - 10){direction = 1;}
	if (pos <= 0){direction = 0;}
  return direction;
}
setInterval(Run,200);