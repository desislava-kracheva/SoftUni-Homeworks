  function solve() {
    let textElement = document.querySelector('#text');
    let namingConventionElement = document.querySelector('naming-convention');


    let text = textElement.value;
    let namingConvention = namingConventionElement.value;


    function applyNamingConvention(text, convention){

      const conventionSwitch = {
'Pascal Case': ()=>  text.toLowerCase().split(' ').map(x => x[0] + x.slice(1)).join(''),
'Camel Case':() => text.toLowerCase().split(' ').map((x,i) => x != 0 ? x[0].toUpperCase() + x.slice(1) : x).join(''),
default :() =>  'Error!'



      }

      return (conventionSwitch[convention] || conventionSwitch.default)()
    }

  }