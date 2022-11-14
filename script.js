const randomColor = () => {
	let r = parseInt(Math.random() * 255);
	let g = parseInt(Math.random() * 255);
	let b = parseInt(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const colors = document.querySelectorAll('.color')
const button = document.querySelector('#button-random-color')
const pixels = document.querySelectorAll('.pixel')
const board = document.getElementById('pixel-board');
colors[0].style.backgroundColor = 'black';
for(let i = 1; i<colors.length; i++){
  colors[i].style.backgroundColor = randomColor();
}
let selectedColor = 'rgb(0,0,0)';

window.onload = function () {
  const salvaTam = localStorage.getItem('boardSize');
  if (salvaTam !== null) {
    pixelBoard(salvaTam);
  } else {
    pixelBoard(5);
  }
 
  const salvaArray = JSON.parse(localStorage.getItem('colorPalette'));
  if (salvaArray !== null){
    localStorageGet();
  }
  
  const salvaArrayPixel = JSON.parse(localStorage.getItem('pixelBoard'));
  if (salvaArrayPixel !== null){
    localStorageGetDraw();
  }
}

const initialPalette = () => {
  colors[0].style.backgroundColor = 'black';
  for(let i = 1; i < colors.length; i += 1){
    colors[i].style.backgroundColor = randomColor();
  }
  localStorageSave();
}

button.addEventListener('click', initialPalette)

const localStorageSave = () => {
  const arrayRandomColor = [];
  for (let i = 0; i < colors.length; i += 1){
    arrayRandomColor.push(colors[i].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(arrayRandomColor))
}

const localStorageGet = () => {
  const salvaArray = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < colors.length; index++) {
    colors[index].style.backgroundColor = salvaArray[index];
  }
}

const chooseColor = () => {
  const colors = document.querySelectorAll('.color')
  for (let color of colors) {
    color.addEventListener('click', (event) => {
      selectedColor = color.style.backgroundColor;
      for (let index = 0; index < colors.length; index++) {
        colors[index].classList.remove('selected');
      }
      event.target.classList.add('selected')
    })
  }
}
chooseColor();

const paintingPixels = () => {
  const pixels = document.querySelectorAll('.pixel')
  for (let pixel of pixels){
  pixel.addEventListener('click', (event) => {
    event.target.style.backgroundColor = selectedColor;
    localStorageSaveDraw();
  })
  }
}

const clearBoardButton = document.querySelector('#clear-board')
clearBoardButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel')
	for(let pixel of pixels){
		pixel.style.backgroundColor = 'white';
	}
  localStorageSaveDraw();
});

const pixelBoard = (tamQuadro) => {
  const board = document.getElementById('pixel-board');
  board.style.gridTemplateColumns = `repeat(${tamQuadro}, 0fr)`;
  for(let i = 0; i < tamQuadro; i += 1){
    for(let i2 = 0; i2 < tamQuadro; i2 += 1){
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      board.appendChild(pixel);
    }
    localStorage.setItem('boardSize', tamQuadro)
    }
    paintingPixels();
  }

const inputValue = (valorInput) => {
  if (valorInput < 5) {
    valorInput = 5
  } else if (valorInput > 50){
    valorInput = 50
  }
  pixelBoard(valorInput)
}

const boardGenerator = document.querySelector('#generate-board')
boardGenerator.addEventListener('click', () => {
  const input = document.querySelector('#board-size');
  const boardSize = input.value
  if(boardSize === ''){
    alert('Board inválido!');
  } else {
    board.innerHTML = '';
    inputValue(boardSize);
  }
});

const localStorageSaveDraw = () => {
  const pixels = document.querySelectorAll('.pixel')
  const arrayPixelColor = [];
  for (let i = 0; i < pixels.length; i += 1){
    arrayPixelColor.push(pixels[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(arrayPixelColor))
}

const localStorageGetDraw = () => {
  const pixels = document.querySelectorAll('.pixel')
  const salvaArrayPixel = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].style.backgroundColor = salvaArrayPixel[index];
  }
}

