import React, { useCallback, useContext, useEffect, useState } from 'react'
// import { auth } from '../../firebase/Firebase';
import { FirebaseContext } from '../store/Context';
import Button from '../components/Button/Button';
import './Modal.css'
// import { useNavigate } from 'react-router-dom';

function Modal(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  // const {setUser,user} = useContext(AuthContext)
  const {setClose} = props;
  // const Navigate = useNavigate()

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
  
  const handleSignup = (e)=>{
    e.preventDefault()
    firebase.getauth().createUserWithEmailAndPassword(email, password).then((result)=>{
     
      console.log(result)
    })
  }
  
  return (
    
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.setClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <div className="modal-title">
                <h1>Sign In</h1>
                </div>

            </div>
            <div className="modal-body">
              <form  onSubmit={handleSignup} className="signin-form">
                <div className="field">
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="form-username signin-input" />
                <label>Username</label>
                </div>
                <div className="field">
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-email signin-input" />
                <label>Email</label>
                </div>
                <div className="field">
                <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-phone signin-input" />
                <label>Number</label>
                </div>
                <div className="field">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-password signin-input" />
                <label>Password</label>
                </div>
                <Button>Sign Up</Button>
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