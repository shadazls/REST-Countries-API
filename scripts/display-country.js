// Fonction pour récupérer les pays en fonction de la région sélectionnée
async function fetchCountriesByRegion(region) {
    try {
        // Si la valeur de la région est "0" ou "1", cela signifie qu'il faut afficher tous les pays, donc on utilise l'URL pour récupérer tous les pays.
        const url = (region === '0' || region === '1') ? 'https://restcountries.com/v3.1/all' : `https://restcountries.com/v3.1/region/${region}`;
        
        // Effectuer la requête GET à l'API REST Countries pour récupérer les pays de la région spécifiée
        const response = await fetch(url);
        
        // Vérifier si la réponse est ok (statut HTTP 200)
        if (!response.ok) {
            throw new Error('Failed to fetch countries by region');
        }
        
        // Récupérer les données de la réponse
        const data = await response.json();
        return data; // Retourner la liste des pays de la région spécifiée

    } catch (error) {
        console.error('Error fetching countries by region:', error);
    }
}

// Fonction pour créer un élément de pays pour chaque pays et les ajouter à la grille
async function createCountryElements() {
    // Récupérer la valeur sélectionnée dans le select
    const regionSelect2 = document.getElementById('regions-select');
    const selectedRegion = regionSelect2.value;

    // Récupérer les pays en fonction de la région sélectionnée
    const countries = await fetchCountriesByRegion(selectedRegion);
    if (!countries) {
        console.error('No countries found for the selected region');
        return;
    }

    // Sélectionner le parent de la grille par sa classe
    const gridParent = document.querySelector('.grid');

    // Effacer les éléments de la grille existants
    gridParent.innerHTML = '';

    // Boucler à travers chaque pays pour créer un élément de pays pour chacun
    countries.forEach(country => {
        // Créer une div pour le pays
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('grid-item', 'rounded-md', 'text-lg', 'hover:scale-110', 'duration-300', 'cursor-pointer', 'drop-shadow-lg');

        // Créer une balise <img> pour le drapeau du pays
        const flagImg = document.createElement('img');
        flagImg.src = country.flags.svg; // Utilisez l'URL du drapeau du pays depuis les données récupérées
        flagImg.alt = `${country.name.common} flag`;
        flagImg.classList.add('w-full', 'h-1/2', 'rounded-t-md'); // La classe w-full prend toute la largeur

        // Ajouter le drapeau au div du pays
        countryDiv.appendChild(flagImg);

        // Créer une balise div pour les informations de base sur le pays
        const basicInfoDiv = document.createElement('div');
        basicInfoDiv.classList.add('p-10');

        // Créer une balise <h2> pour le nom du pays
        const nameHeader = document.createElement('h2');
        nameHeader.textContent = country.name.common;
        nameHeader.classList.add('font-extrabold', 'text-2xl', 'mb-4');

        // Ajouter le nom du pays au div du pays
        basicInfoDiv.appendChild(nameHeader);

        // Créer une balise <p> pour les informations supplémentaires sur le pays
        const population = document.createElement('p');
        population.classList.add('font-light', 'text-md');
        population.innerHTML = `<strong>Population:</strong> ${country.population.toLocaleString()}`; // Formater avec des virgules

        const region = document.createElement('p');
        region.classList.add('font-light', 'text-md');
        region.innerHTML = `<strong>Region:</strong> ${country.region}`;

        const capital = document.createElement('p');
        capital.classList.add('font-light', 'text-md');
        capital.innerHTML = `<strong>Capital:</strong> ${country.capital}`;

        // Ajouter les informations supplémentaires au div du pays
        basicInfoDiv.appendChild(population);
        basicInfoDiv.appendChild(region);
        basicInfoDiv.appendChild(capital);

        // Ajouter le div du pays à la grille parent
        countryDiv.appendChild(basicInfoDiv);
        gridParent.appendChild(countryDiv);
    });
}

// Appeler la fonction pour créer les éléments de pays et les ajouter à la grille
createCountryElements();

// Ajouter un écouteur d'événements pour le changement de valeur du select
const regionSelect = document.getElementById('regions-select');
regionSelect.addEventListener('change', createCountryElements);
