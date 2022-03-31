type StringOrNumber = string | number;
type Student = {name:string
     id:string | number};
const studentDetails = (id: StringOrNumber, name: String): void=>{
    console.log(`name: ${name}, id: ${id}`)
}
studentDetails(2,'you');

const student = (student: Student) =>{
    console.log(`student: ${student.name} id: ${student.id}`);
}
student({
    name:'tri',id:2
})