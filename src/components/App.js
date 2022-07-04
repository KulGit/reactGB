import React from "react";
import {Routes, Route} from 'react-router-dom';
import Chats from "./Chats";
import Message from "./Messages";
import { NotFoundFile } from "./NotFoundFile";


function App () {
    return (
        <Routes>
            <Route path={'/'} element={<Chats/>}/>
            <Route path={'/messages/:id'} element={<Message/>} />
            <Route path={'*'} element={<NotFoundFile/>}/>
        </Routes>
    )

}
export default App;