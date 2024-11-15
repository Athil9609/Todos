import { useState } from 'react'
import './App.css'
import Edit from './components/Edit'
import Home from './components/Home'
import Todo from './components/Todo'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'


function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/add' element={<Todo />}/>
      <Route path='/edit' element={<Edit />}/>
    </Routes>

    </>
  )
}

export default App
