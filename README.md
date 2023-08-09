# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

The project was a bit  challenging but it really helped expand my javaScript knowledge and am happy i was able to complete the project.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![main page](./screenshots/1st%20Screenshot%202023-08-09%20at%2020-11-43%20Frontend%20Mentor%20E-commerce%20product%20page.png)
![main page light box](./screenshots/2nd%20Screenshot%202023-08-09%20at%2020-12-05%20Frontend%20Mentor%20E-commerce%20product%20page.png)
![empty cart main page](./screenshots/3rd%20Screenshot%202023-08-09%20at%2020-13-51%20Frontend%20Mentor%20E-commerce%20product%20page.png)
![ filled cart main page](./screenshots/4th%20Screenshot%202023-08-09%20at%2020-14-11%20Frontend%20Mentor%20E-commerce%20product%20page.png)
![mobile view main page](./screenshots/5th%20Screenshot%202023-08-09%20at%2020-15-09%20Frontend%20Mentor%20E-commerce%20product%20page.png)
![mobile view empty cart](./screenshots/6th%20Screenshot%202023-08-09%20at%2020-15-26%20Frontend%20Mentor%20E-commerce%20product%20page.png)
![mobile view filled cart](./screenshots/7th%20Screenshot%202023-08-09%20at%2020-15-47%20Frontend%20Mentor%20E-commerce%20product%20page.png)
![mobile view side navBar](./screenshots/8th%20Screenshot%202023-08-09%20at%2020-16-06%20Frontend%20Mentor%20E-commerce%20product%20page.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- javaScript


### What I learned

I learnt alot from this project especially on javaScript
-click events
-loops
-creation of thumbnails and many more


```css
.product_pop-out {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 500px;
    z-index: 1000;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
}

.product_pop-out__image {
    height: 80%;
    margin: 0 auto;
    border-radius: 12px;

}
```
```js
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
// javaScript that produced the thumbnail pictures.

for (let i = 1; i <= 4; i++) {

    var html =

    "<div class = 'product-thumbnail'>" +

     "<img class= 'product-thumbnail_image' loading ='lazy' src='images/image-product-" + i + thumbnail + ".jpg'>" +
     
     "</div>";

    document.write(html);

}
```

### Continued development

I want to learn more on javaScript and then React js, which am going to start next week.(9/8/2023).


## Author

- Website - [Add your name here](https://www.your-site.com) planning to create my own site very soon

- Frontend Mentor - [@Dolly-Pee](https://www.frontendmentor.io/profile/Dolly-Pee)
- Twitter - [@precimyte](https://www.twitter.com/precimyte)


## Acknowledgments

Hat tips to Destiny my course mate at federal university lokoja who helped me a bit when i was having problem with generating thumbnail images with javaScript.
