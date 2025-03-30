import whiteLogo from "../../assets/white-logo.png"
import st from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={st.footer}>
        <div className={st.foot_container}>
            <div className={st.listsParent}>
                <div className={`${st.list1} ${st.list}`}>
                    <ul>
                        <li>
                            <img src={whiteLogo}/>
                        </li>
                        <li><a href="#">Sunny Isles Beach, United States</a></li>
                        <li><a href="#">hexashop@company.com</a></li>
                    </ul>
                </div>

                <div className={`${st.list2} ${st.list}`}>
                    <ul>
                        <li><h4>Shopping Categories</h4></li>
                        <li><a href="#">Men’s Shopping</a></li>
                        <li><a href="#">Women’s Shopping</a></li>
                        <li><a href="#">Kid's Shopping</a></li>
                    </ul>
                </div>

                <div className={`${st.list3} ${st.list}`}>
                    <ul>
                        <li><h4>Useful Links</h4></li>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className={`${st.list4} ${st.list}`}>
                    <ul>
                        <li><h4>Help Information</h4></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Shipping</a></li>
                    </ul>
                </div>
            </div>

            <div className={st.lastText}>
                <p className="text">Copyright © 2025 HexaShop. All Rights Reserved. Created by Hak0bian</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer