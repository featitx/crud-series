import React , {useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employe'
import { Link , useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'




const Edit = () => {

    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [id , setId] = useState('');
     
     let history = useNavigate();

     var index = Employees.map(function(e){
        return (e.id)
     }).indexOf(id);

     let handleSubmit= (e) =>{
        e.preventDefault();
        
        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        history("/")
   
      }

      useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
      },[])


  return (
   
    <div>
        <Form className='d-grid gap-2' style={{margin:'15rem'}}>
                 <br />
            <Form.Group className='mb-3' controlId='formname'>
            <Form.Control type='text' placeholder='Enter Name ' value={name} required onChange={(e)=>{setName(e.target.value)}}> 
            </Form.Control>
            </Form.Group>
            <br />
            <Form.Group className='mb-3' controlId='formage'>
            <Form.Control type='number' placeholder='Enter Age ' value={age} required onChange={(e)=>{setAge(e.target.value)}}> 
            </Form.Control>
            </Form.Group>
              <Button type='submit' onClick={(e)=>{handleSubmit(e)}}>Update</Button>
           
    </Form>
    </div>
  )
}

export default Edit