 import React from 'react'
import Home from './component/Home'
import Add from './component/Add'
import Edit from './component/Edit'
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom'
 
 const App = () => {
   return (
    <div className='App'>
      <Router>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Create" element={<Add/>}/>
         <Route path="/Edit" element={<Edit/>}/>
        </Routes>
      </Router>
      

    </div>
     
   )
 }
 
 export default App;