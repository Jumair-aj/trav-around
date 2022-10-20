import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../../Firebase/config'
import GalleryModal from '../../Modal/GalleryModal'
import { AuthContext } from '../../store/Context'
import Button from '../Button/Button'
import './Images.css'

function Images() {
    const [modalShow,setModalShow] = useState(false)
    const [imageItems,setImageItems] = useState([])
    const {user} =useContext(AuthContext)
    const getImageCollection = collection(db,'imageDetails')

    useEffect(() => {
        const getData = async ()=>{
          const que = query(getImageCollection,orderBy('addedAt','desc'))
            const imageData = await getDocs(que)
            setImageItems(imageData.docs.map((doc) =>({...doc.data(),id:doc.id})))
            console.log(imageItems)
        }
        getData();   
     },[])
    
  return (
    <div className="gallery-body">
        <div className="gallery-container">
        <div className="blog-btn">
                    {user? <Button buttonStyle='btn--secondary' className='blog-btn' onClick={()=>setModalShow(!modalShow)}>Add Images</Button>: ""}
                    <GalleryModal show = {modalShow} setClose={()=>setModalShow(false)}/>
                </div>
                <div className='cards'>
                <div className='cards__container'>
        <div className='cards__wrapper'>
                    <ul className='cards__items'>
    {imageItems.map((obj)=>{
        return(
      <li className='cards__item'>
        <Link className='cards__item__link' to='/'>
          <figure className='cards__item__pic-wrap' data-category={obj.place}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={obj.url}
            />
          </figure>
          {/* <div className='cards__item__info'>
            <h5 className='cards__item__text'>{blogItem.heading}</h5>
          </div> */}
        </Link>
      </li>

        )
    })

    }
       
                      
              </ul>
                            </div>
                        </div>
                        </div>

        </div>
    </div>

    )
}

export default Images