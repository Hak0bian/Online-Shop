import { FiDollarSign } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import "./Prod.css"

const Prod = ({prod}) => {
  return (
    <div className='productDiv'>
      <div className="imageDiv">
        <img src={prod.thumbnail} />
      </div>

      <div className="infoDiv">
        <h3 className="title">{prod.title}</h3>
        <div className="div">
            <div className="priceDiv">
              <span className="gold">{<FiDollarSign/>}</span>
              <span>{prod.price}</span>
            </div>
            <div className="ratingDiv">
              <span className="gold">{<AiFillStar/>}</span>
              <span>{prod.rating}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Prod