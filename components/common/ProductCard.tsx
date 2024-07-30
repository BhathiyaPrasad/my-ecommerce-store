import React from "react";
import product from "../../assests/images/product13.13.jpg";
import Image from "next/image";
import "../Styles/productlist.css";

function clickImage() {

}




function ProductCard({ Sales_Price, Eng_Name, Discount }) {
  return (
    <div className="custom-card">
    
      <figure>
        <Image src={product} alt="car!" priority={false} loading="lazy" />
      </figure>
      <div className="custom-card-body">
        <h2 className="custom-card-title">
          {Eng_Name}
          <div className="tag">NEW</div>
        </h2>
        {Discount > 0 ? (
          <>
            <p className="custom-card-sale-price">{Sales_Price}.00</p>
            <p className="custom-card-real-price">
              {Sales_Price - Discount}.00
            </p>
          </>
        ) : (
          <p className="custom-card-real-price">{Sales_Price}.00</p>
        )}
      </div>
   
    </div>
  );
}

export default ProductCard;
