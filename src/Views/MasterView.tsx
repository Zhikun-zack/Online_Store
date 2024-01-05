import React from 'react';
import ProductItemsList from '../Components/ProductItemsList.tsx';
import NoSelect from '../Components/NoSelect.tsx';

const MasterView = () => {
    return(
        <div className = "productPageContainer master">
            <div className = "productListContainer master">
               <ProductItemsList></ProductItemsList>
            </div>
            <div className = "productDetailContainer master">
                <NoSelect />
            </div>
        </div>
    )
}

export default MasterView;