// components/ProductDetails.tsx
import { useEffect, useState } from 'react';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../utils/firebase';
import Image from 'next/image';
import test from '../assests/images/product13.13.jpg';
import ProductCard from './common/ProductCard';
import './Styles/productDetails.css'

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

  if (!product) return <p>Loading...</p>;

  return (
    (
      <section className="text-gray-600 body-font overflow-hidden">
        
        <div className="container px-5 py-24 mx-auto">
          
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <Image
                alt="ecommerce"
                className="w-full sm:w-3/4 md:w-2/3 lg:w-full h-auto object-cover object-center rounded"
                src={test}
                style={{ maxHeight: '500px', objectFit: 'contain' }}
              />
              <div
                className="mt-2 flex justify-between overflow-x-auto whitespace-nowrap p-2 bg-gray-200"
                style={{ height: 'auto', backgroundColor: '#FBFAF5' }}
              >
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
            </div>            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.Cat_Name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {product.Item_Name}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Size Charts
                </a>
              </div>
              <p className="leading-relaxed mb-4">
                Luxury Collection by Saluni Fashion - Hurry Up
                Product Colour May Slightly vary Due to Photographic Lightning or your Device Settings
              </p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Color</span>
                <span className="ml-auto text-gray-900">{product.color}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Size</span>
                <span className="ml-auto text-gray-900">{product.size}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Quantity</span>
                <span className="ml-auto text-gray-900">{product.quantity}</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs {product.Sales_Price}.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
                </button>
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
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
                </button> */}
              </div>
            </div>
           
          </div>
        </div>
      </section>
    )

  );
};

export default ProductDetails;
