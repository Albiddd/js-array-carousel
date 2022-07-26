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
	
	currentIndex++
	if (currentIndex > slideElements.length-1){
		currentIndex = 0
	}
	
	let nextSlide = slideElements[currentIndex]
	nextSlide.classList.add('active')

})

const prevArrowEl = document.querySelector(".arrow-prev")

prevArrowEl.addEventListener('click', function (){
    //togliere la classe active dalla slide attiva
    const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')
    currentIndex--
	if(currentIndex < 0){
		currentIndex = slideElements.length-1
	}
    const nextSlide = slideElements[currentIndex]
    nextSlide.classList.add('active')

})


document.getElementById('dot1').addEventListener('click', function(){	
	const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')
	currentIndex = 0
	const firstSlide = slideElements[currentIndex]
	firstSlide.classList.add('active')
	
})

document.getElementById('dot2').addEventListener('click', function(){	
	const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')
	currentIndex = 1
	const firstSlide = slideElements[currentIndex]
	firstSlide.classList.add('active')
	
})

document.getElementById('dot3').addEventListener('click', function(){	
	const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')
	currentIndex = 2
	const firstSlide = slideElements[currentIndex]
	firstSlide.classList.add('active')
	
})

document.getElementById('dot4').addEventListener('click', function(){	
	const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')
	currentIndex = 3
	const firstSlide = slideElements[currentIndex]
	firstSlide.classList.add('active')
	
})

document.getElementById('dot5').addEventListener('click', function(){	
	const slideActive = slideElements[currentIndex]
    slideActive.classList.remove('active')
	currentIndex = 4
	const firstSlide = slideElements[currentIndex]
	firstSlide.classList.add('active')
	
})

