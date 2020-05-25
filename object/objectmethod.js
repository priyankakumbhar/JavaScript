let john={
    firstName: 'john',
    lastName: 'sharma',
    birthYear:1998,
    family:['jane','smith','bob','emily'],
    job:'teacher',
    isMarried:false,
    calcAge : function(birthYear)
    {
        return 2018-birthYear;
       
    }
}
//console.log(john.calcAge(1990));
//console.log(john.calcAge(this.birthYear)); //this is to aacces current object 

let john1 ={
    firstName: 'john',
    lastName: 'sharma',
    birthYear:1998,
    family:['jane','smith','bob','emily'],
    job:'teacher',
    isMarried:false,
    calcAge : function()
    {
         this.age=2018-this.birthYear;
    }
}
john1.calcAge();
console.log(john1);



