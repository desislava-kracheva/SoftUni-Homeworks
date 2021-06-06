function solve(arr){



    let sum = 0;
let sum2 = 0;
let concat = '';
    for(let i = 0; i <arr.length; i++){

sum += arr[i];
sum2 += 1 / arr[i];
concat += arr[i];

    }


console.log(sum);
console.log(sum2);
console.log(concat);
}