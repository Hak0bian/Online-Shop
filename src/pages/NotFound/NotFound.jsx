import errorImg from "../../assets/error.png"
import { useNavigate } from "react-router-dom"
import st from "./NotFound.module.css"

const NotFound = () => {
  let navigate = useNavigate()

  return (
    <div className={st.errorDiv}>
      <img src={errorImg}/>
      <div className={st.btnDiv}>
        <button onClick={() => navigate(-1)} className={st.btn}>Go Back</button>
      </div>
    </div>
  )
}

export default NotFound