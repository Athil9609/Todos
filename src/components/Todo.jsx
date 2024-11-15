import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { createPostjson, createPostPlaceholder } from '../services/api'



function Todo() {

  const nav=useNavigate()


  const [Todo,SetTodo]=useState({
    title:"",completed:"false"
  })
const Clicked=async()=>{
  const {title,completed}=Todo
  if(!title || ! completed){
    alert("Enter valid inputs")
     
  }else{
    const res =await createPostjson(Todo)
    console.log(res)

    const res2= await createPostPlaceholder(Todo)
  
    console.log(res2)
    if(res.status==201){
      alert(` ${Todo.title} added to Todos`)
  nav('/')
    }
    else{
      alert('Something went wrong')
    }
  }
 
  
  

}

  return (
    <div className='w-100 justify-content-center align-items-center d-flex' style={{height:'80vh'}}>
        <div className='w-50 border shadow bg-light p-5 '>
        <h1>Add Todo</h1>
<input type="text" name="" className='form-control mb-3' onChange={(e)=>{SetTodo({...Todo,title:e.target.value})}} id="" placeholder='Enter Title' />

<button className='btn btn-info ms-3  ' onClick={Clicked}>Sumbit</button>

        </div>

    </div>
    
  )
}

export default Todo