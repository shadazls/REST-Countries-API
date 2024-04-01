// Création d'une fonction pour effectuer la requête à l'API REST Countries
async function fetchRegions() {
    try {
        // Effectuer la requête GET à l'API REST Countries pour récupérer la liste des régions
        const response = await fetch('https://restcountries.com/v3.1/all');
        console.log("test")
        
        // Vérifier si la réponse est ok (statut HTTP 200)
        if (!response.ok) {
            throw new Error('Failed to fetch regions');
        }
        
        // Récupérer les données de la réponse
        const data = await response.json();

        // Extraire toutes les régions uniques des données récupérées
        const regions = [...new Set(data.map(country => country.region))];

        // Sélectionner l'élément <select> par son ID
        const selectElement = document.getElementById('regions-select');

        // Créer et ajouter une option pour chaque région
        regions.forEach(region => {
            const option = document.createElement('option');
            option.text = region || 'No Region'; // Utiliser 'No Region' si la région est null
            option.value = region || 'No Region'; // Utiliser 'No Region' si la région est null
            selectElement.add(option);
        });

    } catch (error) {
        console.error('Error fetching regions:', error);
    }
}

// Appeler la fonction fetchRegions pour récupérer les régions et les ajouter au select
fetchRegions();