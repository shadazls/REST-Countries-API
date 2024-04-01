// Sélectionner l'élément d'entrée
const searchInput = document.getElementById('search-country');

// Ajouter un écouteur d'événements pour l'événement "input"
searchInput.addEventListener('input', function(event) {
    // Récupérer le texte saisi dans l'entrée et le convertir en minuscules
    const searchText = searchInput.value.toLowerCase();

    // Sélectionner tous les éléments h2
    const h2Elements = document.querySelectorAll('.grid-item h2');

    // Parcourir tous les éléments h2
    h2Elements.forEach(h2 => {
        // Récupérer le texte de l'élément h2 et le convertir en minuscules
        const h2Text = h2.textContent.toLowerCase();

        // Vérifier si le texte saisi correspond au texte de l'élément h2
        if (h2Text.includes(searchText)) {
            // Afficher l'élément h2
            h2.closest('.grid-item').style.display = 'block';
        } else {
            // Masquer l'élément h2
            h2.closest('.grid-item').style.display = 'none';
        }
    });
});
