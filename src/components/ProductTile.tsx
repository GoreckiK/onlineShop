import React from "react";
import { Product } from "../store/types";
import '../styles/ProductTile.scss';

const ProductTile = ({ productInfo }: { productInfo: Product }) => {
    return (
        <div className="product-tile">
            <div>{productInfo.name}</div>
            <div className="operations">
                <div>{productInfo.sellValue} PLN</div>
                <div>Add</div>
            </div>
        </div>
    );
};

export default ProductTile;
