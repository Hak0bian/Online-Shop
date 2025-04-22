import axios from "axios";

const instance = axios.create({
    baseURL: "https://dummyjson.com/products/"
})

export const API = {
    getDefaultProducts(category) {
        return instance.get(`category/${category}`)
    },

    getProductById(id){
        return instance.get(`${id}`)
    }
}