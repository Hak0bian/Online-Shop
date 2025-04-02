import { useState, useContext } from "react";
import { Context } from "../../App";
import { FormikComponent } from "../index"

const BuyProduct = () => {
    const toBuy = useContext(Context)[4]
    const [usersData, setUsersData] = useState([])
    
    const addUserData = (values, resetForm) => {
        setUsersData((prevUsers) => [
            ...prevUsers, {
                values
            }
        ])
        resetForm();
        alert("Data sent successfully !")
    }

    console.log("usersData", usersData);
    
    return (
        <section>
            {toBuy.map((buyP) => (
                <FormikComponent addUserData={addUserData} buyP={buyP} key={buyP.id}/>
            ))}
        </section>
    )
}

export default BuyProduct