import { useParams } from "react-router-dom"
import AboutProduct from "../../components/AboutProduct/AboutProduct";

const Product = ({data}) => {
    const {id} = useParams();
    const product = data.find((obj) => obj.id === +id)

    return (
        <AboutProduct product={product}/>   
    )
}

export default Product