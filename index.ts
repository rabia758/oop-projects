#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgWhiteBright.rgb(123,0,0)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\t\t\n"));
console.log(chalk.bgCyanBright.magentaBright("\n ---------------WELCOME TO MY PROJECTS------------\n"));
console.log(chalk.bgCyanBright.magentaBright("\n ----------------OOP! [OBJECTS ORIENTED PROGRAMMING]------------\n"));
console.log(chalk.bgWhiteBright.rgb(123,0,0)("\n\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\t\t\n"));

class student{
    name: string
    constructor(n:string){
        this.name = n
    }

}
class person{
    students:student[] =[];
    addstudent(obj:student){
        this.students.push(obj)
    }
}
const persons = new person()
const programstart = async (persons:person) => {
    do{
    console.log(chalk.greenBright("\n Welcome To The School!\n"));
    const ans = await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:(chalk.bgCyanBright.magentaBright("\nwhom would you like to interct with?\n")),
            choices:["staff","student","exit"]
        }
    ]);
         if(ans.select == "staff"){
        console.log(chalk.bgWhiteBright.rgb(123,0,0)("\n you approch staff room! please if you need anything you can call me!\n"));
    
         }
        else if(ans.select == "student"){
        const ans = await inquirer.prompt([
            {
                name:"student",
                type:"input",
                message:chalk.rgb(123,100,125)("\n Enter the student's name? you wish to engage with!\n")
            }
        ])
        const Student = persons.students.find(val => val.name == ans.student)
    
         if(!Student){
            const name=new student(ans.student)
        persons.addstudent(name)
        console.log(chalk.greenBright(`Hello i m ${name.name} , Nice to meet you!`));
        console.log(chalk.magentaBright("\n New student Added!\n"));
        console.log(chalk.yellowBright("\n Current student List:\n"));
        console.log(chalk.bgWhiteBright.rgb(123,0,0 )(persons.students));
        
         }
        else{
        console.log(chalk.magentaBright(`hello i m ${Student.name} nice to see you see you again`))
        console.log(chalk.rgb(0,45,85)("\n Exiting student list!\n"));
        console.log(chalk.bgWhiteBright.rgb(12,0,0)(persons.students));
        }   
           
         }else if (ans.select == "exit"){
         console.log(chalk.bgCyanBright.magentaBright("\n---------Exiting the program!----------\n"));
         console.log(chalk.bgWhiteBright.rgb(12,0,0)("\n~~~~~~~~~~~~~~~~~~~~~~THANKYOU!~~~~~~~~~~~~~~~~~~~~\n"));
         process.exit();
        }            
    }while(true);
}

programstart(persons);
