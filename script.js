const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const filterButtons = document.querySelectorAll(".filters button");

let currentIndex = 0;
let currentFilter = "all";

function getVisibleImages() {
    if (currentFilter === "all") return [...galleryImages];
    return [...galleryImages].filter(img => img.classList.contains(currentFilter));
}

function openLightbox(index) {
    const visibleImages = getVisibleImages();
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = visibleImages[currentIndex].src;
    lightboxImg.alt = visibleImages[currentIndex].alt;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

function showNextImage() {
    const visibleImages = getVisibleImages();
    if (visibleImages.length === 0) return;
    currentIndex = (currentIndex + 1) % visibleImages.length;
    lightboxImg.src = visibleImages[currentIndex].src;
    lightboxImg.alt = visibleImages[currentIndex].alt;
}

function showPrevImage() {
    const visibleImages = getVisibleImages();
    if (visibleImages.length === 0) return;
    currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
    lightboxImg.src = visibleImages[currentIndex].src;
    lightboxImg.alt = visibleImages[currentIndex].alt;
}

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        const visibleImages = getVisibleImages();
        const index = visibleImages.indexOf(image);
        if (index !== -1) openLightbox(index);
    });
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNextImage();
        if (e.key === "ArrowLeft") showPrevImage();
    }
});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", "true");

        galleryImages.forEach(image => {
            if (currentFilter === "all" || image.classList.contains(currentFilter)) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    });
});