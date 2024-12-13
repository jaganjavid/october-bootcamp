import { useContext, useState, useEffect} from "react"
import Card from "./shared/Card"


import { v4 as uuidv4 } from 'uuid';
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";





const FeedbackForm = ({handleAdd}) => {

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");  

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);


  const handleTextChange = (e) => {


    const trimmedText = e.target.value.trimStart();
    let textError = "";

    if(trimmedText.length < 10){
        textError = "Feedback much at least 10 char";
        setMessage(textError);
        setBtnDisabled(true);
    }else{
        setMessage("");
        setBtnDisabled(false);
    }

    setText(trimmedText);


  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      id:uuidv4(),
      text:text,
    }

    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id, newFeedback)
    }else{
      addFeedback(newFeedback);
    }

    setText("");
    setMessage("");
    setBtnDisabled(true);
    
  }

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false);
      setText(feedbackEdit.item.text)
    }
  }, [feedbackEdit])

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" placeholder="Add your Reviews" onChange={handleTextChange} value={text}/>
                <Button version={"primary"} type="submit" isDisabled={btnDisabled}>
                    {feedbackEdit.edit === true ? "Update" : "Add"}
                </Button>
            </div>

            <p className="error">{message}</p>
        </form>
    </Card>
  )
}

export default FeedbackForm