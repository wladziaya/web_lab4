const firstLine = document.getElementById('first-line')
const secondLine = document.querySelector('#second-line')

let randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

let changeColor = elem => {
    elem.style.background = randomColor();
    elem.style.color = randomColor()
}

firstLine.onclick = () => changeColor(firstLine)
secondLine.onclick = () => changeColor(secondLine)

const imagesDiv = document.querySelector("#imagesContainer")

const addImg = () => {
    imagesDiv.insertAdjacentHTML('beforeend', '<img src="https://pixabay.com/get/g837fbbb2c0a4f65bea0cde511e4ee958d2e374429102d6bc56bc5c9fbabaf4361f9923ddd204c230d2794e6aee33e0e2_1280.jpg">');
}

const scaleUp = () => {
    imagesDiv.lastChild.style.width = `${imagesDiv.lastChild.clientWidth + 100}px`
}

const scaleDown = () => {
    imagesDiv.lastChild.clientWidth > 100 ? imagesDiv.lastChild.style.width = `${imagesDiv.lastChild.clientWidth - 100}px` : null
}

const removeImg = () => {
    imagesDiv.lastChild.remove()
}
