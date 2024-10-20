let images = document.querySelectorAll('.slideshow-container img');
let currentIndex = 0;
let slideshowInterval;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    showImage(currentIndex);
}

function startSlideshow() {
    stopSlideshow(); 
    slideshowInterval = setInterval(nextImage, 2000); 
}

function stopSlideshow() {
    clearInterval(slideshowInterval); 
}
