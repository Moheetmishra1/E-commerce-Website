import { NavLink } from "react-router-dom"
import design from "../CSS/Navbar.module.css"
import { useContext } from "react"
import { AuthoContext } from "./Authonticate/Authontication"
import ButtomComponent from "./Pages/ButtomComponent"


export default function Navbar(){
   let {isLogin,logout} = useContext(AuthoContext)
   console.log("navbar");

    return (
        <div className={design.navbar}>

                <NavLink to="/" >Home</NavLink>
                <NavLink to="/products" >Products</NavLink>
                {!isLogin && <>
                <NavLink to="/login" >Login</NavLink>
                <NavLink to="/signup" >SignUp</NavLink>
                
                 </>}
                {isLogin && <ButtomComponent className="delete-message"   onclick={()=>{logout()}} >Logout</ButtomComponent>}


    
        </div> 
    )
}