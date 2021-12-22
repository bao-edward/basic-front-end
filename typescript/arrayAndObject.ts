//ARRAY AND OBJECT
//array
let names = ['mai', 'lan', 'hung']
names.push('bao');
//names.push(5) //false

let nums = [1, 2, 3]
nums.push(4)
//nums.push('hello')//false

let mixed = ['bao', {}]
mixed.push(['lan', 10])
mixed.push(10) 

//other
let mix = [1, '3', true, {}];
mix.push({ namee: 'bao' });
console.log(mix);
let mix: (
  | number
  | string
  | boolean
  | { age: number; adress: string }
)[];
mix = ['bao', 1, true, { age: 22, adress: 'BP' }];
console.log(mix);

//tuple
let tuple: [number, string, number];
tuple = [1, 'bao', 2];
console.log(tuple);
object
let student : {
    names: string,
    age: number
} = {
    names: 'bao',
    age: 22
}

console.log(student.names);
console.log(student.age);
