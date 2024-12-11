import React from 'react'

const Button = ({children, version, type, isDisabled}) => {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
        {children}
    </button>
  )
}

export default Button