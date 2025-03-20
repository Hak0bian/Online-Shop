import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="nav">
        <div className="nav_container">
            <div>
                <img src={logo}/>
            </div>

            <div className="navMenu">
              <NavLink to='/'> Home </NavLink>
              <NavLink to='/products'> Products </NavLink>
              <NavLink to='/cart' className='cart'> {`Cart`} {<IoMdCart/>} </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navigation