import React from 'react';
import {Button , Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employe';
import Edit from './Edit';
import { Link , useNavigate } from 'react-router-dom';

function Home(){
    
    let history = useNavigate();
    let HandleClick = (id) => {
         var index = Employees.map(function(e){
            return (e.id)
         }).indexOf(id);

         Employees.splice(index,1);

         history('/');
    }

    let handleEdit = ( id , name , age) =>{
       localStorage.setItem('Name',name);
       localStorage.setItem('Age',age);
       localStorage.setItem('Id',id);
    }
    return(
        <>
        <div style={{margin: "10rem"}}>
            <Table>
             <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Actions
                    </th>
                </tr>
             </thead>
             <tbody>
                {
                    Employees && Employees.length > 0  
                    ?
                    Employees.map((item, index)=>{
                        return(
                            <tr key = {index + item}>
                                <td>
                                    {item.Name}
                                </td>
                                <td>
                                    {item.Age}
                                </td> 
                                <td>
                                    <Link to={"/edit"}>
                                    <Button onClick={()=> handleEdit(item.id , item.Name , item.Age)}>Edit</Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={HandleClick}>Delete</Button>

                                </td>
                                
                            </tr>
                    )
                    }
                    )
                    : "no data found" 
                }
             </tbody>
            </Table>
              <br />
              <br />
              <Link to='/create'>
                <Button size="">Create</Button>
              </Link>
        </div>
        </>
    )
}

export default Home;


