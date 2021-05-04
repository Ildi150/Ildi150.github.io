const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissor = document.getElementById("scissor")

const choiceRock = document.getElementById("choiceRock")
const choicePaper = document.getElementById("choicePaper")
const choiceScissor = document.getElementById("choiceScissor")

const gameResult = document.getElementById("gameResult")
const game = document.getElementById("game")

const wonText = document.getElementById("won")
const lostText = document.getElementById("lost")

const continueButton = document.getElementById("continue")
continueButton.addEventListener('click', start)

rock.addEventListener('click', function() {handleClick(rock)})
paper.addEventListener('click',function() { handleClick(paper)})
scissor.addEventListener('click', function() {handleClick(scissor)})

let won = 0
let lost = 0

start()

function start() {
    gameResult.classList.remove("show")
    game.classList.remove("dontshow")
    choiceRock.classList.remove("show")
    choicePaper.classList.remove("show")
    choiceScissor.classList.remove("show")
}

function handleClick(e){
    console.log(won)
    let yourChoice = e.id
    switch(yourChoice){
        case "rock":
            choiceRock.classList.add("show")
            break
        case "paper":
            choicePaper.classList.add("show")
            won = won + 1
            break
        case "scissor":
            choiceScissor.classList.add("show")
            lost++
            break
    }
    gameResult.classList.add("show")
    game.classList.add("dontshow")
    wonText.innerText = "Won: " + won
    lostText.innerText = "Lost: " + lost
}