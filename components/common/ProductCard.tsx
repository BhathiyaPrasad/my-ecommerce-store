import React from "react";
import product from '../../assests/images/COVER WEB.jpg'
import Image from "next/image";
import AdminLayout from './../layout/AdminLayout';
function ProductCard() {
    return (
        <div className="card glass w-96">
            <figure>
                <Image src={product} alt="" loading="lazy" priority={false}/ >
            </figure>
            <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
        </div>
    )

}

export default ProductCard