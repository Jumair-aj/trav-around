import React, { useCallback, useContext, useEffect, useState } from 'react'
import Button from '../components/Button/Button';
import './Modal.css'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { db, storage } from '../Firebase/config';
import {v4} from 'uuid'
import { addDoc, collection } from 'firebase/firestore';
import { AuthContext } from '../store/Context';
import Loader from '../components/Loader/Loader';


function BlogModal(props) {
  const [isLoading, setIsLoading] = useState(false)
   const [heading, setHeading] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')
    const blogCollectionRef = collection(db,'blog')
    const date = new Date()
    const {user} = useContext(AuthContext)
    const setClose = props
   
    const snap = props
    const escapeKeyClose = useCallback( (e) =>{
        if ((e.charCode || e.keyCode) === 27){
          setClose()
        }
      },[setClose]);
    
    
      
      useEffect(() => {
        document.body.addEventListener('keydown',escapeKeyClose)
        console.log(snap.snap)

        return function cleanup() {
          document.body.removeEventListener('keydown',escapeKeyClose)
        }
      }, [escapeKeyClose])

      const handleNewBlog = (e)=>{
        setIsLoading(true)
        e.preventDefault()
        const imageRef = ref(storage,`blogImages/${image.name + v4()}`);
        uploadBytes(imageRef,image).then(()=>{
           getDownloadURL(imageRef).then((url)=>{
             console.log(url)
             addDoc(blogCollectionRef,{
              id:snap.snap,
              userId:user.uid,
              by:user.displayName,
              url,
              heading,
              description,
              createdAt: date.toDateString()
             })
             
            })
            
          })
          setIsLoading(false)
          props.setClose()
          console.log(snap)
          // window.location.reload();
      }
      
  return (
  <>
  {isLoading ? <Loader/> :""}  <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.setClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title1">
                        <h1>Create A Blog</h1>
                    </div>
                  </div>
                    <div className="modal-body">
                    <form  onSubmit={handleNewBlog} className="form create-blog-form">
                <div className="field">
                <input type="text" maxLength={100} value={heading} id='username' onChange={(e)=>setHeading(e.target.value)} className="form-username signin-input" required/>
                <label htmlFor="username">Heading</label>
                </div>
                <div className="field">
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-email signin-input" required/>
                <label>Description</label>
                </div>
                <div className="field">
          <img alt="" width="200px" height="200px" src={ image ? URL.createObjectURL(image) : ''}></img>

                <input type="file" onChange={(e)=>setImage(e.target.files[0])} className="form-phone signin-input" required/>
                <label>Upload an Image</label>
                </div>
                {/* <div className="field">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-password signin-input" required/>
                <label>Password</label>
                </div> */}
                <Button buttonStyle='btn--secondary'>Add</Button>
                </form> 
                    </div>
            </div>
        </div>
        </>
    )
}

export default BlogModal