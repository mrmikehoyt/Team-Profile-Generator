// TODO: Write code to define and export the Employee class
class Employee{
    constructor (name,id,role,email)
    {
        this.name = name
        this.id = id
        this.role = role
        this.email = email
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
        getRole(){
            return this.role
        }
        getEmail(){
            return this.email
        }
    
}
module.exports = Employee