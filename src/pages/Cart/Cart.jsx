import AddedProduct from "../../components/AddedProduct/AddedProduct"
import "./Cart.css"

const Cart = ({data}) => {
  return (
    <section className="cartSection">
      <AddedProduct/>
    </section>
  )
}

export default Cart