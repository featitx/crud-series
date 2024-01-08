import React , {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employe'
import { Link , useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'

const Add = () => {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');

   let history = useNavigate();
   
   let handleSubmit= (e) =>{
     e.preventDefault();
     const ids = uuid();
     const UniqueId = ids.slice(0,0);

     let a = name,
     b = age;

     Employees.push({id: UniqueId , Name : a , Age : b });

     history("/")

   }
  return (
    <>
    <Form className='d-grid gap-2' style={{margin:'15rem'}}>
                 <br />
            <Form.Group className='mb-3' controlId='formname'>
            <Form.Control type='text' placeholder='Enter Name ' required onChange={(e)=>{setName(e.target.value)}}> 
            </Form.Control>
            </Form.Group>
            <br />
            <Form.Group className='mb-3' controlId='formage'>
            <Form.Control type='number' placeholder='Enter Age ' required onChange={(e)=>{setAge(e.target.value)}}> 
            </Form.Control>
            </Form.Group>
              <Button type='submit' onClick={(e)=>{handleSubmit(e)}}>Add</Button>
           
    </Form>
    </>
  )
}

export default Add