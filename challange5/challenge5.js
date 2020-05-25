/*let values=[124,48,268,180,40];
let a=[];
let tip={
    values:[124,48,268,180,40],
    calcTips:function()
    {
        for(let i=0;i<=this.values.length;i++)
        {
            if(this.values[i]<50)
            {
                this.t1=0.20*this.values[i];
                return this.t1;
            }
            else if(this.values[i]>50 && this.values[i]<200)
            {
                this.t2=0.15*this.values[i];
                return this.t2;
            }
            else if(this.values[i]>=200)
            {
                this.t3=0.10*this.values[i];
                return this.t3;
            }
        }

    }
}
tip.calcTips();
console.log(tip);
/*
console.log(a);
console.log(values);

for(let i=0;i<values.length;i++)
{
    a.push(values[i]);
}
console.log(a);
*/



let john={
        fullName : 'John',
        bills : [124,48,268,180,40],
        calcTips : function()
        {
            this.tips = [];
            this.finalValues = [];
            for(let i = 0; i <this.bills.length; i++) 
            {
             let percentage;
             let bill = this.bills[i];
             if(bill < 50)
             {
                percentage = .20;
             }
             else if(bill > 50 && bill < 200)
             {
                percentage = .15;
             }
             else if(bill >= 200)
             {
                 percentage = .10;
             }
            //add result to the corresponding array
            this.tips[i] = bill * percentage; 
           
            this.finalValues[i] = bill + bill * percentage; 
            }  
        }
}


//2nd part

let Marks={
    fullName : 'Mark',
    bills : [77,475,110,45],
    calcTips : function()
    {
        this.tips = [];
        this.finalValues = [];
        for(let i = 0; i < this.bills.length; i++) 
        {
         let percentage;
         let bill = this.bills[i];
         if(bill < 100)
         {
            percentage = .20;
         }
         else if(bill > 100 && bill < 300)
         {
            percentage = .1;
         }
         else if(bill >= 300)
         {
             percentage = .25;
         }
        //add result to the corresponding array
        this.tips[i] = bill * percentage; 
        this.finalValues[i] = bill + bill * percentage; 
        }  
    }
}

function calcAvg(tips)
{
    let sum=0,i;
    for(i=0;i<tips.length ; i++)
    {
        sum=sum+tips[i];
    }
    return sum/tips.length;
}

john.calcTips();
john.average=calcAvg(john.tips);
console.log(john);

Marks.calcTips();
Marks.average=calcAvg(Marks.tips);
console.log(Marks);


if(john.average > Marks.average)
{
    console.log(john.fullName+" Pay\'s higher bill $"+john.average);
}
else
{
    console.log(Marks.fullName+" Pay\'s higher bill $"+Marks.average);
}





