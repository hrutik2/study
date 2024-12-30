import { Route,Routes } from "react-router-dom";
import { JavaScript } from "../pages.js/javascript";
import { ReactApp } from "../pages.js/react";
import PDFViewer, { NotionJavascript } from "../pages.js/javascrpit";
import { Backend } from "../pages.js/backend";
export const AllRoutes=()=>{
    return(
       <Routes>
        <Route path="/" element={<JavaScript />} />
        <Route path="/notionJavascript" element={<PDFViewer/>} />
        <Route path="/react" element={<ReactApp/>} />
        <Route path="/back" element={<Backend/>} />
       </Routes>
    )
}