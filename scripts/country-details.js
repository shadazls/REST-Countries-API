// Fonction pour gérer la redirection vers la page de détails du pays
function redirectToCountryDetails(countryName) {
    // Effectuer une requête à REST Countries pour récupérer les informations du pays
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch country details');
            }
            return response.json();
        })
        .then(countryData => {
            // Stocker les informations du pays dans localStorage pour les récupérer sur la page details.html
            localStorage.setItem('countryDetails', JSON.stringify(countryData));

            // Rediriger l'utilisateur vers la page details.html
            window.location.href = 'details.html';
        })
        .catch(error => {
            console.error('Error fetching country details:', error);
        });
}

// Sélectionner tous les éléments .grid-item
// Ajouter une attente d'une seconde avant d'exécuter le code suivant
setTimeout(() => {
    const gridItems = document.querySelectorAll('.grid-item');
    console.log('Grid items:', gridItems);
    
    // Ajouter un écouteur d'événements à chaque élément .grid-item
    gridItems.forEach(gridItem => {
        console.log('TTEEEEEEEEEEEEEEEST')
        gridItem.addEventListener('click', function() {
            // Récupérer le nom du pays à partir du texte de l'élément h2
            const countryName = this.querySelector('h2').textContent;
            console.log('Country name:', countryName);
            
            // Rediriger vers la page de détails du pays avec le nom du pays
            redirectToCountryDetails(countryName);
        });
    });
}, 1000); // Attendre une seconde (1000 millisecondes) avant d'exécuter le code



