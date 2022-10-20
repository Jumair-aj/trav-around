import React from 'react'
// import { Link } from 'react-router-dom'
import './Button.css'

const STYLES = ['btn--primary','btn--outline','btn--secondary','btn--inline']
const SIZES = ['btn--medium','btn--large']

function Button({
    children,
    onClick,
    buttonSize,
    buttonStyle,
    type,
    // linkTo
}) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
      // <Link to={linkTo} className='btn-mobile'>

      <button className={`btn ${checkButtonSize}
      ${checkButtonStyle}`}
      onClick = {onClick}
      type={type}
      >
        {children}
      </button>
      // </Link>
  )
}

export default Button