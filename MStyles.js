function adjustiPhoneSize() {
    const iphone = document.querySelector('.iphone');
    const screenWidth = window.innerWidth;

    if (screenWidth < 480) {
        iphone.style.transform = 'scale(0.25)';
    } else if (screenWidth < 768) {
        iphone.style.transform = 'scale(0.5)';
    } else {
        iphone.style.transform = 'scale(.75)';
    }
}

window.addEventListener('resize', adjustiPhoneSize);
window.addEventListener('load', adjustiPhoneSize);
