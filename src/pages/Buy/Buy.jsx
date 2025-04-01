import { BuyProduct } from "../../components"
import st from "./Buy.module.css"

const Buy = ({ toBuy }) => {
  return (
    <section className={st.buyContainer}>
      <BuyProduct toBuy={toBuy} />
    </section>
  );
};

export default Buy