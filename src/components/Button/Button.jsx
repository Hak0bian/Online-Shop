import st from "./Button.module.css"

const Button = ({addToCart, prod}) => {
  return (
    <div className={st.btnDiv}>
        <button className={st.btn} onClick={() => addToCart(prod)}>Add to Cart</button>
    </div>
  )
} 

export default Button