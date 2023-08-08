let prevButton = document.getElementById('prev-btn');
let nextButton = document.getElementById('next-btn');
let imagesCar = document.querySelector('.car-list');

imagesCar.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    imagesCar.scrollLeft += evt.deltaY;
});

nextButton.addEventListener("click", () => {
    imagesCar.style.scrollBehavior = "smooth";
    imagesCar.scrollLeft += 900;
});

prevButton.addEventListener("click", () => {
    imagesCar.style.scrollBehavior = "smooth";
    imagesCar.scrollLeft -= 900;
});