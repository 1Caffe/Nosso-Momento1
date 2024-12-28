document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const message = document.getElementById('message');

    yesButton.addEventListener('click', function() {
        const randomX = Math.random() * (window.innerWidth - yesButton.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - yesButton.offsetHeight);
        yesButton.style.position = 'absolute';
        yesButton.style.left = randomX + 'px';
        yesButton.style.top = randomY + 'px';
    });

    noButton.addEventListener('click', function() {
        message.textContent = 'AH, que pena, mas você não tem escolha!';
    });
});
