import { NavLink } from "react-router-dom"
import st from "./Header.module.css"

const Header = () => {
  return (
    <header className={st.header}>
        <div className={st.head_container}>

            <div className={st.parentDiv}>
                <NavLink to="/products/mens-shirts">
                    <div className={`${st.box1} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Mens</h2>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/products/womens-dresses">
                    <div className={`${st.box2} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Womens</h2>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/products/mens-watches">
                    <div className={`${st.box3} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Watches</h2>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/products/fragrances">
                    <div className={`${st.box4} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Fragrances</h2>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/products/womens-bags">
                    <div className={`${st.box5} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Bags</h2>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/products/sunglasses">
                    <div className={`${st.box6} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Sunglasses</h2>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/products/beauty">
                    <div className={`${st.box7} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Beauty</h2>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/products/womens-jewellery">
                    <div className={`${st.box8} ${st.box}`}>
                        <div className={st.hoverDiv}>
                            <h2>Jewellery</h2>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header