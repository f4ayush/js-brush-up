function outer(a) {
    return function inner(b) {
        return a + b
    }
}


let result = outer(5)(5)
console.log(result)