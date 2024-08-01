import { useEffect, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import Image from "next/image";
import test from "../assests/images/product13.13.jpg";
import test2 from "../assests/images/test2.jpg";
import SizeChart from "./common/SizeChart";
import "./Styles/productDetails.css";

const orgDocId = "20240711-1011-SaluniFashion";

type ProductDetailsProps = {
  productId: string;
};

type Product = {
  Item_Name: string;
  description: string;
  Sales_Price: number;
  id: string;  // Assuming this is the product's ID
  color: string;
  size: string;
  quantity: number;
  Cat_Name: string;
  src: string;
};

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [availableQty, setAvailableQty] = useState<number | null>(null); // State for available quantity
  const [activeTab, setActiveTab] = useState<"description" | "sizeChart">(
    "description"
  );
  const [mainImage, setMainImage] = useState(test); // Initial main image

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product details
        const productDocRef = doc(
          collection(doc(db, "organizations", orgDocId), "items"),
          productId
        );
        const productDoc = await getDoc(productDocRef);
  
        if (productDoc.exists()) {
          const productData = productDoc.data() as Product;
          setProduct(productData);
  
          if (productData.id) {
            // Fetch product stock details based on item_id
            const productStockDocRef = doc(
              collection(doc(db, "organizations", orgDocId), "products_stock_management"),
              productData.id // Assuming item_id from items matches product_id in products_stock_management
            );
            const productStockDoc = await getDoc(productStockDocRef);
  
            if (productStockDoc.exists()) {
              const stockData = productStockDoc.data();
              setAvailableQty(stockData.available_qty);
            } else {
              console.error("No matching document in products_stock_management!");
            }
          } else {
            console.error("Product ID is missing!");
          }
        } else {
          console.error("No matching document in items!");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
  
    fetchProduct();
  }, [productId]);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  if (!product)
    return <span className="loading loading-dots loading-md"></span>;

  const addToCart = (product) => {
    console.log("order is processing", product);

    // Retrieve existing items from localStorage
    let existingItems = localStorage.getItem('Items');

    // Parse the existing items or start with an empty array if none exist
    let itemsArray;
    try {
      itemsArray = existingItems ? JSON.parse(existingItems) : [];
    } catch (error) {
      console.error("Error parsing existing items from localStorage", error);
      itemsArray = [];
    }

    // Ensure itemsArray is an array
    if (!Array.isArray(itemsArray)) {
      itemsArray = [];
    }

    // Check if the product already exists in the array based on its id
    const productExists = itemsArray.some(item => item.id === product.id);

    // Add the new product only if it does not already exist in the array
    if (!productExists) {
      itemsArray.push(product);
      localStorage.setItem('Items', JSON.stringify(itemsArray));
      console.log("Product added to cart");
    } else {
      console.log("Product already in the cart");
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-4 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <Image
                alt="ecommerce"
                id="main"
                className="w-full sm:w-3/4 md:w-2/3 lg:w-full h-auto object-cover object-center rounded"
                src={mainImage}
                style={{ maxHeight: "500px", objectFit: "contain" }}
              />
              <div className="mainDiv mt-4">
                <Image
                  src={test2}
                  alt="Thumbnail 1"
                  onClick={() => handleImageClick(test2)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                />
                <Image
                  src={test}
                  alt="Thumbnail 2"
                  onClick={() => handleImageClick(test)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                />
                <Image
                  src={test2}
                  alt="Thumbnail 3"
                  onClick={() => handleImageClick(test2)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                />
                <Image
                  src={test}
                  alt="Thumbnail 4"
                  onClick={() => handleImageClick(test)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest font-mono">
                {product.Cat_Name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 font-sans">
                {product.Item_Name}
              </h1>
              <div className="flex mb-4 border-b-2 border-gray-300">
                <a
                  className={`flex-grow py-2 text-lg px-1 font-mono cursor-pointer ${activeTab === "description"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : ""
                    }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </a>
                <a
                  className={`flex-grow py-2 text-lg px-1 font-mono cursor-pointer ${activeTab === "sizeChart"
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : ""
                    }`}
                  onClick={() => setActiveTab("sizeChart")}
                >
                  Size Chart
                </a>
              </div>
              {activeTab === "sizeChart" && <SizeChart />}
              {activeTab === "description" && (
                <>
                  <p className="leading-relaxed mb-4 font-sans">
                    Luxury Collection by Saluni Fashion - Hurry Up Product
                    Colour May Slightly vary Due to Photographic Lightning or
                    your Device Settings
                  </p>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500 font-mono">Size</span>
                    <span className="ml-auto text-gray-900 flex space-x-2">
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "white", fontSize: 10 }}
                      >
                        UK 6
                      </button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "white", fontSize: 10 }}
                      >
                        UK 8
                      </button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "white", fontSize: 10 }}
                      >
                        UK 10
                      </button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "white", fontSize: 10 }}
                      >
                        UK 12
                      </button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "white", fontSize: 10 }}
                      >
                        UK 14
                      </button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "white", fontSize: 10 }}
                      >
                        UK 16
                      </button>
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500 font-mono">Color</span>
                    <span className="ml-auto text-gray-900 flex space-x-2">
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "#FFC0CB" }}
                      ></button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "#B76E79" }}
                      ></button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "#663399" }}
                      ></button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "#FFDAB9" }}
                      ></button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "#ADD8E6" }}
                      ></button>
                    </span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-gray-500 font-mono">Quantity</span>
                    <span className="ml-auto text-gray-900">
                    <progress className="progress progress-accent w-56" value="50" max="100"></progress>
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="title-font font-medium text-2xl text-black-900 font-sans">
                      Rs {product.Sales_Price}.00
                    </span>
                    <div className="flex space-x-5">
                      <button className="btn btn-primary">
                        Buy Now
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        Add To
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13l-1.5-6M7 13H3m6 9a1 1 0 11-2 0 1 1 0 012 0zm10 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>


                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
