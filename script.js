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
    imagesDiv.insertAdjacentHTML('beforeend', '<img src="https://www.ulemiste.ee/wordpress/wp-content/uploads/2016/10/nature-wallpaper-07.jpg">');
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
