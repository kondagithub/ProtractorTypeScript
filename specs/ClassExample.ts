class Employee{

    empName:string

    constructor(name: string){
        this.empName = name;
    }

    greet(){
        console.log(`Good morning ${this.empName}`);
    }

}

let employee = new Employee("Konda Reddy");

console.log(employee.empName)

employee.greet()

class Manager extends Employee {

    constructor(managerName : string){
        super(managerName);
    }

    delegatework(){
        console.log(`Manager delegating tasks`);
    }
}

let manager = new Manager("Annapureddy");

manager.greet();
manager.delegatework();