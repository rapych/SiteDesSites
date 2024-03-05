function changermode(){
	if (document.body.style.backgroundColor == "rgb(163, 203, 232)") {
		document.body.style.background = "#454548";
		document.getElementById("bouton").style.background = "#454548";
		document.body.style.color = "#EEEEEE";
		document.getElementById("titre").style.color = "#FFFFFF";
		document.getElementById("sources").style.color = "#FFFFFF";
		document.getElementById("mode").innerHTML="Mode clair";
		let liste = document.getElementsByClassName("lien");
		for (let z = 0; z < liste.length; z++) {
			liste[z].style.color = "#FFFFFF";
		}
	} else {
		document.body.style.background = "#A3CBE8";
		document.body.style.color = "#000000";
		document.getElementById("mode").innerHTML="Mode sombre";
	}
}


// Définition des variables
let mode = document.querySelector('#mode');

mode.addEventListener('click', changermode);

