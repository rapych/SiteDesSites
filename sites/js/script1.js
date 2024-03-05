// Carousel buttons
const previousCarouselBtn = document.getElementById("previous-button");
const nextCarouselBtn = document.getElementById("next-button");
const pilotsList = document.getElementById("pilots-list");

const listPixelLength = pilotsList.offsetWidth;
const windowWidth = window.innerWidth;
const maxListPosition = -(listPixelLength - 1050);

let listPosition = 0;

previousCarouselBtn.addEventListener("click", () => {
    if (listPosition < 0) {
        listPosition = listPosition + 1050;
    }
    pilotsList.style.transform = `translateX(${listPosition}px)`;
});

nextCarouselBtn.addEventListener("click", () => {
    if (listPosition > maxListPosition) {
        listPosition = listPosition - 1050;
    }
    pilotsList.style.transform = `translateX(${listPosition}px)`;
});


// Fonctions de tri

function victoiresComparateur(a, b) {
	valeur1=parseInt(a.dataset.victoires)
	valeur2=parseInt(b.dataset.victoires)
	if ( valeur1 > valeur2) {
		return -1;
	}
	if (valeur1 < valeur2) {
		return 1;
	}
    return 0;
}

function trierVictoires() {
	let indexes = document.querySelectorAll("[data-victoires]");
	let indexesArray = Array.from(indexes);
	let sorted = indexesArray.sort(victoiresComparateur);
    console.log(sorted)
	sorted.forEach((e) => {
		var nbrCourse = e.dataset.victoires
		var texteCourse = e.getElementsByClassName("pilot-carsousel-info-bouton-p")
		var imageRectangle = e.getElementsByClassName("pilot-carsousel-info-bouton-img")
		var imagePosition = e.getElementsByClassName("pilot-carsousel-place")
		texteCourse[0].classList.remove("hidden")
		imageRectangle[0].classList.remove("hidden")
		imagePosition[0].classList.add("hidden")
		texteCourse[0].innerHTML=nbrCourse
		document.querySelector("#pilots-list").appendChild(e);
	});
}

function podiumsComparateur(a, b) {
	valeur1=parseInt(a.dataset.podiums)
	valeur2=parseInt(b.dataset.podiums)
	if (valeur1 > valeur2) {
		return -1;
	}
	if (valeur1 < valeur2) {
		return 1;
	}
    return 0;
}

function trierPodiums() {
    console.log("test");
	let indexes = document.querySelectorAll("[data-podiums]");
	let indexesArray = Array.from(indexes);
	let sorted = indexesArray.sort(podiumsComparateur);
	sorted.forEach((e) => {
		var nbrCourse = e.dataset.podiums
		var texteCourse = e.getElementsByClassName("pilot-carsousel-info-bouton-p")
		var imageRectangle = e.getElementsByClassName("pilot-carsousel-info-bouton-img")
		var imagePosition = e.getElementsByClassName("pilot-carsousel-place")
		texteCourse[0].classList.remove("hidden")
		imageRectangle[0].classList.remove("hidden")
		imagePosition[0].classList.add("hidden")
		texteCourse[0].innerHTML=nbrCourse
		document.querySelector("#pilots-list").appendChild(e);
	});
}

function coursesComparateur(a, b) {
	valeur1=parseInt(a.dataset.courses)
	valeur2=parseInt(b.dataset.courses)
	if (valeur1 > valeur2) {
		return -1;
	}
	if (valeur1 < valeur2) {
		return 1;
	}
    return 0;
}

function trierCourses() {
	let indexes = document.querySelectorAll("[data-courses]");
	let indexesArray = Array.from(indexes);
	let sorted = indexesArray.sort(coursesComparateur);
	console.log(sorted)
	sorted.forEach((e) => {
		var nbrCourse = e.dataset.courses
		var texteCourse = e.getElementsByClassName("pilot-carsousel-info-bouton-p")
		var imageRectangle = e.getElementsByClassName("pilot-carsousel-info-bouton-img")
		var imagePosition = e.getElementsByClassName("pilot-carsousel-place")
		texteCourse[0].classList.remove("hidden")
		imageRectangle[0].classList.remove("hidden")
		imagePosition[0].classList.add("hidden")
		texteCourse[0].innerHTML=nbrCourse
	
		document.querySelector("#pilots-list").appendChild(e);
	});

}

function actualiserPage() {
	location.reload(); 
}
