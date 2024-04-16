#! /usr/bin/env node
import inquirer from "inquirer";

let totalBalance = 10000; //Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number"
        }
    ]
);

// console.log(pinAnswer.pin);

if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");


    let atmQuestion = await inquirer.prompt(
        [
            {
                name: "accountType",
                message: "select your account type",
                type: "list",
                choices: ["current account", "saving account"]
            },
            {
                name: "transactionMethod",
                message: "please select your transaction method",
                type: "list",
                choices: ["cash withdraw","fast cash", "check balance"]
            }
        ]
    );

     if (atmQuestion.transactionMethod === "cash withdraw") 
    {
        let cashwithdrawAmount = await inquirer.prompt(
            [
                {
                    name: "withdraw",
                    message: "enter your amount you want to withdraw",
                    type: "number"
                }
            ]
        );
       
          if (totalBalance >= cashwithdrawAmount.withdraw)
          {
            totalBalance -= cashwithdrawAmount.withdraw
            console.log(`your total balance is: ${totalBalance}`);
            
          }
          else{
            console.log("you have insufficient balance");
              }
        }
           

     else if (atmQuestion.transactionMethod === "fast cash") 
    {
                
      let fastcashAns =  await inquirer.prompt(
        [
            {
                name: "fastcash",
                message: "enter your amount you want to withdraw through fast cash",
                type: "list",
                choices: [1000,
                          3000,
                          5000]
            }
        ]
      );
        if (totalBalance>= fastcashAns.fastcash)
        { totalBalance -= fastcashAns.fastcash
            console.log(`your total balance is: ${totalBalance}`);
        }
          else{
            console.log("you have insufficient balance");
              }
            }

    else if (atmQuestion.transactionMethod === "check balance"){
                console.log(`Your remaining balance is: ${totalBalance}`);
    }

}
    
else {
    console.log("Incorrect pin code!!!"); 
}

