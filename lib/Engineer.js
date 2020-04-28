// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer extends Employee {
constructor (getgithub,name,id,role,email){
super (name,id,role,email)
this.getgithub = getgithub


}
getGithub(){
    return this.getgithub
}



}
module.exports = Engineer

