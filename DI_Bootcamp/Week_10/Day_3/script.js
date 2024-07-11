/** Promise - review */
/** Promise static method */
/** fetch method / api */
/** async / await */

// const wordsArray = ["apple", "banana", "grape", "orange", "kiwi"];

// function makeAllCaps(words) {
//   return new Promise((resolve, reject) => {
//     let every = words.every((word) => typeof word === "string");
//     if (every) {
//       resolve(words.map((word) => word.toUpperCase()));
//     } else {
//       reject("Error: Not all items are strings");
//     }
//   });
// }

// function sortWords(words) {
//   return new Promise((resolve, reject) => {
//     if (words.length > 4) {
//       resolve(words.sort());
//     } else {
//       reject("Error: Array is less or equal to 4");
//     }
//   });
// }

// makeAllCaps(wordsArray)
//   .then((uppercaseWords) => {
//     console.log(uppercaseWords);
//     return sortWords(uppercaseWords);
//   })
//   .then((sortWords) => {
//     console.log(sortWords);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/** Promise static method */
/** Promise.reject / Promise.resolve */
/**
 * Promise.all
 * Promise.allSettled
 * Promise.race
 * Promise.any
 */

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolve promise1");
//   }, 2 * 1000);
// });

// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res("resolve promise2");
//     rej('reject promise2')
//   }, 1 * 1000);
// });

// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("resolve promise3");
//   }, 5 * 1000);
// });

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/**
 * microtask queue, has higher priority then the task queue
 */
// console.log("3");

// setTimeout(()=>{
//   console.log("1");
// },0)

// let p = Promise.resolve();
// p.then(ret => console.log("2"))

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// new Promise((res, rej) => {
//   console.log("3");
//   res();
// }).then(() => console.log("4"));
// console.log("5");

/** fetch */
/*
fetch(url, {}) -> returnin a promise

fetch(url)
.then(res => {
  log the response
})
.catch(err => {
  log the error
})

{
  method:"GET", // post, put, delete
  headers{
    "content-type": "application/json"
  },
  body: JSON.stingify(data) // body data type

  mode: "cors", // no-cors, *cors, same-origin
  credentials: "same-origin", // include, *same-origin, omit
}
*/

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json(); // res.text()
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const url =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=10";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c",
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  },
};

// fetch(url, options)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// https://users-18kl.onrender.com/userjson
// inputs on html page
// POST -> name, username, email
// log -> data
// display data on html page

// let name = "Jonn";
// let username = "johnjohn";
// let email = "jjj@gmail.com";

// let dataobj = { name, username, email };

// let url1 = "https://users-18kl.onrender.com/userjson";

// let options1 = {
//   method: "POST",
//   headers: {
//     "Content-type":"application/json"
//   },
//   body: JSON.stringify(dataobj)
// }

// fetch(url1,options1)
// .then(res => {
//   return res.json()
// })
// .then(users => {
//   console.log(users);
// })

/** async / await */

// async function getX(x) {
//   if (x > 5) return x;
//   throw new Error('x is less tha 5')
// }

// getX(4)
//   .then((ret) => console.log(ret))
//   .catch(e => console.log(e))

const getX = async () => {
  return 5;
};

const getY = async () => {
  // return 6;
  throw new Error("opps!!!");
};

// getX().then((x) => {
//   getY().then((y) => {
//     console.log(x + y);
//   });
// });

const getXY = async () => {
  try {
    let x = await getX();
    // console.log(x);
    let y = await getY();
    console.log(x + y);
  } catch (e) {
    console.log(e);
  }
};

// getXY();

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json(); // res.text()
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const usersinfo = async () => {
  try {
    let res = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    // let data = await res.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
usersinfo();

// const asyncFunc = async () => {
//   try {
//     let response = await fetch("https://users-18kl.onrender.com/userjson", {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json",
//       },
//       body: JSON.stringify({ objData }),
//     });
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
