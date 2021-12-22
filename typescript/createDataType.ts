type StringOrNumber = string | number;
type Student = {
  id: string | number;
  name: string;
  age: number;
};
let student: Student;
student = { id: 2, name: 'que', age: 12 };
console.log(typeof student);

//other
const studentDetails = (
  id: stringOrNumber,
  name?: string
) => {
  console.log(`student ${name} has id: ${id}`);
};
studentDetails(1, 'bao');
const info = (user: Student) => {
  console.log(`student ${user.name} has id: ${user.id}`);
};