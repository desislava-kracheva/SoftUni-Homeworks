function solve(input){

    let type = typeof(input);
    
    
    if(type !== 'number'){
    
    
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
    else console.log((Math.PI*input*input).toFixed(2));
    
    
    
    }
    