function solve(type,weight, price){

    weight = Number(weight)/1000;
    price = Number(price);
    pricePerKg = weight * price;
    
    console.log(`I need $${pricePerKg.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
    
    }