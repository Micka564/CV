document.addEventListener('DOMContentLoaded', () => {
    const slide = ["site eval.webp", "site eval 2.webp", "site eval 3.webp"];
    document.getElementById('precedent').addEventListener('click', () => ChangeSlide(-1));
    document.getElementById('suivant').addEventListener('click', () => ChangeSlide(1));

    /**
     * Texte de mes slides à afficher
     */
    const slideTexts = [
        'Ce site one page a été réaliser dans le cadre d\'une évaluation blanche sur une période de 7h en full HTML & CSS.',
        'Ce site one page a été réaliser dans le cadre d\'une évaluation blanche sur une période de 7h en full HTML & CSS.',
        'Ce site one page a été réaliser dans le cadre d\'une évaluation blanche sur une période de 7h en full HTML & CSS. '
    ];

    /**
     * Lien de mes slides à afficher
     */
    const slideLinks = [
        'portfolio/site/dance/index.html',
        'portfolio/site/osteo/index.html',
        'portfolio/site/Tripe/index.html'
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


    function ChangeSlide(sens) {
        numero = ((numero + sens) + slide.length) % slide.length;
        document.getElementById("slide").src = "img/" + slide[numero];
        slideTextElement.innerText = slideTexts[numero];
        slideLinkElement.href = slideLinks[numero];
    }

    setInterval(() => ChangeSlide(1), 4.5 * 1000);
});

