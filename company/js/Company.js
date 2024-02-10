class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    get start() {
        return firm.employees[0].age;
    }

    addEmployee(employee){
        const index = this._employees.findIndex(e => e.id === employee.id);
        if(index<0) {
            this._employees.push(employee);
        }
        return index<0;
    }

    removeEmployee(id){
        const index = this._employees.findIndex(e => e.id === id);
        if(index>=0){
            this._employees.splice(index,1);
        }
        return index>=0;
    }
    avgAge() {
        return this.employees.reduce((res, p) => p.age + res, 0) / this.employees.length;
    }
    minAge() {
        return this.employees.reduce((res, p) => p.age < res ? p.age : res, this.start);
    }
    maxAge() {
        return this.employees.reduce((res, p) => p.age > res ? p.age : res, this.start);
    }

    totalSalary() {
        return this.employees.reduce((res, p) => res + p.salary, 0);
    }
    avgSalary() {
        return this.employees.reduce((res, p) => res + p.salary, 0) / this.employees.length;
    }
}