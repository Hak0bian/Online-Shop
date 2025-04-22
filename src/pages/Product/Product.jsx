import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productByIdThunk } from "../../store/reducers/productsReducer";
import { AboutProduct } from "../../components";

const Product = ({ addToCart }) => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const {productById} = useSelector((state) => state.Products)

    useEffect(() => {
        dispatch(productByIdThunk(id))
    }, [id]);

    if (!productById) return <p>Loading...</p>;

    return <AboutProduct product={productById} addToCart={addToCart} />
};

export default Product;