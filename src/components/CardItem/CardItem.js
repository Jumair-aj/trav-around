import React from 'react'
import './CardItem.css'
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
    <div className='cards'>
      <h1>Check out these Latest Blogs!</h1>
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
            <h5 className='cards__item__text'>sdfasdfa</h5>
          </div>
        </Link>
      </li>
      </ul>
        </div>
      </div>
    </div>
    </>
  );
}

export default CardItem