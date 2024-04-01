// Fonction pour gérer la redirection vers une autre page
function redirectToPage(elementId, pageUrl) {
    const element = document.getElementById(elementId);
    if (element) {
        element.addEventListener('click', function() {
            window.location.href = pageUrl;
        });
    } else {
        console.error(`Element with id "${elementId}" not found.`);
    }
}

// Appeler la fonction pour le bouton "Back"
redirectToPage('button-back', 'index.html');

// Appeler la fonction pour le titre de l'en-tête
redirectToPage('header-title', 'index.html');