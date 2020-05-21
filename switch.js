firstName1='Pratik'
    age=22;
    switch(true)
    {
        case age<13:
            console.log(firstName1+' is a boy'); 
            break;
        case age>=13 && age<20:
            console.log(firstName1+ ' is a teanager');
            break;
        case age>=20 && age<30:
            console.log(firstName1+ ' is a younger');
            break;
        default:
            console.log(firstName1+' is a man');
        }