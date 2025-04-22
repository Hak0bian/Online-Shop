import Button from "../Button/Button"
import st from "./AboutProduct.module.css"

const AboutProduct = ({product, addToCart}) => {
  return (
    <section className={st.product_container}>
      <div className={st.productCard} key={product?.id}>
          <div className={st.imageDiv}>
              <img src={product?.thumbnail} className={st.productImg}/>
              <Button prod={product} addToCart={addToCart}/>
          </div>

          <div className={st.productInfo}>
              <h2 className={st.name}>{product?.title}</h2>
              <table className={st.table}>
                <tbody>
                  <tr>
                      <td className={st.key}>Description:</td>
                      <td>{product?.description}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Price:</td>
                      <td>{product?.price}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Rating:</td>
                      <td>{product?.rating}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Category:</td>
                      <td>{product?.category}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Stock:</td>
                      <td>{product?.stock}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Brand:</td>
                      <td>{product?.brand}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Width:</td>
                      <td>{product?.dimensions?.width}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Height:</td>
                      <td>{product?.dimensions?.height}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Depth:</td>
                      <td>{product?.dimensions?.depth}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>WarrantyInformation:</td>
                      <td>{product?.warrantyInformation}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>ShippingInformation:</td>
                      <td>{product?.shippingInformation}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>ReturnPolicy:</td>
                      <td>{product?.returnPolicy}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>CreatedAt:</td>
                      <td>{product?.meta?.createdAt}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>UpdatedAt:</td>
                      <td>{product?.meta?.updatedAt}</td>
                  </tr>
                  <tr>
                      <td className={st.key}>Barcode:</td>
                      <td>{product?.meta?.barcode}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
    </section>
  )
}

export default AboutProduct