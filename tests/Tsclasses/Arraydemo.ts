//basic  array declaration and initialization 

/*let names: string[]=['ravi','kumar']
console.log(names)*/

// Approach 2  generic way using array  word- using different data types

/*let empno:Array<number |  string>=[ 11,"ravi", 121,234,456,789,]
console.log(empno);
console.log(empno[2]);  // get the  values with using  index number*/

//using for loop

/*let empinfo:Array< number | string>=[ "ravi",1,"kranthi",2,"kumar",3]

for(let i=0; i<empinfo.length;i++)
{
    console.log(empinfo[i]);
}*/

//using for ... in loop 

/*let empinfo:Array< number | string>=[ "ravi",1,"kranthi",2,"kumar",3]

for(let i in empinfo)
{
    console.log(empinfo[i]);
}*/

//Array with for ....of loop. direct we are capturing the data with out index

let empinfo:Array< number | string>=[ "ravi",1,"kranthi",2,"kumar",3]

for (let tester of empinfo)
{
console.log(tester)
}

