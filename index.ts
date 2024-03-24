#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()* 6+1)
const answer = await inquirer.prompt([{
    name:"userguessNunber",
    type:"number",
    message:"please guess a number between 1 to 6:"

}])
if(answer.userguessNunber === randomNumber){
    console.log("congratulations! you guessed a right number.")
}
else{
    console.log("you guessed a wrong number.")
}