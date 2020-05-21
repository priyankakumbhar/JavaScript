//initialize array
let names=['john','mark','jane'];
let years=new Array(1998,1993,1996);
//array mutate
console.log(names[0]);
console.log(names.length);
names[1]='bane';
names[name.length]='marry';
console.log(names);
console.log(names);

//different datatype

let john=['john','smith',1990,'teacher',false,'designer'];
john.push('blue');//add at last
console.log(john);
john.unshift('Mr');//add at begin
console.log(john);
john.pop('john');
console.log(john);
john.shift('Mr');
console.log(john);
console.log(john.indexOf(1990));
console.log(john.indexOf(13));//if elemet not present written -1
 let isDesigner = john.indexOf('designer')==-1 ? 'john is not a a designer' : 'john is desginer';
console.log(isDesigner);

let isDesign = john.indexOf('designer')===-1 ? 'john is not a a designer' : 'john is desginer';
console.log(isDesign);

