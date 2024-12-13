import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"


const Header = ( {text = "Review app",bgColor = "blue",textColor = "#ffffff"} ) => {


  const {theme, toggleTheme} = useContext(ThemeContext)



  // const headerStyle = {
  //   backgroundColor: theme === "light" ? "#ffffff" : "#333333",
  //   color: theme === "light" ? "#000000" : "#ffffff",
  // };

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
          <button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </header>
  )

}

export default Header