const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const btn = document.querySelector("#btn-hero");

const color = document.querySelector(".color");

function randomFunc() {
    return Math.floor(Math.random() * colors?.length)
}

btn.addEventListener('click', function () {
    let hex = "#"
    for (i = 0; i < 6; i++) {
        hex += colors[randomFunc()]
    }
    document.body.style.backgroundColor = hex;
    color.textContent = hex;
})

