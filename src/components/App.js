import React from "react";
import {Routes, Route} from 'react-router-dom';
import { NotFoundFile } from "./NotFoundFile";
import Todos from "./Todos";


function App () {
    return (
        <Routes>
            <Route path={'/'} element={<Todos/>} />
            <Route path={'*'} element={<NotFoundFile/>}/>
        </Routes>
    )

}
export default App;