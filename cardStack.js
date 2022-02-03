// requirements: 
// a container element that holds the cards
// an element that calls the moveToBack function on click





function cardStack(options) {
    let defaultOptions = {
        cardContainer: ".card-slider",
        nextCard: ".card-slider",
        cards: ".card",
        cardHeight: "350px",
        cardWidth: "340px"   
    }

    options = { ...defaultOptions, ...options };

    let _this = this;
    // let cards = [];

    this.init = function () {
        document.querySelector(options.cardContainer).classList += " cardStack-container";
        
        this.prepareControls();

    }
    this.prepareControls = function () {
        const nextBtn = document.querySelector(options.nextCard);
        nextBtn.className += " cardStack-next";
        nextBtn.addEventListener("click", function () { 
            _this.next(); 
        });
    }

    this.next = function () {
        // get all current cards
        let cards = document.querySelectorAll(options.cards);
        // select top card
        let topCard = cards[cards.length - 1];
        // clone top card 
        let clone = topCard.cloneNode(true);
        // fade out top card
        topCard.classList.add('card--fade');
        topCard.remove();
        // add clone card to front of list
        document.querySelector('.cards').prepend(clone);
    }
    this.init();
}

