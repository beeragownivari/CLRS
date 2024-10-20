import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";  
import Dashboard from "./components/main";  
import Internship from "./components/InternshipList";
import FileUpload from "./components/FileUpload";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/internship" element={<Internship />} />
            <Route path="/fileUpload" element={<FileUpload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/dashboard" element={< Dashboard/>} />
            <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
    </BrowserRouter>
);
