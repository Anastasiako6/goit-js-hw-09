const buttonStart = document.querySelector('button[data-start]');
const buttonClose = document.querySelector('button[data-stop]');

buttonClose.disable = true;
let colorInt = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


buttonStart.addEventListener('click', () => {
    buttonStart.disabled = true;
    buttonClose.disabled = false;

    colorInt = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
})

buttonClose.addEventListener('click', () => {
    buttonStart.disabled = false;
    buttonClose.disabled = true;
    clearInterval(colorInt)
})