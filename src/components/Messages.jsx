import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { messageSelector } from "../redux/messageReducer/messageSelector";

const Message = ()=> {
    const {id} = useParams();
    const messages = useSelector(messageSelector)
    return (
        <div>
            New messssages!
            {messages.map((item) => (
               <div key={item.id}>
               {item.message}
               </div>
            ))}
        </div>
    )
}

export default Message;