import { useContext } from "react";
import { Context } from "../../App";
import st from "./Button.module.css"

const Button = ({prod}) => {
  const addToCart = useContext(Context)[1]
  
  return (
    <div className={st.btnDiv}>
        <button className={st.btn} onClick={() => addToCart(prod)}>Add to Cart</button>
    </div>
  )
} 

export default Button