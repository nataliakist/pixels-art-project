const randomColor = () => {
	let r = parseInt(Math.random() * 255);
	let g = parseInt(Math.random() * 255);
	let b = parseInt(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const colors = document.querySelectorAll('.color')

const initialPalette = () => {
  colors[0].style.backgroundColor = 'black';
  for(let i = 1; i < colors.length; i += 1){
    colors[i].style.backgroundColor = randomColor();
    localStorageSave();
  }
}

const button = document.querySelector('#button-random-color')
button.addEventListener('click', () => {
  colors[0].style.backgroundColor = 'black';
  for(let i = 1; i < colors.length; i += 1){
    colors[i].style.backgroundColor = randomColor();
    localStorageSave();
  }
});

const localStorageSave = () => {
  const arrayRandomColor = [];
  for (let i = 0; i < colors.length; i += 1){
    arrayRandomColor.push(colors[i].style.backgroundColor)
  }
  localStorage.setItem('randomColors', JSON.stringify(arrayRandomColor))
}

const recolorirQuadro = (salvaArray) => {
  colors[0].style.backgroundColor = 'black';
  for(let i = 1; i < colors.length; i += 1){
    colors[i].style.backgroundColor = salvaArray[i];
  }
}

const localStorageGet = () => {
  const salvaArray = JSON.parse(localStorage.getItem('randomColors'));
  for (let index = 0; index < salvaArray.length; index++) {
    if (salvaArray !== null) {
      recolorirQuadro(salvaArray);
  }
  }
}
localStorageGet();

const pixelChart = () => {
  const chart = document.getElementById('pixel-board');
  for(let i = 0; i < 5; i += 1){
    for(let i2 = 0; i2 < 5; i2 += 1){
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      chart.appendChild(pixel);
    }
  }
}
pixelChart()

const changeClass = (event) => {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');
  event.target.classList.add('selected');
}
for(let i = 1; i < colors.length; i += 1){
  colors[i].addEventListener('click', changeClass);
}

const selectedElement = document.querySelector('.selected')
const pixels = document.querySelectorAll('.pixel')
const coloringPixel = () => {
  for (let pixel of pixels){
    pixel.addEventListener('click', (event) => {
      event.target.style.backgroundColor = selectedElement.style.backgroundColor;
    })
  }
}
coloringPixel();

const clearBoardButton = document.querySelector('#clear-board')
clearBoardButton.addEventListener('click', () => {
	for(let pixel of pixels){
		pixel.style.backgroundColor = 'white';
	}
});




