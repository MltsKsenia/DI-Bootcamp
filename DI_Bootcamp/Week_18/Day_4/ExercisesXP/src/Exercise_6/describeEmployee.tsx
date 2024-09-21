import { Employee } from './types';

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department, aged ${employee.age}.`;
    } else if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department, aged ${employee.age}.`;
    } else {
        return `${employee.name} works as a ${employee.position} in the ${employee.department} department, aged ${employee.age}.`;
    }
}

export default describeEmployee;