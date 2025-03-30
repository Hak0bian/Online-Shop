import { useEffect } from "react";
import st from "./Cart.module.css"

const Cart = ({cart, setCart}) => {

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);


  const plus = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { 
          ...item, 
          count: item.count + 1 
        } 
        : item
      )
    );
  };

  const minus = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1 ? { 
          ...item, 
          count: item.count - 1 
        }
        : item
      )
    );
  };


  return (
    <section className={st.cartSection}>
        {
        cart.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          cart.map((item) => (
            <div key={item.id} className={st.addedProduct}>
              <img src={item.thumbnail} />

              <div className={st.infoDiv}>
                <div>
                  <h3>{item.title}</h3>
                  <p>$ {(item.price * item.count).toFixed(2)}</p>
                </div>

                <div className={st.countDiv}>
                  <button onClick={() => minus(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => plus(item.id)}>+</button>
                  <button className={st.buyBtn}>Buy</button>
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