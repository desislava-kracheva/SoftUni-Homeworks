function solve() {
  let textElement = document.getElementById('text');
  let text = textElement.value;
  let namingConventionElement = document.getElementById('naming-convention');
  let namingConvention = namingConventionElement.value;

  function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  function toPascalCase(string) {
    return `${string}`
      .replace(new RegExp(/[-_]+/, 'g'), ' ')
      .replace(new RegExp(/[^\w\s]/, 'g'), '')
      .replace(
        new RegExp(/\s+(.)(\w+)/, 'g'),
        ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
      )
      .replace(new RegExp(/\s/, 'g'), '')
      .replace(new RegExp(/\w/), s => s.toUpperCase());
  }
let resultElement = document.getElementById('result');

  if(namingConvention == 'Camel Case'){
    resultElement.textContent = camelize(text)
    
  } else if(namingConvention == 'Pascal Case'){
    resultElement.textContent = toPascalCase(text)
  } else {
resultElement.textContent == 'Error!'

  }

}