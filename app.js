const board = document.querySelector('#board')
const colors = ['#FF00FF', '#FF0000', '#FFFF00', '#00FFFF', '#0000FF', '#000080']
const SQUARES_NUMBER = 460

for (let i = 0; i < SQUARES_NUMBER; i++) {
   const square = document.createElement('div')
   square.classList.add('square')

   square.addEventListener('mouseover', () =>
      setColor(square))

   square.addEventListener('mouseleave', () =>
      removeColor(square))

   board.append(square)
}

function setColor(element) {
   const color = getRundomColor()
   element.style.backgroundColor = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.backgroundColor = '#1d1d1d'
   element.style.boxShadow = `0 0 2px #000`
}

function getRundomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}
