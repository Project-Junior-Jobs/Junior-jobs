import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Job } from "../pages/job";


export const MainRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<h1>register</h1>}/>
            <Route path="/vaga" element={<Job/>}/>
            
        </Routes>
    )
}