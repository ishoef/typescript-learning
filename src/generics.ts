// Dynamically generalize = generics

type GenericArray<value> = Array<value>;

const friends: string[] = ["Abul", "Babul", "Cabul", "Dabul"];
const friendss: Array<string> = ["Abul", "Babul", "Cabul", "Dabul"];
const friendsss: GenericArray<string> = ["Abul", "Babul", "Cabul", "Dabul"];

const rollNumber: number[] = [2, 3, 4, 8, 9];
const rollNumbers: Array<number> = [2, 3, 4, 8, 9];
const rollNumberss: GenericArray<number> = [2, 3, 4, 8, 9];

const isEligbleList: boolean[] = [true, false, false, true];
const isEligbleLists: Array<boolean> = [true, false, false, true];
const isEligbleListss: GenericArray<boolean> = [true, false, false, true];

// Generic Type Diclaration
type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];

// Generic in Array of object

// Option - 1
const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "ismail",
    age: 23,
  },

  {
    name: "nayef",
    age: 25,
  },
];

// Option - 2
type User = { name: string; age: number };

const usersList: GenericArray<User> = [
  {
    name: "ismail",
    age: 23,
  },

  {
    name: "nayef",
    age: 25,
  },
];
