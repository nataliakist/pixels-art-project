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