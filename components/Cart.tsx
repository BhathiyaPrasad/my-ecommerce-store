'use client';
import React, { useEffect, useState } from 'react';
import { formatPrice } from "@utils/price"; // Ensure this path is correct
import test from '../assests/images/product13.13.png'
import Image from 'next/image';
interface CartItem {
  id: number;
  name: string;
  price: number; // Changed to number to better work with formatting
  quantity: number;
  imageSrc: string;
  imageAlt: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const itemsString = localStorage.getItem('Items');
    if (itemsString) {
      const storedItems = JSON.parse(itemsString);
      const formattedItems: CartItem[] = storedItems.map((item: any) => ({
        id: item.Item_ID_Auto,
        name: item.Item_Name,
        price: item.Sales_Price, // Use number here
        quantity: item.quantity ? item.quantity : 1, // Default quantity
        imageSrc: item.imageUrl, // Placeholder image
        imageAlt: item.Item_Name,
      }));
      setCartItems(formattedItems);
    }
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));

  };

  const calculateTotalPrice = () => {
    return formatPrice(
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  };

  return (
    <div className="cart-container p-4">
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
             <li key={item.id} className="flex items-center border-b py-4">
             <Image
               src={item.imageSrc}
               alt={item.imageAlt}
               className="w-30 h-30 object-cover mr-4"
               width={100}  // Fixed width
               height={200} // Fixed height
             />
             <div className="flex-1">
               <p className="text-lg font-semibold">{item.name}</p>
               <p className="text-gray-600">Price: {formatPrice(item.price)}</p>
               <div className="flex items-center mt-2">
                 <button
                   className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                   onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                 >
                   -
                 </button>
                 <span className="mx-3">{item.quantity}</span>
                 <button
                   className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                   onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                 >
                   +
                 </button>
                 <button
                   className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                   onClick={() => handleRemoveItem(item.id)}
                 >
                   Remove
                 </button>
               </div>
             </div>
           </li>
           
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-bold">Total: {calculateTotalPrice()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
