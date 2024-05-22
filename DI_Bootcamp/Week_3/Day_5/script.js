// Exercise 1
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// Exercise 2
let names = ["john", "sarah", 23, "Rudolf", 34]
for (let x = 0; x < names.length; x++) {
    if (typeof names[x] === 'string') {
        let name = names[x];
        if (name[0] !== name[0].toUpperCase()) {
            name = name[0].toUpperCase() + name.slice(1);
        }
        console.log(name);
    }
}

//if the item is not a string, go out of the loop.
//if the item is a string, display it.
let nam = ["john", "sarah", 23, "Rudolf", 34]
for (let y = 0; y < nam.length; y++) {
    if (typeof nam[y] !== "string") {
        break;
    }
    else {
        console.log(nam[y]);
    }
}