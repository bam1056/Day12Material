
let playerTurn = 'X'
let count = 0
let boardArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const playBox = (box) => {
  box.tag.textContent = getPlayer()
  document.querySelector('.message').textContent = `It is currently ${playerTurn}'s Turn`
  boardArray[box.boardX][box.boardY] = playerTurn
  checkForWinner()
}

const getPlayer = () => {
  if (count % 2 === 0) {
    playerTurn = 'X'
  } else {
    playerTurn = 'O'
  }
  count++
  return playerTurn
}

const checkForWinner = () => {

}

const init = () => {
  const box1 = { tag: document.querySelector('.one'), clicked: false, boardX: 0, boardY: 0 }
  const box2 = { tag: document.querySelector('.two'), clicked: false, boardX: 0, boardY: 1 }
  const box3 = { tag: document.querySelector('.three'), clicked: false, boardX: 0, boardY: 2 }
  const box4 = { tag: document.querySelector('.four'), clicked: false, boardX: 1, boardY: 0 }
  const box5 = { tag: document.querySelector('.five'), clicked: false, boardX: 1, boardY: 1 }
  const box6 = { tag: document.querySelector('.six'), clicked: false, boardX: 1, boardY: 2 }
  const box7 = { tag: document.querySelector('.seven'), clicked: false, boardX: 2, boardY: 0 }
  const box8 = { tag: document.querySelector('.eight'), clicked: false, boardX: 2, boardY: 1 }
  const box9 = { tag: document.querySelector('.nine'), clicked: false, boardX: 2, boardY: 2 }
  document.querySelector('.message').textContent = `It is currently ${playerTurn}'s Turn`

  box1.tag.addEventListener('click', () => {
    if (box1.clicked === false) {
      playBox(box1)
      box1.clicked = true
    }
  })
  box2.tag.addEventListener('click', () => {
    if (box2.clicked === false) {
      playBox(box2)
      box2.clicked = true
    }
  })
  box3.tag.addEventListener('click', () => {
    if (box3.clicked === false) {
      playBox(box3)
      box3.clicked = true
    }
  })
  box4.tag.addEventListener('click', () => {
    if (box4.clicked === false) {
      playBox(box4)
      box4.clicked = true
    }
  })
  box5.tag.addEventListener('click', () => {
    if (box5.clicked === false) {
      playBox(box5)
      box5.clicked = true
    }
  })
  box6.tag.addEventListener('click', () => {
    if (box6.clicked === false) {
      playBox(box6)
      box6.clicked = true
    }
  })
  box7.tag.addEventListener('click', () => {
    if (box7.clicked === false) {
      playBox(box7)
      box7.clicked = true
    }
  })
  box8.tag.addEventListener('click', () => {
    if (box8.clicked === false) {
      playBox(box8)
      box8.clicked = true
    }
  })
  box9.tag.addEventListener('click', () => {
    if (box9.clicked === false) {
      playBox(box9)
      box9.clicked = true
    }
  })
}

document.addEventListener('DOMContentLoaded', init)
