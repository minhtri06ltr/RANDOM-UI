class Employee{
    constructor(   
    public name:string, // can using outside class
    private age:number, //can not using outside class
    readonly gender:boolean, // can view but can not edit outside class)
    ){}
        print(){
            return `name: ${this.name}, age: ${this.age}`;
        }
    }
    
    const bob = new Employee('minh tri',23,true);
    let employees: Employee[] = [];
    employees.push(bob);
    employees.forEach(employee => console.log(employee))