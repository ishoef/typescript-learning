// non-primitive data types
// 1. object
// 2. array
// 3. function
// 4. date

// ts data types
// 1. any
// 2. unknown
// 3. tuple
// 4. enum
// 5. void
// 6. never

let marketList: string[] = [
  "fruits",
  "eggs",
  "vegetables",
  "meat",
  "fish",
  "spices",
  "grains",
];

console.log(marketList);

marketList.push("dairy");
marketList.push("12");

console.log(marketList);

let mixedArr: (string | number)[] = ["suger", 2, "alu", 5, "piyaz", 4];
console.log(mixedArr);

let tupleArr: [string, number, boolean] = ["apple", 5, true];

console.log(tupleArr);
