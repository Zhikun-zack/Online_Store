import React from "react";
import { useQueryClient, useQuery } from 'react-query';

import { productServices } from '../Services/ProductsSevices.tsx';
import { Link, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import "./ProductDetailContent.css";

const ProductDetailContent = (props) => {
    // Get productId from URL
    const params = useParams();
    const productId = params['productid'] !== undefined ? params['productid'] : '0';

    // Use react query to send GET detail HTTP request
    const query = useQuery("productDetail" + productId, () => productServices.getDetails(productId));
    const productDetails = query.data !== undefined ? query.data.data: [];

    if(query.isFetching || query.isLoading){
        return <h1>Loading...</h1>
    }
    if(query.isError){
        return <pre>{JSON.stringify(query.error)}</pre>
    }

    return(
        <div className = "pD">
            <div className = "pDImageContainer">
                <img className = "pDImage" src = {productDetails['image']}></img>
            </div>
            <div className = "pDCategory">{productDetails['category']}</div>
            <div className = "pDHeader">{productDetails['title']}</div>
            <div className = "pDDetail">{productDetails['description']}</div>
            <div className = "pDRating">
                <Rating 
                    name = "read-only" 
                    value = {productDetails['rating']['rate']} 
                    readOnly
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}></Rating>
                <div className = 'pDRateNumber'>{productDetails['rating']['rate']}</div>
                <div className = 'pDReviews'>{productDetails['rating']['count'] + ' reviews'}</div>
            </div>
            <div className = "pDPrice">{"$" + productDetails['price']}</div>
            <Link to = "/">
                <div className = "backBtn"></div>
            </Link>
        </div>
    )
}

export default ProductDetailContent;