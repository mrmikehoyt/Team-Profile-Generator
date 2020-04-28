// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require ('./Employee')
class Manager extends Employee{
    constructor(officenumber,name,id,role,email){
        super (name,id,role,email)
        this.officenumber = officenumber

    }
    getOfficeNumber(){
        return this.officenumber
    }
    
}
module.exports=Manager