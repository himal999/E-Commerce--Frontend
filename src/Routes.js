import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';

const Rout = ()=>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/signin" exact element= {<Signin/>}/>
            <Route path="/signup" exact element= {<Signup/>}/>
        </Routes>
    </BrowserRouter>)
}

export default Rout;