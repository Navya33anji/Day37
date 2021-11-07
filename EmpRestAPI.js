//UC 12 EmployeePayrollData templates
//UC 14 EmployeePayrollData templates with regex expression

class EmployeePayrollData {
    id;
    gender;
    salary;
    //Uc 12 extent Refactored to add gender and salary
    startDate;
    //constructor to store data
    //params to pass any number of parameter not forced to give all parameters
@@ -20,7 +20,13 @@ class EmployeePayrollData {
        return this._name;
    }
    set name(value) {
        this._name = value;
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(value)) {
            this._name = value;
        }
        else {
            throw "Incorrect name";
        }
    }

    toString() {
@@ -30,9 +36,22 @@ class EmployeePayrollData {
    }

}
let employeePayrollData = new EmployeePayrollData(1, "Diptimayee", 30000);
console.log(employeePayrollData.toString());
employeePayrollData.name = 'Jayant';
console.log(employeePayrollData.toString());

let newEmployee = new EmployeePayrollData(1, "Mahima", "F", 30000, new Date());
console.log(newEmployee.toString()); 
console.log(newEmployee.toString());

try {
    newEmployee.name = "yamini";
    console.log(employee.toString());
}
catch (ex) {
    console.log("Pattern not matched")
    console.error(ex);
}
try {
    let employee = new EmployeePayrollData(1, "Shashank", 30000, "M", new Date());
    console.log(employee.toString());
}
catch (ex) {
    console.error(ex);
} 
