import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import '../CardItem/CardItem.css'
import './BlogContent.css'
import {Link} from 'react-router-dom'
import BlogModal from '../../Modal/BlogModal'
import { AuthContext } from '../../store/Context'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/config'

function BlogContent() {
    const [modalShow, setModalShow] = useState(false)
    const [blogItems,setBlogItems] = useState([])
    const {user} = useContext(AuthContext)
    const blogViewCollectionRef = collection(db,'blog')

    useEffect( ()  => {

      const getData = async ()=>{
          const data = await getDocs(blogViewCollectionRef)
          setBlogItems(data.docs.map((doc) =>({...doc.data(),id:doc.id})))
          console.log(blogItems)
      }
      getData();
    },[])
    

  return (
        <div className="blog-container">
            <div className="blog-body">
                <div className="blog-btn">
                    {user? <Button buttonStyle='btn--secondary' className='blog-btn' onClick={()=>setModalShow(!modalShow)}>Create Blog</Button>: ""}
                    <BlogModal show = {modalShow} setClose={()=>setModalShow(false)}/>
                </div>
          <div className='cards'>
                <div className='cards__container'>
        <div className='cards__wrapper'>
                    <ul className='cards__items'>

       {blogItems.map((blogItem)=>{
        return(
      <li className='cards__item'>
        <Link className='cards__item__link' to='/'>
          <figure className='cards__item__pic-wrap' data-category={blogItem.by}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={blogItem.url}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{blogItem.heading}</h5>
          </div>
        </Link>
      </li>
                )
              })}         
              </ul>
                            </div>
                        </div>
                        </div>

            </div>
        </div>
    )
}

export default BlogContent