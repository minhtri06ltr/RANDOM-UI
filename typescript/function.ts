// function
const square = (side: number) => side*side;
console.log(square(3))

let great: Function

great = () => console.log('hello');
great();

const add = (a: number, b: number,c?: number | string) => {
    console.log(a+b);
    console.log(c);
};
add(2,6);
const addDefault = (a: number, b: number,c: number | string = 10) => {
        console.log(a+b);
        console.log(c);
    };
    addDefault(2,6);
const minus = (a: number, b: number): number => a+b;