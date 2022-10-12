import React, { useCallback, useContext, useEffect, useState } from 'react'
import { auth, db } from '../Firebase/config';
import Button from '../components/Button/Button';
import './Modal.css'
import { createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from "firebase/auth";
import {collection,addDoc} from 'firebase/firestore'

// import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../store/Context';

function Modal(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  // const {setUser,user} = useContext(AuthContext)
  const {setClose} = props;
  const userCollectionRef = collection(db,'users')
  // const Navigate = useNavigate()
  const moving_btn = document.querySelector('.moving-btn')
  const signupForm = document.querySelector('.signin')
  const loginForm = document.querySelector('.login')
  const {setUser} = useContext(AuthContext)



  const escapeKeyClose = useCallback( (e) =>{
    if ((e.charCode || e.keyCode) === 27){
      setClose()
    }
  },[setClose]);


  
  useEffect(() => {
    document.body.addEventListener('keydown',escapeKeyClose)
    return function cleanup() {
      document.body.removeEventListener('keydown',escapeKeyClose)
    }
  }, [escapeKeyClose])
  


  const handleSignup = async (e)=>{
    e.preventDefault()
    try{
    const result = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(result.user,{displayName:username})
    await addDoc(userCollectionRef,{
      id:result.user.uid,
      phone,
      username
    })
    // loginClick()
    setEmail('')
    setPassword('')
    setPhone('')
    setUsername('')
    setUser(result.user)
      props.setClose()
    console.log(result)
    }catch(error){
      console.log(error.message)
    }
    
      }
    

    const handleLogin = async (e)=>{
      e.preventDefault()
      try{
      const result = await signInWithEmailAndPassword(auth, email, password)
      await updateProfile(result.user,{displayName:username})
      await addDoc(userCollectionRef,{
        id:result.user.uid,
        phone,
        username
      })
      setEmail('')
      setPassword('')
      setUser(result.user)
      props.setClose()
      console.log(result)
      }catch(error){
        console.log(error.message)
      }
      
      }


      const loginClick = ()=>{
        moving_btn.classList.add('moving-login-btn');
        moving_btn.innerHTML = 'Log In';
        signupForm.classList.remove('signin-form')
        loginForm.classList.add('login-form')
      }
      const signinClick = ()=>{
        moving_btn.classList.remove('moving-login-btn');
        moving_btn.innerHTML = 'Sign In';
        signupForm.classList.add('signin-form')
        loginForm.classList.remove('login-form')

      }

  return (
    
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.setClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <div className="modal-title">
                <h1 className='signup-btn'
                onClick={signinClick}>Sign Up</h1>  
                <h1 className='login-btn' 
                onClick={loginClick}>Log In</h1> 
                <button className='moving-btn'>Sign Up</button>
                </div>

            </div>
            <div className="modal-body">
              <form  onSubmit={handleSignup} className="form signin signin-form">
                <div className="field">
                <input type="text" value={username} id='username' onChange={(e)=>setUsername(e.target.value)} className="form-username signin-input" required/>
                <label for="username">Username</label>
                </div>
                <div className="field">
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-email signin-input" required/>
                <label>Email</label>
                </div>
                <div className="field">
                <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-phone signin-input" required/>
                <label>Number</label>
                </div>
                <div className="field">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-password signin-input" required/>
                <label>Password</label>
                </div>
                <Button>Sign Up</Button>
                </form> 


                <form  onSubmit={handleLogin} className="form login">
                
                  <div className="field">
                  <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-email signin-input" required/>
                  <label>Email</label>
                  </div>
                  
                  <div className="field">
                  <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-password signin-input" required/>
                  <label>Password</label>
                  </div>
                  <Button>Log In</Button>
                </form> 

            </div>
            <div className="modal-footer">
                {/* <button className="button" onClick={props.setClose}>Close</button> */}
            </div>
        </div>
    </div>
  )
}

export default Modal