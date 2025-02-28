// Add floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 500);

//add more javascript here.