//Advanced array methods-- which will pass the funcrions as perameters
//1.forEach()
//Example1 print indexs of elements with values. we can use both general forloop and forEach() methods 
//Example1.Using Genaral for loop

/*let fruites:string[]=['Apple','goa','banana','kiwi','mango'];

for(let i in fruites)
{
    console.log(i,fruites[i]);
}*/

// Example2Using forEach()

/*let fruites:string[]=['Apple','goa','banana','kiwi','mango']
fruites.forEach(function(element, index)
{
 console.log(`${index}`, `${element}`);
}
)*/

//Example2 using arrow function


/*let fruites:string[]=['Apple','goa','banana','kiwi','mango']
fruites.forEach((element, index)=>
{
 console.log(`${index}`, `${element}`);
}
)*/

// printing from based on the index number.  print from the index no 2 
/*let fruites:string[]=['Apple','goa','banana','kiwi','mango']
for(let i=2;i<fruites.length;i++)
{
console.log(`${i}`, `${fruites[i]}`);
}*/

//Example: using forEach() print the array elements with uppercase

/*let fruites:string[]=['Apple','goa','banana','kiwi','mango']
fruites.forEach((element, index)=>
{

 console.log(`${element.toUpperCase()}`, `${index}`);
})*/

//map()--- it will create a new array with the same tas the elements count in the array

//example1: print square of each element int he array using map()

/*let numb:number[]=[1,2,3,4];
let newnum= numb.map(function(elem)
{
    return(elem*elem)
}
)

console.log(newnum);*/

//example: double the element in the array  using arrow function
/*let numb:number[]=[1,2,3,4];
let newnum= numb.map((elem)=>
{
    return(elem*2)
}
)

console.log(newnum);*/

//filter() --- creates anew array but it no need to display all the elements in the first array. it depends on the function we are executing in the funtion
//example1: print the even numbers in the array using filter() method

/*let numb:number[]=[1,2,3,4,5,6,7,8];

let even= numb.filter(function(elem)
{
    if (elem%2==0)
    {
        return(elem)
    }
})

console.log(even);*/

//example2 print odd number using arrow function
/*let numb:number[]=[1,2,3,4,5,6,7,8];
let addn=numb.filter((elem) =>
{
    return(elem%2!=0)
}
)
console.log(addn);*/

/*reduce()---  apply for every element and return a single value syntax--array.reduce(function(eccumulator,element,index,array)
{

}
)*/
//example1 : print the tetal of the elements in the array

/*let numb:number[]=[1,2,3,4,5,6];

let redu=numb.reduce(function( total,elem){



    return(total=total+elem)
}
)
console.log(redu);*/

//some()---> it will check at least one condition is satisfied . if satisfied it will
 //return true or no element is satisfied , it will return false

 //examplle: check array contains negitve number using sum()


/*let numb:number[]=[1,2,3,4,5,6];

let redu=numb.some((elem)=>elem<0);
console.log(redu);*/


//every()--> returns true if all elements pass or return false

//example: test all elements are even numbers  then return true. nay one element 

//not satisfy then return false.

let numb:any[]=[2,4,7,6];

let redu=numb.every((elem)=>elem%2==0);
console.log(redu);
