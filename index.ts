#! /usr/bin/env node

import inquirer from "inquirer";

const answers =await inquirer.prompt([{
    type:"input",
    name:"userId",
    message:"Kindly Enter your ID:"
},{
    type:"number",
    name:"userPin",
    message:"Kindly Enter your PIN:"
},{
    type:"list",
    name:"accountType",
    choices:["Current","Saving"],
    message:"Kindly Enter your Type:",
},
{
    type:"list",
    name:"transactionType",
    choices:["Fast cash","Withdraw"],
    message:"Slect your Transaction:",
    when(answers){
        return answers.accountType }
},
{
    type:"list",
    name:"amount",
    choices:["1000","2000","5000","10000","20000"],
    message:"Slect your Amount:",
    when(answers){
        return answers.transactionType == "Fast cash"
}},{
    type:"number",
    name:"amount",
    message: "Enter your amount",
    when(answers){
        return answers.transactionType == "Widthdraw"
},
},
])

if(answers.userId && answers.userPin){
    const balance = 500000;
    console.log("Previous Balance",balance);
    const enteredAmount =answers.amount;
    if(balance>=enteredAmount){
        const remaining =balance - enteredAmount;
        console.log("Your Remaining Balance Is:",remaining);  
    }
    else{
        console.log("Insufficient Balance");
        
    }
}