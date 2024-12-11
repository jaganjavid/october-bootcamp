import React from 'react'

const Header = ( {text = "Review app",bgColor = "blue",textColor = "#ffffff"} ) => {


  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
  }

  return (
    <header style={headerStyle}>
      <div className='container'>
        <div>
          <h4>{text}</h4>
          <a href="#">About us</a>
          <button>Light</button>
        </div>
      </div>
    </header>
  )

}

export default Header