// Generic with function

// Normal Type Example
const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: Number) => [value];
const createArrayWithObject = (value: { id: number; name: string }) => [value];

const arrString = createArrayWithString("Ismail Nayef");
const arrNumber = createArrayWithNumber(222);
const arrObj = createArrayWithObject({ id: 123, name: "ismail" });

console.log(arrString, arrNumber, arrObj);

// With Generic Example
const createArrayWithGeneric = <T>(value: T) => [value];

const arrStrings = createArrayWithGeneric("Ismail Nayef");
const arrNumbers = createArrayWithGeneric(222);
const arrObjs = createArrayWithGeneric({ id: 123, name: "ismail" });

console.log(arrStrings, arrNumbers, arrObjs);
