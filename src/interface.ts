type user = {
  name: string;
  age: number;
};

const user1: user = {
  name: "ismail",
  age: 25,
};

const user2: user = {
  name: "nayef",
  age: 25,
};

type Role = {
  role: "amdin" | "user";
};

type UserWithRole = user & Role;

const user3: UserWithRole = {
  name: "ismail",
  age: 25,
  role: "amdin",
};

interface IUser {
  name: string;
  age: number;
}

interface IuserWithRole extends IUser {
  roel: "admin" | "user";
}

// Function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

const add: IAdd = (num1: number, num2: number) => num1 + num2;

console.log(add(2, 3));

// Array

type Friends = string[];

interface IFriends {
  [index: number]: string;
}

const friends: IFriends = ["Abul", "Babul", "Cabul", "Dabul", "Fabul"];

// Better to use type aliasing for Function and Array, because that is clean
