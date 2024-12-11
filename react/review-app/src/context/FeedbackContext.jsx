
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

      const addFeedback = (data) => {
        setFeedback([data, ...feedback]);
      }
    
      const deleteFeedback = (id) => {
        
        if(window.confirm("Are you sure")){
          setFeedback(feedback.filter((item) => item.id !== id));
        }
    
      }


    return (
        <FeedbackContext.Provider value={{
            feedback,
            addFeedback,
            deleteFeedback
        }}>
          {children}
        </FeedbackContext.Provider>
    )

}



export default FeedbackContext;