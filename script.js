// Fase di preparazione

//Recupero gli elementi dal dom

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('#carousel img');

//Rendiamo visibile la prima immagine
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');


// Eventi dinamici

//Reagiamo al next
nextButton.addEventListener('click', function () {
    //togliere la classe active all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove('active');
    //incremento l'indice
    currentActiveIndex++;
    //Metto la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})



//Reagiamo al prev
prevButton.addEventListener('click', function () {
    //togliere la classe active all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove('active');

    //Decremento l'indice
    currentActiveIndex--;

    //Metto la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})