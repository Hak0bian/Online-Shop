import { NavLink } from 'react-router-dom'
import Prod from "../Prod/Prod"
import Button from "../Button/Button"
import st from "./ProductCard.module.css"

const ProductCard = ({prod}) => {
  return (
    <div className={st.mainProductCard}>
        <NavLink to={`/products/${prod.category}/${prod.id}`}>
            <Prod prod={prod}/>
        </NavLink>
        <Button prod={prod}/>
    </div>
  )
}

export default ProductCard