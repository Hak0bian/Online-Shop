import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/";
import axios from "axios";
import st from "./Products.module.css";

const Products = ({ addToCart }) => {
    const {category} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (!category) {
            Promise.all([
              axios.get("https://dummyjson.com/products/category/mens-shirts"),
              axios.get("https://dummyjson.com/products/category/womens-dresses"),
              axios.get("https://dummyjson.com/products/category/beauty"),
              axios.get("https://dummyjson.com/products/category/womens-watches")
            ])
            .then(([shirtsRes, dressesRes, beautyRes, watchesRes]) => {
              const allProducts = [
                ...shirtsRes.data.products,
                ...dressesRes.data.products,
                ...beautyRes.data.products,
                ...watchesRes.data.products
              ];
              setProducts(allProducts); 
            })
            .catch((err) => console.error(err));
        } 
        else {
            axios.get(`https://dummyjson.com/products/category/${category}`)
                .then((res) => setProducts(res.data.products))
                .catch((err) => console.error(err));
        }
    }, [category]);

    
    return (
        <section className={st.prod_container}>
            {products.length > 0 ? (
                products.map(prod => (
                    <ProductCard key={prod.id} prod={prod} addToCart={addToCart} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default Products;