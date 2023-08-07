// card show function
const cardOne = document.querySelector('#product-card-one');
const cardTwo = document.querySelector('#product-card-two');
const cardBadge = document.querySelector('#card-badge');

const showCardOne = () =>{
    cardOne.style.display = "block";
    cardTwo.style.display = "none";
    cardBadge.style.display = "block";
}
const showCardTwo = () =>{
    cardTwo.style.display = "block";
    cardOne.style.display = "none";
    cardBadge.style.display = 'none';
}
const showCardToggle = () =>{   
    cardOne.style.display = (cardOne.style.display === "block") ? "none" : "block";
    cardTwo.style.display = (cardTwo.style.display === "none") ? "block"  : "none";
    cardBadge.style.display = (cardTwo.style.display === "block") ? cardBadge.style.display = "none" : "block";
}

// product color choice 
    const colorButtons = document.querySelectorAll('.color');
    const colorImages = {
    gray: "./assets/img/gray.jpg",
    light:"./assets/img/light.webp",
    lightRed:"./assets/img/lightRed.webp",
    green:"./assets/img/green.webp"
};

function showColorImage(event) {
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
