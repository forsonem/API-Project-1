
const card = document.querySelector('.card');
const cardImg = document.querySelector('.card img');
const cardImage = document.querySelector('.card-img-top');
const cardBody = document.querySelector('.card-body');
const cardTitle = document.querySelector('.card-title');
const cardtext = document.querySelector('.card-text');
const cardtext1 = document.querySelector('.card-text-1');
const cardtext2 = document.querySelector('.card-text-2');
const cardtext3 = document.querySelector('.card-text-3');
const flipCardBack = document.querySelector('.flip-card-back');
const flipCardBackImg = document.querySelector('.flip-card-back img');
const flipCard = document.querySelector('.flip-card');
// flipCard.style.display = 'none';
const button = document.querySelector('.button')
button.addEventListener('click', fetchData);
// flipCardBackImg.style.boxShadow ="0px 0px 15px 15px #e7cb16"

function fetchData(e){
    let id = Math.floor(Math.random() * 201);
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(baseURL)
        .then(function (result) { 
            return result.json(); 
        })
        .then(function (json) {
            console.log(json); 
            displayResults(json);
        })
        
}

function displayResults(json){
    cardTitle.innerText = json.name.toUpperCase();
    cardImg.src = json.sprites.front_default;
    let id = Math.floor(Math.random() * 11);
    cardtext.innerText = json.moves[id].move.name.toUpperCase();
}
function flip() {
    $('flip-card-back').toggleClass('.card');
}



















































    // (function() {
      
    //     var slideContainer = $('.slide-container');
        
    //     slideContainer.slick();
        
    //     $('.clash-card__image img').hide();
    //     $('.slick-active').find('.clash-card img').fadeIn(200);
        
    //     // On before slide change
    //     slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //       $('.slick-active').find('.clash-card img').fadeOut(1000);
    //     });
        
    //     // On after slide change
    //     slideContainer.on('afterChange', function(event, slick, currentSlide) {
    //       $('.slick-active').find('.clash-card img').fadeIn(200);
    //     });
        
    //   })();