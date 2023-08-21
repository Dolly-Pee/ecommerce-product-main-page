const navBar = document.querySelector('nav ul');
const mobileToggle = document.querySelector('.mobile-nav-toggle');
const mbOverlay = document.querySelector('.body-overlay-mb')

mobileToggle.addEventListener('click', () => {
    const navBarAttr = navBar.getAttribute('aria-expanded');
    const cartAttr = cartBox.getAttribute('aria-expanded');
    
    if (cartAttr === "true") {
        cartBox.setAttribute('aria-expanded', false)
    }

    if (navBarAttr === 'false'){
        navBar.setAttribute('aria-expanded', true);
        mobileToggle.setAttribute('data-visible', true)
        mbOverlay.classList.add('active')
    } else{
        navBar.setAttribute('aria-expanded', false);
        mobileToggle.setAttribute('data-visible', false);
        mbOverlay.classList.remove('active')
    }
})