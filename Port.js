function openNav() {
  	document.getElementById("mySidenav").style.width = "200px";
  	document.getElementById("main").style.marginLeft = "200px";
	document.getElementById("contact").style.marginLeft = "200px";
	document.getElementById("projects").style.marginLeft = "200px";
}

function closeNav() {
  	document.getElementById("mySidenav").style.width = "0";
  	document.getElementById("main").style.marginLeft = "0";
	document.getElementById("contact").style.marginLeft = "0";
	document.getElementById("projects").style.marginLeft = "0";
}

function show(div){
	let divs = document.getElementsByClassName("main");
	for (i = 0; i <= divs.length; i++){
		if (divs[i].id === div){
			document.getElementById("" + divs[i].id + "").style.display = "block"
		}
		else {
			document.getElementById("" + divs[i].id + "").style.display = "none";
		}
	closeNav();
	}	
}

function ckMenu() {
	if (document.getElementById("mySidenav").style.width = "200px"){closeNav();}
}


//	Eye Movement Animation	*******************************************************

var balls = document.getElementsByClassName("ball");
document.onmousemove = () => {
      var x = (event.clientX * 100) / window.innerWidth + "%";
      var y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < 2; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].transform = "translate(-" + x + ",-" + y + ")";
      }
 };