import './style.css'

// Exercise 1
class Employee {
  private name: string;
  private salary: number;

  public position: string;

  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department;
  }

  public getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position}`;
  }
}

const employee = new Employee('John Doe', 50000, 'Software Engineer', 'IT');
console.log(employee.getEmployeeInfo());

// Exercise 2
class Product {
  public readonly id: number;

  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  public getProductInfo(): string {
    return `Product Name: ${this.name}, Price: $${this.price}`;
  }
}

const product = new Product(1, 'Laptop', 999.99);
console.log(product.getProductInfo());

// Exercise 3
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): string {
    return "Some generic animal sound";
  }
}

class Dog extends Animal {
  public makeSound(): string {
    return "bark";
  }
}

const myDog = new Dog("Buddy");
console.log(`${myDog.name} says: ${myDog.makeSound()}`);

// Exercise 4
class Calculator {
  public static add(a: number, b: number): number {
    return a + b;
  }

  public static subtract(a: number, b: number): number {
    return a - b;
  }
}
const sum = Calculator.add(5, 3);
const difference = Calculator.subtract(10, 4);

console.log(`Sum: ${sum}`);          // Output: Sum: 8
console.log(`Difference: ${difference}`); // Output: Difference: 6

// Exercise 5
interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  if (user.membershipLevel) {
    console.log(`Membership Level: ${user.membershipLevel}`);
  } else {
    console.log("Membership Level: Not specified");
  }
}

const premiumUser: PremiumUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  membershipLevel: "Gold"
};

printUserDetails(premiumUser);