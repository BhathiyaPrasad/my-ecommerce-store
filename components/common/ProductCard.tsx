import React from "react";
import product from '../../assests/images/COVER WEB.jpg'
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
            <div className="badge badge-secondary">NEW</div>
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