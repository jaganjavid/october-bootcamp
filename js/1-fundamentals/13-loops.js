
// For Loop

// Loop can execute a block of code number of times

// for(let i = 0; i <= 10; i++){
    
//     if(i === 2){
//         console.log(`I Touch the 2`);
//         continue;
//     }

//     if(i === 5){
//         console.log(`i Hit 5 stop the loop`);
//         break;
//     }

//     console.log(i);


// }

const arr = ["Hello", 1, true, "Vanakam", false, "yes"];

// console.log(arr.length);

// for(let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
// }

// arr.forEach(function(element, index, array){
//     console.log(`${element} - ${index}`);

//     console.log(array);
// })


function customForEach(array, callback){

    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
    
}

const numbers = [1,2,3,4,5];

customForEach(numbers, function(value, index){

    console.log(`${value} - ${index}`);

})


numbers.forEach(function(element, index, array){
    console.log(`${element} - ${index}`);

})

console.log(numbers);

// function customAt(array , index){

//     if(index < 0){}


// }
