// function outer(a) {
//     return function inner(b) {
//         return a + b
//     }
// }


// let result = outer(5)(5)
// console.log(result)


function x() {
    let a = 1
    function y() {
        console.log(a)
    }
    y()
}

x()