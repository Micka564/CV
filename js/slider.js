document.addEventListener('DOMContentLoaded', () => {
    const slide = ["site eval.webp", "site eval 2.webp", "site eval 3.webp","finalevalccp3.webp","v2.webp","vidéo de noël.webp","sitecrimsontrail.webp"];
    document.getElementById('precedent').addEventListener('click', () => ChangeSlide(-1));
    document.getElementById('suivant').addEventListener('click', () => ChangeSlide(1));

    /**
     * Texte de mes slides à afficher
     */
    const slideTexts = [
        'le site one page sur Dancing contest est un faux site qui a été réaliser dans le cadre d\'une évaluation blanche sur une période de 7h en full HTML & CSS.',
        'Ce site one page sur un faux Cabinet Beaubourg a été réaliser dans le cadre d\'une évaluation blanche sur une période de 7h en full HTML & CSS.',
        'Le site MYTRIPE est un site one page qui a été réaliser dans le cadre d\'une évaluation blanche sur une période de 7h en full HTML & CSS.',
        'Le site Archidesign a été réalisé dans le cadre de l\'évaluation finale du CCP3 de la formation CDUI RNCP6. C\'est un site one page en HTML et CSS',
        'Ce projet est un GIF fait pour l\'EVS Partages en Bray afin de souhaiter Joyeux Noël par e-mail aux habitués de l\'EVS.',
        'Ce projet a été fait pour l\'EVS Partages en Bray afin de se remémorer en image le goûter de Noël 2025.',
        'Crimsontrail est un projet fictif dans le but d\'être présenté à l\'examen final de la formation CDUI RNCP 6.'
    ];

    /**
     * Lien de mes slides à afficher
     */
    const slideLinks = [
        'portfolio/site/dance/index.html',
        'portfolio/site/osteo/index.html',
        'portfolio/site/Tripe/index.html',
        'portfolio/site/evalfinalccp3/www/index.html',
        'portfolio/evs/gif/v2.gif',
        'portfolio/evs/vid/vidnoël.mp4',
        'https://crimsontrail.fr/',
    ];
    let numero = 0;

    /**
     * On récupère l'élément html p qui affichera mon text de slide
     */
    const slideTextElement = document.querySelector('#infos > p');
    /**
     * On affiche le premier text dans la slide
     */
    slideTextElement.innerText = slideTexts[0];

    /**
     * On récupère l'élément html a qui affichera mon lien de slide
     */
    const slideLinkElement = document.querySelector("#infos > a");
    /**
     * On applique le premier lien de mon tableau dans l'élément a
     */
    slideLinkElement.href = slideLinks[0];

    // Variables pour l'animation smooth
    let currentOpacity = 1;
    let targetOpacity = 1;
    let currentTranslate = 0;
    let targetTranslate = 0;
    let isAnimating = false;
    const slideElement = document.getElementById("slide");

    function animateSlide() {
        // Interpolation douce (easing)
        currentOpacity += (targetOpacity - currentOpacity) * 0.15;
        currentTranslate += (targetTranslate - currentTranslate) * 0.15;

        // Application des styles
        slideElement.style.opacity = currentOpacity;
        slideElement.style.transform = `translateX(${currentTranslate}px)`;

        // Continue l'animation si pas encore arrivé à destination
        if (Math.abs(targetOpacity - currentOpacity) > 0.01 || Math.abs(targetTranslate - currentTranslate) > 0.5) {
            requestAnimationFrame(animateSlide);
        } else {
            // Animation terminée
            currentOpacity = targetOpacity;
            currentTranslate = targetTranslate;
            slideElement.style.opacity = currentOpacity;
            slideElement.style.transform = `translateX(${currentTranslate}px)`;
            isAnimating = false;
        }
    }

    function ChangeSlide(sens) {
        if (isAnimating) return; // Empêche les clics multiples pendant l'animation
        
        isAnimating = true;
        
        // Animation de sortie (vers la gauche si suivant, vers la droite si précédent)
        targetOpacity = 0;
        targetTranslate = sens > 0 ? -100 : 100;
        
        requestAnimationFrame(animateSlide);
        
        // Après l'animation de sortie, on change l'image et on anime l'entrée
        setTimeout(() => {
            numero = ((numero + sens) + slide.length) % slide.length;
            document.getElementById("slide").src = "img/" + slide[numero];
            slideTextElement.innerText = slideTexts[numero];
            slideLinkElement.href = slideLinks[numero];
            
            // Prépare l'entrée depuis l'autre côté
            currentTranslate = sens > 0 ? 100 : -100;
            slideElement.style.transform = `translateX(${currentTranslate}px)`;
            
            // Animation d'entrée
            targetOpacity = 1;
            targetTranslate = 0;
            
            requestAnimationFrame(animateSlide);
        }, 300); // Délai correspondant à l'animation de sortie
    }

    setInterval(() => ChangeSlide(1), 10 * 1000);
});