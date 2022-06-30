import React from "react";
import { useSelector } from "react-redux";
import { chatsSelector } from "../redux/chatReducer/chatSelector";
import { Link } from "react-router-dom";


const Chats = ()=> {
    const chats = useSelector(chatsSelector)
    return (
        <div>
            Chats are here!!
            {chats.map((item) => (
                <Link key={item.id} to={`/messages/${chats.id}`}>
                    {item.name}
                </Link>

            ) )

            }
        </div>
    )
}

export default Chats;