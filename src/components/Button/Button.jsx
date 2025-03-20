import "./Button.css"

const Button = ({addToCart, prod}) => {
  return (
    <div className="btnDiv">
        <button className="btn" onClick={() => addToCart(prod)}>Add to Cart</button>
    </div>
  )
} 

export default Button