// Define the interface 
interface Wallet {
  balance: number
  addMoney(amount: number):void
  }
// Create an object 
const wallet: Wallet = {
  balance: 0,

  addMoney: (amount: number) => {
    return amount + 0; 
  }
};

//Use function
const newBalance = wallet.addMoney(100);

console.log(newBalance); // 100

 


