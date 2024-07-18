import React from "react";
import product from '../../assests/images/COVER WEB.jpg'
import Image from "next/image";
import AdminLayout from './../layout/AdminLayout';
function ProductCard() {
    return (
        <div className="card bg-base-10 w-96 shadow-xl">
  <figure>
    <Image
      src={product} priority={false} loading="lazy"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    )

}

export default ProductCard