// Sélection de l'élément #theme-switcher
const themeSwitcher = document.getElementById('theme-switcher');

// Ajout d'un gestionnaire d'événements pour le click sur #theme-switcher
themeSwitcher.addEventListener('click', function() {
    // Récupération de l'élément body
    const body = document.body;
    
    // Vérification de la classe actuelle du body
    if (body.classList.contains('dark-theme')) {
        // Si le body a la classe dark-theme, on la supprime et on ajoute light-theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        // Sinon, on supprime light-theme et on ajoute dark-theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }
});