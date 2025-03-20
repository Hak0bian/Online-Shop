import "./Header.css"

const Header = () => {
  return (
    <header className="header">
        <div className="head_container">
            <div className="leftDiv">
                <h1>We Are Hexashop</h1>
                <p className="text">We always distinguish ourselves with our new assortment and quality products</p>
            </div>

            <div className="rightDiv">
                <div className="box1 box">
                    <h2>Women</h2>
                    <p className="text">Best Clothes For Women</p>
                </div>
                
                <div className="box2 box ">
                    <h2>Men</h2>
                    <p className="text">Best Clothes For Men</p>
                </div>

                <div className="box3 box ">
                    <h2>Kids</h2>
                    <p className="text">Best Clothes For Kids</p>
                </div>

                <div className="box4 box ">
                    <h2>Accessories</h2>
                    <p className="text">Best Trend Accessories</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header