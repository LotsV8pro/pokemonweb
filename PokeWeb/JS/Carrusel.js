document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const carouselImages = document.querySelector(".carousel-images");
    const carouselWidth = carouselImages.offsetWidth;
    const slideWidth = carouselImages.children[0].offsetWidth;
    const numVisibleImages = 3;
    const totalSlides = carouselImages.children.length;
    let currentPosition = 0;

    const slideOffset = slideWidth * numVisibleImages;

    prevBtn.addEventListener("click", function () {
        if (currentPosition > 0) {
            currentPosition -= slideOffset;
            currentPosition = Math.max(currentPosition, 0);
            carouselImages.style.transition = 'transform 0.5s ease-in-out';
            carouselImages.style.transform = `translateX(-${currentPosition}px)`;
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentPosition < (totalSlides - numVisibleImages) * slideWidth) {
            currentPosition += slideOffset;
            currentPosition = Math.min(currentPosition, (totalSlides - numVisibleImages) * slideWidth);
            carouselImages.style.transition = 'transform 0.5s ease-in-out';
            carouselImages.style.transform = `translateX(-${currentPosition}px)`;
        }
    });
});
