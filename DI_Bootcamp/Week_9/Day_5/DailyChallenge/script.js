function areAnagrams(str1, str2) {
    let str1Cleaned = str1.replace(/\s+/g, '').toLowerCase();
    let str2Cleaned = str2.replace(/\s+/g, '').toLowerCase();
    return str1Cleaned.split('').sort().join('') === str2Cleaned.split('').sort().join('');
}

console.log(areAnagrams("Astronomer", "Moon starer"));  // true
console.log(areAnagrams("School master", "The classroom"));  // true
console.log(areAnagrams("The Morse Code", "Here come dots"));  // true
console.log(areAnagrams("Hello", "World"));  // false