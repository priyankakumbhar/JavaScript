/******
 * loops and iteration
 */
for(let i=0;i<10;i++)
{
    console.log(i);
}
//i=0,i<10 true,log i to console,i++
//......
//i=9,i<10 true,log i to console,i++
//i=10,i<10 false,exit the loop;


//Array example
let john=['john','smith',1998,'designer',false];
for(let i=0;i<john.length;i++)
{
    console.log(john[i]);
}

//whileloop
let i=0;
while(i<john.length)
{
    console.log(john[i]);
    i++;
}

//continue and break statement
let john1=['john','smith',1998,'designer',false];
for(let i=0;i<john1.length;i++)
{   
     if(typeof john1[i]!=='string')
{
    continue;
}
    console.log(john[i]);
}
//break
let john2=['john','smith',1998,'designer',false];
for(let i=0;i<john2.length;i++)
{   
     if(typeof john1[i]!=='string')
{
    break;
}
    console.log(john[i]);
}

//looping backword
for(let i=john.length-1;i>=0;i--)
{
    console.log(john[i]);
}




