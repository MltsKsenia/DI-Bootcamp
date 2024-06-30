function allTruthy(...params) {
    for (let param of params) {
        if (!param) {
            return false; // if any parameter is falsy, return false
        }
    }
    return true; // if truthy, return true
}

console.log('allTruthy(true, true, true) => ' + allTruthy(true, true, true)); // true
console.log('allTruthy(true, false, true) => ' + allTruthy(true, false, true)); // false
console.log('allTruthy(5, 4, 3, 2, 1, 0) => ' + allTruthy(5, 4, 3, 2, 1, 0)); // false