import { useEffect, useState } from 'react';
import { collection, getDocs, where, doc, query, orderBy } from 'firebase/firestore';
import {ref,getStorage, getDownloadURL} from 'firebase/storage'
import { db } from '../utils/firebase';

type Product = {
  id: string;
  name: string;
  Sales_Price: number;
  Eng_Name: string;
  email: string;
};

const orgDocId = "20240711-1011-SaluniFashion";
const storage = getStorage();

async function getImageDownloadURL(imagePath) {
  try {
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error getting image download URL:", error);
    return  '.\assests\images\collection.jpg';  // Replace with the actual path to your default image
  }
}


const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const itemsRef = collection(doc(db, "organizations", orgDocId), "items");

        const itemsQuery = query(
          itemsRef,
          where("Manufacturer", "!=", ""),
          where("ItemActiveMode", "==", 1),
          where("Deleted", "==", 0),
          where("ShowInSaleInvoice", "==", 1),
          orderBy("Cat_Name")
        );

        const querySnapshot = await getDocs(itemsQuery);
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Product));

        setProducts(productsArray);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.Eng_Name} - ${product.Sales_Price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
