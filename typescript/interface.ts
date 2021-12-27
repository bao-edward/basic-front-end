// INTERFACE
interface Person {
    name: string
    age: number
    speak(lang: string): void
    spend(amount: number): number
}

const bao: Person = {
    name: 'bao',
    age: 22,
    speak(text: string): void {
        console.log(text)
    },
    spend(num: number): number {
        return num;
    }
}

const hello = (param: Person) => console.log(`hello ${param.name}`)
hello(bao)

