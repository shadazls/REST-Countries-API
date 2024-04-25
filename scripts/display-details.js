// Récupérer les informations du pays depuis le localStorage
const countryDetails = JSON.parse(localStorage.getItem('countryDetails'));

// Sélectionner l'élément où afficher les informations du pays
const countryDetailsContainer = document.getElementById('country-details-container');
const countryFlagContainer = document.querySelector('.country-flag-container');
const countryDetailsInformation = document.querySelector('#country-details-informations')

// Créer un élément <img> pour afficher le drapeau
const flagImg = document.createElement('img');
flagImg.src = countryDetails[0].flags.svg; // Utilisez l'URL du drapeau du pays depuis les données récupérées
flagImg.alt = `${countryDetails[0].name.common} flag`;
flagImg.classList.add('h-2/3', 'w-auto'); // Ajouter des classes pour le dimensionnement et la marge droite

// Ajouter l'élément <img> au début du conteneur des détails du pays
countryFlagContainer.appendChild(flagImg);

// Créer un élément div pour les informations du pays
const detailsInformationDiv = document.createElement('div');
detailsInformationDiv.id = 'country-details-informations';

// Ajouter l'élément div au conteneur des détails du pays
countryDetailsContainer.appendChild(detailsInformationDiv);

// Créer des éléments <p> pour chaque propriété spécifiée
const properties = [
    { label: 'Native Name', key: 'altSpellings', alt: 'AltSpellings' },
    { label: 'Population', key: 'population' },
    { label: 'Region', key: 'region' },
    { label: 'Sub Region', key: 'subregion' },
    { label: 'Capital', key: 'capital' },
    { label: 'Top Level Domain', key: 'tld' },
    { label: 'Currencies', key: 'currencies' },
    { label: 'Languages', key: 'languages' },
    { label: 'Border Countries', key: 'borders' }
];

const countryName = countryDetails[0].name.common;
const countryHeader = document.createElement('h2');
countryHeader.textContent = countryName;
countryHeader.classList.add('font-bold', 'text', 'text-4xl', 'mb-4');
countryDetailsInformation.appendChild(countryHeader);

properties.forEach(property => {
    const propertyParagraph = document.createElement('p');
    propertyParagraph.classList.add('text', 'text-md');
    const propertyValue = countryDetails[0][property.key];

    // Si la valeur de la propriété est un tableau, convertissez-le en une chaîne de caractères séparée par des virgules
    const formattedValue = Array.isArray(propertyValue) ? propertyValue.join(', ') : propertyValue;

    // Construire le texte pour le paragraphe
    const text = `${property.label}: ${formattedValue}`;

    propertyParagraph.textContent = text;

    // Ajouter l'élément <p> au conteneur des informations du pays
    countryDetailsInformation.appendChild(propertyParagraph);
});
