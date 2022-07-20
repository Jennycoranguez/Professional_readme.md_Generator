const inquirer = require("inquirer");
var fs = require('fs')
var mark = "taco"
// TODO: Include packages needed for this application
var generatemarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'project',
    },
    {
        type:'input',
        message:'Please write a short description of your project?',
        name:'description',
    },
    { 
        type:'list',
        message:'what kind of license should your project have?',
        name:'license',
        choices: ['MIT License', 'Boost Software License 1.0',
        'The Unlicense'],
    },
    {
        type:'input',
        message:'what command should be run to install dependencies?',
        name:'run',
        
    },
    {
        type:'input',
        message:'how to run the test?',
        name:'test'
    },
    {
        type:'input',
        message:'how usage contruibute?',
        name:'contruibute',
    },
    {
        type:'input',
        message:'how do you use the application?',
        name:'usage',
    }
    ]

inquirer
    .prompt(questions)
    .then((response) =>{
        var markdown = generatemarkdown(response)
        fs.writeFile('README.md',markdown, (err)=>{
            if(err) throw err
        })
        
    }





    // response.confirm === response.password
    //     ? console.log('Success!')
    // : console.log('You forgot your password already?!')
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// arr = [123, 2134, 234,]

// arr[0] = 123

// var frank = {
//     food: "taco",
//     toppings: "raddishj"
// }

// frank.food = "taco"