// DOM selector
const cardsCon = document.getElementById('cards-container')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const curEl = document.getElementById('current')
const showEl = document.getElementById('show')
const hideEl = document.getElementById('hide')
const qustEl = document.getElementById('question')
const ansEl = document.getElementById('answer')
const addQuBtn = document.getElementById('add-question')
const clrBtn = document.getElementById('clear')
const addCon = document.getElementById('add-container')

// Keep tracl of the current card
let curActCd = 0 // show this card

// Store DOM cards array
const cardsEl = []

// Store cards in local storage
const cards = getCardsData()

// Create Cards
function createCards() {
    // loop through data and creating card array
    cardsData.forEach((dat, idx) => createCards(dat, idx))
}

// Create single card in DOM
function createCard() {
    const card = document.createElement('div')

    card.classList.add('card')
    if (idx === 0) {
        card.classList.add('active')
    }

    card.innerHTML = `
    <div class="inner-card">
        <div class="inner-card-front">
            <p>
                ${data.question}
            </p>
        </div>
        <div class="inner-card-back">
            <p>
                ${data.answer}
            </p>
        </div>
    </div>`

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    // Add to DOM cards
    cardsEl.push(card)
    cardsContainer.appendChild(card)
    updateCurrentText()
}

// Show number of cards
function updateCurrentText() {
    curEl.innerText = `${curActCd + 1}/${cardsEl.length}` 
}

// Get cards from local storage
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'))
    return cards === null ? [] : cards
}

// Add card to local storage
function setCardsData(cards) {
    // We want to turn it to a JSON string
    localStorage.setItem('cards', JSON.stringify(cards))
}