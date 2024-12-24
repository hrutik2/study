import { Route,Routes } from "react-router-dom";
import { JavaScript } from "../pages.js/javascript";
import { ReactApp } from "../pages.js/react";
export const AllRoutes=()=>{
    return(
       <Routes>
        <Route path="/" element={<JavaScript />} />
        <Route path="/react" element={<ReactApp/>} />
       </Routes>
    )
}