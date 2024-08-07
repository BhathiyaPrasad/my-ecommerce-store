import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const orgDocId = "20240711-1011-SaluniFashion";
const orderItemsRef = collection(db, 'organizations', orgDocId, 'order_items');
const ordersRef = collection(db, 'organizations', orgDocId, 'orders');

export const productOrder = async (cartItems) => {
  try {
    for (const item of cartItems) {
      await addDoc(orderItemsRef, {
        orderAutoID: "",
        orderID: "",
        lineOrder: 0,
        itemAutoID: "",
        itemID: item.Item_ID, // Assuming UUID is the item ID
        itemName: item.Item_Name,
        itemEngName: "", // Add the English name if available
        quantity: item.quantity,
        UUID: item.UUID,
        salePrice: item.Sales_Price,
        lineTotal: item.Sales_Price * item.quantity,
        remark: "",
        Deleted: 0
      });
      console.log('Order item added for item UUID:', item.UUID);
    }
    console.log('All order items added successfully');
  } catch (error) {
    console.error('Order item error:', error); // Log errors for debugging
  }

  try{
    await addDoc(ordersRef, {
        orderAutoID: "",
        orderID: "",
    
    });
    console.log('order added succeffuly')
  }
catch (error){
  console.log('Error In Order', error)
}
  console.log("Order processed", cartItems);
};
