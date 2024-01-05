import React from "react";

import "./ProductItem.css";
import { Link, useLocation } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

interface Props {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    rating: {[key: string]: number};
}

const ProductItem = (props) => {
    // Highlight the selected product card based on URL
    const {pathname} = useLocation();

    return(        
        <Link to = {'/' + props.id } className = {pathname === '/' + props.id? "pIContainer selected": "pIContainer"} id = {props.id}>
            <div className = "pIImageContainer">
                <img className = "pIImage" src = {props.image}></img>
                <div className = "pIStarContainer"></div>
                <div className = "pIRateContainer">
                    <StarIcon style={{ width: '12px', height: "12px", marginTop: '3px', color: '#faaf00'}}></StarIcon>
                    {props.rating['rate'] + " (" + props.rating['count'] + ") "}
                </div>
            </div>
            <div className = "pIContentContainer">
                <div className = "pICategory">{props.category}</div>
                <div className = "pIHeader">{props.title}</div>
                <div className = "pIDetail">{props.description}</div>
                <div className = "pIPrice">{"$" + props.price}</div>
            </div>

        </Link>
    )    
}

export default ProductItem;