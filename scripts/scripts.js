document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menuIcon");
    const navLinks = document.getElementById("navLinks");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});


const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        let index = 0;
        const intervalTime = 3000;
        let slideInterval;

        function showSlide(index) {
            slides.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            index = (index < slide.length - 1) ? index + 1 : 0;
            showSlide(index);
        }

        function prevSlide() {
            index = (index > 0) ? index - 1 : slide.length - 1;
            showSlide(index);
        }

        prev.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        next.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        function resetInterval() {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        slideInterval = setInterval(nextSlide, intervalTime);