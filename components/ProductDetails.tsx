import { useEffect, useState } from 'react';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Image from 'next/image';
import test from '../assests/images/product13.13.jpg';
import SizeChart from './common/SizeChart';
import './Styles/productDetails.css';

const orgDocId = "20240711-1011-SaluniFashion";

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
};

const ProductDetails = ({ productId }: ProductDetailsProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'description' | 'sizeChart'>('description');

  useEffect(() => {
    const fetchProduct = async () => {
      const productDocRef = doc(collection(doc(db, "organizations", orgDocId), "items"), productId);
      const productDoc = await getDoc(productDocRef);

      if (productDoc.exists()) {
        setProduct(productDoc.data() as Product);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <span className="loading loading-dots loading-md"></span>;

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-4 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <Image
                alt="ecommerce"
                className="w-full sm:w-3/4 md:w-2/3 lg:w-full h-auto object-cover object-center rounded"
                src={test}
                style={{ maxHeight: '500px', objectFit: 'contain' }}
              />
              <div className="mainDiv mt-4">
                <Image
                  src={test}
                  alt=""
                  id="sub01"
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{ width: '100px', marginRight: '10px', borderRadius: '10px' }}
                />
                <Image
                  src={test}
                  alt=""
                  id="sub02"
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{ width: '100px', marginRight: '10px', borderRadius: '10px' }}
                />
                <Image
                  src={test}
                  alt=""
                  id="sub03"
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{ width: '100px', marginRight: '10px', borderRadius: '10px' }}
                />
                <Image
                  src={test}
                  alt=""
                  id="sub04"
                  className="w-24 h-auto cursor-pointer border-2 border-gray-300 mr-2 rounded"
                  style={{ width: '100px', marginRight: '10px', borderRadius: '10px' }}
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
                  className={`flex-grow py-2 text-lg px-1 font-mono cursor-pointer ${
                    activeTab === 'description' ? 'text-indigo-500 border-b-2 border-indigo-500' : ''
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </a>
                <a
                  className={`flex-grow py-2 text-lg px-1 font-mono cursor-pointer ${
                    activeTab === 'sizeChart' ? 'text-indigo-500 border-b-2 border-indigo-500' : ''
                  }`}
                  onClick={() => setActiveTab('sizeChart')}
                >
                  Size Charts
                </a>
              </div>
              {activeTab === 'sizeChart' && <SizeChart />}
              {activeTab === 'description' && (
                <>
                  <p className="leading-relaxed mb-4 font-sans">
                    Luxury Collection by Saluni Fashion - Hurry Up
                    Product Colour May Slightly vary Due to Photographic Lightning or your Device Settings
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
                        style={{ backgroundColor: "black" }}
                      ></button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "blue" }}
                      ></button>
                      <button
                        className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        style={{ backgroundColor: "white" }}
                      ></button>
                    </span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-gray-500 font-mono">Quantity</span>
                    <span className="ml-auto text-gray-900">{product.quantity}</span>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-red-900 font-sans">
                      Rs {product.Sales_Price}.00
                    </span>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded font-sans">
                      Add to Cart
                    </button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </button>
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
