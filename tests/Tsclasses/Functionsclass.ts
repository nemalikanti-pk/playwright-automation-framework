// functions with no parameters and no return type

/*function display() :void
{
    console.log(" function with out return type and parameters")

}
 display()*/

 // function with parameters and return type
 /*function addnum(x:number , y:number): number
 {
  return x*y;
 }
  console.log(addnum (2,3));
  let res:number= addnum(2,3);
  console.log(res)*/

  //Rest parameters with multiple parameters

  /*function adsum(...nums: number[])
  {
    let i=0;

    let sum : number =0;

    for(i=0 ; i<nums.length;i++)
    {
        sum =sum + nums[i];
}
 
    console.log("sum of nubers" ,sum) 
  }
 adsum(1,2,3,6,8)*/

 ///function with resst parametres with different daya 
 // types and find the lenghr of the parameters

 /*function addm(...sumnum: (number | string)[]): number
 {

 
  return  sumnum.length;
 }
  console.log(addm(1,2,"ravi",5,"kumar",9,"nitin")); */

  //Namned function with optional parameters

  function opt(id: number, name: string , mailid?: string)
  {
    console.log("ID is",id);
     console.log("name is",name);
     if(mailid !=undefined)
     {
       console.log("mailid is",mailid);
     }

     
      

  } 

  opt(1,"ravi","ravi@gmail.com")
   opt(1,"ravi")


