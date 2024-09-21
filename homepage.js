const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});

window.addEventListener('scroll', function() {
    var profileSection = document.querySelector('.profile-section');
    var contactSection = document.querySelector('.contact-section');
    var sectionPositionProfile = profileSection.getBoundingClientRect().top;
    var sectionPositionContact = contactSection.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (sectionPositionProfile < screenPosition) {
        profileSection.classList.add('visible');
    }

    if (sectionPositionContact < screenPosition) {
        contactSection.classList.add('visible');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const topicsSection = document.querySelector('.topics-section');
    const topicsTitle = document.querySelector('.topics-title');
    const topics = document.querySelectorAll('.topic');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        const sectionTop = topicsSection.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            topicsTitle.classList.add('visible');
            topics.forEach((topic, index) => {
                setTimeout(() => {
                    topic.classList.add('visible');
                }, index * 200);
            });
            window.removeEventListener('scroll', checkScroll);
        }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll();
});
