let john={
    fullName:'john',
    massJohn:78,
    heightJohn:1.57,
    calBMI:function()
    {
        this.bmiJohn=this.massJohn/(this.heightJohn*this.heightJohn);
        return this.bmiJohn;
    }

}
john.calBMI();
console.log(john);

let mike={
    fullName:'Mike',
    massMike:89,
    heightMike:1.45,
    calBMI:function()
    {
        this.bmiMike=this.massMike/(this.heightMike*this.heightMike);
        return this.bmiMike;
    }
}
mike.calBMI();
console.log(mike);


//check who has higher bmi

if(john.bmiJohn>mike.bmiMike)
{
    console.log(john.fullName+' has higher BMI');
}
else if(john.bmiJohn<mike.bmiMike)
{
    console.log(mike.fullName+' has higher BMI');
}
else
{
    console.log('BMI of john and mike are same');
}