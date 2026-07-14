// Inheritance examplemm
/* class Car{
name: string;
color: string;

constructor(name:string,color:string) // place the values to the properties
{
    this.name=name;
    this.color= color;
}

display(){

    console.log(`name: ${this.name}, color:${this.color}`)
}

}

class Honda extends Car
{
    year : number;

constructor(name:string,color:string,year:number)
{  

    super(name,color);// to pass the values to the parent class properties
    this.year=year;// child class property
}

  disp(){

    console.log(`name: ${this.name} , color: ${this.color},year:${this.year}`);// prinitng the result
  }
}

let ch= new Honda("Honda","red",2002);
//ch.disp();
ch.display()*/

//example2 using super to csll the parent with out conctructor


/*class Car {
  display() {
    console.log("This is Car");
  }
}

class Honda extends Car {
  display() {
    super.display(); // calling parent method
    console.log("This is Honda");
  }
}

const h = new Honda();
h.display();*/

// example 3: no cunstructor in paren and cjhaild classes


class Car {
  name: string = "Default Car";
  color: string = "Black";

  display() {
    console.log(`name: ${this.name}, color: ${this.color}`);
  }
}

class Honda extends Car {
  year: number = 2022;

  disp() {
    console.log(`name: ${this.name}, color: ${this.color}, year: ${this.year}`);
  }
}

let ch = new Honda();
ch.disp();

