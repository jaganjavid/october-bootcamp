import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"




const FeedbackStats = () => {


  const {feedback} = useContext(FeedbackContext);

  return (
    <div className="stats">
      <h4>{feedback.length === 0 ? "There is no Lists" : (`(${feedback.length}) Lists`)}</h4>
    </div>
  )
}

export default FeedbackStats