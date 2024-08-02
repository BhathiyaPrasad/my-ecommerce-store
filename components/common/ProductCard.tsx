'use client'
import { useRouter } from 'next/navigation'
import React from "react";
import product from "../../assests/images/product13.13.jpg";
import Image from "next/image";
import "../Styles/productlist.css";
import { formatPrice } from "@utils/price";



function ProductCard({ Sales_Price, Eng_Name, Discount, UUID , imageUrl, height , width }) {

  const router = useRouter()
  return (
    <div className="custom-card" onClick={() => router.push(`/product/${UUID}`)}>
      <figure>
        <Image src={imageUrl} alt="car!" priority={false} loading="lazy" height={height} width={width} />
      </figure>
      <div className="custom-card-body">
        <h2 className="custom-card-title">
          {Eng_Name}
          <div className="tag">NEW</div>
        </h2>
       
        {Discount > 0 ? (
          <>
            <p className="custom-card-sale-price">{formatPrice(Sales_Price)}</p>
            <p className="custom-card-real-price">
              {formatPrice(Sales_Price - Discount)}
            </p>
          </>
        ) : (
          <p className="custom-card-real-price">{formatPrice(Sales_Price)}</p>
        )}
      </div>

    </div>
  );
}

export default ProductCard;
