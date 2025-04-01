import { useState } from "react";
import { FormikComponent } from "../index"

const BuyProduct = ({toBuy}) => {
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
            {toBuy.map((prod) => (
                <FormikComponent addUserData={addUserData} prod={prod} key={prod.id}/>
            ))}
        </section>
    )
}

export default BuyProduct