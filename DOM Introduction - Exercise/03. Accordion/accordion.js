function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
let extraElement = document.getElementById('extra');


buttonElement.textContent = buttonElement.textContent === 'More' ? 'Less' : 'More';

extraElement.style.display = extraElement.style.display ==='block'  ? 'none' : 'block'; 
}