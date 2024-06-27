const btn = document.querySelector("#btn-hero");

const color = document.querySelector(".color");

const colors = ['#202032', "green", "red", "yellow"];


function randomFunc() {
    return Math.floor(Math.random() * colors?.length)
}

btn.addEventListener('click', function () {
    const randomNumber = randomFunc()
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})