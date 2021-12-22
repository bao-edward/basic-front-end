let classs: string = '10A3';
let nums: number = 20;
let logic: boolean = true;
//ex
let age: number = 1;
let FirstName: string;
function sum(a: number, b: number): number {
  return a + b;
}
let multiply = (a: number, b: number) => a * b;
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//any
let x: any;
x = { namee: 'bao', age: 12 };
x = () => {};
console.log(typeof x);