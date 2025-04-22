import { API } from "../../api/api";

const DEFAULT_PRODUCTS = "DEFAULT_PRODUCTS"
const BY_CATEGORY = "BY_CATEGORY"
const PRODUCT_BY_ID = "PRODUCT_BY_ID"

const initState = {
    defaultProducts: [],
    productsByCategory: [],
    productById: {}
}

export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case DEFAULT_PRODUCTS :
            return {
                ...state,
                defaultProducts: [...state.defaultProducts, ...action.payload]
            }
        case BY_CATEGORY : 
            return {
                ...state,
                productsByCategory: action.payload 
            }
        case PRODUCT_BY_ID : 
            return {
                ...state,
                productById: action.payload 
            }
        default:
            return state
    }
}

const defaultProductsAC = (data) => ({type: DEFAULT_PRODUCTS, payload: data})
const productsByCategoryAC = (data) => ({type: BY_CATEGORY, payload: data})
const productByIdAC = (prod) => ({type: PRODUCT_BY_ID, payload: prod})

export const defaultProductsThunk = (category) => {
    return (dispatch) => {
        API.getDefaultProducts(category)
        .then((res) => dispatch(defaultProductsAC(res?.data?.products)))
    }
}

export const productsByCategoryThunk = (category) => {
    return (dispatch) => {
        API.getDefaultProducts(category)
        .then((res) => dispatch(productsByCategoryAC(res?.data?.products)))
    }
}

export const productByIdThunk = (id) => {
    return (dispatch) => {
        API.getProductById(id)
        .then((res) => dispatch(productByIdAC(res?.data)))
    }
}