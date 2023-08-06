const cardOne = document.querySelector('#product-card-one');
const cardTwo = document.querySelector('#product-card-two');
const cardBadge = document.querySelector('#card-badge')

const showCardOne = () =>{
    cardOne.style.display = "block";
    cardTwo.style.display = "none"
}
const showCardTwo = () =>{
    cardTwo.style.display = "block";
    cardOne.style.display = "none"
    cardBadge.style.display = 'none';
}