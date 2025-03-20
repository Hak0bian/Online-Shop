import React from 'react'
import Prod from '../../components/Prod/Prod'
import { NavLink } from 'react-router-dom'
import "./Products.css"

const Products = ({data}) => {
    return (
        <section className='prod_container'>
            {data.map(prod => (
                <div>
                    <NavLink to={`product/${prod.id}`}>
                        <Prod prod={prod}/>
                    </NavLink>
                </div>
            ))}
        </section>
    )
}

export default Products