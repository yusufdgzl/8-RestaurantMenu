import { Route, Routes } from "react-router-dom";
import AllMenu from "./pages/AllMenu";
import Foods from "./pages/Foods";
import Drinks from "./pages/Drinks";

export default function SiteRouters(){

    return(
        <>
        <Routes>
            <Route path="/" element={<AllMenu/>}/>
            <Route path="/foods" element={<Foods/>}/>
            <Route path="/drinks" element={<Drinks/>}/>
        </Routes>
        </>
    )
}