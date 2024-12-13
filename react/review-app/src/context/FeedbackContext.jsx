
import { use } from "react";
import { createContext, useState } from "react";


const FeedbackContext = createContext();


export const FeedbackProvider = ({children}) => {


   


    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is Context 1"
        },
        {
            id: 2,
            text: "This is Context 2"
        },
        {
            id: 3,
            text: "This is Context 3"
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit:false
    })

      const addFeedback = (data) => {
        setFeedback([data, ...feedback]);
      }
    
      const deleteFeedback = (id) => {
        
        if(window.confirm("Are you sure")){
          setFeedback(feedback.filter((item) => item.id !== id));
        }
    
      }

      const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
      }

      const editFeedback = (item) => {
        setFeedbackEdit({
          item:item,
          edit:true
        })
      }


    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            addFeedback,
            deleteFeedback,
            updateFeedback,
            editFeedback
        }}>
          {children}
        </FeedbackContext.Provider>
    )

}



export default FeedbackContext;