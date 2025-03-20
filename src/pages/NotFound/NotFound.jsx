import errorImg from "../../assets/error.png"
import { useNavigate } from "react-router-dom"
import "./NotFound.css"

const NotFound = () => {
  let navigate = useNavigate()

  return (
    <div className="errorDiv">
      <img src={errorImg}/>
      <div className="btnDiv">
        <button onClick={(e) => navigate(-1)} className="btn">Go Back</button>
      </div>
    </div>
  )
}

export default NotFound