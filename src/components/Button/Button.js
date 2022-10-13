import React from 'react'
import './Button.css'

const STYLES = ['btn--primary','btn--outline']
const SIZES = ['btn--medium','btn--large']

function Button({
    children,
    onClick,
    buttonSize,
    buttonStyle,
    type
}) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
      // <Link to="/signup" className='btn-mobile'>

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