// divs
const parent = document.querySelectorAll('.parent');
const elem = document.querySelectorAll('.parent > .elem');
const parent_2 = document.querySelectorAll('.parent_2');
const elem_2 = document.querySelectorAll('.parent_2 > .elem_2');

window.addEventListener('scroll', showVisible);


function isVisible(elem) {
	let coords = elem.getBoundingClientRect();
	let windowHeight = document.documentElement.clientHeight;
	let topVisible = coords.top > 0 && coords.top < windowHeight;
	let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

	return topVisible && bottomVisible;
}
function showVisible(){
	for (let i=0; i < parent.length; i++){
		if(isVisible(parent[i])){
			elem[i].className = 'elem visible';
		}
	}
}


// slider 
const sliderParent = document.getElementById('sliderParent');
const slider = document.getElementById('slider');

let coordLeftStart = slider.getBoundingClientRect().left;
let coordRightStart = slider.getBoundingClientRect().right;

slider.addEventListener('mousedown', drg_n_drop);
slider.addEventListener('touchstart', drg_n_drop_mobil);


document.ondragstart = () => false;

function drg_n_drop(){
	let coordLeft = slider.getBoundingClientRect().left;
	let coordRight = slider.getBoundingClientRect().right;
	let shiftX = event.clientX - coordLeft + sliderParent.offsetLeft;
	moveAt(event.pageX);

	function moveAt(pageX) {
		slider.style.left = pageX - shiftX + 'px';
	}

	function onMouseMove(event) {
		moveAt(event.pageX);

	}


	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', clearEvent);



	function clearEvent(){
		if(slider.getBoundingClientRect().left > coordLeftStart){
			slider.style.left = '0px';
		}
		if(slider.getBoundingClientRect().right < sliderParent.getBoundingClientRect().right){
			slider.style.left = coordLeftStart - slider.getBoundingClientRect().width + sliderParent.getBoundingClientRect().width + 'px';
		}
		document.removeEventListener('mousemove', onMouseMove);
		slider.onmouseup = null;
	}


}

function drg_n_drop_mobil(){
	let coordLeft = slider.getBoundingClientRect().left;
	let coordRight = slider.getBoundingClientRect().right;
	let shiftX = event.clientX - coordLeft + sliderParent.offsetLeft;
	moveAt(event.pageX);

	function moveAt(pageX) {
		slider.style.left = pageX - shiftX + 'px';
	}

	function onMouseMove(event) {
		moveAt(event.pageX);

	}


	document.addEventListener('touchmove', onMouseMove);
	document.addEventListener('touchend ', clearEvent);



	function clearEvent(){
		if(slider.getBoundingClientRect().left > coordLeftStart){
			slider.style.left = '0px';
		}
		if(slider.getBoundingClientRect().right < sliderParent.getBoundingClientRect().right){
			slider.style.left = coordLeftStart - slider.getBoundingClientRect().width + sliderParent.getBoundingClientRect().width + 'px';
		}
		document.removeEventListener('touchmove', onMouseMove);
		slider.onmouseup = null;
	}


}
