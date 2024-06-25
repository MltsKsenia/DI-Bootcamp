/*

You are tasked with writing a function `solution` 
that takes a string `S` as input. 
The string consists of 'a' and/or 'b' characters. 
The function should return `true` if all occurrences 
of the letter 'a' appear before all occurrences 
of the letter 'b' in the string `S`. 
If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
the function should also return `true`. 
Otherwise, it should return `false`.


aabb - true
bbaa - flase
aaa - true
bbb - true
ababa - flase
*/


function solution(S) {
    let found_a = false;
    let found_b = false;

    for (let i = 0; i < S.length; i++) {
        const char = S[i];
        if (char === 'b') {
            found_b = true;
            if (found_a) {
                return false;
            }
        } else if (char === 'a') {
            found_a = true;
        }
    }

    return true;
}

console.log(solution("aabb")); // true
console.log(solution("bbaa")); // false
console.log(solution("aaa"));  // true
console.log(solution("bbb"));  // true
console.log(solution("ababa")); // false