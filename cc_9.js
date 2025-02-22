// Task 1 Creating an Employee Class
class Employee { // Create Employee class
    constructor(name, id, department, salary) { // Constructor with employee details
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    getDetails() { // Method to get employee details based on class properties 
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; // 
        }
    calculateAnnualSalary() { // Method to calculate annual salary 
        return this.salary * 12
    };
};  

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // Create new employee
console.log(emp1.getDetails()); // Get employees details and log to console 

// Task 2 Creating a Manager Class (Inheritance & Method Overriding)

class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // Call employee constructor 
        this.teamSize = teamSize; // Assign team size
    }
    getDetails() {
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}` // Return details with team size 
    }
    calculateBonus() { // Method to calculate bonus
        return this.salary * 0.10 * 12 
    }   

    calculateAnnualSalary() {
        return this.salary * 12 + this.calculateBonus(); // Update to include bonus in total payroll
    }
};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // Create nre manager 
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

// Task 3 Creating a company class

class Company { // Create a company class
    constructor(name) { // Constructor with company name
        this.name = name;
        this.employee = []; // An array to store employee objects
    }

    addEmployee(employee) { // Add a new employee using the push method 
        this.employee.push(employee);
    }
    listEmployees() {
        this.employee.forEach(employee => console.log(employee.getDetails())); // Use the for each method to list employees 
    }

    // Task 4 Implementing a Payroll System

    calculateTotalPayroll() { // Method to calculate payroll
        return this.employee.reduce((total, employee) => { // Use reduce to calculate total salary and add it to the total
            return total + employee.calculateAnnualSalary();
        }, 0);
    }

     // Task 5 Implementing Promotion

     promoteToManager (employee, teamSize) { // Method to change employee to manager
        const index = this.employee.indexOf(employee); // Locate employee in array
        this.employee[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); // Create manager and retain original details
     }
};

const company = new Company("TechCorp");
company.addEmployee(emp1); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
company.addEmployee(mgr1); // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
company.listEmployees(); //
console.log(company.calculateTotalPayroll()); // Expected output: 165600
company.promoteToManager(emp1, 3); // Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
company.listEmployees();
