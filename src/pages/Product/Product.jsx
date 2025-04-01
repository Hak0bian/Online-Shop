import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AboutProduct } from "../../components";
import axios from "axios";

const Product = ({ addToCart }) => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return <AboutProduct product={product} addToCart={addToCart} />
};

export default Product;