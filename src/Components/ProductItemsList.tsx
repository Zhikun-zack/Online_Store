import React, { useEffect, useState } from 'react';
import { useQueryClient, useQuery } from 'react-query';

import { productServices } from '../Services/ProductsSevices.tsx';
import ProductItem from '../Components/ProductItem.tsx';

const ProductItemsList = () => {
    // Use React query to send GET all request
    const query = useQuery("productsList", productServices.getProducts);
    const productsList = query.data !== undefined ? query.data.data: [];

    if(query.isLoading){
        return <h1>Loading...</h1>
    }
    if(query.isError){
        return <pre>{JSON.stringify(query.error)}</pre>
    }

    return(
        <div className = {"productItemsContainer"}>
            {
            productsList.map(p => {
                return <ProductItem {...p}></ProductItem>
            })
            }
            
        </div>
    )
}

export default ProductItemsList;