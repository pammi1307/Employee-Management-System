import React, { useState } from 'react'
import { createEmployee,getEmployee, updateEmployee } from '../services/EmployeeService'
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator =  useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if(id){
            getEmployee(id).then((res) => {  
                setFirstName(res.data.firstName)
                setLastName(res.data.lastName)
                setEmail(res.data.email)
            }).catch(err => {
                console.error(err)
            })
        }
    }, [id])


    const [errors, setErrors] = useState ({
        firstName: '',
        lastName: '',
        email: ''
    })

    // const handleFirstName = (e) => {
    //     setFirstName(e.target.value)
    // }

    const handleLastName = (e) => setLastName(e.target.value)


    function handleEmail(e){
        setEmail(e.target.value)
    }

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        if(validateForm()){
            const employee = {firstName, lastName, email}
            console.log(employee)
            if(id){
                updateEmployee(id,employee).then(res => {
                    console.log(res.data)
                    alert('Employee updated successfully')
                    navigator('/employees')
                }).catch(err => {
                    console.error(err)
                    alert('Failed to update employee')
                })
            }else{
                createEmployee(employee).then(res => {
                    console.log(res.data)
                    
                    alert('Employee added successfully')
                    navigator('/employees')
                }).catch(err => {
                    console.error(err)
                    alert('Failed to add employee')
                })
            }
        
        }

    }

    function validateForm(){
        let valid = true;
        const errorsCopy = {...errors} // use spread operator to copy of errors object from one to another

        if(firstName.trim()){
            errorsCopy.firstName = ''
        }else{
            errorsCopy.firstName = 'First Name is required'
            valid = false
        }
        

        if(lastName.trim()){
            errorsCopy.lastName = ''
        }else{
            errorsCopy.lastName = 'Last Name is required'
            valid = false
        }

        if(email.trim()){
            errorsCopy.email = ''
        }else{
            errorsCopy.email = 'Email is required'
            valid = false
        }

        setErrors(errorsCopy)
        return valid
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div className='container'> 
    <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {pageTitle()}
                <div className='card-body'>
                    <form>
                        <div className='form-group'>
                            <label>First Name:</label>
                            <input 
                                type='text' 
                                placeholder='First Name' 
                                name='firstName' 
                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} />
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Last Name:</label>
                            <input 
                                type='text' 
                                placeholder='Last Name' 
                                name='lastName' 
                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}  
                                value={lastName}
                                onChange={handleLastName} />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <br/>
                        <div className='form-group'>
                            <label>Email:</label>
                            <input 
                                type='text' 
                                placeholder='Email' 
                                name='email' 
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                value={email} 
                                onChange={handleEmail} />
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <br/>
                        <div className='text-center'>
                           <button className=' btn btn-success' onClick={saveOrUpdateEmployee}>Save</button>
                        </div>
                    </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EmployeeComponent