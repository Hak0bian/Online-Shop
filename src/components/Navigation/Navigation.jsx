import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { IoMdCart } from "react-icons/io";
import st from "./Navigation.module.css"

const Navigation = ({cart}) => {
  const cartCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <nav className={st.nav}>
        <div className={st.nav_container}>
          <NavLink to="/" className={st.logo}>
              <img src={logo}/>
          </NavLink>

            <div className={st.navMenu}>
              <NavLink to='/'> Home </NavLink>
              <NavLink to='/products'> Products </NavLink>
              <NavLink to='/cart' className={st.cart}> 
                {`Cart`} {<IoMdCart className={st.cartIcon}/>}
                <span className={st.cartCount}>{cartCount}</span>
              </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navigation