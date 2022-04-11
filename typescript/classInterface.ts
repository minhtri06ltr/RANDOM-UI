import { hasPrint } from "./export";

export class Invoice implements hasPrint {
    constructor(
        readonly client: string,
        private work: string,
        public amount: number
    ){}
    print(){
        return `${this.client} ${this.amount} dollars for this ${this.work} `;
    }
}
export class Payment implements hasPrint{
    constructor(
        readonly recipient: string,
        private job: string,
        public amt: number
    ){}
    print(){
        return `I owe ${this.recipient} ${this.amt} for this ${this.job}`;
    }
}