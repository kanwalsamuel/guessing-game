import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()* 10)
const answer = await inquirer.prompt([{
    name:"userguessNunber",
    type:"number",
    message:"please guess a number between 1 to 10"

}])
if(answer.userguessNunber === randomNumber){
    console.log("congratulations you guess right number")
}
else{
    console.log("you guess wrong number")
}