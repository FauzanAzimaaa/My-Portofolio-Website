const body = document.querySelector("#mainBody");
const toggleButton = document.querySelector("#toggleNightMode")
const nightMode = false


toggleButton.addEventListener('click', () => {
    const bodyClassList = body.classList
    const spans = document.querySelectorAll('.rain-l span, .rain-r span');
    const btnImage = toggleButton.querySelector('img')

    bodyClassList.toggle('bg-gray-900')
    bodyClassList.toggle('bg-bg-customGrey2')

    if(bodyClassList.contains('bg-gray-900')){
        btnImage.src = "../assets/moon.svg"
        spans.forEach((span) => {
            span.style.backgroundColor = "white"
        });        
    }else{
        btnImage.src = "../assets/sun.svg"
        spans.forEach((span) => {
            span.style.backgroundColor = "black"
        });
    }
})