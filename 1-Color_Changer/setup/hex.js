const btn = document.querySelector('.btn'),
      span = document.querySelector('.color');


const colors = ['1','2','3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += colors[getRandomNumber()];
    }
    document.querySelector('body').style.backgroundColor = hexColor;
    span.textContent = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}