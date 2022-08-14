// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }
 
// makeCoffee("robusta", 80);

// console.log(isCoffeeMachineReady);
// console.log(coffeeStock);

// import {coffeeStock, isCoffeeMachineReady} from './state.js';
 
// const displayStock = stock => {
//     for (const type in stock) {
//         console.log(type);
//     }
// }
 
// displayStock(coffeeStock);

// console.log(isCoffeeMachineReady);
// console.log(coffeeStock);


// let json = '{ "name": "Yoda", "age": 20 }';
// let json2 = '{bad json}';
 
// try {
//     let user = JSON.parse(json2);
//     // let user = JSON.parse(json);
 
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// let json = '{ "age": 20, "name": "rangga" }';

// try {
//     let user = JSON.parse(json);
    

//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }

//     errorCode;
    
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }



let json = '{ "age": 20, "name": rangga" }';

try {

    let user = JSON.parse(json);
    

    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
    
    errorCode;
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}