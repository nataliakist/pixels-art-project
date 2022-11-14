const randomColor = () => {
	let r = parseInt(Math.random() * 255);
	let g = parseInt(Math.random() * 255);
	let b = parseInt(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const colors = document.querySelectorAll('.color')
const button = document.querySelector('#button-random-color')
const pixels = document.querySelectorAll('.pixel')
colors[0].style.backgroundColor = 'black';
for(let i = 1; i<colors.length; i++){
  colors[i].style.backgroundColor = randomColor();
}
let selectedColor = 'rgb(0,0,0)';


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

const colorirQuadro = (salvaArray) => {
  colors[0].style.backgroundColor = 'black';
  for(let i = 1; i < colors.length; i += 1){
    colors[i].style.backgroundColor = salvaArray[i];
  }
  localStorageSave();
}

const localStorageGet = () => {
  const salvaArray = JSON.parse(localStorage.getItem('colorPalette'));
  for (let index = 0; index < colors.length; index++) {
    colors[index].style.backgroundColor = salvaArray[index];
  }
}

const pixelBoard = () => {
  const board = document.getElementById('pixel-board');
  for(let i = 0; i < 5; i += 1){
    for(let i2 = 0; i2 < 5; i2 += 1){
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      board.appendChild(pixel);
    }
  }
}
pixelBoard()

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
  })
  }
}
paintingPixels();

const clearBoardButton = document.querySelector('#clear-board')
clearBoardButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel')
	for(let pixel of pixels){
		pixel.style.backgroundColor = 'white';
	}
});

window.onload = function () {
  const salvaArray = JSON.parse(localStorage.getItem('colorPalette'));
  if (salvaArray !== null){
    localStorageGet();
  }
}



