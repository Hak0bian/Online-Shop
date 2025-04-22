import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/";
import st from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { defaultProductsThunk, productsByCategoryThunk } from "../../store/reducers/productsReducer";

const Products = ({ addToCart }) => {
    const {category} = useParams();
    const dispatch = useDispatch()
    const {defaultProducts, productsByCategory} = useSelector((state) => state.Products)    
    const productsToShow = category ? productsByCategory : defaultProducts;

    useEffect(() => {
        if (!category) {
            dispatch(defaultProductsThunk("mens-shirts"))
            dispatch(defaultProductsThunk("womens-dresses"))
            dispatch(defaultProductsThunk("beauty"))
            dispatch(defaultProductsThunk("womens-watches"))
        }
        else {
            dispatch(productsByCategoryThunk(category))
        }
    }, [category]);

    
    return (
        <section className={st.prod_container}>
            {productsToShow?.length > 0 ? (
                productsToShow?.map(prod => (
                    <ProductCard key={prod.id} prod={prod} addToCart={addToCart} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </section>
    );
};

export default Products;