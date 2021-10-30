function openNav() {
  	document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  	document.getElementById("mySidenav").style.width = "0";
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
