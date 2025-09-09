import React, { useState } from 'react'
import './Signup.css'
import HeadingComp from './HeadingComp'
import axios from "axios"

const Signup = () => {
    const[Inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
    })
    const change =(e)=>{
        const {name, value} = e.target
        setInputs({...Inputs, [name]: value})
    }

    const submit = async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:1000/api/v1")
        console.log(Inputs)
        setInputs({
        email: "",
        username: "",
        password: "",
    })
    }
  return (
    <div className='signup'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 column col-left d-flex justify-content-center align-items-center">
                    <HeadingComp first="Sign" second="Up"/>
                </div>
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-100 p-5'>
                        <input className='p-2 my-3 input-signup' type="email" placeholder='Enter your Email' onChange={change} value={Inputs.email}/>
                        <input className='p-2 my-3 input-signup' type="username" placeholder='Enter your Username' onChange={change} value={Inputs.username}/>
                        <input className='p-2 my-3 input-signup' type="password" placeholder='Enter your Pssword' onChange={change} value={Inputs.password}/>
                        <button className='btn-signup p-2' onClick={submit}}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Signup