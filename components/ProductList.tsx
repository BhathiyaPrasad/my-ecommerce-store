import { useEffect, useState } from 'react';
import { collection, getDocs, where, doc, query, orderBy, limit } from 'firebase/firestore';
import { ref, getStorage, getDownloadURL } from 'firebase/storage'
import { db } from '../utils/firebase';
import ProductCard from './common/ProductCard';
import './Styles/productlist.css'
type Product = {
  id: string;
  name: string;
  Sales_Price: number;
  Eng_Name: string;
  email: string;
  Discount: string;
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
    return '.\assests\images\collection.jpg';  // Replace with the actual path to your default image
  }
}


const ProductList = (props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const itemsRef = collection(doc(db, "organizations", orgDocId), "items");

        const itemsQuery = query(
          itemsRef,
          where("ItemActiveMode", "==", 1),
          where("Deleted", "==", 0),
          where("ShowInSaleInvoice", "==", 1),
          where("Manufacturer", "==", props.category),
          where("Discount", props.order, "0"),
          orderBy(props.group, "desc"),
          limit(props.limits)
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
    return <span className="loading loading-dots loading-md"></span>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="card-container">
      {products.map(product => (
        <ProductCard
          key={product.id}

          Discount={product.Discount}
          Sales_Price={product.Sales_Price}
          Eng_Name={product.Eng_Name}

        // imageUrl={product.imageUrl}
        />
      ))}
    </div>




  );
};

export default ProductList;
