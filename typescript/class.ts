// CLASS
class Employee {
    // public name: string
    // private age: number
    // readonly male: boolean
    // adress: string
    // constructor(name, age, male) {
    //     this.name = name
    //     this.age = age
    //     this.male = male
    // }
    
    constructor(public name: string, private age: number, readonly gender: boolean, public adress: string) {
    }

    print() {
        return this.name + this.gender + this.age + this.adress;
    }
    sayHello: () => string
}
let bao = new Employee('bao', 22, true, 'hhh')
Employee.prototype.sayHello = function() {
    return ' hello'
}
// console.log(bao.sayHello())
// console.log(bao)

// let teacher: Employee
// teacher = new Employee('abc', 12, false, 'xxx')
// console.log(teacher)

//array

let stu: Employee[]
stu = [new Employee('abc', 12, false, 'xxx'), new Employee('haha', 1112, false, 'asd')]
console.log(stu)

export { Employee }
