import React, { useState } from 'react'
import Button from '../Button/Button'
import '../CardItem/CardItem.css'
import './BlogContent.css'
import {Link} from 'react-router-dom'
import BlogModal from '../../Modal/BlogModal'

function BlogContent() {
    const [modalShow, setModalShow] = useState(false)

  return (
        <div className="blog-container">
            <div className="blog-body">
                <div className="blog-btn">
                    <Button buttonStyle='btn--secondary' className='blog-btn' onClick={()=>setModalShow(!modalShow)}>Create Blog</Button>
                    <BlogModal show = {modalShow} setClose={()=>setModalShow(false)}/>
                </div>
                <div className='cards__container'>
        <div className='cards__wrapper'>
                    <ul className='cards__items'>
      <li className='cards__item'>
        <Link className='cards__item__link' to='/'>
          <figure className='cards__item__pic-wrap' data-category='Travel'>
            <img
              className='cards__item__img'
              alt='Travel'
              src='images/img-9.jpg'
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>sdfasdfsfdas  sadfsdf s fdasfadsf sfs fd s fsdf sdfsdf sd sdfasdf as fsd  d sf sdf sdfdfsdffasfsfa</h5>
          </div>
        </Link>
      </li>
      </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogContent