// Task 1 
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
    calculateBonus() { // Method to calculate annual salary 
        return this.salary * 12
    };
};  

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // Create new employee
console.log(emp1.getDetails()); // Get employees details and log to console 

