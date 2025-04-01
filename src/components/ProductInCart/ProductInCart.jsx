import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import st from "./ProductInCart.module.css"

const ProductInCart = ({ item, plus, minus, handleBuy, deleteProduct }) => {
  return (
    <div className={st.addedProduct}>
        <NavLink to={`/products/${item.category}/${item.id}`}>
            <img src={item.thumbnail} />
        </NavLink>

        <div className={st.infoDiv}>
            <div>
            <h3>{item.title}</h3>
            <p>$ {(item.price * item.count).toFixed(2)}</p>
            </div>

            <div className={st.countDiv}>
            <button onClick={() => minus(item.id)}>-</button>
            <span>{item.count}</span>
            <button onClick={() => plus(item.id)}>+</button>
            <NavLink to="/cart/buy">
                <button className={st.buyBtn} onClick={() => handleBuy(item)}>Buy</button>
            </NavLink>
            </div>
        </div>

        <button className={st.delete} onClick={() => deleteProduct(item.id)}> <IoClose/> </button>
    </div>
  )
}

export default ProductInCart