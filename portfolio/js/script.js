window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll pour les liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Données des projets (à personnaliser)
const projectsData = {
    'atelier-binome': {
        title: 'Maquettes Atelier Binôme',
        date: '2024 - 2025',
        image: '../img/Maquettes/Atelier binôme/Atelier Binôme ordinateur.webp',
        description: 'Conception complète de maquettes responsive pour le site Atelier Binôme. Le projet inclut des designs adaptés pour ordinateur, tablette et smartphone. Ceci a été réalisé dans le cadre de l\'examen du CCP1 de la formation CDUI.',
        details: [
            { label: 'Technologies', value: 'Figma' },
            { label: 'Type', value: 'Design UI' },
            { label: 'Durée', value: '7h' },
            { label: 'Responsive', value: 'Desktop, Tablet, Mobile' },
            { label: 'Livrables', value: 'PDF' },
            { label: 'Client', value: 'Atelier Binôme (exam du CCP1 Masolutionformation)' }
        ]
    }
};

// Gérer l'ouverture de l'overlay
document.querySelectorAll('.maquettes').forEach(project => {
    project.addEventListener('click', function() {
        const projectId = this.getAttribute('data-project');
        const projectData = projectsData[projectId];

        if (projectData) {
            document.getElementById('overlayTitle').textContent = projectData.title;
            document.getElementById('overlayDate').textContent = projectData.date;
            document.getElementById('overlayImage').src = projectData.image;
            document.getElementById('overlayDescription').textContent = projectData.description;

            const detailsContainer = document.getElementById('projectDetails');
            detailsContainer.innerHTML = '';
            projectData.details.forEach(detail => {
                const detailItem = document.createElement('div');
                detailItem.className = 'detail-item';
                detailItem.innerHTML = `<strong>${detail.label}</strong><span>${detail.value}</span>`;
                detailsContainer.appendChild(detailItem);
            });

            document.getElementById('projectOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Gérer la fermeture de l'overlay
function closeOverlay() {
    document.getElementById('projectOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.getElementById('closeOverlay').addEventListener('click', closeOverlay);

// Fermer en cliquant à l'extérieur du contenu
document.getElementById('projectOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeOverlay();
    }
});

// Fermer avec la touche Échap
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeOverlay();
    }
});