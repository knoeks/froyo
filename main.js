"use strict";

let askCustomer = () => {
    let request = prompt("Season's greetings! What flavors of froyo would you like to enjoy today? Simply type them in, separated by commas, and let us whip up a winter wonderland of flavors just for you!");
    let requestArr = request.split(",").sort();
    //calculateResult(requestArr);
    calculateResultSet(requestArr);
} 

let calculateResultSet = (arr) => {
    let flavorSet = new Set(arr);
    console.log("Froyo Flavor Totals:\n\n");
    flavorSet.forEach(unique => {
        let count = 0;
        arr.forEach(item => {
            if (unique === item) {
                count++;
            }
        });
        console.log(`${unique}: ${count}`);
        
    });

     
}

// let calculateResult = (arr) => {
//     let count = {}
//     arr.forEach(flavorChoice => {
//         count[flavorChoice] = 1 + (count[flavorChoice] || 0)
//     });
//     printResult(count);
// }

// let printResult = (flavors) => {
//     console.log("Froyo Flavor Totals:\n\n");
    
//     for (const flavor in flavors) {
//         console.log(`${flavor}: ${flavors[flavor]} servings`);
//     }

    
// }

askCustomer();