import "./AboutProduct.css"

const AboutProduct = ({product}) => {
  return (
    <section className='product_container'>
      <div className='productCard' key={product.id}>
          <div className="imageDiv">
              <img src={product.thumbnail} className="productImg"/>
          </div>

          <div className="productInfo">
              <h2 className="name">{product.title}</h2>
              <table className="table">
                <tbody>
                  <tr>
                      <td className="key">Description:</td>
                      <td>{product.description}</td>
                  </tr>
                  <tr>
                      <td className="key">Price:</td>
                      <td>{product.price}</td>
                  </tr>
                  <tr>
                      <td className="key">Rating:</td>
                      <td>{product.rating}</td>
                  </tr>
                  <tr>
                      <td className="key">Category:</td>
                      <td>{product.category}</td>
                  </tr>
                  <tr>
                      <td className="key">Stock:</td>
                      <td>{product.stock}</td>
                  </tr>
                  <tr>
                      <td className="key">Brand:</td>
                      <td>{product.brand}</td>
                  </tr>
                  <tr>
                      <td className="key">Width:</td>
                      <td>{product.dimensions.width}</td>
                  </tr>
                  <tr>
                      <td className="key">Height:</td>
                      <td>{product.dimensions.height}</td>
                  </tr>
                  <tr>
                      <td className="key">Depth:</td>
                      <td>{product.dimensions.depth}</td>
                  </tr>
                  <tr>
                      <td className="key">WarrantyInformation:</td>
                      <td>{product.warrantyInformation}</td>
                  </tr>
                  <tr>
                      <td className="key">ShippingInformation:</td>
                      <td>{product.shippingInformation}</td>
                  </tr>
                  <tr>
                      <td className="key">ReturnPolicy:</td>
                      <td>{product.returnPolicy}</td>
                  </tr>
                  <tr>
                      <td className="key">CreatedAt:</td>
                      <td>{product.meta.createdAt}</td>
                  </tr>
                  <tr>
                      <td className="key">UpdatedAt:</td>
                      <td>{product.meta.updatedAt}</td>
                  </tr>
                  <tr>
                      <td className="key">Barcode:</td>
                      <td>{product.meta.barcode}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
    </section>
  )
}

export default AboutProduct