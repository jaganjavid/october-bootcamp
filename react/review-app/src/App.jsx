


import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";

import { useState } from "react";


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


  const deleteFeedback = (id) => {
    
    if(window.confirm("Are you sure")){
      setFeedback(feedback.filter((item) => item.id !== id));
    }

  }



  return (

    <>
    
    <Header/>

    <div className="container">
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>

    </div>

    </>
  )
}

export default App