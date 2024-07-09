/** Async in JS */

// setTimeout
// setInterval
// console.log("before");
// setTimeout(() => {
//   console.log("hello");
// }, 0);
// console.log("after");

// function getX() {
//   setTimeout(() => {
//     return 5;
//   }, 1000);
// }

// function getY() {
//   return 6;
// }

// console.log("before");
// function getXY() {
//   let x = getX();
//   console.log("x=>", x);
//   let y = getY();
//   console.log("y=>", y);
//   console.log(x + y);
// }

// getXY();
// console.log("after");

/** Callback function */
function sum(a, b) {
  console.log(a + b);
}

function myCallback() {
  console.log("callback executed!!");
}

function exeCallback(a) {
  console.log(a);
  a();
}

// exeCallback(myCallback);
// exeCallback(sum,4,4)

// function getX(f) {
//   setTimeout(() => {
//     f(5);
//   }, 1000);
// }
// /** after 5s */
// function getY(f) {
//   setTimeout(() => {
//     f(6);
//   }, 5000);
// }

// // console.log("before");
// function getXY() {
//   getX((x) => {
//     console.log("x=>", x);
//     getY((y) => {
//       console.log("y=>", y);
//       console.log(x + y);
//     });
//   });
// }

// getXY();
// console.log("after");

/** Promise */
/**
 * status -> pendding
 * fulfield -> resolve
 * fulfield -> reject
 */

let p = new Promise((resolve, reject) => {
  // resolve('not hello')
  setTimeout(() => {
    resolve(5);
  }, 3000);
});

// console.log(p);

p.then((data) => {
  //   console.log(data);
});

function getX() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(5);
    }, 4000);
  });
}

/** return a reslove Promise with 6 after 5s */
function getY() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(6);
    }, 5000);
  });
}

// console.log("before");
function getXY() {
  getX().then((x) => {
    getY().then((y) => {
      console.log(x + y);
    });
  });
  //   let x = getX();
  //   console.log(x);
  //   x.then((valX) => {
  //     console.log(valX);
  //     let y = getY();
  //     y.then((valY) => {
  //       console.log(valX + valY);
  //     });
  //   });
}
// getXY();

let auth = (param) => {
  return new Promise((res, rej) => {
    if (param === "admin") {
      res("authorize");
    } else {
      rej("unauthorize");
    }
  });
};

// auth("admin")
//   .then((data) => {
//     // console.log("res=>", data);
//     return data;
//   })
//   .then((x) => {
//     return x + "!";
//   })
//   .then((ret) => {
//     console.log(ret + "?");
//   })
//   .catch((err) => {
//     console.log("rej=>", err);
//   });

const flip = () => {
  const coin = Math.floor(Math.random() * 3);
  return coin < 2 ? (coin === 0 ? "head" : "tail") : "side";
};

// console.log(flip());

// const filpcoin = new Promise((res, rej) => {
//   setTimeout(() => {
//     const flipResult = flip();
//     console.log(flipResult);
//     if (flipResult === "head" || flipResult === "tail") {
//       res("you win=>" + flipResult);
//     } else {
//       rej("you lose=>" + flipResult);
//     }
//   }, 2000);
// });

// filpcoin
//  .then( result => {
//     console.log(result);
//  })
//  .catch(err => {
//     console.log(err);
//  })

const users = [
  { username: "aaa", email: "aaa@gmail.com" },
  { username: "bbb", email: "bbb@gmail.com" },
  { username: "ccc", email: "ccc@gmail.com" },
];
/** 
 * 1. getDataFromServer function return a Promise with data as  
   Array of objects from server as json
  
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 * 
 * 4. return to step 2, and create render function that will 
 * display the users on the page
*/

/** 1 */
const getDataFromServer = (arr) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (arr) {
        res(JSON.stringify(arr));
      } else {
        rej("404 no data found");
      }
    }, 2 * 1000);
  });
};
/** 2 */
getDataFromServer(users)
  .then((res) => {
    return JSON.parse(res);
  })
  .then((data) => {
    // console.log(data);
    render(data)
  })
  .catch((err) => {
    console.log("error=>", err);
  });

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>${item.username} ${item.email}</div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
