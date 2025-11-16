type student = {
  id: string;
  name: string;
  gender: string;
  isSubscription: boolean;
  role: string;
  age: number;
  country: string;
  liveIn: string;
};

const student1: student = {
  id: "ST101",
  name: "Ismail Nayef",
  gender: "male",
  isSubscription: true,
  role: "student",
  age: 23,
  country: "Bangladesh",
  liveIn: "Egypt",
};

const student2: student = {
  id: "ST101",
  name: "Zara Sara",
  gender: "female",
  isSubscription: true,
  role: "student",
  age: 23,
  country: "Bangladesh",
  liveIn: "Egypt",
};

// type alias with function

type AddFunc = (num1: number, num2: number) => number;

const addSum: AddFunc = (num1, num2) => num1 + num2;

console.log(addSum(23, 45));
