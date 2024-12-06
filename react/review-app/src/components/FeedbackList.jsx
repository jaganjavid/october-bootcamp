import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({feedback, handleDelete}) => {
  

  return (
    feedback.map(item => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    ))
  )
}

export default FeedbackList