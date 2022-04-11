//generics

type myString = Array<string>;
type variable = Array<number>;


const last = (arr: Array<number>) => arr[arr.length - 1];
const lastNumber = last([1,2,3]);
console.log(lastNumber);

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const lastString = lastT(['minhtri','hcmue'])
console.log(lastString);

const makeT = <T>(x: T) => [x];
const makeXY = <X,Y>(x:X,y:Y) => [x,y];
//generic extend
const makeFullName = <T extends {firstName:string,lastName:string}>(obj: T) => ({
    ...obj,
    fullName: `${obj.firstName} + ${obj.lastName}`,
})
const a1 = makeFullName({firstName:'ly',lastName:'minhtri',age:22,gender:false})
console.log(a1);

const addNewEmployee = <T extends object>(employee: T) =>{
    const uid = Math.floor(Math.random()*100);
    return {
        ...employee,
        uid
    }
}

const a2 = addNewEmployee({name:'minhtri',job:'dev',age:22});
console.log(a2);

//generics in interface
interface Resource<T> {
    uid:number,
    name:string,
    data:T,
}
const rone: Resource<string>={
    uid:1,
    name:'tri',
    data:'hello'
} 