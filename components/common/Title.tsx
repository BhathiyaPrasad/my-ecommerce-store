import React from "react";
import Image from "next/image";
import product from '../../assests/images/COVER WEB.jpg'
import testproduct from '../../assests/images/test.webp'
function Title({text}) {
    return (

        <div
        className="showcase"
        id="#${data.category}"
        style={{
          width: 380,
          border: "1px solid #ddd",
          borderRadius: 5,
          overflow: "hidden",
          marginBottom: 20
        }}
      >
        <div
          className="showcase-banner"
          style={{
            position: "relative",
            width: "100%",
            height: 380,
            overflow: "hidden"
          }}
        >
          <Image
            src={product}
            alt="${data.Product_Name}"
            className="product-Image default"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Image
            src={testproduct}
            alt="${data.Product_Name}"
            className="product-img hover"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            className="showcase-actions"
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              display: "flex",
              gap: 5
            }}
          >
            <button
              className="btn-action"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
           
            </button>
            <button
              className="btn-action"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              
            </button>
            <button
              className="btn-action"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
             
            </button>
            <button
              className="btn-action"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              
            </button>
          </div>
        </div>
        <div
          className="showcase-content"
          style={{ padding: 15, textAlign: "center" }}
        >
          <br />
          <a
            href="#"
            className="showcase-category"
            style={{ fontSize: 14, color: "#555" }}
          >
            ${"{"}data.Item_Name{"}"}
          </a>
          <h3>
            <a
              href="#"
              className="showcase-title"
              style={{ fontSize: 16, color: "#000" }}
            >
              ${"{"}data.Item_Name{"}"}
            </a>
          </h3>
          <div className="showcase-rating" style={{ margin: "10px 0" }}>
           
          </div>
          <div className="price-box" style={{ margin: "10px 0" }}>
            <p className="price" style={{ fontSize: 18, color: "#000" }}>
              Rs.${"{"}data.Sales_Price{"}"}.00
            </p>
            <del style={{ fontSize: 14, color: "#999" }}>
              Rs.${"{"}data.Sales_Price2{"}"}.00
            </del>
          </div>
        </div>
      </div>
      
    
    )
}

export default Title