import whiteLogo from "../../assets/white-logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="foot_container">
            <div className="listsParent">
                <div className="list1 list">
                    <ul>
                        <li>
                            <img src={whiteLogo}/>
                        </li>
                        <li><a href="#">Sunny Isles Beach, United States</a></li>
                        <li><a href="#">hexashop@company.com</a></li>
                    </ul>
                </div>

                <div className="list2 list">
                    <ul>
                        <li><h4>Shopping Categories</h4></li>
                        <li><a href="#">Men’s Shopping</a></li>
                        <li><a href="#">Women’s Shopping</a></li>
                        <li><a href="#">Kid's Shopping</a></li>
                    </ul>
                </div>

                <div className="list3 list">
                    <ul>
                        <li><h4>Useful Links</h4></li>
                        <li><a href="#">Homepage</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="list4 list">
                    <ul>
                        <li><h4>Help Information</h4></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">Shipping</a></li>
                    </ul>
                </div>
            </div>

            <div className="lastText">
                <p className="text">Copyright © 2025 HexaShop. All Rights Reserved. Created by Hak0bian</p>
            </div>

        </div>
    </footer>
  )
}

export default Footer