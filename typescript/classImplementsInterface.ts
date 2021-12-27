import { HasPrint } from "./interfaceForClass";
export class Invoice implements HasPrint {
    constructor(readonly client: string, private work: string, public amount: number) {
    }

    print() {
        return `${this.client} owes ${this.amount} dollars for this work ${this.work}`
    }
}

export class Payment implements HasPrint {
    constructor(
        readonly recipiend: string, 
        private job: string, 
        public amt: number) {
    }

    print() {
        return `${this.recipiend} recipiend ${this.amt} dollars for this work ${this.job}`
    }
}