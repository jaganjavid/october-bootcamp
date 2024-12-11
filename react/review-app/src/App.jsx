import { useState } from "react";


import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";


const App = () => {


  // Global State

  const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: "This is text 1"
    },
    {
        id: 2,
        text: "This is text 2"
    },
    {
        id: 3,
        text: "This is text 3"
    },
  ])
  


  return (

    <>
    
    <Header/>



    <div className="container">
      <FeedbackForm/>
      <FeedbackList/>

    </div>

    </>
  )
}

export default App