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
};

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // Create nre manager 
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

console.log(mgr1.calculateBonus()); 
// Expected output: 9600

