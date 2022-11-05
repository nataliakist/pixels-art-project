const randomColor = () => {
	let r = parseInt(Math.random() * 255);
	let g = parseInt(Math.random() * 255);
	let b = parseInt(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

const colors = document.querySelectorAll('.color')
colors[0].style.backgroundColor = 'black';
for(let i = 1; i < colors.length; i += 1){
  colors[i].style.backgroundColor = randomColor();
}

const button = document.querySelector('#button-random-color')
button.addEventListener('click', () => {
	for(let i = 1; i < colors.length; i += 1){
			colors[i].style.backgroundColor = randomColor();
		}
});

// const localStorageRandomColor = () => {
//   const colors = document.querySelectorAll('.color')
//   const arrayRandomColor = [];
//   for (let i = 0; i < colors.length; i += 1){
//     arrayRandomColor.push(colors[i].style.backgroundColor)
//   }
//   localStorage.setItem('randomColors', JSON.stringify(arrayRandomColor))
// }

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

