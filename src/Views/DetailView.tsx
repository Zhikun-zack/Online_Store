import React from "react";
import ProductItemsList from "../Components/ProductItemsList.tsx";
import ProductDetailContent from "../Components/ProductDetailContent.tsx";

const DetailView = () => {
    return(
        <div className = "productPageContainer detail">
            <div className = "productListContainer detail">
                <ProductItemsList></ProductItemsList>
            </div>
            <div className = "productDetailContainer detail">
                <ProductDetailContent/>
            </div>
        </div>
    )
}

export default DetailView;