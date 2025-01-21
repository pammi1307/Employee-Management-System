import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom' // useNavigate is a hook that returns the navigate function from the React Router. It is used to navigate to a different route in the application.

const ListEmployeeComponent = () => {

  // first is the state variable and second is the function to update the state variable
  const [employees, setEmployee] = useState([]) // useState([]) is used to initialize the state variable employee as an empty array

  const navigator = useNavigate() // useNavigate() is a hook that returns the navigate function from the React Router. It is used to navigate to a different route in the application.

  useEffect(() => {
    getAllEmployees();
  }, []) // useEffect() is used to perform side effects in your functional components. It is equivalent to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.


  function getAllEmployees(){
    listEmployees().then((response) => {
      setEmployee(response.data);
    }).catch((error) => {
      console.error( error);
    });
  }

  function addNewEmployee(){
    navigator('/add-employee')
  }

  function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
  }

  function removeEmployee(id){
    console.log(id);
    deleteEmployee(id).then((response) => {
      console.log(response.data)
      alert('Employee deleted successfully')
      getAllEmployees();
    }).catch((error) => {
      console.error(error)
      alert('Failed to delete employee')
    });
  }

  return (
    <div className='container'>

      <h2 className='text-center'>List of Employees</h2>
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map(employee => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                  <span> </span>
                  <button className='btn btn-danger ml-2' onClick={() => removeEmployee(employee.id)} 
                    style={{marginLeft: '10px'}} >Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default ListEmployeeComponent