// card show function
const cartOne = document.querySelector('#product-card-one');
const cartTwo = document.querySelector('#product-card-two');
const cardBadge = document.querySelector('#card-badge');
const showProduct = document.querySelector('.product-card-container');

const showCartOne = () =>{
    cartOne.style.display = "block";
    cartTwo.style.display = "none";
    cardBadge.style.display = "block";
    showProduct.style.transform ="translateX(0%)";
    showProduct.style.transition = "all 0.5s ease-in-out"
}
const showCartTwo = () =>{
    cartTwo.style.display = "block";
    cartOne.style.display = "none";
    cardBadge.style.display = 'none';
    showProduct.style.transform = "translateX(-50%)";
    showProduct.style.transition = "all 0.5s ease-in-out"
}
const showCardToggle = () =>{   
    cartOne.style.display = (cartOne.style.display === "block") ? "none" : "block";
    cartTwo.style.display = (cartTwo.style.display === "none") ? "block"  : "none";
    cardBadge.style.display = (cartTwo.style.display === "block") ? cardBadge.style.display = "none" : "block";
}

// product color choice 
    const colorButtons = document.querySelectorAll('.plica-color .color');
    const colorImages = {
    gray: "./assets/img/gray.jpg",
    light:"./assets/img/light.webp",
    lightRed:"./assets/img/lightRed.webp",
    green:"./assets/img/green.webp"
};

const  showColorImage = (event) =>{
    const colorName = event.target.dataset.color;
    const imageUrl = colorImages[colorName];
    const colorImage = document.querySelector("#colorImage");
    colorImage.src = imageUrl;



    // Remove active class from all color buttons
    colorButtons.forEach(button => button.classList.remove('active'));
    // Add active class to the clicked color button
    event.target.classList.add('active');
  }

  colorButtons.forEach((button) => {
    button.addEventListener('click', showColorImage)
  });

// quick buy button show
const quickBuyShowContainer = document.querySelector('.shop-the-look_products');
const quickBuyButtons = document.querySelectorAll('.product-card_quick-buy');

quickBuyShowContainer.addEventListener('mouseover', () => {
    quickBuyButtons.forEach(button => {
        button.style.display = "block";
        button.style.transition = "all 0.5s ease-in";
    });
});

quickBuyShowContainer.addEventListener('mouseout', () => {
    quickBuyButtons.forEach(button => {
        button.style.display = "none";
        button.style.transition = "all 0.5s ease-out";
    });
});

