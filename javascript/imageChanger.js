let currentIndex = 0
const images = document.getElementsByClassName("my-images")
console.log(images)
const imageCount = images.length

function showNextImage(){
    images[currentIndex].classList.add("hidden")
    currentIndex = (currentIndex + 1) % imageCount
    images[currentIndex].classList.remove("hidden")
}

setInterval(showNextImage, 1000)