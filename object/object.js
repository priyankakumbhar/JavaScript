//object literal
//creating object
let john={
    firstName: 'john',
    lastName: 'sharma',
    birthYear:1998,
    family:['jane','smith','bob','emily'],
    job:'teacher',
    isMarried:false
}

//access data from object
console.log(john.firstName);
console.log(john['job']);
let x='birthYear';
console.log(john[x]);

//mutate data
john.isMarried=true;
john['job']='designer';
console.log(john);

//initializing new Array

let jan=new Object();
jan.firstName='jane';
jan.birthYear=1999;
jan['lastName']='kadam';
console.log(jan);




