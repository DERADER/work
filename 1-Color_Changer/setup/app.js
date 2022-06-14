const btn = document.querySelector('.btn'),
      span = document.querySelector('.color');

const colors = ['green','blue','#333', 'red'];

btn.addEventListener('click', () => {
    let randomNumber = getRandomNumber();
    document.querySelector('body').style.backgroundColor = colors[randomNumber];
    span.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}