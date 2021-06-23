function create(words) {
   const contentElement = document.getElementById('content');
console.log(words, content)

for(let i = 0; i< words.length; i++){

const div = document.createElement('div');
const p = document.createElement('p');
p.textContent = words[i];
p.style.display = 'none';
div.appendChild(p);
contentElement.appendChild(div);

contentElement.addEventListener('click', (e) => {

   if(e.target.tagName === 'DIV' || e.target.tagName === 'P'){

      const paragraph = e.target.children[0] || e.target;
      let isVisible = p.style.display === 'block';
      paragraph.style.display = isVisible ? 'none' : 'block'
   }
})

}


}