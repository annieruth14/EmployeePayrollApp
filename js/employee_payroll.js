const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
}); 

class EmployeePayrollDate {
    constructor(...params) {
        this.name = params[0];
        this.gender = params[1];
        this.department = params[2];
        this.salary = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else alert("Name is Incorrect");
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        if(salary > 0)
            this._salary = salary;
        else alert("Salary is not valid");
    }

    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if(startDate < Date.now())
            this._startDate = startDate;
        else alert("Date is not valid");
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate.toLocaleDateString("en-US", options);
        return "Name= " + this.name + "\nSalary= "+ this.salary + "\nGender= "+ this.gender + "\nStartDate= "+ empDate + "\nDepartment= "+ this.department;
    }
}

function save(event) {
    function getElement(elements) {
        let checked = new Array();
        for (var i = 0, length = elements.length; i < length; i++) {
            if (elements[i].checked) {
                checked.push(elements[i].value);
            }
        }
        return checked;
    }
    const name = document.getElementById("name").value;
    const gender = getElement(document.getElementsByName('gender'));
    const department = getElement(document.getElementsByClassName("checkbox"));
    const salary = output.textContent;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    let dateFormat = day+" "+month+" "+year;
    const date = new Date(dateFormat);
    let employeePayrollData = new EmployeePayrollDate(name, gender, department, salary, date);
    let flag = 0;
    if(employeePayrollData.name != undefined && employeePayrollData.salary != undefined && employeePayrollData.gender != undefined && employeePayrollData.department != undefined && employeePayrollData.startDate != undefined)
        alert("You have entered:\n"+ employeePayrollData.toString());
}

