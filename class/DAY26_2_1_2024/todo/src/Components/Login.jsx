import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const navi1=useNavigate()
    const handle1=()=>{
        navi1("/Main")
    }

  return (
    <>
     <form  onSubmit={handle1}>
        <h3>Login</h3>
        <label htmlFor="">User_name</label>
        <input type="text" required/><br />
        <label htmlFor="">Password</label>
        <input type="password" required /><br />
        <button >Submit</button><br />
       
     </form>
     <Link to="/Passwordrec" >Forget My Password</Link><br />
     <Link to="/Register">Create a Account</Link>
    </>
  )
}
