import { useParams } from "react-router-dom"
import AboutProduct from "../../components/AboutProduct/AboutProduct";

const Product = ({data, addToCart}) => {
    const {id} = useParams();
    const product = data.find((obj) => obj.id === +id)

    return (
        <AboutProduct product={product} addToCart={addToCart}/>   
    )
}

export default Product