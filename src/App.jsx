import React from 'react'
import Index from './home/Index';
import{ Route, Routes } from "react-router-dom"
import Courses from './components/Courses';
import Signup from './components/Signup';
function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Routes>
    
    
    </>

  );
}

export default App
