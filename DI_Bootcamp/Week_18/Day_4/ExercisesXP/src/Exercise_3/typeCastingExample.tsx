let someValue: any = "This is a string";

let strLength: number = (someValue as string).length;

console.log("String length using 'as':", strLength);