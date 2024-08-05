'use client';
import React, { useEffect, useState } from 'react';
import { formatPrice } from "@utils/price"; // Ensure this path is correct
import Image from 'next/image';

interface CartItem {
  Item_Id_Auto: string;
  Item_Name: string;
  Sales_Price: number;
  quantity: number;
  imageUrl: string;
  imageAlt: string;
  selectedcolor: string;
  selectedsize: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'gateway'>('cod'); // State to manage payment method

  useEffect(() => {
    const itemsString = localStorage.getItem('Items');
    if (itemsString) {
      const storedItems = JSON.parse(itemsString);
      setCartItems(storedItems); // Directly use the stored items
    }
  }, []);

  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('Items', JSON.stringify(items));
  };

  const handleQuantityChange = (Item_Id_Auto: string, quantity: number) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.Item_Id_Auto === Item_Id_Auto ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      updateLocalStorage(updatedItems); // Update localStorage with updated items
      return updatedItems;
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.Item_Id_Auto !== id);
      updateLocalStorage(updatedItems); // Update localStorage with updated items
      return updatedItems;
    });
  };

  const calculateTotalPrice = () => {
    return formatPrice(
      cartItems.reduce((total, item) => total + item.Sales_Price * item.quantity, 0)
    );
  };

  const handlePlaceOrder = () => {
    if (paymentMethod === 'cod') {
      alert('Order placed successfully with Cash on Delivery!');
    } else {
      window.location.href = '/payment-gateway'; // Replace with your actual payment gateway URL
    }
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
              <li key={item.Item_Id_Auto} className="flex items-center border-b-2 border-gray-200 py-4">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-30 h-40 object-cover mr-4"
                  width={100}
                  height={100}
                  loading='lazy'
                   // Or use layout="responsive"
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.Item_Name}</p>
                  <p className="text-gray-600">Price: {formatPrice(item.Sales_Price)}</p>
                  <p className="text-gray-600">Color: {item.selectedcolor}</p>
                  <p className="text-gray-600">Size: {item.selectedsize}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="btn btn-sm"
                      onClick={() => handleQuantityChange(item.Item_Id_Auto, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="mx-3">{item.quantity}</span>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleQuantityChange(item.Item_Id_Auto, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-10 btn btn-error text-white"
                      onClick={() => handleRemoveItem(item.Item_Id_Auto)}
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
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Select Payment Method</h2>
            <div className="flex items-center mb-4">
              <input
                type="radio"
                id="cod"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
                className="radio radio-accent"
              />
              <label htmlFor="cod" className="mr-4">Cash on Delivery</label>
              <input
                type="radio"
                id="gateway"
                name="paymentMethod"
                value="gateway"
                checked={paymentMethod === 'gateway'}
                onChange={() => setPaymentMethod('gateway')}
                className="radio radio-accent"
              />
              <label htmlFor="gateway">Online Payment</label>
            </div>
            <button
              className="btn btn-outline btn-primary"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
