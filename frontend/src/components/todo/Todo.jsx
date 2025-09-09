import React, { useState } from 'react'
import './Todo.css'
import TodoCards from './TodoCards'
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';


const Todo = () => {
    const[Inputs,setInputs] = useState({title:"", body:""})
    const [Array, setArray] = useState([])

    const show = ()=>{
        document.getElementById("textarea").style.display="block"
    }

    const change = (e)=>{
        const { name, value } = e.target
        setInputs({...Inputs, [name]: value})
    }
    const submit = () =>{
        if(Inputs.title || Inputs.body === ""){
            toast.error("Title or body should not be empty")
        }else{
        setArray([...Array, Inputs])
        console.log(Inputs)
        setInputs({title:"", body:""})
        toast.succes("Your task is added")
        toast.error("Your task is not saved! Please sign up")
    }
        }
        

    const del = (id)=>{
        console.log(id, "1")
        setArray ([...Array])
    }

    const dis = (value) => {
        document.getElementsById("todo-update").style.display=value
    }
  return (
    <>
        <div className='todo'>
            <ToastContainer/>
            <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
                <div className='d-flex flex-column todo-input-div w-50 p-1'>
                    <input type="text" placeholder='TITLE' className='my-2 p-2 todo-input' name='title' value={Inputs.title} onClick={show} onChange={change}/>
                    <textarea id='textarea' type="text" placeholder='BODY' className=' p-2 todo-input' name='body' value={Inputs.body} onChange={change}/>
                </div>
                <div className='w-50 d-flex justify-content-end my-3'>
                    <button className='home-btn px-2 py-1' onClick={submit}>Add</button></div>
            </div>
            <div className="todo-body">
                <div className="container-fluid">
                    <div className='row'>
                        {Array &&
                        Array.map((item, index) =>(
                            <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                                <TodoCards title={item.title} body={item.body} id={index} delid={ del} display={dis}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='todo-update' id='todo-update'>
            <div className="container">
                <Update display={dis}/>
            </div>
        </div>
    </>
  )
}

export default Todo