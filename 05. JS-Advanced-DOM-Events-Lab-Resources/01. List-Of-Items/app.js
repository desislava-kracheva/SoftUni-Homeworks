function addItem() {


    let newItemTextElement = document.getElementById('newItemText');
    let itemsUlElement =  document.getElementById('items');
    let liElement = document.createElement('li');
    liElement.textContent = newItemTextElement.value;
    itemsUlElement.append(liElement);

    console.log('TODO:...');
}