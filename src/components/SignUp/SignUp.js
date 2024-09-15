import React, { useState } from "react";
import axios from "axios";
import'./SignUp.css';


const SignUp = () => {
  const Login=async()=>{
    window.location.replace("/Login")
  }
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async (e) => {
    e.preventDefault(); 
    
    try {
      const response = await axios.post('http://localhost:5000/SignUp', {
        fname,
        email,
        password
      });

      if (response.data.status === 'success') {
        alert('Account created');
        window.location.replace('/Login');
      } else {
        alert('Account creation failed');
      }
    } catch (error) {
      console.error('There was an error creating the account:', error);
      alert('Error creating account');
    }
  };

  return (
    <div className="sign container center border ms-5 p-4 w-5 ">
      <div className="col d-flex">
        
        <div className="rounded mt-2 mb-2 p-3 border col-4">
          <h3 className='login mt-4 text-center'>Sign up</h3>
          <form onSubmit={createAccount}>
          <p className="second ms-5 mb-1 fw-bold"> Full Name</p>
            <input onChange={(e) => setFname(e.target.value)} placeholder="Enter your Full Name" className="form-control ms-5 w-75 mb-3 me-5" />
            <p className="second ms-5 mb-1 fw-bold"> Email</p>
            <input onChange={(e) => setEmail(e.target.value)} placeholder="Enter your E-mail" className="form-control ms-5 w-75 mb-3 me-5" />
            <p className="second ms-5 mb-1 fw-bold"> Password</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" className="form-control ms-5 w-75 mb-3 me-5" />
            <button type="submit" className="btn btn-info w-75 ms-5 mt-1 mb-1 me-5">CREATE ACCOUNT</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default SignUp;