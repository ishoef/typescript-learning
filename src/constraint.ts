// Constraint: strict rules Deya on type

const addStudentToCourse = <T extends { id: number; name: string }>(
  studentInfo: T
) => {
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
