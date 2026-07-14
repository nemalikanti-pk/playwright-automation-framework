//push() method ----  we cav add the element at the end of the array element

//example1: 

/*let nembers:number[]=[1,2,3,4,5];
nembers.push(6,7) // add 6,7 numbers  after 5th number in the array
for(let i=0;i<nembers.length;i++)
console.log(nembers[i]);*/

//pop() method  - will remove the last number of the array

//Exampke:

/*let numbers:number[]=[1,2,3,4,5];
numbers.pop()
for(let i=0;i<numbers.length;i++)

console.log(numbers[i]);*/

//shift()--- will remove the first element in the aray

/*let numbers:number[]=[1,2,3,4,5];
numbers.shift()
for(let i=0;i<numbers.length;i++)

console.log(numbers[i]);
*/

//unshift() : add the elements at the bigining of the array


/*let numbers:number[]=[1,2,3,4,5];
numbers.unshift(23,45)
for(let i=0;i<numbers.length;i++)

console.log(numbers[i]);*/

// concat()--  combine the multiple arrays to the array

/*let numbers:number[]=[1,2,3,4,5];
let combine=numbers.concat([14,15],[16]);
for(let i=0;i<combine.length;i++)

console.log(combine[i]);*/

//slice(): it will extract the elements based on the index

//example

/*let numbers:number[]=[1,2,3,4,5];
let combine=numbers.slice(1,4);
for(let i=0;i<combine.length;i++)

console.log(combine[i])*/

//splice(()--- it will add or delete the elements where ever u want)

//exmaple1  removint the elements
/*
let numbers:number[]=[1,2,3,4,5];
let combine=numbers.splice(1,4);
//for(let i=0;i<combine.length;i++)

console.log(combine)
console.log(numbers);*/

//example2 --adiding the elements

/*let numbers:number[]=[1,2,3,4,5];
let combine=numbers.splice(1,0, 33,45,56);
//for(let i=0;i<combine.length;i++)

console.log(combine); */

///Indexof()-- fine rhe index of the element. if element not found it will return -1

let numbers:number[]=[1,2,3,4,5];
let combine=numbers.indexOf(2,3);
//for(let i=0;i<combine.length;i++)

console.log(combine);




