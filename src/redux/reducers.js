import {
  EMPLOYEES_LOADED,
  EMPLOYEE_ADD,
  EMPLOYEES_LOADING,
  EMPLOYEES_ERROR
 } from './constants';
import { employeesLoaded } from './actions';

export const initialState = {
  employees: [],
  DataFetched: false,
  error: null,
  isLoading: false
};

// Read this: https://redux.js.org/basics/reducers

export const loadEmployees =()=>{
  return (dispatch) =>{
    dispatch(loadingEmployees())
    return fetch('http://localhost:3004/employees')
    .then(
      (employees) => dispatch(employeesLoaded(employees)),
      (error) => dispatch(employeesLoadingError(error)),
    );
  };
}
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees, DataFetched: true,error: false,isLoading: false });
    }
    case EMPLOYEE_ADD:{
      const { NewEmployee } = action.payload;
      const newemployee=[...state.employees,NewEmployee]
      return Object.assign({}, state, { employees: newemployee });
    }
    case EMPLOYEES_LOADING:{
      return Object.assign({},state,{isLoading:true,error:null});
    }
    case EMPLOYEES_ERROR:{
      const {error}=action.payload;
      return Object.assign({},state,{isLoading:true,error});
    }
    default:
        return state
  }
}

export default appReducer;