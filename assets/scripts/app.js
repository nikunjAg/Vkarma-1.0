const dotsList = document.querySelectorAll('.carousel-dots-list li');
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-slide-btn');
const nextBtn = document.querySelector('.next-slide-btn');

const allItems = document.querySelectorAll('.carousel-content');

let totalSlides = allItems.length;
let currSlide = 0;
let nextSlide = 1;
let prevSlide = totalSlides - 1;
let moving = false;
let xDown = null;
let yDown = null;

function moveSlide(inc) {
	if (!moving) {
		moving = true;

		inc += totalSlides;

		allItems[currSlide].classList.remove('active');
		dotsList[currSlide].classList.remove('active');
		allItems[nextSlide].classList.remove('next');
		allItems[prevSlide].classList.remove('prev');

		currSlide = (currSlide + inc) % totalSlides;
		prevSlide = (prevSlide + inc) % totalSlides;
		nextSlide = (nextSlide + inc) % totalSlides;

		allItems[currSlide].classList.add('active');
		dotsList[currSlide].classList.add('active');
		allItems[nextSlide].classList.add('next');
		allItems[prevSlide].classList.add('prev');

		moving = false;
	}
}

function getTouches(evt) {
	return evt.touches || evt.originalEvent.touches;
}

function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}

	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;

	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		/*most significant*/
		if (xDiff > 0) moveSlide(1);
		else moveSlide(-1);
	}
	xDown = null;
	yDown = null;
}

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchmove', handleTouchMove, false);

dotsList.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		moveSlide(index - currSlide);
	});
});
