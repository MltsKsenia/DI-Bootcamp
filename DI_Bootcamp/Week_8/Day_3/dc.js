let client = "Marry";

// const groceries = {
//   fruits: ["pear", "apple", "banana"],
//   vegetables: ["tomatoes", "cucumber", "salad"],
//   totalPrice: "20$",
//   other: {
//     paid: true,
//     meansOfPayment: ["cash", "creditCard"],
//   },
// };

const displayGroceries = () => {
  groceries["fruits"].forEach((item) => {
    console.log(item);
  });
};
// displayGroceries();

const cloneGroceries = () => {
  let user = client;
  //   console.log(user, client);
  user = "John";
  //   console.log(user, client);
  let shopping = { ...groceries };
  shopping.other = { ...groceries.other };

  console.log(shopping.totalPrice, groceries.totalPrice);

  shopping.totalPrice = "35$";

  console.log(shopping.totalPrice, groceries.totalPrice);

  console.log(shopping.other.paid, groceries.other.paid);

  groceries.other.paid = false;

  console.log(shopping.other.paid, groceries.other.paid);
};
// cloneGroceries();

// deep clone
const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

let users = `[
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }]`;
// console.log(users);
// users.forEach(item=>{})

let arr = [
  { id: 1, username: "jjj", email: "jjj@gmail.com" },
  { id: 2, username: "mmm", email: "mmm@gmail.com" },
];
console.log(arr);
let jsonArr = JSON.stringify(arr);
console.log(jsonArr);

let arrFromJson = JSON.parse(jsonArr);
console.log(arrFromJson);

let shopping = JSON.parse(JSON.stringify(groceries));

console.log(
  shopping.other.meansOfPayment[1],
  groceries.other.meansOfPayment[1]
);
shopping.other.meansOfPayment[1] = "debitCard";
console.log(
  shopping.other.meansOfPayment[1],
  groceries.other.meansOfPayment[1]
);
