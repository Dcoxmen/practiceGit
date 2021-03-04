//call and assemble data from two functions with promises
// let firstFunction = function() {
//     return new Promise(
//         function(res, rej) {
//             res("I feel kind of ")
//         }
//     )
// }

// let secondFunction = function(firstFunctData) {
//     return new Promise(
//         function(res, rej) {
//             res(firstFunctData + 'happy')
//         }

//     )
// }

// firstFunction().then(function(myData){
// return secondFunction(myData)
// }).then(function(myData){
//     console.log(myData)
// })

fetch("https://jsonplaceholder.typicode.com/todos")
.then(function(response){
    return response.json();
}).then(function(response){
    console.log(response)
})
