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

// Tuple
const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Ismail", 25);
const res2 = createArrayTupleWithGeneric("Nayef", 25);
const res3 = createArrayTupleWithGeneric("Nayef", "Student");

// Function with Return Value Object

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    courseName: "Advanced Arabic",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Nayef",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "ismail",
  hasCar: false,
  isMarried: true,
};

const result = addStudentToCourse(student1);
const result2 = addStudentToCourse(student2);

console.log(result, result2);
