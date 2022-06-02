/* function add(num1, num2) {
    return num1 + num2
}

console.log(add(3, 2))
console.log(add(-3, -6))
console.log(add(7, 3)) */

/* function hoursInSeconds (hour) {
    return 3600 * hour
}

console.log(hoursInSeconds(2))
console.log(hoursInSeconds(10))
console.log(hoursInSeconds(24)) */

/* function calxPerimeter (length, width) {
    return (length + width) * 2
}

console.log(calxPerimeter(6, 7))
console.log(calxPerimeter(20, 10))
console.log(calxPerimeter(2, 9)) */


/* function calcTriangleArea (base, height) {
    return  0.5 * (base * height)
}

console.log(calcTriangleArea(3, 2))
console.log(calcTriangleArea(10, 10))
console.log(calcTriangleArea(20, 20)) */

/* function append(word) {
    return word + "Frontend"
}

console.log(append("Apple"))
console.log(append("Banana")) */

/* function sumGreaterThan100 (num1, num2) {
   return num1 + num2 >= 100
} 

console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50)) */

/* function lassThanOrEqualToZero (num) {
    return num <= 0
}

console.log(lassThanOrEqualToZero(3))
console.log(lassThanOrEqualToZero(0))
console.log(lassThanOrEqualToZero(-2)) */

/* function oppositeBoolean (bool) {
    return !bool
}
console.log(oppositeBoolean(true)) */

/* function isNotZero (elem) {
     return elem !== 0
}

console.log(isNotZero(0)) */

/* function calcRemainder (num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8)) */

/* function isOdd (num) {
    return num % 2 !== 0
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3)) */


/* function booleanInteger(num) {
    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5)) */

/* function isLoggedInAndSubscribed (str1, str2) {
    return (str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED')) */

function isLoggedInAndSubscribed (str1, str2) {
    return (str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED')
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))