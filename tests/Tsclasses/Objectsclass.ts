//objects : group of variable and methods
//example1: create object with directly define values to the  variables and methods

/*let employee ={ name:"ravi", job:"manager",sal:10000000,

    getinfo:function():string{

       return `${this.name} is a ${this.job}  getting ${this.sal}`;

    }


}
console.log(employee.getinfo());
//modify the job
employee.job="clerk";
console.log(employee.job);*/

//approach 2 this is only applicale for typescript : inline object type
// intentionally ading data type. Dirextly specify the type os the object
/*let student:{ name:string , age:number,grade:string,

    getSummery:()=>string
}=
{
name:"ravi",age:45,grade:'engineer',
getSummery:function()
{
    return`${this.name} is ${this.age} old and grade is ${this.grade}`
}

}
console.log(student.getSummery());*/

//example3: using type  keyword we crating one stucture and used in multiple objects

type product={ name:string,price:number,
    getinfo:()=> string
}

let book1:product=(
    name:'ravi',
    price:5000
    
)


