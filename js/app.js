/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

// 1) Define the required variables used to track the state of the game.
let state = {
    boredom: 0,
    hunger: 0,
    sleepiness: 0,
}

let timer
let gameOver



/*------------------------ Cached Element References ------------------------*/

// 2) Store cached element references.
const boredomStatEl = document.querySelector('#boredom-stat')
const hungerStatEl = document.querySelector('#hunger-stat')
const sleepStatEl = document.querySelector('#sleepiness-stat')

const playBtnEl = document.querySelector("#play")
const feedBtnEl = document.querySelector("#feed")
const sleepBtnEl = document.querySelector("#sleep")

const gameMessageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#restart')

/*-------------------------------- Functions --------------------------------*/

const getRandomInt = () => {
    return Math.floor(Math.random() * 4)
}

// 4) The state of the game should be rendered to the user.
const render = () => {
    // if the game is not over
    // display the updated stats in the browser
    boredomStatEl.textContent = state.boredom
    hungerStatEl.textContent = state.hunger
    sleepStatEl.textContent = state.sleepiness
    
    if(gameOver) {
        resetBtnEl.classList.remove("hidden")
        gameMessageEl.classList.remove("hidden")
        clearInterval(timer)
    }
}

const updateStates = () => {
    // increment each of the stats by a random number
    state.boredom += getRandomInt()
    state.hunger += getRandomInt()
    state.sleepiness += getRandomInt()
}

// 5) Handle the game over logic. 
const checkGameOver = () => {
    // check if each stat is > 9, if so then set gameOver to true
    if (state.boredom > 9 || state.hunger > 9 || state.sleepiness > 9){
        gameOver = true
    } 

}

const runGame = () => {
    updateStates()
    checkGameOver()
    render()
}

// 3) Upon loading, the game state should be initialized, and a function should 
//    be called to render this game state.
const init = () => {
    console.log("game starting")
    resetBtnEl.classList.add("hidden")
    state.boredom = 0
    state.hunger = 0
    state.sleepiness = 0
    timer = setInterval(runGame, 2000)
    gameOver = false
    render()
}

init()


// 6) Handle each instance of a player clicking a button with the use of a 
//    `handleClick()` function.
const playBtnClick = () => {
    state.boredom = 0
    render()
}
const feedBtnClick = () => {
    state.hunger = 0
    render()
}
const sleepBtnClick = () => {
    state.sleepiness = 0
    render()
}


// 7) Create reset functionality.
// rolled into the reset button event listener.

/*----------------------------- Event Listeners -----------------------------*/

playBtnEl.addEventListener('click', playBtnClick)
feedBtnEl.addEventListener('click', feedBtnClick)
sleepBtnEl.addEventListener('click', sleepBtnClick)

resetBtnEl.addEventListener('click', init)




