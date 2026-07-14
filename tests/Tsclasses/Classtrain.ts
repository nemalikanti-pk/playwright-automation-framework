//creating a class
class Student{
   studentId:number;
     name:string;
    email?:string;
    schoolname:string;



constructor( sid:number,sname:string,email?:string)
{
    this.studentId=sid;
    this.name=sname;
    this.email=email;
}

displayinfo():void{

    console.log("student id is", this.studentId);
    console.log("Student name is ",this.name);
    if(this.email)
    {
        console.log("emai id is",this.email);
    }
    else{
        console.log("email is not provided");
    }
}
}

let s1=new Student(100,"ravi");
let s2= new Student(101,"ravi","ravi@gmail.com")

s1.displayinfo();
s2.displayinfo();