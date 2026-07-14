// constrctor overloading

/*class calculator
{

    constructor()
    constructor(x:number,y:number)
constructor(x?:number,y?:number)
{
    if(x!==undefined && y!==undefined)
    {
        console.log("additon of x and y is", (x+y))
    }

    else{
        console.log(" default constructor");
    }
}


}

let s1= new calculator();
let s2= new calculator(9,10);

//method overloading

// method overloading : here we need the call the class to print the variables. 
// but in conctrctor overloading , constuctor directly  invoke when create the objct*/

class Adding
{

    add(a:number,b:number):number
    add(a:number,b:number,c:number):number
    
    add(a:number,b:number,c?:number):number
    {
        if(c!==undefined)
        {
           return(a+b+c)
        }

        else{
        return(a+b)
        }
    }

    
}
 let cal1= new Adding()

    console.log("Adding is",cal1.add(10,20));
  
