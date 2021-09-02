function memoization() {
    var cache = {}
    return function sum(num) {
        if (num in cache) {
            return cache[num]
        } else {
            cache[num] = num + 255
            return num + 255
        }
    }

}


let memo = memoization()


let a = memo(504)

let b = memo(504)