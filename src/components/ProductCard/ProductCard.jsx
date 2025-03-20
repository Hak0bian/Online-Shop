import { NavLink } from 'react-router-dom'
import Prod from "../Prod/Prod"
import Button from "../Button/Button"
import "./ProductCard.css"

const ProductCard = ({prod, addToCart}) => {
  return (
    <div className="mainProductCard">
        <NavLink to={`product/${prod.id}`}>
            <Prod prod={prod}/>
        </NavLink>
        <Button prod={prod} addToCart={addToCart}/>
    </div>
  )
}

export default ProductCard