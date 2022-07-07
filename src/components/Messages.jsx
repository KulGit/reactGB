import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ADD_MESSAGE, DELETE_MESSAGE } from "../redux/actionTypes";
import { messageSelector } from "../redux/messageReducer/messageSelector";

const Message = ()=> {
    const {id} = useParams();
    const [tittle, setTittle] = useState('');
    const chatMessages = useSelector(messageSelector);
    const dispath = useDispatch;

    const messages = chatMessages.filter((message) => {
        if(!id) return null;
        return message.idChat === Number(id)
    })

    const deleteMessage = (id) => {
        dispath ({
            type: DELETE_MESSAGE,
            payload: id
        })
    }

    const addMessage = () => {
        const obj = {
            id: Math.random(),
            messege: tittle,
            idChat: Number(id)
        }
        dispath({
            type: ADD_MESSAGE,
            payload: obj
        })
    }
    return (
        <div>
            New messssages!
            <input value={tittle} onChange={(e) => setTittle(e.target.value)}/>
            <button onClick={addMessage}> + </button>
            {messages.map((item) => (
                <div key={item.id}> 
                    <p > {item.message} </p>
                    <button onClick={() => deleteMessage(item.id)}> X </button>
                </div>
            ))}
        </div>
    )
}

export default Message;