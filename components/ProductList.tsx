import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/firebase';

type Product = {
  id: string;
  name: string;
  price: number;
  firstName: string;
  email: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const productsArray = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Product));
      setProducts(productsArray);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.firstName} - ${product.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
