//Shop preview Scrolling
shopContainer = document.getElementById('pop-items');
leftArrow = document.getElementById('arrow-left');
rightArrow = document.getElementById('arrow-right');

leftArrow.addEventListener('click', scrollLeft);
function scrollLeft() {
    shopContainer.scrollBy({top: 0, left: -323, behavior: 'smooth'});
    
}

rightArrow.addEventListener('click', scrollRight);
function scrollRight() {
    shopContainer.scrollBy({top: 0, left: 323, behavior: 'smooth'});
}

//Mobile nav
const hamburger = document.getElementById('hamburger')
const mobileNav = document.getElementById('mobile-nav')

const openClose = () => {
    if(mobileNav.style.display === 'none') {
        mobileNav.style.display = 'flex'
    } else {
        mobileNav.style.display = 'none'
    }
}

hamburger.addEventListener('click', openClose)