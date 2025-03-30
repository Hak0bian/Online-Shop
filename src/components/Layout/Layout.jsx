import { Outlet } from "react-router-dom"
import { Navigation, Footer} from "../index"

const Layout = ({cart}) => {
  return (
    <section>
        <Navigation cart={cart}/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default Layout