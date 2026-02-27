
//Defining a customers explicit data types
interface Customer{
    fName: string,
    lName: string,
    age:number

}
//function to check customers age
function checkCustomerAge(customer: Customer): string {

  if (customer.age >= 18) {
    return "Customer is an adult";
  } 
  
  return "Customer is underage";
}


//Customer data and results logged
const customer1: Customer = {
  fName: "Jason",
  lName: "Barron",
  age: 25
};

const result = checkCustomerAge(customer1);

console.log(result); 
// Output: Customer is an adult   