//  Interface contain only abstract methods and it dors not have the consructor like class
// we can extends interface also like class

//example basic interface

/*interface Person
{
    name: string;
    age: number;
}

    let student :Person =
    {
        name:"john",
        age:20
    }
 console.log(student.name);*/

// example2 : using inheritance  with interface
/*interface Animal {
  name: string;
}

interface Mydog extends Animal {
  color: string;
  display(): void; // only declaration
}

let info: Mydog = {
  name: "Ravi",
  color: "Red",

  display() {
    console.log("Name is:", this.name);
    console.log("Color is:", this.color);
  }
};

// Calling method
info.display(); */

//example 3  :  a class implenets an interface( using inheritance)

interface API {
  get(): void;
  post(): void;
}

class UserAPI implements API {
  get() {
    console.log("GET API called");
  }

  post() {
    console.log("POST API called");

    
}


}
//direct creating object with out interface type
/*let  info =new UserAPI();
info.get();
info.post();*/

// crating object with interface type

let obj: API = new UserAPI();
obj.get();
obj.post();

