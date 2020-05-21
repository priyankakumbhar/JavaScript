let massMarks=70,massJohn=80,
heightMarks=1.50,heightJohn=1.40;

let mBMI=massMarks/(heightMarks*heightMarks);
console.log('m '+mBMI);

let jBMI=massJohn/(heightJohn*heightJohn);
console.log('j '+jBMI);

if(mBMI>jBMI)
{
    console.log(" Is mark's BMI higher than john's true? ");  
}
else
{
    console.log(" Is john\'s BMI higher than mark\'s true? ");
}