import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";



const FeedbackItem = ({item}) => {



    const { deleteFeedback } = useContext(FeedbackContext);
    

    return (
        <Card>
            <div className="card-wrapper">
                <h4>{item.text}</h4>

                <div>
                    <div className="edit">
                       <FaEdit size="20px" color="#ff9100"/>
                    </div>

                    <div className="delete">
                       <FaTrashAlt size="20px" color="#ff3d00" onClick={() => deleteFeedback(item.id)}/>
                    </div>
                </div>
                 

            </div>
        </Card>
    )
}

export default FeedbackItem