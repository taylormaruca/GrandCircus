abstract class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract calcPay(): number;

    printPay() {
        let calculatedPay = this.calcPay().toFixed(2);
        return `${this.name} is paid $${calculatedPay}`;
    }
}

class Volunteer extends Employee { 

    constructor(name: string) {
        super(name);
    }

    calcPay(): number {
        return 0;
    }
}

class SalaryEmployee extends Employee { 
    annualSalary: number;

    constructor(name: string, annualSalary: number) {
        super(name);
        this.annualSalary = annualSalary;
    }

    calcPay(): number {
        let salary = this.annualSalary/26;
        return salary;
    }
}

class HourlyEmployee extends Employee { 
    hourlyWage: number;
    hoursWorked: number;

    constructor(name: string, hourlyWage: number, hoursWorked: number) {
        super(name);
        this.hourlyWage = hourlyWage;
        this.hoursWorked = hoursWorked; 
    }
    
    calcPay(): number {
        return this.hourlyWage * this.hoursWorked;
    }
}

let emp1 = new Volunteer("Taylor");
let emp2 = new SalaryEmployee("Brice", 51000);
let emp3 = new HourlyEmployee("Max", 10, 40);

let employees = [emp1, emp2, emp3];

for(let i = 0; i < employees.length; i++) {
    console.log(employees[i].printPay());
}