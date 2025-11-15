// object destructuring
// array destructuring

// object destructuring
const user = {
  id: 101,
  name: {
    firstName: "Ismail",
    middleName: "Hossan",
    lastName: "Nayef",
  },
  gender: "male",
  age: 25,
  isLoggedIn: true,
};

const {
  name: { firstName, lastName, middleName },
  id,
  gender: sex, // aliasing
  age,
  isLoggedIn,
} = user;

console.log(`the ${id} is for Mr. ${firstName}`);

// array destructuring
const numbers = [23, 45, 67, 89, 12, 34, 56];

const [first, second, third, ...rest] = numbers;
console.log(rest, first);
