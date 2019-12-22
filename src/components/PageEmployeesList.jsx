import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {employeesFetch } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isLoading: false,
    }
  }

  componentDidMount() {
    if(!this.props.DataFetched){
      this.props.employeesFetch();
    }
  }

  render() {
    const { isLoading,employees } = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee.id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    DataFetched: state.DataFetched,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => ({
  employeesFetch: () => dispatch(employeesFetch())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)