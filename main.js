const state = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

const X = 1
const O = 2
const cellValues = { 0: '', 1: 'X', 2: 'O' }
let playerTurn = X
let winner = false

const drawBoard = () => {
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      const col = state[i][j]
      const cell = document.querySelector(
        `table tr:nth-child(${i + 1}) td:nth-child(${j + 1}).clicked`
      )
      cell.textContent = cellValues[col]
    }
  }
  document.querySelector('.message').textContent = `It's ${cellValues[playerTurn]}'s turn.`
  if (winner) {
    let hiddenModal = document.querySelector('.modal.hidden')
    if (hiddenModal) {
      hiddenModal.className = 'modal'
    }
    document.querySelector('.modal h1').textContent = `${cellValues[playerTurn]}'s Win !!!`
    let reset = document.querySelector('button')
    reset.addEventListener('click', () => {
      window.location.reload(true)
    })
  }
}

const play = (row, col) => {
  if (state[row][col] === 0) {
    state[row][col] = playerTurn
    if (checkForWinner()) {
      winner = true
      drawBoard()
      console.log(playerTurn + ' WINS !')
    }
    else playerTurn = playerTurn === X ? O : X
  }
}

const checkForWinner = () => {
  let arr = [
    [state[0][0], state[0][1], state[0][2]],
    [state[1][0], state[1][1], state[1][2]],
    [state[2][0], state[2][1], state[2][2]],
    [state[0][0], state[1][0], state[2][0]],
    [state[0][1], state[1][1], state[2][1]],
    [state[0][2], state[1][2], state[2][2]],
    [state[0][0], state[1][1], state[2][2]],
    [state[0][2], state[1][1], state[2][0]]
  ]

  for (let i = 0; i < arr.length; i++) {
    let won = arr[i].every(function (m) { return m === playerTurn })
    if (won) {
      return true
    }
  }
}

const init = () => {
  const rows = document.querySelectorAll('tr')
  for (let i = 0; i < rows.length; i++) {
    const cols = rows[i].querySelectorAll('td')
    for (let j = 0; j < cols.length; j++) {
      cols[j].addEventListener('click', () => {
        play(i, j)
        drawBoard()
      })
    }
  }
  drawBoard()
}

document.addEventListener('DOMContentLoaded', init)
