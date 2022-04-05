interface Person{
    name:string,
    age:number,
    speak(lang: string): void,
    spend(amount: number): number,
}
const minhtri: Person = {
    name:'Minh Tri',
    age:22,
    speak(text: string): void {
        console.log(text);
    },
    spend(amt: number): number{
        return amt;
    }
}