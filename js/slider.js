// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]
const slideElements = []
let currentIndex = 0

const slidesWrapperEl = document.querySelector('.slides-wrapper')
slidesWrapperEl.innerHTML = ''

for(let i = 0; i< slides.length; i++){
	const link = slides[i]

	const li = document.createElement('li')
	li.className = 'slide'
	
	if (i === currentIndex){
        li.classList.add('active')
    }

	const img = document.createElement('img')
	img.src = link
	li.append(img)

	slidesWrapperEl.append(li)
	slideElements.push(li)
}

const nextArrowEl = document.querySelector(".arrow-next")

nextArrowEl.addEventListener('click', function (){
    //togliere la classe active dalla slide attiva
		const slideActive = slideElements[currentIndex]
    	slideActive.classList.remove('active')

		let nextSlide = slideElements[++currentIndex]
		nextSlide.classList.add('active')
	  
	

})

const prevArrowEl = document.querySelector(".arrow-prev")

prevArrowEl.addEventListener('click', function (){
    //togliere la classe active dalla slide attiva
    const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')

    const nextSlide = slideElements[currentIndex - 1]
    nextSlide.classList.add('active')

    currentIndex--  

})

