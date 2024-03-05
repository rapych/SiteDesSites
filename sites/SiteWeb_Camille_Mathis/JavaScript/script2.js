//Echanger les deux images de thales
function echangerimagesthales(){
	if (img1.getAttribute("src") == "images/cockpit.jpg") {
		img1.setAttribute("src", "images/radar.jpg");
		img2.setAttribute("src", "images/cockpit.jpg");
	} else {
		img1.setAttribute("src", "images/cockpit.jpg");
		img2.setAttribute("src", "images/radar.jpg");
	}
}

//Faire tourner 3 photos de dassault à chaque clique
function echangerimagesdassault(){
	if (img3.getAttribute("src") == "images/dassault.webp") {
		img3.setAttribute("src", "images/dassault2.webp");
	} else if (img3.getAttribute("src") == "images/dassault2.webp") {
		img3.setAttribute("src", "images/dassault3.png");
	} else {
		img3.setAttribute("src", "images/dassault.webp");
	}
}

//Afficher une autre photo uniquement lorsque la souris et sur l'image d'ariane
function changerimagesariane1(){
		img4.setAttribute("src", "images/ariane2.jpg");
}

function changerimagesariane2(){
	img4.setAttribute("src", "images/ariane.png");
}

//Changer la couleur du nom en passant par les différentes couleurs de l'arc-en-ciel
function rainbow(){
	if (document.getElementById("nom").style.color == '') {
		document.getElementById("nom").style.color = "#FF0000";
		}
	else if(document.getElementById("nom").style.color == "rgb(162, 0, 255)"){
		document.getElementById("nom").style.color = "#FF0000";
	}
	else if(document.getElementById("nom").style.color == "rgb(255, 0, 0)"){
		document.getElementById("nom").style.color = "#FF7300";
	}
	else if(document.getElementById("nom").style.color == "rgb(255, 115, 0)"){
		document.getElementById("nom").style.color = "#FBFF00";
	}
	else if(document.getElementById("nom").style.color == "rgb(251, 255, 0)"){
		document.getElementById("nom").style.color = "#00FF00";
	}
	else if(document.getElementById("nom").style.color == "rgb(0, 255, 0)"){
		document.getElementById("nom").style.color = "#00FFDD";
	}
	else if(document.getElementById("nom").style.color == "rgb(0, 255, 221)"){
		document.getElementById("nom").style.color = "#4C00FF";
	}
	else {
		document.getElementById("nom").style.color = "#A200FF";
	}
}



// Définition des variables
let img1 = document.querySelector('#image_thales1');
let img2 = document.querySelector('#image_thales2');
let img3 = document.querySelector('#image_dassault');
let img4 = document.querySelector('#image_ariane');
let texte = document.querySelectorAll('body');

//Lancer les fonctions en fonction des événements
img1.addEventListener('mouseover', echangerimagesthales);
img2.addEventListener('mouseover', echangerimagesthales);
img3.addEventListener('click', echangerimagesdassault);
img4.addEventListener('mouseover', changerimagesariane1);
img4.addEventListener('mouseout', changerimagesariane2);
addEventListener('keypress', rainbow);