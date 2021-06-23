function solve() {
let containerElement = document.querySelector('#container');
let buttonElement = containerElement.querySelector('button');

let inputElements = Array.from(document.querySelectorAll('#container input'));
let [nameElement, ageElement, kindElement, ownerElement] = inputElements;
let  adoptionUlElement = document.querySelector('#adoption ul')

buttonElement.addEventListener('click', (e) => {
 e.preventDefault();

if(!inputElements.every(x => x.value )){
return

}
if(!Number(ageElement.value )) {
    return;
}



let liElement = document.createElement('li');
let pElement = document.createElement('p');
let spanElement = document.createElement('span');
let petButtonElement = document.createElement('button');


pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong></strong>${ageElement.value}year old ${kindElement.value}`
spanElement.textContent  = `Owner: ${ownerElement.value}`
petButtonElement.textContent = 'Contact with owner';



liElement.appendChild(pElement);
liElement.appendChild(spanElement);
liElement.appendChild(petButtonElement);

adoptionUlElement.appendChild(liElement);





inputElements.forEach(element => {element.value = '';
    
})

    petButtonElement.addEventListener('click' , (e) => {
        let parent = e.currentTarget.parentElement;
        
        e.currentTarget.remove();


let divElement = document.createElement('div');
let inputElement = document.createElement('input');
let newButtonElement = document.createElement('button');
inputElement.setAttribute('placeholder', 'Enter your names')

newButtonElement.textContent = 'Yes! I take it!'

divElement.appendChild(inputElement);
divElement.appendChild(newButtonElement);
parent.appendChild(divElement)

    })

})

}

