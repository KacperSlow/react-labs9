import { 
  EMPLOYEES_LOADED,
  EMPLOYEE_ADD
} from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}
export const employeeAdd = (NewEmployee) => {
  return {
    type: EMPLOYEE_ADD,
    payload: {
      NewEmployee
    }
  };
} 