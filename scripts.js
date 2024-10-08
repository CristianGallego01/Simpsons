const url = "https://thesimpsonsquoteapi.glitch.me/quotes"
const containerCards = document.querySelector(".cards-container")
const btnGenerateCard = document.querySelector("#generate-card")
const btnGenerateMultiple = document.querySelector("#generate-multiple")
const searchCharacter =document.querySelector("#input-character")

const getCharacter =async () =>{

    const response = await fetch(url)
    const data = await response.json()
    makeCharacter(data[0])

}
const generateCards = () => {
    let counter =parseInt(prompt("cuantas cartas desea generar"))
    for (let index = 1; index <= counter; index++) {
        getCharacter()
        
    }
}

const makeCharacter = (myCharacter) => {

    const card = document.createElement("div")
    card.classList.add("card")

    const imgCard = document.createElement("img")
    imgCard.src = myCharacter.image
    imgCard.alt = myCharacter.character

    const cardContent = document.createElement("div")
    cardContent.classList.add("card-content")

    const nameCard = document.createElement("h3")
    nameCard.textContent = myCharacter.character

    const quoteCard = document.createElement("p")
    quoteCard.textContent = myCharacter.quote

    card.appendChild(imgCard)
    card.appendChild(cardContent)

    cardContent.appendChild(nameCard)
    cardContent.appendChild(quoteCard)

    containerCards.appendChild(card)
}



searchCharacter.addEventListener ('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase()
    const charactersContainer = document.getElementById('cards-container')
    const characters = Array.from(charactersContainer.children)

    console.log(characters)

    characters.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase()
    card.style.display = title.includes(searchTerm) ? 'flex' : 'none'
    })
})

btnGenerateCard.addEventListener("click",getCharacter)
btnGenerateMultiple.addEventListener("click",generateCards)



