//grocery store js

// let shopper = {
//     name: "Strauss",
//     age: 21,
//     isMarried: true,
//     groceryCart: ["lemonade", "corndogs", "pomogranite"],
//     payCash(){
//         return shopper.name + " purchased " + shopper.groceryCart[0] + " and " + shopper.groceryCart[1] + " and " + shopper.groceryCart[2] + " and the total is $12.52 "
//     }
// }

// console.log(shopper.payCash())

//WOO! I did it easily

//if statement olympics 

// var person = {
//     name: "Bobby",
//     age: 12
//   }

// // function movieCheck(){
// //     if(person.age >= 18){
// //         return person.name + " is allowed to go to the movie "
// //     } else {
// //         return person.name + " is not allowed to go to the movie"
// //     }
// // }

// // console.log(movieCheck())

// function nameCheck(){
//     if(person.name[0] === "B"){
//         return person.name + " is allowed to go to the movie "
//     } else {
//         return person.name + " is not alloweed to go to the movie "
//     }
// }

// console.log(nameCheck())

// function nameAgeCheck(){
//     if(person.name[0] === "B" && person.age >= 18){
//         return person.name + "is allowed to go to the movie "
//     } else {
//         return person.name + " is not allowed to go to the movie "
//     }
// }

// console.log(nameAgeCheck())

// function strict(){
//     if( 1 === "1" ){
//         return "strict"
//     } else if( 1 == "1"){
//         return "loose or abstract"
//     } else {( 1 != "1")
//         return "not equal at all"
//     }
// }

// console.log(strict())

// function compareAnd(){
//     if( 1 <= 2 && 2 === 4 ){
//         return "yes"
//     } else {
//         return "no"
//     }
// }

// console.log(compareOr())

// function compareAnd(){
//     if( 1 <= 2 || 2 === 4 ){
//         return "yes"
//     } else {
//         return "no"
//     }
// }

// console.log(compareOr())


// function strCheck(){
//     if("true" === true){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(strCheck())

// even odd looping


// function evenOdd(arr){
//     for(let i = 0; i <= 100; i++){
//         if(i % 2){
//             console.log( "even" )
//         } else {
//             console.log( "odd" )
//         }
//     }
// }
// console.log(evenOdd())

// Loops and Arrays Practice

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

function compTotal(){
    for(let i = 0; i <= officeItems.length; i++){
        if(officeItems[i] === "computer"){
            return "woo"
        } else if(officeItems[i] != "computer") {
            return "boo"
        }
    } 
}

console.log(compTotal())