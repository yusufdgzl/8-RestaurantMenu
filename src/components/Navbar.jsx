import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        <>
         <h1>My Restaurant</h1>
          <div className="navbar">
            <NavLink to="/" className="navlink">All Menu</NavLink>
            <NavLink to="/foods" className="navlink">Foods</NavLink>
            <NavLink to="/drinks" className="navlink">Drinks</NavLink>
          </div>
        </>
    )
}