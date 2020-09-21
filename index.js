
const card = document.querySelector('.card');
const card2 = document.querySelector('.flips-card .card');
const cardImg = document.querySelector('.card img');
const cardImg2 = document.querySelector('.flips-card .card img');
const cardTitle = document.querySelector('.card-title');
const cardTitle2 = document.querySelector('.flips-card .card-title');
const cardBody = document.querySelector('.card-body');
const cardBody2 = document.querySelector('.flips-card .card-body');
const cardtext = document.querySelector('.card-text');
const cardtext2 = document.querySelector('.flips-card .card-text');

// const cardtext1 = document.querySelector('.card-text-1');
// const cardtext2 = document.querySelector('.card-text-2');
// const cardtext3 = document.querySelector('.card-text-3');
const flipCardBack = document.querySelector('.flip-card-back');
const flipCardBackImg = document.querySelector('.flip-card-back img');
const flipCard = document.querySelector('.flip-card');
// flipCard.style.display = 'none';
const button = document.querySelector('.button')
button.addEventListener('click', fetchData);
// flipCardBackImg.style.boxShadow ="0px 0px 15px 15px #e7cb16"

function fetchData(e){
    let id = Math.floor(Math.random() * 201);
    let num = Math.floor(Math.random() * 201);
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const baseURL2 = `https://pokeapi.co/api/v2/pokemon/${num}`;
    fetch(baseURL)
        .then(function (result) { 
            return result.json(); 
        })
        .then(function (json) {
            console.log(json); 
            displayResults(json);
        })
    fetch(baseURL2)
        .then(function (result) { 
            return result.json(); 
        })
        .then(function (json) {
            console.log(json); 
            displayResults2(json);
        })
        
}

function displayResults(json){
    cardTitle.innerText = json.name.toUpperCase();
    cardImg.src = json.sprites.front_default;
    let id = Math.floor(Math.random() * 11);
    cardtext.innerText = json.moves[id].move.name.toUpperCase();
}
function displayResults2(json){
    cardTitle2.innerText = json.name.toUpperCase();
    cardImg2.src = json.sprites.front_default;
    let id = Math.floor(Math.random() * 11);
    cardtext2.innerText = json.moves[id].move.name.toUpperCase();
}

function flip(event){
	let element = document.querySelector('.flip-card');
	if (element.className === "flip-card" || element.className === "flips-card" ) {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
  let elements = document.querySelector('.flips-card');
	if (elements.className === "flips-card") {
    if(elements.style.transform == "rotateY(180deg)") {
      elements.style.transform = "rotateY(0deg)";
    }
    else {
      elements.style.transform = "rotateY(180deg)";
    }
  }
};





















































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