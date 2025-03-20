import { ProductCard } from "../../components/index"
import "./Products.css"

const Products = ({data, addToCart}) => {    
    return (
        <section className='prod_container'>
            {data.map(prod => (
                <ProductCard key={prod.id}  prod={prod} addToCart={addToCart} />
            ))}
        </section>
    )
}

export default Products