function solve() {
 let addProductButtons = document.querySelectorAll('.add-product')
 let textareaElement = document.querySelector('textarea');
let checkOutButtonElement = document.querySelector('.checkout');
let sum = 0;
let products = [];

for(const addProductButton of addProductButtons){
addProductButton.addEventListener('click', (e) => {

   let currentProductElement = e.currentTarget.parentElement.parentElement;
   let productName = currentProductElement.querySelector('.product-title').textContent;
   let productLinePriceElement = Number(currentProductElement.querySelector('.product-line-price').textContent);
  sum += productLinePriceElement;
  products.push(productName);
   textareaElement.textContent = `Added ${productName} for ${productLinePriceElement.toFixed(2)} to the cart.\n`
})
}
checkOutButtonElement.addEventListener('click', (e) => {

   let uniqueProducts = products.reduce((a,x) => {

     if (!a.includes(x)){
a.push(x);


      }
      return a;
   }, [])


textareaElement.textContent = `You bought ${uniqueProducts} for ${sum}.`

});



}