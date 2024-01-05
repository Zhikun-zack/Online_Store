import axios from "axios";
import React from "react";

// Get reqest to get all the products details
const getProducts = () => {
    return axios({
        method: "GET",
        url: 'https://fakestoreapi.com/products'
    })
}

// Get request to get one product details
const getDetails = (productId) => {
    return axios({
        method: "GET",
        url: "https://fakestoreapi.com/products/" + productId
    })
}

export const productServices = {
    getProducts,
    getDetails,
}