/*******
 * Coding challenge2
 */
let j1=89,j2=120,j3=103;
let m1=116,m2=94,m3=123;
let a1=97,a2=134,a3=105;
let johnAvg,mikeAvg, maryAvg;
johnAvg=(89+120+103)/3;
mikeAvg=(116+94+123)/3;
maryAvg=(97+134+105)/3;
console.log(johnAvg,mikeAvg,maryAvg);

if(johnAvg>mikeAvg && johnAvg>maryAvg )
{
    console.log("john's team is winner:"+johnAvg);
}
else if(johnAvg<mikeAvg &&maryAvg<mikeAvg)
{
    console.log("Mike's team is winner:"+mikeAvg);
}
else if(johnAvg<maryAvg &&mikeAvg<maryAvg)
{
    console.log("Mary team is winner:"+maryAvg);
}
else if(johnAvg==mikeAvg &&maryAvg==mikeAvg){
    console.log("Draw"+johnAvg);
}


