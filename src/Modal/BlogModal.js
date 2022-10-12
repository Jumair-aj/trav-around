import React, { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button/Button';
import './Modal.css'

function BlogModal(props) {

    const [heading, setHeading] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')
    const setClose = props

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

      const handleNewBlog = (e)=>{
        e.preventDefault()
      }
      
  return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">
                        <h1>Create A Blog</h1>
                    </div>
                    <div className="modal-body">
                    <form  onSubmit={handleNewBlog} className="form">
                <div className="field">
                <input type="text" value={heading} id='username' onChange={(e)=>setHeading(e.target.value)} className="form-username signin-input" required/>
                <label for="username">Heading</label>
                </div>
                <div className="field">
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-email signin-input" required/>
                <label>Description</label>
                </div>
                <div className="field">
                <input type="file" value={image} onChange={(e)=>setImage(e.target.value)} className="form-phone signin-input" required/>
                <label>Image</label>
                </div>
                {/* <div className="field">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-password signin-input" required/>
                <label>Password</label>
                </div> */}
                <Button>Add</Button>
                </form> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogModal