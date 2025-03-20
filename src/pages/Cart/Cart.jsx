import "./Cart.css"

const Cart = ({ cart, setCart }) => {

  const plus = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => item.id === id ? { 
          ...item, 
          count: item.count + 1 
        } 
        : item
      )
    );
  };

  const minus = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) => item.id === id && item.count > 1 ? { 
          ...item, 
          count: item.count - 1 
        } 
        : item
      )
    );
  };

  return (
    <section className="cartSection">
        {
        cart.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="addedProduct">
              <img src={item.thumbnail} />

              <div className="infoDiv">
                <h3>{item.title}</h3>
                <p>$ {item.price * item.count}</p>

                <div className="countDiv">
                  <button onClick={() => minus(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => plus(item.id)}>+</button>
                  <button className="buyBtn">Buy</button>
                </div>
              </div>
            </div>
          ))
        )
        }
    </section>
  );
};

export default Cart