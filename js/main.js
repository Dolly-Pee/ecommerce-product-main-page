// PREVIEW IMAGE 
const previewImage = document.querySelector(".product-preview__img");
const prevewImage__container = document.querySelectorAll(".product-thumbnail");

// PREVIEW THUMBNAILS
const previewThumbnails = document.querySelectorAll('.product-thumbnail_image');

// POPOUT PREVIEW
const product_popOut_container = document.querySelector('.product_pop-out');
const product_popOut = document.querySelector('.product_pop-out__image');

// POPOUT THUMBNAILS
const previewpop__container = document.querySelectorAll('.product-thumbnail-popOut');
const product_thumbnail__container_PO = document.querySelector('.product-thumbnail__container-PO');
const previewThumbnails_pop = document.querySelectorAll('.product-thumbnail_image-popOut');

// CLOSE POPOUT ICON
const close_popOut = document.querySelector('.close-popOut');

// NAVIGATION BUTTON
const previous = document.querySelector('.prev svg');
const next = document.querySelector('.next svg');

// BODY OVERLAY ON POP-OUT
const bodyOverlay = document.querySelector('.body-overlay');

// PRODUCTS INCREMENT AND DECREMENT ORDER

const incrementbtn = document.querySelector(".increment");
const decreementbtn = document.querySelector(".decreement");

// CART PRODUCT SECTION..
const cart = document.querySelector('.in-cart-product-container')
const cartCheckoutBtn = document.querySelector('.Checkout-cart')
const cartImage = document.querySelector('.in-cart-product__image img')
const addToCartBtn = document.querySelector('.add-to-cart');
const totalPricce = document.querySelector('.total-price');
const productCartCounter = document.querySelector('.product-counter-number');
const cartItemContainer = document.querySelector('.cart-items');
const emptyCardMessage = document.querySelector('.empty-cart');
const numberOfItemInCartContainer = document.querySelector('.number-of-product-in-cart-container')
const NumberOfItemInCart = document.querySelector('.items-incart-number');
const cartIcon = document.querySelector('.img-cart');
const cartBox = document.querySelector('.cart-box');
const removeItem = document.querySelector('.delete-item');

let counter = 0;
let productPrice;

function increaseDecreaseCounter() {
    const productNumber = document.querySelector('.counter');
    productNumber.innerHTML = counter;
}


// THUMBNAILS FUNCTIONALITIES FOR PREVIEW IMAGE
for (let i = 0; i < previewThumbnails.length; i++) {

    previewThumbnails[i].addEventListener('click', () => {

        previewImage.setAttribute('src', 'images/image-product-' + i + '.jpg');

        addToCartBtn.addEventListener('click', () => {
            cartImage.setAttribute('src', 'images/image-product-' + i + '.jpg')
        })

        // OVERLAY ON THUMBNAILS FOR PREVIEW IMAGE
        prevewImage__container.forEach((element) => {
            element.classList.remove('overlay')
        });

        prevewImage__container[i].classList.add('overlay');
    }

    )
}

// THUMBNAILS FUNCTIONALITIES FOR POPOUT IMAGE

for (let i = 0; i < previewThumbnails_pop.length; i++) {

    previewThumbnails_pop[i].addEventListener('click', () => {

        product_popOut.setAttribute('src', 'images/image-product-' + i + '.jpg');

        // OVERLAY ON THUMBNAILS FOR POPOUT IMAGE

        previewpop__container.forEach((element) => {
            element.classList.remove('overlay')
        });

        previewpop__container[i].classList.add('overlay');
    }
    )

}
for (let i = 0; i < previewThumbnails_pop.length; i++) {

    previous.addEventListener('click', () => {

        // PREVIOUS NAVIGATOR FOR POPOUT IMAGE
        if (i > 0) {
            product_popOut.setAttribute('src', 'images/image-product-' + --i + '.jpg');
            previewpop__container.forEach((element) => {
                element.classList.remove('overlay')
            });

            previewpop__container[i].classList.add('overlay');
        }
    })

    // NEXT NAVIGATOR FOR POPOUT IMAGE

    next.addEventListener('click', () => {
        if (i < 3) {
            product_popOut.setAttribute('src', 'images/image-product-' + ++i + '.jpg');
            previewpop__container.forEach((element) => {
                element.classList.remove('overlay')
            });

            previewpop__container[i].classList.add('overlay');
        }
    })

}

// CLICKING PREVIEW IMAGE FOR POPOUT IMAGE 

previewImage.addEventListener('click', () => {
    bodyOverlay.classList.add('active')
    product_popOut_container.style.display = 'flex';
    const imagepopOut = previewImage.getAttribute('src');

    product_popOut.setAttribute('src', imagepopOut);
})

// CLOSING POPOUT IMAGE

close_popOut.addEventListener('click', () => {
    product_popOut_container.style.display = 'none';
    bodyOverlay.classList.remove('active')
})

// BUTTONS TO INCREASE THE NUMBER OF ITEMS ORDERED FOR

incrementbtn.addEventListener('click', () => {

    counter++;
    increaseDecreaseCounter()

})

// BUTTONS TO DECREASE THE NUMBER OF ITEMS ORDERED FOR

decreementbtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
    }

    increaseDecreaseCounter()
})



addToCartBtn.addEventListener('click', () => {

    // CALCULATING THE AMOUNT OF ITEMS BEING PURCHASED

    productCartCounter.innerHTML = counter;
    productPrice = 125.00 * counter;
    totalPricce.innerHTML = "$" + productPrice + ".00";

    // FUNCTIONALITIES T BE APPLIED TO THE CART BOX ONCE HTHE BUTTON ID CLICKED
    if (counter > 0) {
        cart.style.display = "flex";
        cartCheckoutBtn.style.display = "block";
        cartItemContainer.style.height = '60px'
        emptyCardMessage.style.display = 'none'
        numberOfItemInCartContainer.style.display = 'block'

    } else {
        cart.style.display = "none";
        cartCheckoutBtn.style.display = "none";
        emptyCardMessage.style.display = 'block'
        cartItemContainer.style.height = '100px';
        numberOfItemInCartContainer.style.display = 'none'
    }

    if (counter >= 0) {
        NumberOfItemInCart.innerHTML = counter;
    }
})


// DELETE BUTTON CLICK EVENT
removeItem.addEventListener('click', () => {

    if(counter > 0){
        cart.style.display = "none";
        cartCheckoutBtn.style.display = "none";
        emptyCardMessage.style.display = 'block'
        cartItemContainer.style.height = '100px';
        counter *= 0;

        increaseDecreaseCounter()

        numberOfItemInCartContainer.style.display = 'none'
    }
   
})

console.log(counter);




// SHOWING AND HIDING CART BOX

cartIcon.addEventListener('click', () => {
    const cartAttr = cartBox.getAttribute('aria-expanded')

    if (cartAttr === "false") {
        cartBox.setAttribute('aria-expanded', true)
    } else {
        cartBox.setAttribute('aria-expanded', false)
    }
})



