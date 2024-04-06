import inquirer from "inquirer";

const currency : any =  { 
    USD:1, //base currency
    EUR:0.91,
    GRP:0.76,
    INR:74.57,
    PKR:280
};


let userAnswer = await inquirer.prompt(
    [
       {
         name:"From",
         message:"Enter From Currency",
         type:"list",
         choices:["USD","EUR","GRP","INR","PKR"]

       },

       {
         name:"To",
         message:"Enter To Currency",
         type:"list",
         choices:["USD","EUR","GRP","INR","PKR"]
        },

        {
         name:"Amount",
         message:"Enter Your Ammount",
         type:"number",
         }
    ]
)

let fromamount = currency[userAnswer.From]
let toamount = currency[userAnswer.To]
let amount = userAnswer.Amount
let baseamount = amount / fromamount
            //  15000  / 280
let convertedamount = baseamount * toamount
console.log(convertedamount.toFixed(0));
//                         to round off decimals


// console.log(fromAmount);
// console.log(ToAmount);
// console.log(amount);
