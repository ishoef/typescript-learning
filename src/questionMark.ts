// ? : ternery operator : decision making operator
// ?? : nullish coalescing operator, used to provide default value when the value is null or undefined
// ?. optional chaining operator

// Ternary Operator
const biyeKorteParbe = (age: number) => {
  //   if (age >= 22) {
  //     console.log("Biye korte parba");
  //   } else {
  //     console.log("Biye korte parba na");
  //   }

  const result = age >= 22 ? "Biye korte parba" : "Biye korte parba na";
  console.log(result);
};

biyeKorteParbe(20);

// Nullish Coalescing Operator
const getUserName = (name: string | null | undefined) => {
  const userName = name ?? "Guest User";
  console.log(`Welcome ${userName}`);
};

getUserName(null);

// some diffence between ternary operator and nullish coalescing operator

const isAuthenticated = "";

const authStatusWithTernary = isAuthenticated
  ? isAuthenticated
  : "Your are a Guest User";

const authStatusWithNullish = isAuthenticated ?? "You are a Guest User";

console.log({ authStatusWithTernary }, { authStatusWithNullish });


// Optional Chainging Operator

