import { FiDollarSign } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import st from "./Prod.module.css"

const Prod = ({prod}) => {
  return (
    <div className={st.productDiv}>
      <div className={st.imageDiv}>
        <img src={prod.thumbnail} />
      </div>

      <div className={st.infoDiv}>
        <h3 className={st.title}>{prod.title}</h3>
        <div className={st.div}>
            <div className={st.priceDiv}>
              <span className={st.gold}>{<FiDollarSign/>}</span>
              <span>{prod.price}</span>
            </div>
            <div className={st.ratingDiv}>
              <span className={st.gold}>{<AiFillStar/>}</span>
              <span>{prod.rating}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Prod