import { collection,addDoc  } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import React, { useContext, useState } from 'react'
import { v4 } from 'uuid'
import Button from '../components/Button/Button'
import Loader from '../components/Loader/Loader'
import { db, storage } from '../Firebase/config'
import { AuthContext } from '../store/Context'
import './Modal.css'

function GalleryModal(props) {
  const [isLoading, setIsLoading] = useState(false)
    const [place,setPlace] = useState('')
    const {user} = useContext(AuthContext)
    const [galleryImage,setGalleryImage] = useState('')
    const galleryImageCollection = collection(db,'imageDetails')
    const date = new Date()
    const handleImageSubmit = (e) =>{
        setIsLoading(true)
        e.preventDefault();
        const galleryImageRef = ref(storage, `galleryImages/${galleryImage.name + v4()}`);
        uploadBytes(galleryImageRef,galleryImage).then(()=>{
            getDownloadURL(galleryImageRef).then((url)=>{
                console.log(url)

                addDoc(galleryImageCollection,{
                    userId:user.uid,
                    by:user.displayName,
                    url,
                    place,
                    addedAt:date.toDateString()
                })
            })
        })
        setIsLoading(false)

        props.setClose()
    }

  return (<>
  {isLoading ? <Loader/> :''}
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.setClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <div className="modal-title">

                </div>
            </div>
            <div className="modal-body">
                <form >
                <div className="field">
                <input type="text" maxLength={30} value={place} onChange={(e)=>setPlace(e.target.value)} className="form-username signin-input" required/>
                <label for="username">Place</label>
                </div>
                {/* <div className="field">
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className="form-email signin-input" required/>
                <label>Description</label>
                </div> */}
                <div className="field">
          <img alt="Posts" width="200px" height="200px" src={ galleryImage ? URL.createObjectURL(galleryImage) : ''}></img>

                <input type="file" onChange={(e)=>setGalleryImage(e.target.files[0])} className="form-phone signin-input" required/>
                <label>Upload an Image</label>
                </div>
                {/* <div className="field">
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-password signin-input" required/>
                <label>Password</label>
                </div> */}
                <Button buttonStyle='btn--secondary' onClick={handleImageSubmit}>Add</Button>
                </form>
            </div>
        </div>
    </div>
    </>
    )
}

export default GalleryModal