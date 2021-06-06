function solve(num){

    let numAsString = String(num);
    let isSame = true;
    let sum = numAsString.length >0 ? Number(numAsString[0]) : 0;
    for(let i = 0; i < numAsString.length -1;i ++){

const element = Number(numAsString[i]);
const nextElement = Number(numAsString[i+1]);
if(element !== nextElement){

    isSame = false;
}

sum+= nextElement;

    }
    console.log(isSame);
    console.log(sum);
}