const randomColor = () => {
	let r = parseInt(Math.random() * 255);
	let g = parseInt(Math.random() * 255);
	let b = parseInt(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector('#button-random-color')

button.addEventListener('click', () => {
	const colors = document.querySelectorAll('.color')
	for(let i = 0; i < colors.length; i += 1){
		if(i === 0){
			colors[i].style.backgroundColor = 'black';
		} else {
			colors[i].style.backgroundColor = randomColor();
		}
		}
	});