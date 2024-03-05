// pour éviter qu'il y est un crash lors du chargement du js dans le html
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne toutes les images avec la classe 'gauche'
    var images = document.querySelectorAll('.gauche img');

    // Ajoute un écouteur d'événement pour chaque image
    images.forEach(function(image) {
        // Ajoute un effet de survol sur chaque image
        image.addEventListener('mouseover', function() {
            // Change la taille de l'image au survol
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        // Rétablit la taille normale de l'image lorsque le survol se termine
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Sélectionne tous les titres de section h2
    var titresSections = document.querySelectorAll('h2');

    // Ajoute un écouteur d'événement pour chaque titre de section
    titresSections.forEach(function(titre) {
        // Ajoute un effet de changement de couleur de fond au survol
        titre.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightgray';
            this.style.transition = 'background-color 0.3s ease';
        });

        // Rétablit la couleur de fond normale lorsque le survol se termine
        titre.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'initial';
        });
    });

    var selectElement = document.getElementById('filterSelect'); // Sélectionne l'élément de sélection
    var avions = document.querySelectorAll('.avion'); // Sélectionne tous les éléments d'avion

    // Ajoute un écouteur d'événement pour le changement de sélection
    selectElement.addEventListener('change', function() {
        var selectedValue = selectElement.value; // Obtient la valeur sélectionnée

        // Parcourt tous les avions et les affiche ou les cache en fonction de la sélection
        avions.forEach(function(avion) {
            if (selectedValue === 'tous' || avion.classList.contains(selectedValue)) {
                avion.style.display = 'block'; // Affiche l'avion
            } else {
                avion.style.display = 'none'; // Cache l'avion
            }
        });
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien

            var targetId = this.getAttribute('href'); // Récupère l'ID de la cible du lien
            var targetElement = document.querySelector(targetId); // Sélectionne l'élément cible

            if (targetElement) {
                var offsetTop = targetElement.offsetTop; // Récupère la position verticale de l'élément cible
                var scrollOptions = {
                    top: offsetTop,
                    behavior: 'smooth' // Défilement en douceur
                };

                window.scrollTo(scrollOptions); // Défilement vers l'élément cible
            }
        });
    });

    // Sélectionne l'élément contenant votre nom
    var nomElement = document.querySelector('.nom');

    // Ajoute un écouteur d'événement pour le clic sur votre nom
    nomElement.addEventListener('click', function() {
        // Sélectionne l'élément image (GIF)
        var gifElement = document.getElementById('gif');
        
        // Affiche le GIF en changeant son style
        gifElement.style.display = 'block';
    });
});
