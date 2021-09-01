const navItems = document.querySelector('#nav__items');
const openBtn = document.querySelector('#open__nav-btn');
const closeBtn = document.querySelector('#close__nav-btn');

openBtn.addEventListener('click', () => {
    navItems.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});

const closeNav = () => {
    navItems.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click', closeNav);

// close nav menu when item is clicked
if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav__items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}


// change navbar style on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)
})

// Testimonial Section (swiper js)
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween:30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //Responsive Breakpoints
    breakpoints: {
        // when window width is >= 600px
        600: {
            slidesPerView: 2
        },
        // when window width is >= 600px
        1024: {
            slidesPerView: 3
        }
    }
})

