import { 
  EMPLOYEES_LOADED,
  EMPLOYEE_ADD,
  EMPLOYEES_LOADING,
  EMPLOYEES_ERROR
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

export const employeesLoadingError=(error)=>{
  return{
    type: EMPLOYEES_ERROR,
    payload:{
      error
    }
  }
}  
export const employeesLoading=()=>{
  return{
    type: EMPLOYEES_LOADING
    }
  }
export const employeesFetch=()=>{
  return(dispatch)=>{
    dispatch(employeesLoading())
    fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    .then(
    (employees) => dispatch(employeesLoaded(employees)),
    (error)=>dispatch(employeesLoadingError(error))
    );
  };
  }