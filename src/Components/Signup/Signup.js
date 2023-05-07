import React, { useState } from 'react';
import styles from "./Signup.module.css";
import InputControl from '../InputControl/InputControl';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../../firebase';



 function Signup() {
  const navigate=useNavigate();
  const [values,setValues]=useState({
    name: "",
    email: "",
    pass: "",
  });

  const [errorMsg, setErrorMsg]=useState("");
  const [submitButtonDisabled,setSubmitButtonDisabled]=useState(false);

  const handleSubmission=()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all Fields!");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    
    createUserWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res)=>{
      setSubmitButtonDisabled(false);
      const user=res.user;
      await updateProfile(user,{
        displayName:values.name,
      });
      navigate("/");    
      console.log(user);
    }).catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message);
      
    });
  };

  return (
    <div className={styles.container}>
        <div className={styles.innerbox}>
            <h1 className={styles.heading}>Signup</h1>

            <InputControl label="Name" palceholder= "Enter your name"
            onChange={event=>setValues(prev=>({...prev,name:event.target.value}))}
            />
            <InputControl label="Email" palceholder= "Enter Email Address"
            onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}
            />
            <InputControl label="Password" palceholder= "Enter password"
            onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}
            />
            <div className={styles.footer}>
              <b className={styles.error}>{errorMsg}</b>
              <button onClick={handleSubmission}
              disabled={submitButtonDisabled}
              >Signup</button>
              <p>
                Already have an account?<span><Link to="/Login">Login</Link>

                </span>
              </p>
            </div>
        </div>
      
    </div>
  )
}

export default Signup;