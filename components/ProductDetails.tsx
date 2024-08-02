'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import Image from "next/image";
import SizeChart from "./common/SizeChart";
import "./Styles/productDetails.css";
import { formatPrice } from '../utils/price';
import { ref, getStorage, getDownloadURL } from 'firebase/storage';

const orgDocId = "20240711-1011-SaluniFashion";
const storage = getStorage();

type ProductDetailsProps = {
  productId: string;
};

type Product = {
  Item_Name: string;
  description: string;
  Sales_Price: number;
  id: string;
  color: string;
  size: string;
  quantity: number;
  Cat_Name: string;
  src: string;
  UUID: string;
  imageUrl?: string;
  imageUrl2?: string;
  imageUrl3?: string;
  imageUrl4?: string;
  Remark:string;
  Item_ID_Auto: number
};

async function getImageDownloadURL(imagePath: string) {
  try {
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error getting image download URL:", error);
    return ''; 
  }
}

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<"description" | "sizeChart">("description");
  const [mainImage, setMainImage] = useState<string>(''); 
  const [thumbnail1, setThumbnail1] = useState<string>(''); 
  const [thumbnail2, setThumbnail2] = useState<string>('');
  const [thumbnail3, setThumbnail3] = useState<string>('');
  const [thumbnail4, setThumbnail4] = useState<string>(''); 


  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const productDocRef = doc(
        collection(doc(db, "organizations", orgDocId), "items"),
        productId
      );
      const productDoc = await getDoc(productDocRef);
      if (productDoc.exists()) {
        const productData = productDoc.data() as Product;
        const imageUrl = await getImageDownloadURL(`gs://freidea-pos-img/20240711-1011-SaluniFashion/Images/Products/Product_${productData.Item_ID_Auto}.png`);
        const imageUrl2 = await getImageDownloadURL(`gs://freidea-pos-img/20240711-1011-SaluniFashion/Images/Products/Product2_${productData.Item_ID_Auto}.png`);
        const imageUrl3 = await getImageDownloadURL(`gs://freidea-pos-img/20240711-1011-SaluniFashion/Images/Products/Product3_${productData.Item_ID_Auto}.png`);
        const imageUrl4 = await getImageDownloadURL(`gs://freidea-pos-img/20240711-1011-SaluniFashion/Images/Products/Product4_${productData.Item_ID_Auto}.png`);
        productData.imageUrl = imageUrl;
        productData.imageUrl2 = imageUrl2;
        productData.imageUrl3 = imageUrl3;
        productData.imageUrl4 = imageUrl4;

        setProduct(productData);
        setMainImage(imageUrl);
        setThumbnail1(imageUrl);
        setThumbnail2(imageUrl2);
        setThumbnail3(imageUrl3);
        setThumbnail4(imageUrl4);

      }
    };

    fetchProduct();
  }, [productId]);

  const handleImageClick = (src: string) => {
    setMainImage(src);
  };

  if (!product)
    return <span className="loading loading-dots loading-md"></span>;

  const addToCart = (product: Product) => {
    console.log("Order is processing", product);

    let existingItems = localStorage.getItem('Items');
    let itemsArray;

    try {
      itemsArray = existingItems ? JSON.parse(existingItems) : [];
    } catch (error) {
      console.error("Error parsing existing items from localStorage", error);
      itemsArray = [];
    }

    if (!Array.isArray(itemsArray)) {
      itemsArray = [];
    }

    const productIndex = itemsArray.findIndex(item => item.UUID === product.UUID);

    if (productIndex > -1) {
      itemsArray[productIndex].quantity += 1;
      console.log("Product quantity incremented");
    } else {
      itemsArray.push({ ...product, quantity: 1 });
      console.log("Product added to cart");
    }

    localStorage.setItem('Items', JSON.stringify(itemsArray));
    router.push('/product/cart');
  };

  const buyNow = () => {
    router.push('/product/cart');
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
                width={500}
                height={500}
              />
              <div className="mainDiv mt-4">
                <Image
                  src={thumbnail1}
                  alt="Thumbnail 1"
                  onClick={() => handleImageClick(thumbnail1)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                  width={100}
                  height={100}
                />
                <Image
                  src={thumbnail2}
                  alt="Thumbnail 2"
                  onClick={() => handleImageClick(thumbnail2)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                  width={100}
                  height={100}
                />
                   <Image
                  src={thumbnail3}
                  alt="Thumbnail 2"
                  onClick={() => handleImageClick(thumbnail3)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                  width={100}
                  height={100}
                />
                   <Image
                  src={thumbnail4}
                  alt="Thumbnail 2"
                  onClick={() => handleImageClick(thumbnail4)}
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{
                    width: "100px",
                    marginRight: "10px",
                    borderRadius: "10px",
                  }}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest font-Roboto">
                {product.Cat_Name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 font-sans">
                {product.Item_Name}
              </h1>
              <div className="flex mb-4 border-b-2 border-gray-300">
                <a
                  className={`flex-grow py-2 text-lg px-1 font-Roboto cursor-pointer ${activeTab === "description"
                    ? "text-indigo-500 border-b-2 border-indigo-500"
                    : ""
                    }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </a>
                <a
                  className={`flex-grow py-2 text-lg px-1 font-Roboto cursor-pointer ${activeTab === "sizeChart"
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
                    {product.Remark}
                  </p>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500 font-Roboto">Size</span>
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
                    <span className="text-gray-500 font-Roboto">Color</span>
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
                  <div className="flex border-t mb-6 border-gray-200 py-2"></div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="title-font font-medium text-2xl font-Roboto">
                      {formatPrice(product.Sales_Price)}
                    </span>
                    <div className="flex space-x-5">
                      <button className="btn btn-primary" onClick={() => buyNow()}>
                        Buy Now
                      </button>
                      <button className="btn btn-primary" onClick={() => addToCart(product)}>
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
