import { BuyProduct } from "../../components"
import st from "./Buy.module.css"

const Buy = () => {
  return (
    <section className={st.buyContainer}>
      <BuyProduct />
    </section>
  );
};

export default Buy