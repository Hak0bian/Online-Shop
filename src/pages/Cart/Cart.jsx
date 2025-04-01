import { useEffect } from "react";
import { ProductInCart } from "../../components";
import st from "./Cart.module.css"

const Cart = ({cart, setCart, setToBuy}) => {

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
  
  const handleBuy = (item) => {
    setToBuy([{
      id: item.id,
      title: item.title,
      count: item.count,
      price: (item.price * item.count).toFixed(2)
    }]);
  };

  const deleteProduct = (id) => {
    const newCart = cart.filter(prod => id !== prod.id)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  
  return (
    <section className={st.cartSection}>
        {
          cart.length === 0 ? (
            <h2>Cart is empty</h2>
          ) : (
            cart.map((item) => (
              <ProductInCart 
                key={item.id}
                item={item}
                plus={plus}  
                minus={minus}
                handleBuy={handleBuy}
                deleteProduct={deleteProduct}
              />
            ))
          )
        }
    </section>
  );
};

export default Cart