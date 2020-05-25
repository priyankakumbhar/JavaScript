//Hoisting 

//work only funcion declaration
/*calculateAge(1995);
function calculateAge(year)
{
    console.log(2020-year);
}*/

//calculateAge(1995);
/**
 * 
 * function Expression Hoisting 
 */
 //retirement(1965);-----not work

var retirement=function (year)
{
    console.log(65-(2020-year));
    
}
retirement(1970);




/******
 * Hoisting with variable 
 */
//console.log(age);---Error
let age=22;
console.log(age);

function foo()
{
   // console.log(age);----Error
    let age=65;
    console.log(age); //print 65
}
foo();
console.log(age);//print 22



/**
 * ScopeChain
 * exical scoping ---child has access of variable and function of parent and global variable and function
 */
/*let a="Hi";
first();

function first()
{
    let b="hello";
    second();
        function second() 
        {
            let c="hey";
            console.log(a+' '+b+' '+c);
        }
} */
//---------------------
let a1="hello";
first();
function first()
{
    let b1='Hi';
    second();
    function second()
    {
        let c1='hey';
        third();
    }
}
function third()
{
    let d1='hieee';
    console.log(a1+' '+d1);
}

/*************
 * this keyword
 */

function calculateAge(year)
{
    console.log(2020-year);
    console.log(this);
}
calculateAge(1985);

//object

let john={
    firstName:'john',
    birthYear:1995,
    calculateAge:function()
    {
    console.log(this);
    console.log(this.firstName+' '+this.birthYear);
    console.log(2020-this.birthYear);

    /*function innerFunction()
    {
        console.log(this);
    }
    innerFunction();*/
    }
}
john.calculateAge();


let mike={
    firstName:'mike',
    birthYear:1995
}
//method borrow
mike.calculateAge=john.calculateAge;
mike.calculateAge();