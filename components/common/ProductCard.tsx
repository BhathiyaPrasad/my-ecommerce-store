import React from "react";
import product from '../../assests/images/product13.13.jpg'
import Image from "next/image";
import '../Styles/productlist.css'


function ProductCard({Sales_Price, Eng_Name}) {
    return (
        <div className="custom-card">
        <figure>
        <Image
             src={product}
                    alt="car!" priority={false} loading="lazy" />
        </figure>
        <div className="custom-card-body">
          <h2 className="custom-card-title">
          {Eng_Name}
            <div className="tag">NEW</div>
          </h2>
          <p className="custom-card-sale-price">{Sales_Price}.00</p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
        </div>
      </div>
        
    )

}

export default ProductCard