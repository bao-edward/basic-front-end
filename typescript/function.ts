function doSomeThing(human: {
  namee: string;
  agee: number;
}) {
  console.log(human.namee);
  console.log(human.agee);
}

doSomeThing({ namee: 'bao', agee: 18 });

function printName(obj: { first?: string; last?: string }) {
  console.log(obj.first?.toUpperCase());
  console.log(obj.last?.toUpperCase());
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Bob', last: 'Alisson' });

//signature
let greet: Function;
greet = () => {
  console.log('hello');
};
greet();
let greet: () => string;
greet = () => {
  console.log('bao');
  return '3';
};
console.log(greet());
//void
function doSomeThing({ namee, number }): void {
  console.log(namee);
  console.log(number);
  //no return
}

