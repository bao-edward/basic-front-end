//OPTIONAL AND NON NULL

let add = (a: number, b?: number):number => (b? a + b: a) 

console.log(add(3, 4));

console.log(add(2));

let addNonNull = (a: number, b?: number) => a + b!

console.log(addNonNull(1))

console.log(addNonNull(3, 5))