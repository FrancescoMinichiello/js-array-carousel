// Fase di preparazione

const sources = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp']

//Recupero gli elementi dal dom

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');
//genero le immagini da JS

let imgs = '';

for (let i = 0; i < sources.length; i++) {
    const currentElement = sources[i];
    imgs += `<img alt="landscape-${i + 1}" src="${sources[i]}">`;
}

carouselGallery.innerHTML = imgs;

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

    //controlliamo se siamo fuori array

    if (currentActiveIndex === images.length) {
        currentActiveIndex = 0;
    }

    //Metto la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})



//Reagiamo al prev
prevButton.addEventListener('click', function () {
    //togliere la classe active all'immagine attualmente attiva
    images[currentActiveIndex].classList.remove('active');

    //Decremento l'indice
    currentActiveIndex--;

    if (currentActiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }

    //Metto la classe active all'immagine successiva
    images[currentActiveIndex].classList.add('active');
})