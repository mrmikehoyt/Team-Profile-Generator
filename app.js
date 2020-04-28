const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//array that stores answers
let teamMembers = []
//generic questions that are asked
let questions = [
    {
      type: 'list',
      message: 'What is your Role?',
      choices: ['Intern','Manager','Engineer'],
      name: 'role'
    },
    {
      type: 'input',
      message: 'What is your id?',
      name: 'id'
    },
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name'
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email'
    }

      
  ]
 let addMoreMembers = [{
  type: 'list',
  message: 'Would you like to add another team member',
  name: "addTeamMember",
  choices: ['yes','no']
}]

  let internQuestions = [{
    type: 'input',
    message: 'What school do you go to?',
    name: "school"
  }]

  let managerQuestions =[{
    type: 'input',
    message: 'What is your office number?',
    name: "officeNumber"
  }]
  let engineerQuestions =[{
    type: 'input',
    message: 'What is your github username?',
    name: "github"
  }]

  initialquestions()
function engineerquestions(emp){
  inquirer 
  .prompt(engineerQuestions).then(engineeranswer =>{
    let eng = new Engineer(engineeranswer.github,emp.getName(),emp.getId(),emp.getRole(),emp.getEmail())
    console.log(eng)
    console.log(eng.github)
    teamMembers.push(eng)
    addTeamMembers()
  })
}
function managerquestions(emp){
  inquirer 
  .prompt(managerQuestions).then(manageranswer =>{
    let man = new Manager(manageranswer.officeNumber,emp.getName(),emp.getId(),emp.getRole(),emp.getEmail())
    console.log(man)
    console.log(man.officeNumber)
    teamMembers.push(man)
    addTeamMembers()
  })
}
function internquestions(emp){
  inquirer 
  .prompt(internQuestions).then(internanswer =>{
    let int = new Intern(internanswer.school,emp.getName(),emp.getId(),emp.getRole(),emp.getEmail() )
    console.log(int)
    console.log(int.school)
    teamMembers.push(int)
    addTeamMembers()
  })
}
function initialquestions(){
    
        inquirer
          .prompt(questions).then(answer => {
                let emp = new Employee(answer.name, answer.id, answer.role, answer.email)
                console.log(emp)
                console.log(emp.getname)
               // console.log(render(teamMembers))
                if (answer.role ==='Intern'){
                  internquestions(emp)
                }
                else if(answer.role ==='Engineer'){
                  engineerquestions(emp)
                }
                else if(answer.role ==='Manager'){
                  managerquestions(emp)
                }
                else
                {console.log('if the code reaches here there is a big problem')}

               
                
            })


}

function addTeamMembers(){
  inquirer
  .prompt(addMoreMembers).then(answer => {
    if (answer.addTeamMember  === 'yes'){
      //    inquirer
  //.prompt(questions).then(answer => 
  
    //    let emp = new Employee(answer.name, answer.id, answer.role, answer.email)
      //  teamMembers.push(emp)
      initialquestions()
      //console.log('add teammembers') 
        }    
    
        else {
          console.log('no more team members to add')
          console.log(teamMembers)
          if (!fs.existsSync(OUTPUT_DIR)){fs.mkdirSync(OUTPUT_DIR)}
          fs.writeFileSync(outputPath,render(teamMembers))

        }
})
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
