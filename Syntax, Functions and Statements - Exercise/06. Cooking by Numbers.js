function solve(num, opt1,opt2,opt3,opt4,opt5){

    num = Number(num);
    num = applyOperations(num, opt1)
    console.log(num);
    num = applyOperations(num, opt2);console.log(num);
    num = applyOperations(num, opt3);console.log(num);
    num = applyOperations(num, opt4);console.log(num);
    num = applyOperations(num, opt5);console.log(num);
    
    function applyOperations(num, op){
    switch(op){
    
    
        case 'chop': {
        num /= 2}
        break;
    
        case 'dice': {
    
            num = Math.sqrt(num);
        }
        break;
    
        case 'spice': {
            num +=1;
        }
        break;
    
        case 'bake': {
    
            num*=3;
        }
        break;
    
        case 'fillet': {num*=0.8;}
    
    
        break
        
        
        
        
    }
    return num;
    
    }
    
    
    }
    