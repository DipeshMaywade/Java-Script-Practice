class EmployeePayroll{
    constructor(...para){
        this.id = para[0];
        this.name = para[1];
        this.salary = para[2];
        this.gender = para[3];
        this.startDate = para[4];
    }

    get name(){return this._name}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name
        else throw "Name Is Incorrect!!"
    }
    
    get id(){return this._id}
    set id(id){
        let idRegex = RegExp('^[1-9]{1,}$');
        if (idRegex.test(id))
            this._id = id;
        else throw "Id Is Incorrect!!"
    }
    
    get salary(){return this._salary}
    set salary(salary){
        let salaryRegex = RegExp('^[1-9]{1,}$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else throw "Salary Is Incorrect!! "
    }
    get gender(){return this._gender}
    set gender(gender){this._gender = gender}
    get startDate(){return this._startDate}
    set startDate(startDate){this._startDate = startDate}

    toString(){
        return "Id="+this.id+", Name="+this.name+", Salary="+this.salary+", Gender="+this.gender+", StartDate="+this.startDate;
    }

}

let employeePayroll = new EmployeePayroll(1,"Max",3000,"M");
console.log(employeePayroll.toString());

try {
    employeePayroll.name = "Deep"
} catch (error) {
    console.error(error);
}
try {
    employeePayroll.id = 2
} catch (error) {
    console.error(error);
}
try {
    employeePayroll.salary = 0
} catch (error) {
    console.error(error);
}

console.log(employeePayroll.toString());