const burgerPizzaImages = document.querySelectorAll('.burger-pizza img');
const toggleImages = document.querySelectorAll('.burger-pizza-toggle img');
let currentIndex = 0;

toggleImages[currentIndex].classList.add('active');

burgerPizzaImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        toggleImages.forEach(toggleImg => toggleImg.classList.remove('active'));
        toggleImages[currentIndex].classList.add('active');
        toggleImages[currentIndex].src = burgerPizzaImages[index].src;
        currentIndex = (currentIndex + 1) % toggleImages.length;
    });
});

//generate random images
function createStars() {
    const starsContainer = document.getElementById('stars');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    for(let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * windowWidth}px`;
        star.style.top = `${Math.random() * windowHeight}px`;
        starsContainer.appendChild(star);
    }
}

//call the createStars function when the page loads
window.addEventListener('load', createStars);